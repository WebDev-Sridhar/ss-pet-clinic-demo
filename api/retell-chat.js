export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    const { message } = req.body

    const response = await fetch("https://api.retellai.com/v1/chat", {
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

    res.status(200).json({
      reply: data.response?.content || "Sorry, something went wrong.",
    })
  } catch (error) {
    res.status(500).json({ error: "Server error" })
  }
}