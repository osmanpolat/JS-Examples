//Accordion Örnek

function UIGoster() {
  const root = document.querySelector("body");
  //button oluşturuyor ve isim, class ekleniyor body etiketi içine
  for (let i = 0; i < 3; i++) {
    let btn = document.createElement("button");
    btn.classList.add("accordion");
    btn.innerHTML = "Section" + (i + 1);
    root.appendChild(btn);

    let div = document.createElement("div");
    div.classList.add("panel");
    div.style.display = "none";
    root.appendChild(div);

    let pgrf = document.createElement("p");
    pgrf.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    div.appendChild(pgrf);

    btn.addEventListener("click", function () {
      div.classList.toggle("active");
      if (div.style.display === "block") {
        div.style.display = "none";
      } else {
        div.style.display = "block";
      }
    });
  }
}

UIGoster();
