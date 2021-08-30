function enleverCache1() {
    document.getElementById('cache1').style.cssText = 'display: none';
}

function mettreCache1() {
    document.getElementById('cache1').style.cssText = 'display: all';
}

function enleverCache2() {
    document.getElementById('cache2').style.cssText = 'display: none';
}

function mettreCache2() {
    document.getElementById('cache2').style.cssText = 'display: all';
}

function enleverCache3() {
    document.getElementById('cache3').style.cssText = 'display: none';
}

function mettreCache3() {
    document.getElementById('cache3').style.cssText = 'display: all';
}

function enleverCache4() {
    document.getElementById('cache4').style.cssText = 'display: none';
}

function mettreCache4() {
    document.getElementById('cache4').style.cssText = 'display: all';
}

let slide1 = true;
let slide2 = false;
let slide3 = false;
let slide4 = false;

function slideActuelle_1() {
    document.getElementById('article_3').style.cssText = 'position:initial';
    document.getElementById('article_2').style.cssText = 'display: none';
    document.getElementById('article_1').style.cssText = 'display: none';
    slide1 = true;
    slide2 = false;
    slide3 = false;
    document.getElementById('change_slides_previous').style.cssText = 'display: none';
    document.getElementById('change_slides_next').style.cssText = 'display: block';
    document.getElementById('fleche1').style.cssText = 'display: none';
    document.getElementById('fleche2').style.cssText = 'display: none';
    document.getElementById('fleche3').style.cssText = 'display: none';
    if (window.innerWidth > 1500) {
        document.getElementById('fleche1').style.cssText = 'display: block';
        document.getElementById('fleche2').style.cssText = 'display: none';
        document.getElementById('fleche3').style.cssText = 'display: none';
    } else {
        document.getElementById('fleche1').style.cssText = 'display: none';
        document.getElementById('fleche2').style.cssText = 'display: none';
        document.getElementById('fleche3').style.cssText = 'display: none';
    }
}

function slideActuelle_2() {
    document.getElementById('article_3').style.cssText = 'display: none';
    document.getElementById('article_2').style.cssText = 'position: initial';
    document.getElementById('article_1').style.cssText = 'display: none';
    slide1 = false;
    slide2 = true;
    slide3 = false;
    document.getElementById('change_slides_previous').style.cssText = 'display: block';
    document.getElementById('change_slides_next').style.cssText = 'display: block';
    if (window.innerWidth > 1500) {
        document.getElementById('fleche1').style.cssText = 'display: none';
        document.getElementById('fleche2').style.cssText = 'display: block';
        document.getElementById('fleche3').style.cssText = 'display: none';
    } else {
        document.getElementById('fleche1').style.cssText = 'display: none';
        document.getElementById('fleche2').style.cssText = 'display: none';
        document.getElementById('fleche3').style.cssText = 'display: none';
    }
}

function slideActuelle_3() {
    document.getElementById('article_3').style.cssText = 'display: none';
    document.getElementById('article_2').style.cssText = 'display: none';
    document.getElementById('article_1').style.cssText = 'position: initial';
    slide1 = false;
    slide2 = false;
    slide3 = true;
    document.getElementById('change_slides_previous').style.cssText = 'display: block';
    document.getElementById('change_slides_next').style.cssText = 'display: none';
    if (window.innerWidth > 1500) {
        document.getElementById('fleche1').style.cssText = 'display: none';
        document.getElementById('fleche2').style.cssText = 'display: none';
        document.getElementById('fleche3').style.cssText = 'display: block';
    } else {
        document.getElementById('fleche1').style.cssText = 'display: none';
        document.getElementById('fleche2').style.cssText = 'display: none';
        document.getElementById('fleche3').style.cssText = 'display: none';
    }
}

function slideActuelle_4() {
    document.getElementById('article_3').style.cssText = 'display: none';
    document.getElementById('article_2').style.cssText = 'display: none';
    document.getElementById('article_1').style.cssText = 'position: initial';
    slide1 = false;
    slide2 = false;
    slide3 = true;
    document.getElementById('change_slides_previous').style.cssText = 'display: block';
    document.getElementById('change_slides_next').style.cssText = 'display: none';
    if (window.innerWidth > 1500) {
        document.getElementById('fleche1').style.cssText = 'display: none';
        document.getElementById('fleche2').style.cssText = 'display: none';
        document.getElementById('fleche3').style.cssText = 'display: block';
    } else {
        document.getElementById('fleche1').style.cssText = 'display: none';
        document.getElementById('fleche2').style.cssText = 'display: none';
        document.getElementById('fleche3').style.cssText = 'display: none';
    }
}

if (slide1 == true) {
    window.addEventListener('resize', slideFleche1);
} else if (slide2 == true) {
    window.addEventListener('resize', slideFleche2);
} else if (slide3 == true) {
    window.addEventListener('resize', slideFleche3);
} else if (slide4 == true) {
    window.addEventListener('resize', slideFleche4);
}

function slideFleche1() {
    if (window.innerWidth > 1500) {
        document.getElementById('fleche1').style.cssText = 'display: block';
        document.getElementById('fleche2').style.cssText = 'display: none';
        document.getElementById('fleche3').style.cssText = 'display: none';
    } else {
        document.getElementById('fleche1').style.cssText = 'display: none';
        document.getElementById('fleche2').style.cssText = 'display: none';
        document.getElementById('fleche3').style.cssText = 'display: none';
    }
}

function slideFleche2() {
    if (window.innerWidth > 1500) {
        document.getElementById('fleche1').style.cssText = 'display: none';
        document.getElementById('fleche2').style.cssText = 'display: block';
        document.getElementById('fleche3').style.cssText = 'display: none';
    } else {
        document.getElementById('fleche1').style.cssText = 'display: none';
        document.getElementById('fleche2').style.cssText = 'display: none';
        document.getElementById('fleche3').style.cssText = 'display: none';
    }
}

function slideFleche3() {
    if (window.innerWidth > 1500) {
        document.getElementById('fleche1').style.cssText = 'display: none';
        document.getElementById('fleche2').style.cssText = 'display: none';
        document.getElementById('fleche3').style.cssText = 'display: block';
    } else {
        document.getElementById('fleche1').style.cssText = 'display: none';
        document.getElementById('fleche2').style.cssText = 'display: none';
        document.getElementById('fleche3').style.cssText = 'display: none';
    }
}

function slideFleche3() {
    if (window.innerWidth > 1500) {
        document.getElementById('fleche1').style.cssText = 'display: none';
        document.getElementById('fleche2').style.cssText = 'display: none';
        document.getElementById('fleche3').style.cssText = 'display: block';
    } else {
        document.getElementById('fleche1').style.cssText = 'display: none';
        document.getElementById('fleche2').style.cssText = 'display: none';
        document.getElementById('fleche3').style.cssText = 'display: none';
    }
}

function previousSlide() {
    if (slide1 == true) {
        slideActuelle_3();
    }
    else if (slide3 == true) {
        slideActuelle_2();
    }
    else if (slide2 == true) {
        slideActuelle_1();
    }
}

function nextSlide() {
     if (slide1 == true) {
         slideActuelle_2();
     }
     else if (slide2 == true) {
         slideActuelle_3();
     }
     else if (slide3 == true) {
         slideActuelle_1();
    }
}