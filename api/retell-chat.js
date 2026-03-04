export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    // the client may send an existing chat_id so the conversation can continue
    const { message, chat_id: incomingChatId } = req.body;

    // Send message to AI; include chat_id if we have one
    const payload = {
      agent_id: process.env.RETELL_AGENT_ID,
      message, // <-- send the user message
      metadata: {},
    };
    if (incomingChatId) payload.chat_id = incomingChatId;

    const response = await fetch("https://api.retellai.com/create-chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RETELL_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.error("Non-JSON response:", text);
      return res
        .status(500)
        .json({ error: "Invalid response from Retell API" });
    }

    // log the full object for debugging; remove or lower log level in production
    console.log("retell.ai response:", data);

    // try to pick the reply from a few possible fields depending on API shape
    const reply =
      data?.reply ||
      data?.response?.text ||
      data?.output?.text ||
      data?.message ||
      "No response from AI";

    // new chat id could be under a few different names
    const returnedChatId =
      data?.chat_id || data?.chatId || data?.id || incomingChatId;

    return res.status(200).json({ reply, chat_id: returnedChatId });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
