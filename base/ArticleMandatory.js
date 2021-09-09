var page = document.getElementsByClassName("page")[0];

var article = document.getElementById('Article').innerHTML;
var article_nav = document.getElementById('article_nav').innerHTML;
var media = document.getElementById('Media').innerHTML;
var charts = document.getElementById('Charts').innerHTML;
var triviaLinks = document.getElementById('triviaLinksContainer').innerHTML;
var trivia = document.getElementById('Trivia').innerHTML;
var links = document.getElementById('Links').innerHTML;

page.innerHTML = "<div class='loading'> </div>";


media = media.replace('BigMediaBox', 'BigMediaBox');
page.innerHTML = article + article_nav + charts + media + triviaLinks;
console.log(media);


function showImageDescription(textInput) {
	document.getElementById('Media').getElementsByClassName('paragraph')[0].innerHTML = "<div class='paragraph'>" + textInput + "</div>";
	document.getElementById('Media').getElementsByClassName('paragraph')[0].style.paddingBottom = "0px";
}

function removeImageDescription() {
	document.getElementById('Media').getElementsByClassName('paragraph')[0].innerHTML = "";
	document.getElementById('Media').getElementsByClassName('paragraph')[0].style.paddingBottom = "45px";
}