//Boş bir sayfada, body etiketi içine her 3 saniyede bir paragraf etiketi eklenmesini sağlayan javascript kodu (paragraf1 , paragraf2...)
const element = document.querySelector("#root");

let sayac = 0;
setInterval(() => {
  sayac++;
  const prgf = document.createElement("p");
  prgf.innerHTML = "Paragraf " + sayac;
  element.appendChild(prgf);
}, 3000);

//2.yol
/*
let sayac=0;
setInterval(function () {
  sayac++;
    let add = document.createElement("p");
    document.querySelector("root").appendChild(add);
    add.innerHTML = "Paragraf" + sayac; 
  
}, 3000);
*/
