
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




