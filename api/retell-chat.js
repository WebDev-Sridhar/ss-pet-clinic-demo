export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    // the client may send an existing chat_id so the conversation can continue
    const { message, chat_id: incomingChatId } = req.body;

    // if we don't yet have a chat session, create one first
    let chatId = incomingChatId;
    if (!chatId) {
      const createResp = await fetch("https://api.retellai.com/create-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RETELL_API_KEY}`,
        },
        body: JSON.stringify({
          agent_id: process.env.RETELL_AGENT_ID,
          metadata: {},
        }),
      });
      const createText = await createResp.text();
      let createData;
      try {
        createData = JSON.parse(createText);
      } catch {
        console.error("Non-JSON response creating chat:", createText);
        return res
          .status(500)
          .json({ error: "Invalid response from Retell API" });
      }

      chatId = createData?.chat_id;
      if (!chatId) {
        console.error("create-chat did not return chat_id", createData);
        return res.status(500).json({ error: "Unable to create chat session" });
      }
    }

    // now send the user message and fetch a completion
    const compResp = await fetch(
      "https://api.retellai.com/create-chat-completion",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RETELL_API_KEY}`,
        },
        body: JSON.stringify({
          agent_id: process.env.RETELL_AGENT_ID,
          chat_id: chatId,
          content: message, // required field name
        }),
      },
    );
    const text = await compResp.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.error("Non-JSON response from completion:", text);
      return res
        .status(500)
        .json({ error: "Invalid response from Retell API" });
    }

    // log the full object for debugging; remove or lower log level in production
    console.log("retell.ai completion response:", data);

    // extract the agent's reply from returned messages array
    let reply = "No response from AI";
    if (Array.isArray(data.messages) && data.messages.length) {
      const agentMsg =
        data.messages
          .slice()
          .reverse()
          .find((m) => m.role === "agent") ||
        data.messages[data.messages.length - 1];
      if (agentMsg && agentMsg.content) reply = agentMsg.content;
    }

    const returnedChatId = chatId; // we always have it now

    return res.status(200).json({ reply, chat_id: returnedChatId });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
