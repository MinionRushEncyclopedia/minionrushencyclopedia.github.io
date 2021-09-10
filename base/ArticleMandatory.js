var page = document.getElementsByClassName("page")[0];

var article = document.getElementById('Article').innerHTML;
var article_extended = document.getElementById('article_extended').innerHTML;
var article_nav = document.getElementById('article_nav').innerHTML;
var media = document.getElementById('Media').innerHTML;
var charts = document.getElementById('Charts').innerHTML;
var triviaLinks = document.getElementById('triviaLinksContainer').innerHTML;
var trivia = document.getElementById('Trivia').innerHTML;
var links = document.getElementById('Links').innerHTML;

page.innerHTML = "<div class='loading'> </div>";


var DiscordWidget = '<iframe id="discordWidget" class="long_iframe" src="https://discord.com/widget?id=755050417485906000&theme=dark" style="margin-bottom: 0px;" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">h</iframe>';

media = media.replace('BigMediaBox', 'BigMediaBox');
page.innerHTML = article + article_nav + article_extended + DiscordWidget + charts + media + triviaLinks;
console.log(media);


function showImageDescription(textInput) {
	document.getElementById('Media').getElementsByClassName('paragraph')[0].innerHTML = "<div class='paragraph'>" + textInput + "</div>";
	document.getElementById('Media').getElementsByClassName('paragraph')[0].style.paddingBottom = "0px";
}

function removeImageDescription() {
	document.getElementById('Media').getElementsByClassName('paragraph')[0].innerHTML = "";
	document.getElementById('Media').getElementsByClassName('paragraph')[0].style.paddingBottom = "45px";
}

var mediaQuery = window.matchMedia('(max-width: 720px)')
			
function handleTabletChange(e) {
	if (e.matches) {
		document.getElementById("discordWidget").style["display"] = "none";
		document.getElementById('article_extended').style.width = "90%";
	  }
    else {
		document.getElementById("discordWidget").style["display"] = "inline-block";
		document.getElementById('article_extended').style.width = "60%";
	  }
	}
				
	mediaQuery.addListener(handleTabletChange)
	handleTabletChange(mediaQuery)