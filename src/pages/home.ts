import "../styles.css";

function test() {

  const divider = document.createElement("hr");
  divider.className = "bg-black flex mx-80 justify-center items-center border-none h-1";

  const header = document.createElement("div");
  header.className = "flex flex-col items-center m-10";

  const title = document.createElement("h1");
  title.textContent = "WALANG UWIAN";
  title.className = "text-6xl font-black";

  const headerSubText = document.createElement("p");
  headerSubText.textContent = "KAIN LANG NANG KAIN!";
  headerSubText.className = "text-lg text-gray-400 mt-3";

  header.appendChild(title);
  header.appendChild(headerSubText);

  document.body.appendChild(header);
  document.body.appendChild(divider);
}

document.addEventListener("DOMContentLoaded", test);
