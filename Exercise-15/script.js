//1-10 sayısı arasında paragraf ekleme ve silme


for(let i=1; i<=10; i++){
    const prgf=document.createElement("p")
    document.querySelector("body").appendChild(prgf)
    prgf.innerHTML="Paragraf " + i
    
}
let sayi=prompt("1-10 arası sayi giriniz")

if(sayi>=1 && sayi<=10){
    let removePrgf=document.querySelectorAll("p")

    removePrgf[sayi-1].remove()

}else{
    alert("Lürfen bir sayi giriniz")
}
