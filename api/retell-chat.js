// pages/api/retell-chat.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, chat_id } = req.body;

    // Decide whether to create a new chat or send message in existing chat
    let url = chat_id
      ? "https://api.retellai.com/send-message"   // send to existing session
      : "https://api.retellai.com/create-chat";  // create new chat session

    const body = chat_id
      ? { agent_id: process.env.RETELL_AGENT_ID, message, chat_id }
      : { agent_id: process.env.RETELL_AGENT_ID };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RETELL_API_KEY}`,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Retell API error:", data);
      return res.status(500).json({ error: "Retell API failed", details: data });
    }

    // Determine reply text and chat_id to return
    const reply = data?.reply || "No response from AI";
    const returnedChatId = data?.chat_id || chat_id;

    return res.status(200).json({ reply, chat_id: returnedChatId });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}