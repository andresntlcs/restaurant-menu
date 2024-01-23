import "../styles.css";

function test() {
  const appContainer = document.createElement("div");

  appContainer.className = "flex flex-col items-center h-screen";

  const header = document.createElement("h1");
  header.textContent = "KAIN LANG";
  header.className = "text-8xl text-red-400 font-black"

  const description = document.createElement("p");
  description.textContent = "Enjoy the taste of heaven right here on Earth"

  description.className ="text-xl text-gray-500 mt-5"

  appContainer.appendChild(header);
  appContainer.appendChild(description);

  document.body.appendChild(appContainer);
}

// Call the initializeApp function when the DOM is loaded
document.addEventListener("DOMContentLoaded", test);
