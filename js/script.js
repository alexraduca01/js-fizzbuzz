// > Scrivi un programma che stampi in console i numeri da 1 a 100,
// > ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// > Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

for(let a = 1; a <= 100; a++){    
    let box = document.createElement('div');
    document.getElementById('wrapper').classList.add('d-flex', 'flex-wrap');
    document.getElementById('wrapper').append(box);
    box.classList.add('box', 'd-flex', 'justify-content-center', 'align-items-center');

    if((a % 3 === 0 && a % 5 === 0)){
        box.innerHTML = 'FizzBuzz';
        box.classList.add('txt-yellow', 'divisible-five-three' , 'fw-bold');
    } else if(a % 3 === 0) {
        box.innerHTML = 'Fizz';
        box.classList.add('text-success', 'divisible-three', 'fw-bold');
    } else if(a % 5 === 0){
        box.innerHTML = 'Buzz';
        box.classList.add('txt-blue', 'divisible-five' , 'fw-bold');
    } else {
        box.innerHTML = a;
        box.classList.add('txt-white');
    }
}

let credits = document.createElement('p');
credits.classList.add('credits', 'fs-3', 'text-warning');
credits.innerHTML = 'Made with &hearts; by alex.';
document.body.append(credits);