import { useState, useEffect, useRef } from "react";
import { sendMessage } from "../util/chatApi";
import { PawIcon } from "../util/Icons";

const AiReceptionist = ({ onFillAppointment }) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi, I'm Sunny 🐾 How can I help your pet today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Auto-scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages, loading]);

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

  // Detect appointment info (simple date/time pattern) and auto-fill
  const renderAppointmentButton = (msg) => {
    const dateTimeRegex = /\b(\d{1,2}\/\d{1,2}\/\d{2,4})\b.*\b(\d{1,2}:\d{2})\b/;
    if (dateTimeRegex.test(msg.content)) 
        console.log(msg.content)
        {
      return (
        <button
          className="mt-1 px-2 py-1 bg-teal-primary text-white text-xs rounded"
          onClick={() => onFillAppointment?.(msg.content)}
        >
          Auto-Fill Appointment
        </button>
      );
    }
    return null;
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-teal-primary text-white p-4 rounded-full shadow-xl shadow-teal-primary/40 hover:scale-110 transition-transform z-50"
      >
        <PawIcon className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-100 transform transition-all duration-300 ${
          open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-primary to-coral px-4 py-3 text-white font-semibold">
          Sunny – AI Receptionist
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-3 bg-cream">
          {messages.map((msg, i) => (
            <div key={i} className="flex flex-col max-w-[80%]">
              <div
                className={`text-sm p-3 rounded-xl ${
                  msg.role === "user"
                    ? "bg-coral text-white ml-auto"
                    : "bg-white text-gray-700 shadow"
                }`}
              >
                {msg.content}
              </div>
              {msg.role === "assistant" && renderAppointmentButton(msg)}
            </div>
          ))}

          {/* Typing animation */}
          {loading && (
            <div className="text-sm p-3 rounded-xl bg-white text-gray-500 shadow w-fit flex items-center space-x-1">
              <span>Typing</span>
              <span className="typing-dots">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex border-t">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-3 py-3 outline-none text-sm"
          />
          <button onClick={handleSend} className="bg-teal-primary text-white px-4">
            Send
          </button>
        </div>
      </div>

      {/* Typing dots animation */}
      <style jsx>{`
        .typing-dots span {
          display: inline-block;
          width: 4px;
          height: 4px;
          margin-left: 2px;
          background: currentColor;
          border-radius: 50%;
          animation: blink 1s infinite;
        }
        .typing-dots span:nth-child(2) {
          animation-delay: 0.2s;
        }
        .typing-dots span:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes blink {
          0%, 20%, 50%, 80%, 100% { opacity: 0; }
          10%, 30%, 60%, 90% { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default AiReceptionist;