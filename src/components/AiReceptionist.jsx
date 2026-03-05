import { useState, useEffect, useRef } from "react";
import { sendMessage } from "../util/chatApi";
import { BotIcon } from "../util/Icons";

const AiReceptionist = () => {
  const [open, setOpen] = useState(false);
  const chatRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi, I'm Dara 🐾 How can I help your pet today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // drag-to-close state
  const startYRef = useRef(0);
  const [dragY, setDragY] = useState(0);
  const [dragging, setDragging] = useState(false);

  // Auto-scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages, loading]);

  // close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && chatRef.current && !chatRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // touch listeners for drag-to-close (needs passive:false)
  useEffect(() => {
    const el = chatRef.current;
    if (!el) return;

    const handleTouchStart = (e) => {
      if (!open) return;
      startYRef.current = e.touches[0].clientY;
      setDragging(true);
    };

    const handleTouchMove = (e) => {
      if (!dragging) return;
      e.preventDefault();
      const delta = e.touches[0].clientY - startYRef.current;
      if (delta > 0) setDragY(delta);
    };

    const handleTouchEnd = () => {
      setDragging(false);
      if (dragY > 120) setOpen(false);
      setDragY(0);
    };

    el.addEventListener("touchstart", handleTouchStart);
    el.addEventListener("touchmove", handleTouchMove, { passive: false });
    el.addEventListener("touchend", handleTouchEnd);

    // also block page scroll globally while dragging
    if (dragging) {
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    }

    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [open, dragging, dragY]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const reply = await sendMessage(input);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-teal-primary text-white p-4 rounded-full shadow-xl shadow-teal-primary/40 hover:scale-110 transition-transform z-50"
      >
        <BotIcon className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div
        ref={chatRef}
        style={
          dragging
            ? { transform: `translateY(${dragY}px)`, transition: "none" }
            : undefined
        }
        className={`fixed z-50 bg-white shadow-2xl border border-gray-100
    transition-all duration-300 transform flex flex-col

    /* Mobile bottom sheet (default) */
    bottom-0 left-0 right-0 w-full h-[65vh] rounded-t-2xl

    sm:left-auto sm:bottom-20 sm:right-6 sm:w-[380px] sm:h-[600px] sm:rounded-2xl

    ${
      open
        ? "translate-y-0 opacity-100"
        : "translate-y-full sm:translate-y-10 opacity-0 pointer-events-none"
    }
  `}
      >
        {/* Drag bar (mobile only) */}
        <div className="sm:hidden flex justify-center py-2">
          <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-teal-primary to-coral px-4 py-3 text-white font-semibold flex items-center justify-between rounded-xl">
          <span>Dara – AI Receptionist</span>
          <button
            onClick={() => setOpen(false)}
            className="text-white/80 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-cream">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-max text-sm px-4 py-3 rounded-xl ${
                msg.role === "user"
                  ? "ml-auto bg-coral text-white"
                  : "bg-white text-gray-700 shadow"
              }`}
            >
              {msg.content}
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div className="bg-white px-4 py-2 rounded-xl shadow text-sm text-gray-500 w-fit">
              Dara is typing...
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t bg-cream p-3 flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Ask about appointments, services..."
            className="flex-1 px-4 py-4 text-sm border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gray-300 transition"
          />

          <button
            onClick={handleSend}
            className="bg-teal-primary text-white px-4 py-4 rounded-xl hover:bg-teal-dark transition"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default AiReceptionist;
