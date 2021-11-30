// let tarih = new Date();
// let saat = tarih.getHours();
// if(saat < 10){
//     alert("Günaydın");
// }
// else if(saat < 18){
//     alert("İyi Günler")
// }
// else{
//     alert("İyi Akşamlar")
// }

/*------------------------------------------- */

// let yil = prompt('Adınız Okan mı ?','');
// if(yil == 'Okan'){
//     alert("Evet Doğru");
// }else{
//     alert("Doğru Kişi Değilsiniz")
// }

/*------------------------------------------- */

// let saat = 20;
// if (saat < 11){
//     console.log("Günaydın")
// }
// else if(saat < 18){
//     console.log("İyi Günler")
// }
// else{
//     console.log("İyi Akşamlar")
// }


/*------------------------------------------- */

// function Hesapla()
// 		{
// 			let text="";
// 			let sayac=0;
// 			let sayi=Number(document.getElementById("txtSayi").value);
			
// 			for(i=2; i<sayi; i++)
// 			 {
// 				if(sayi%i==0)
// 				{
// 				sayac++;
// 				}
// 			 }
// 				if(sayac==0)
// 				{
// 				text="Asal";
// 				}
// 				else
// 				{
// 				text="Asal değil.<br/> 1 ve Kendisi hariç <strong>"+sayac+"</strong> adet böleni var";
// 				}
 
// 			document.getElementById("sonuc").innerHTML=text;
// 		}
		
// 		let hesapBtn=document.getElementById("btn");
// 		hesapBtn.onclick=Hesapla;






function Asal()
{
    let metin = "";
    hesapla = 0;
    let sayi1 = Number(document.getElementById("inputsayi").value);

    for (let j = 2; j < sayi1; j++) {
        if(sayi1%j ==0)
        {
            hesapla++;
        }  
    }
    if(hesapla == 0)
    {
        metin="Asal";
    }
    else{
        metin = "Asal Değil. <br/> 1 ve kendisi hariç "+hesapla+" adet böleni var";
    }
    document.getElementById("cikansonuc").innerHTML = metin;
    }

let  hesaplaButon = document.getElementById("hesaplamabutonu");
hesaplaButon.onclick=Asal;