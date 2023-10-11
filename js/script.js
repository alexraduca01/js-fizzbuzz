// > Scrivi un programma che stampi in console i numeri da 1 a 100,
// > ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// > Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

for(let a = 1; a <= 100; a++){    
    
    if((a % 3 === 0 && a % 5 === 0)){
        console.log('FizzBuzz');
    } else if(a % 3 === 0) {
        console.log('Fizz');
    } else if(a % 5 === 0){
        console.log('Buzz');
    } else {
        console.log(a);
    }
}