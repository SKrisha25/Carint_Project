let forBtn = document.querySelector('.for-btn');
let backBtn = document.querySelector('.back-btn');
let minBx = document.querySelectorAll('.min');

let a = 0;
backBtn.addEventListener('click', () => {
    a++;
    if (a > minBx.length - 1) {
        a = 0;
        minBx[0].classList.remove('hide');
        minBx[minBx.length - 1].classList.add('hide');
    }
    minBx[a].classList.remove('hide');
    minBx[a - 1].classList.add('hide');
});



forBtn.addEventListener('click', ()=> {
    a--;
    if (a < 0) {
      a = minBx.length -1;
      minBx[0].classList.add('hide');
    }
    minBx[a].classList.remove('hide');
    minBx[a + 1].classList.add('hide');
});