let sayi = 1000
let total = 0;

for (let i = 1; i < sayi; i++) {
   
    if(sayi%i == 0){
        console.log("=> ", i)
       total += i  
    }
}


