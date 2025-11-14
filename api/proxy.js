export default async function handler(req, res) {
  const HF_TOKEN = process.env.HF_TOKEN;
  const MODEL_URL = "https://api-inference.huggingface.co/models/Qwen/Qwen2.5-72B-Instruct";

  try {
    const response = await fetch(MODEL_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.status(200).json(data);

  } catch (e) {
    res.status(500).json({ error: "Server error", details: e.toString() });
  }
}
