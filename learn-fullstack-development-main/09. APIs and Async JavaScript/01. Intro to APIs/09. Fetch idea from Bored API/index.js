const container = document.getElementById("activity");

async function loadActivity() {
  const res = await fetch("https://apis.scrimba.com/bored/api/activity");
  const data = await res.json();

  container.textContent = data.activity;
}

loadActivity();
