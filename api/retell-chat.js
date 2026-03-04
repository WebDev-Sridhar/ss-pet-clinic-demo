export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { message } = req.body;

    // Send message to AI
    const response = await fetch("https://api.retellai.com/create-chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RETELL_API_KEY}`,
      },
      body: JSON.stringify({
        agent_id: process.env.RETELL_AGENT_ID,
        message,          // <-- send the user message
        metadata: {},
      }),
    });

    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.error("Non-JSON response:", text);
      return res.status(500).json({ error: "Invalid response from Retell API" });
    }

    const reply = data?.reply || "No response from AI";
    const chat_id = data?.chat_id;

    return res.status(200).json({ reply, chat_id });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}