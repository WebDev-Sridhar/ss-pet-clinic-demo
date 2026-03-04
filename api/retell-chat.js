export default async function handler(req, res) {
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
        input: message,
      }),
    })

    const text = await response.text()
    console.log(text)

    // Try parsing safely
    let data
    try {
      data = JSON.parse(text)
    } catch (err) {
      console.error("Retell returned non-JSON:", text)
      return res.status(500).json({ error: "Invalid response from Retell" })
    }

    if (!response.ok) {
      console.error("Retell API error:", data)
      return res.status(500).json({ error: "Retell API failed", details: data })
    }

    return res.status(200).json({
      reply: data?.output || "No response from AI",
    })
  } catch (error) {
    console.error("Server error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
}