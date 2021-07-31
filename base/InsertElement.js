		function CreateHeader() {
			header=document.getElementById('header');
			
			var HeaderContent =
			'<span> <img class=hamburger_button id=open_button onclick=openMenu()> </span> \
			<a href=https://minionrushencyclopedia.github.io/home/> <img class=logo src="../base/Media/LOGOS/LOGO.png"> </a> \
			<span><img class="hamburger_button" id="blank_open_button" style="cursor: default; user-drag: none; -webkit-user-drag: none; user-select: none; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none;"> </span>';
			
			header.innerHTML = HeaderContent;
			
            t=header.querySelector("#open_button")
			t.style.float="left";
			t.src='../base/Media/ICONS/HAMBURGER_MENU_BUTTON.png';
			
			s=header.querySelector("#blank_open_button")
			s.style.float="right";
			s.src='../base/Media/ICONS/HAMBURGER_MENU_EMPTY.png';
		}
		
		function CreateTabLinks() {
			TabLinks=document.getElementById('tablinks');
			TabLinks.innerHTML = 
			'<a href= "https://minionrushencyclopedia.github.io/home/" class="tablink"> Home </a> \
			<a href = "https://minionrushencyclopedia.github.io/table-of-contents/" class="tablink"> Table of Contents </a> \
			<a href = "https://minionrushencyclopedia.github.io/about-us/" class="tablink"> About Us </a>';
		}
		
		function CreateHamburgerMenu() {
			Menu=document.getElementById('hamburger_menu');
			Menu.innerHTML="<div> <img class='exit_button' src='../base/Media/ICONS/EXIT_BUTTON.png' onclick='closeMenu()'> </div> \
			<a class='hamburger_menu_button' href = 'https://minionrushencyclopedia.github.io/home/'> Home </a> \
			<a class='hamburger_menu_button' href = 'https://minionrushencyclopedia.github.io/about-us/'> About Us </a> \
			<a class='hamburger_menu_button' href = 'https://minionrushencyclopedia.github.io/table-of-contents/'> Table of Contents </a> \
			<a class='hamburger_menu_button' href = 'https://minionrushencyclopedia.github.io/archives/'> Archives </a> \
			<a class='hamburger_menu_button' href = 'https://minionrushencyclopedia.github.io/resource-hub/'> Resource Hub </a> \
			<a class='hamburger_menu_button' href = 'https://minionrushencyclopedia.github.io/tutorials/'> Tutorials </a>";
		}
			
		function CreateFooter() {
			footer=document.getElementById('footer');
			footer.innerHTML ="<p>© 2021 Minion Rush Encyclopedia</p> \
			<p> <a href=https://minionrushencyclopedia.github.io/home/ class='hyperlink' style='font-size: 12px; line-height: 30px;'>Home</a> \
			<br> <a href=https://minionrushencyclopedia.github.io/table-of-contents/ class='hyperlink' style='font-size: 12px; line-height: 30px;'>Table of Contents</a> \
			<br> <a href=https://minionrushencyclopedia.github.io/about-us/ class='hyperlink' style='font-size: 12px; line-height: 30px;'>About Us</a> \
			<br> <a href=https://minionrushencyclopedia.github.io/terms-of-use/ class='hyperlink' style='font-size: 12px; line-height: 30px;'>Terms of Use</a> </p>";
		}
		
		function CreateDailyFact() {
			const d = new Date();
			var time = Math.round(d.getTime()/ 1000);
			
			if (time > 1627617600 && time < 1627704000) {
			document.getElementById("DailyFact").innerHTML = 
			"<div class='mediaBox' id='DailyFact' style='background-color: rgb(235,33,46);'> \
			<div class='page_name' style='margin-top: 10px; margin-bottom: 20px;'> 🍎 Daily Fun Fact! </div> \
			<div class='paragraph'> Sorry, but there is no daily fun fact for today! Come back tomorrow to check for a new fun fact! </div> \
			<div class='page_name' style='margin-top: 10%;'> 📄 Today's Featured Article! </div> \
			<div class='link_box_big'>  \
				<span class='img_container'> \
					<img src='../costumes/Media/IMAGES/Barker/Barker.png' class='subject_img'> \
				</span> \
				<div class='link_description_box'> \
					<a href='../costumes/Barker.html' class='link_title'> Barker Costume </a> \
					<a class='link_description'> Category: Costumes </a> \
					<a class='link_description'> Publish Date: July 30, 2021 </a> \
				</div> \
			</div> \
			</div>";
			}
			else if  (time > 1627704000 && time < 1627790400){
			document.getElementById("DailyFact").innerHTML =
			"<div class='mediaBox' id='DailyFact' style='background-color: rgb(235,33,46);'> \
			<div class='page_name' style='margin-top: 10px; margin-bottom: 20px;'> 🍎 Daily Fun Fact! </div> \
			<div class='paragraph'> When Minion Rush released, there were only two locations in the game. These locations were Gru's Lab and the Residential Area. </div> \
			<div class='page_name' style='margin-top: 10%;'> 📄 Today's Featured Article! </div> \
			<div class='link_box_big'>  \
				<span class='img_container'> \
					<img src='../locations/Media/IMAGES/GRUS_LAB.png' class='subject_img'> \
				</span> \
				<div class='link_description_box'> \
					<a href='../locations/Gru-Lab.html' class='link_title'> Gru's Lab </a> \
					<a class='link_description'> Category: Locations </a> \
					<a class='link_description'> Publish Date: July 30, 2021 </a> \
				</div> \
			</div> \
			</div>";
			}
			
			else {
			document.getElementById("DailyFact").innerHTML = ""
			}
		}