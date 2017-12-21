function showSlide() {

    setTimeout(function HideFirst() {
        document.getElementById('slide_1').classList.add('slide-none');
        document.getElementById('slide_1').remove('slide--active');
        nextSlide();
    }, 2000);

}

function nextSlide() {
    document.getElementById('slide_2').classList.add('slide--active');
    document.getElementById('slide_2').classList.remove('slide');
}


function clickNext3() {
    document.getElementById('slide_2').classList.add('slide-none');
    document.getElementById('slide_2').classList.remove('slide--active');
    document.getElementById('slide_3').classList.add('slide--active');
    document.getElementById('slide_3').classList.remove('slide');
}

function clickNext4() {
    document.getElementById('slide_3').classList.add('slide-none');
    document.getElementById('slide_3').classList.remove('slide--active');
    document.getElementById('slide_4').classList.add('slide--active');
    document.getElementById('slide_4').classList.remove('slide');
}

