export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { message } = req.body

    if (!message) {
      return res.status(400).json({ error: "Message is required" })
    }

    const response = await fetch("https://api.retellai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RETELL_API_KEY}`,
      },
      body: JSON.stringify({
        agent_id: process.env.RETELL_AGENT_ID,
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("Retell error:", data)
      return res.status(500).json({ error: "Retell API failed", details: data })
    }

    return res.status(200).json({
      reply:
        data?.choices?.[0]?.message?.content ||
        "Sorry, I couldn’t respond properly.",
    })
  } catch (error) {
    console.error("Server error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
}