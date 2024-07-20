//10 elemanlı dizide çift sayıları çağırma
const sayilar=[10,5,20,35,44,55,66,77,88,99]
for(let i=0; i<sayilar.length;i++){
    if(sayilar[i]%2==0){
        console.log("Çift saylar:"+sayilar[i])
    }
    
}

//10 elemanlı dizide tek sayılar fonksiyon çağırma

function tekSayilar(dizi){

    for(let i=0; i<dizi.length; i++){
        if(dizi[i]%2==1){
            console.log("Tek sayilar",dizi[i])
        }
    }

}

const sayilar1=[10,5,20,35,44,55,66,77,88,99]
tekSayilar(sayilar1)

