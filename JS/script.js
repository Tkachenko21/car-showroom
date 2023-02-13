const arrImgs = [
    '../ASSETS/IMGbackground/contacktback2',
    '../ASSETS/IMGbackground/contacktback3',
    '../ASSETS/IMGbackground/contacktback4',
    '../ASSETS/IMGbackground/contacktback1'
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