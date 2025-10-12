import React, { useState } from "react";

const Ai = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
  };

  return (
    <>
    <div className="bg-yellow-500 h-17"></div>
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-br from-yellow-200 via-white to-yellow-300">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-6 flex flex-col justify-between h-[80vh]">
        <div className="overflow-y-auto mb-4 space-y-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-2xl max-w-[80%] ${
                msg.sender === "user"
                  ? "bg-yellow-400 text-black self-end ml-auto"
                  : "bg-gray-100 text-black"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border border-yellow-400 rounded-full px-4 py-2 focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleSend}
            className="bg-yellow-400 text-black rounded-full px-4 py-2 font-semibold hover:bg-yellow-500"
          >
            Send
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Ai;
