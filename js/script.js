// > Scrivi un programma che stampi in console i numeri da 1 a 100,
// > ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// > Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

let sun = document.createElement('div');
let line1 = document.createElement('div');
let line2 = document.createElement('div');
let line3 = document.createElement('div');
let line4 = document.createElement('div');
let line5 = document.createElement('div');
let line6 = document.createElement('div');

document.getElementById('wrapper').append(sun);
sun.append(line1, line2, line3, line4, line5, line6);

sun.classList.add('sun');
line1.classList.add('line', 'line1');
line2.classList.add('line', 'line2');
line3.classList.add('line', 'line3');
line4.classList.add('line', 'line4');
line5.classList.add('line', 'line5');
line6.classList.add('line', 'line6');

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