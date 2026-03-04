let currentChatId = null;

export async function sendMessage(message) {
  const res = await fetch("/api/retell-chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, chat_id: currentChatId }),
  });

  const data = await res.json();

  if (data.chat_id) currentChatId = data.chat_id;

  return data.reply;
}