		function CreateHeader() {
			header=document.getElementById('header');
			
			var HeaderContent='<a href=../blog/> <img class=logo src="../base/Media/LOGOS/BLOG_LOGO.png"> </a> \
			<span> <img class=hamburger_button id=open_button onclick=openBlogMenu() src=../base/Media/ICONS/HAMBURGER_MENU_BUTTON.png> </span> \
			<a href="../home" id=tablink1 class=blog_tablink> Encyclopedia </a> \
			<a href="../blog" id=tablink2 class=blog_tablink> Blog </a>';
			
			header.innerHTML = HeaderContent;
		}
		
		
		function CreateHamburgerMenu() {
			Menu=document.getElementById('hamburger_menu');
			Menu.innerHTML="<div> <img class='exit_button' src='../base/Media/ICONS/EXIT_BUTTON.png' onclick='closeBlogMenu()'> </div> \
			<a class='hamburger_menu_button' href = '../blog/'> Blog </a> \
			<a class='hamburger_menu_button' href = '../home/'> Encyclopedia </a>";
		}
			
		function CreateFooter() {
			footer=document.getElementById('footer');
			footer.innerHTML ="<p>© 2021 Minion Rush Encyclopedia</p> \
			<p> <a href=../home/ class='hyperlink' style='font-size: 12px; line-height: 30px;'>Home</a> \
			<br> <a href=../table-of-contents/ class='hyperlink' style='font-size: 12px; line-height: 30px;'>Table of Contents</a> \
			<br> <a href=../about-us/ class='hyperlink' style='font-size: 12px; line-height: 30px;'>About Us</a> \
			<br> <a href=../terms-of-use/ class='hyperlink' style='font-size: 12px; line-height: 30px;'>Terms of Use</a> </p>";
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