import { icerik } from "./data.js";

const tabContentTitle=document.querySelectorAll(".tabcontent h3")
const tabContentDesc=document.querySelectorAll(".tabcontent p")


icerik.forEach((element,index)=>{
    tabContentTitle[index].textContent=element.baslik
    tabContentDesc[index].textContent=element.icerik
})