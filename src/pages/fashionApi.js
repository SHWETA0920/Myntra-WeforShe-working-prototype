const API_BASE = "http://127.0.0.1:8000";

export async function getChallenge() {
  const res = await fetch(`${API_BASE}/challenge`);
  return res.json();
}

export async function getSuggestions(prompt) {
  const res = await fetch(`${API_BASE}/suggest-outfit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  return res.json();
}

export async function getFinalOutfit(prompt) {
  const res = await fetch(`${API_BASE}/final-outfit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  return res.json();
}

export async function getScore(outfit, challenge) {
  const res = await fetch(`${API_BASE}/score-outfit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ outfit, challenge }),
  });
  return res.json();
}
