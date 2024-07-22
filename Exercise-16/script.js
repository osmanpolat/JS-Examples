//1. divin her 2 saniyede bir dönüşümlü olarak arkaplanı siyah-kırmızı renk değiştirmesi

const div1 = document.querySelector("body>div:nth-child(1)");
let isRed = true;
setInterval(() => {
  if (isRed) {
    div1.style.backgroundColor = "black";
  } else {
    div1.style.backgroundColor = "red";
  }
  isRed = !isRed;
}, 2000);

//2. divin içeriğindeki sayı her saniyede bir artmalı
const div2 = document.querySelector("body>div:nth-child(2)");
let sayac = 0;
setInterval(() => {
  div2.innerHTML = sayac;
  sayac++;
}, 1000);

//3. divin üzerine fare geldiğinde, sağındaki ve solundaki divlerin arkaplanı .yesil classını kullanarak yesil olmalı, fare ayrılınca tekrar kırmızı olmalı.

const div3 = document.querySelector("body>div:nth-child(3)");
div3.addEventListener("mouseover", function () {
  if (div3.previousElementSibling) {
    div3.previousElementSibling.classList.remove("red");
    div3.previousElementSibling.classList.add("yesil");
  }
  if (div3.nextElementSibling) {
    div3.nextElementSibling.classList.remove("red");
    div3.nextElementSibling.classList.add("yesil");
  }
});
div3.addEventListener("mouseout", function () {
  if (div3.nextElementSibling) {
    div3.nextElementSibling.classList.remove("yesil");
    div3.nextElementSibling.classList.add("red");
  }
  if (div3.previousElementSibling) {
    div3.previousElementSibling.classList.remove("yesil");
    div3.previousElementSibling.classList.add("red");
  }
});

//4. div çift tıklandığında body etiketinin sonuna yeni boş bir div eklenmeli
const div4 = document.querySelector("body>div:nth-child(4");
div4.addEventListener("dblclick", function () {
  const divs = document.querySelector("body");
  const yeniDiv = document.createElement("div");
  yeniDiv.innerHTML = "";
  divs.appendChild(yeniDiv);
});

//5. divin üzerine tıklandığında body etiketi içindeki toplam div sayısı içinde yazmalı
const div5 = document.querySelector("body>div:nth-child(5)");
div5.addEventListener("click", () => {
  let divs = document.getElementsByTagName("div").length;
  div5.innerHTML = divs;
});

//6. div tıklandığında body etiketi içinde en sona kaynağı https://picsum.photos/100/100 olan görsel eklensin
const div6 = document.querySelector("body>div:nth-child(6)");
div6.addEventListener("click", () => {
  const divs = document.querySelector("body");
  let img = document.createElement("img");
  img.src = "https://picsum.photos/100/100";
  divs.appendChild(img);

  //7. div tıklandığında sayfadaki tüm img etiketlerinin kenarlığı 3px solid red değerine sahip olsun.
  const div7 = document.querySelector("body>div:nth-child(7)");
  div7.addEventListener("click", () => {
    let img = document.querySelectorAll("img");
    img.forEach((image) => {
      image.style.borderWidth = "3px";
      image.style.borderStyle = "solid";
      image.style.borderColor = "red";
    });
  });
});

//8. div her tıklandığında dönüşümlü olarak .yesil classı eklensin ve kaldırılsın. (classa sahipse kaldırılsın, değilse eklensin)
const div8 = document.querySelector("body>div:nth-child(8)");
div8.addEventListener("click", function () {
  div8.classList.toggle("yesil");
});

//9. div çift tıklandığında body içindeki ilk div sayfadan kaldırılmalı
const div9 = document.querySelector("body>div:nth-child(9)");
div9.addEventListener("dblclick", function () {
  let divs = document.getElementsByTagName("div");
  divs[0].remove();
});

//10. div çift tıklandığında her iki saniyede bir body içindeki ilk div etiketi sayfadan kaldırılmalı. 

const div10=document.querySelector("body>div:nth-child(10)")
div10.addEventListener("dblclick",()=>{
    setInterval(()=>{
let divs=document.getElementsByTagName("div")
divs[0].remove()
    },2000)
})
