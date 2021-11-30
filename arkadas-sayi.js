const number1 = 220
const number2= 284

let total1 = 0
let total2 = 0

const isFirend = (s1,s2) => {
    for (let i = 0; i < s1; i++) {
        if(number1 % i == 0){
            total1+=i
        }
    }
    for (let j = 0; j < s2; j++) {
        if (number2 % j == 0) {
            total2 += j
        }
    }

    return(total1 == s2 && total2 == s1) ? "Arkadaş Sayılar" : "Arkadaş Sayı Değildir"
    console.log(total1)
    console.log(total2)
}

console.log(isFirend(number1,number2))