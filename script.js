// this Js code is necessary to move carousel-images automatically one by one in certain time, without clicking any button.
function myCarousel(evt, carouselName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(carouselName).style.display = "block";
    evt.currentTarget.className += " active";
}