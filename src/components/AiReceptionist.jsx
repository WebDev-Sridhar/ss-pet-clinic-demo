import { useState, useEffect, useRef } from "react";
import { sendMessage } from "../util/chatApi";
import { PawIcon } from "../util/Icons";

const AiReceptionist = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi, I'm Sunny 🐾 How can I help your pet today?",
    },
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
          open
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0 pointer-events-none"
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
            </div>
          ))}

          {/* Typing animation */}
          {loading && (
            <div className="text-sm p-3 rounded-xl bg-white text-gray-500 shadow w-fit flex items-center space-x-1">
              <span>Typing...</span>
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
          <button
            onClick={handleSend}
            className="bg-teal-primary text-white px-4"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default AiReceptionist;
