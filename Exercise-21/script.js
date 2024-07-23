import { icerik } from "./data.js";

const rootElement=document.querySelector("#rootElement")

function UIGoster(){

     //Ana container oluşturuyoruz

     const mainDiv=document.createElement("div")
     mainDiv.classList.add(".boxItem")
     rootElement.append(mainDiv)

     //personal list ana div oluşturuyoruz
     const personalList=document.createElement("div")
     personalList.classList.add("person-list")

     //Ana başlık oluşturuyoruz
     const mainTitle=document.createElement("h3")

     mainDiv.appendChild(personalList)
     mainDiv.insertAdjacentElement("afterbegin",mainTitle)
     mainTitle.textContent="5 Birthdays Today"
    
     //Silme butonunu oluşturuyoruz
     const clearButton=document.createElement("button")
     clearButton.textContent="Clear All"
     clearButton.classList.add("clear-btn")
     mainDiv.insertAdjacentElement("beforeend",clearButton)

     //Personal isim,soyisim,yaş ve img gibi bilgiler için for dongüsü tanımlıyoruz

     for(let i=0; i<icerik.length; i++){
            //personallist genel div içinde oluşturacağımız personal listesi tanımlıyoruz
            const listItem=document.createElement("div")
            listItem.classList.add("person-item")
            personalList.appendChild(listItem)

            //ilk olarak personal görselini ekliyoruz  ve çağırıyoruz
            let personImg=document.createElement("img")
            listItem.appendChild(personImg)
            personImg.classList.add("person-img")
            personImg.src=icerik[i].image

            //2. olarak personal detaylarını ekliyoruz ve çağırıyoruz
            let personDetail=document.createElement("div")
            personDetail.classList.add("person-detail")
            listItem.appendChild(personDetail)

            //3. olarak personal isimlerini ekliyor ve çağırıyoruz
            let personName=document.createElement("div")
            personName.classList.add("person-name")
            personDetail.appendChild(personName)
            personName.textContent=icerik[i].name

            //4.olarak personal yaşını ekliyor
            let personAge=document.createElement("div")
            personAge.classList.add("person-age")
            personDetail.appendChild(personAge)
            personAge.textContent=icerik[i].age


     }

     //silmeye bastığımız zaman tüm html içeriği temizlemesi işlemini gerçekleştiriyoruz
     clearButton.addEventListener("click", ()=>{
        personalList.innerHTML=""
        clearButton.textContent="Deleted All"
        clearButton.style.pointerEvents="none"
     })

}
UIGoster()