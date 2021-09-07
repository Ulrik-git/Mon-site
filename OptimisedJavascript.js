let articles = [document.getElementById('mesArticles').children.length - 1];
let articleActuel = 0;

function articlePrecedent() {
    if (articleActuel > 1) {
        articleActuel--;
        document.getElementsByClassName("article")[articleActuel].style.cssText = 'display: flex';
        document.getElementsByClassName("article")[articleActuel + 1].style.cssText = 'display: none';
        document.getElementById("bouton_article_suivant").style.cssText = 'display: flex';
    } else if (articleActuel == 1) {
        articleActuel--;
        document.getElementsByClassName("article")[articleActuel].style.cssText = 'display: flex';
        document.getElementsByClassName("article")[articleActuel + 1].style.cssText = 'display: none';
        document.getElementById("bouton_article_precedent").style.cssText = 'display: none';
        document.getElementById("bouton_article_suivant").style.cssText = 'display: flex';
    }
}

function articleSuivant() {
    if (articleActuel < articles - 1) {
        articleActuel++;
        document.getElementsByClassName("article")[articleActuel].style.cssText = 'display: flex';
        document.getElementsByClassName("article")[articleActuel - 1].style.cssText = 'display: none';
        document.getElementById("bouton_article_precedent").style.cssText = 'display: flex';
    } else if (articleActuel == articles - 1) {
        articleActuel++;
        document.getElementsByClassName("article")[articleActuel].style.cssText = 'display: flex';
        document.getElementsByClassName("article")[articleActuel - 1].style.cssText = 'display: none';
        document.getElementById("bouton_article_precedent").style.cssText = 'display: flex';
        document.getElementById("bouton_article_suivant").style.cssText = 'display: none';
    }
}