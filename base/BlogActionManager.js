			const mediaQuery = window.matchMedia('(max-width: 720px)')
			function closeBlogMenu() {
				document.getElementById("hamburger_menu").style["display"] = "none";
				
				if (mediaQuery.matches) {
				document.getElementById("open_button").style["display"] = "block";
			  }
				else{
				document.getElementById("open_button").style["display"] = "none";
			  }
			}
			
			function openBlogMenu() {
				document.getElementById("hamburger_menu").style["display"] = "block";
				document.getElementById("open_button").style["display"] = "none";
			}
			
			function handleTabletChange(e) {
			  if (e.matches) {
				document.getElementById("open_button").style["display"] = "block";
			  }
			  else {
				document.getElementById("open_button").style["display"] = "none";
			  }
			}
			
			mediaQuery.addListener(handleTabletChange)
			handleTabletChange(mediaQuery)