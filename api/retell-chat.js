export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { message } = req.body

    const response = await fetch("https://api.retellai.com/create-chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RETELL_API_KEY}`,
      },
      body: JSON.stringify({
        agent_id: process.env.RETELL_AGENT_ID,
        metadata: {}, 
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("Retell API error:", data)
      return res.status(500).json({ error: "Retell API failed", details: data })
    }

    return res.status(200).json({
      reply: data?.chat_id
        ? "Chat session created successfully"
        : "No response from AI",
      chat_id: data?.chat_id,
    })
  } catch (error) {
    console.error("Server error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
}