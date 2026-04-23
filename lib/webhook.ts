/**
 * Utility function to post payload to a webhook URL.
 */
export async function postToWebhook(payload: unknown, webhookUrl: string) {
  if (!webhookUrl) {
    throw new Error("Webhook URL is not configured");
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Webhook error: ${text.slice(0, 200)}`);
  }

  return res;
}