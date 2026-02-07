const container = document.getElementById("dog-container");

async function loadDog() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();

  const imgURL = data.message;
  container.innerHTML = `<img src="${imgURL}" width="300">`;
}

loadDog();
