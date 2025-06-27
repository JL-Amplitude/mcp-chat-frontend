import { useState } from "react";

export default function MCPChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const sessionId = "demo-session";

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      console.log("Sending request to OpenAI...");
      console.log("API Key used:", process.env.REACT_APP_OPENAI_API_KEY);
      console.log("Payload:", [...messages, userMessage]);

      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            model: "gpt-4.1-nano", //"gpt-3.5-turbo",
            messages: [...messages, userMessage],
        }),
      });

      const data = await res.json();
      console.log("OpenAI response:", data);
      
      const reply = {
        role: "assistant",
        content: data.choices?.[0]?.message?.content || "[No response]",
      };
      setMessages((prev) => [...prev, reply]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "assistant", content: "[Error contacting OpenAI]" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-6 px-4">
      <div className="bg-white rounded-2xl shadow p-4">
        <div className="h-96 overflow-y-auto space-y-3 mb-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-2 rounded-md ${
                msg.role === "user" ? "bg-blue-100 text-right" : "bg-gray-100 text-left"
              }`}
            >
              <div className="text-sm text-gray-600">{msg.role}</div>
              <div>{msg.content}</div>
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <input
            className="flex-1 border rounded p-2"
            placeholder="Ask something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            disabled={loading}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            onClick={sendMessage}
            disabled={loading}
          >
            {loading ? "..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}
