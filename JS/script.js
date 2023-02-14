const arrImgs = [
    '../img/background/contacktback2',
    '../img/background/contacktback3',
    '../img/background/contacktback4',
    '../img/background/contacktback1'
];
const sectionone = document.querySelector('.section');
function chargeImg(){
    document.sectionone.style.backgroungImage = ('url(' + arrImgs[i] + ')');
    i++;
    if(i > arrImgs.length - 1){
        i = 0;
    }
}
const btnClick = document.querySelector('.btn-a');
btnClick.addEventListener('click', chargeImg);