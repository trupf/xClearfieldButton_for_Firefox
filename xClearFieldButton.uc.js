// ==UserScript==
// @name		xClearFieldButton.uc.js
// @namespace		xClearFieldButton@iwo.uc.js
// @description		xClearbutton test
// @include		main
// @compatibility	Firefox 67.0+
// @author		Tobias Rupf
// @version		0.2
// @note		build button to clear address bar and search bar fields for use with middle mouse paste as supported by other extensions or linux
// ==/UserScript==

(function clearFieldButton() {
	if (location != 'chrome://browser/content/browser.xul') return;

		function createBtn() {
			var xClearBtnBox = document.createElement("hbox");
			xClearBtnBox.setAttribute("class", "urlbar-icon-wrapper");
			xClearBtnBox.setAttribute("onclick", "if (event.button == 0) {if (typeof(this.parentNode.reset) == 'function') {this.parentNode.reset();} else {this.parentNode.parentNode.reset();}}");
			var xClearBtn = document.createElement("image");
			xClearBtn.setAttribute("class", "urlbar-icon");
                        
			/* KDE button style */
			xClearBtn.style.listStyleImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAG7AAABuwE67OPiAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAATVQTFRF////AAAAOkI6AAAALDIsAAAAICAgAAAAFRUSAAAABQUFPT48AAAAPT47Y2NjAAAAAQEBMDEvAgICJCUkAgICGBgXBAQEDQ0NAQEBAgICBAQEBQUFBgYGBwcHCAgIDAwMDQ0NEBAQFBQTFBQUGRkZICAgISIhIiIiJycmLzAuMTExMjMxNzc3Ojo6PT47Pz8/QUFBQUI/REVDRUVFR0dHSkpKSktIS0tLTU5LTk5OTk9NUFBQU1NTVFRUVlZVVldUWFlWWVlZW1tbZGRjZGZiZmhkaGhoampqamtncXFxdXV1eXl5enp6hISEhoaGioqKkJCQn5+frKysrq6usrKxt7i3wcHBxMXExsbGz9DP1NTU3t7e4eHh5+fn6enp6urq7e3t8PDw8/Pz9PT0+vr6+/v7/Pz8dUr3qgAAABh0Uk5TAB8fLi4/P1RUZWW4ysrU5eXl8PD4+P39CqmsmgAAAJ1JREFUGBmdwQMWAgEABcCfbdu2bdt2W3v/I4Q9QO81A/yJLgpTBPhiyurjQb837LR9+GArijNiUh8R86Ibb1xVqrZ/3BcEecnZAfA10UyydHg8yVshYgQg8UdCweCUJJ9Tj1MLgKe2WG2Jw/V0PeZ0OrxxlAb99rwpr887lx4fLLkjvszHKqtGwIAvhtSbrja7rWrWBApNaKaI8dsLXHIcGL0rDy8AAAAASUVORK5CYII=)";
                        
			/* CLEAR button style */
			/*xClearBtn.style.listStyleImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAkVJREFUOI3FkMtrE1EYxe/NxIJ1ZqVUbB5NH5kkQjuTdFKLNVDBihGKxVK0JY9JddGlf4d/ghtFsBhuC4rYjQ+ikFixNpNJMpPGhYIS0NhGJTOTdCa5LiRpm+K6Z/Vdzj2H7/sBcNSCrYFfjNyFJhhtNvArtaqFEUKNzr8LoZsvj3WZRyA2PXpw/+EdAAAwtW0M+Fu3Yz0MOzzdTR1Hc3NzxP5wlA/FaRc9Nj9/41QT44WWsVcA8ZNkMlUNBCZIlmWmyL0SyC+G4y6P+0ogcJ7c2NisQoiftmLm1uCwDy7JufxJM0Fcnrw4SQKApwQhsxKNhbDnrOfS+PgY9S71XikWPr3Q1PpSK9deM5FIYKfTvbpd2fHXNc12ITBBmiBhtVh6BznOR62vf1CkvPRaU+uz+/nsvxNIkoRppwttV3bGCbPZyjDDJ3pO93SJ2ZyS/ph+oyn1mU64JtAhhFATAKzq9V1s6DowDAMYuwYEGKj/vIMiOt4wEgs9pmln0Md5yXxO1srffxhuD92taqrNYrX6xEx25X8FMMqHloeG+q+OnfNT6U1BEdLp5LdS6bOu62dYliFrNdVmddhZUciuHiqI8OF7fQ77db+fozKCqOYlKaUpetDQG8uVX5UJQzd6GXaErGk1u6O/byAjiM8OMIAQz3Ccj8qKOUWS5WRN0YMIoQZCqFFXd6eLW8WEKOaU0VEv1Wzi2UMbeH2MrSBvDZR/lt9+/VK6tra21qYtSRKmaXf8T/X3iJwvWAjCFBfS4vNOoEejvx7fDFN88/S5AAAAAElFTkSuQmCC)";*/
                        
			/* XCLEAR button style */
			/*xClearBtn.style.listStyleImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACSSURBVDjLrZPNCcAgDIW9O1PXci6P6gJOIJ48Ooa0PlBJtRVaDTwSJF9M/GFst2mtuTFGZC+zj1CJscansFLqyIkh63xRQM4MThO4Kg1FStttZ2vtAHZr4TYO5qOJMO99AxDDuiKCdiDpbhWApzHNAUM7iH3LFXyCi+K+Av0IzrnPIywf4to1Lj+kLU95y2f6Yxe9Ghv54yQyLAAAAABJRU5ErkJggg==)";*/
                        
			/* Firefox standard button style */
//			xClearBtn.style.listStyleImage = url("chrome://global/skin/icons/searchfield-cancel.svg");
			/*xClearBtnBox.setAttribute("class", xClearBtnBox.className + " textbox-search-clear");*/
			const localeString = "de_DE";
			const tooltipText = localeString.indexOf("zh") == -1?"Feldinhalt löschen":"\u6E05\u7A7A\u5404\u8F93\u5165\u680F";
			xClearBtn.setAttribute("tooltiptext", tooltipText);
			xClearBtnBox.appendChild(xClearBtn);
			return xClearBtnBox
			//pageActionButtonbar.insertBefore(xClearBtnBox,pageActionButtonbar.firstChild);
		}
		var pageActionButtonbar = document.getElementById("page-action-buttons");
		var urlbarClearBtn = new createBtn();
		pageActionButtonbar.insertBefore(urlbarClearBtn, pageActionButtonbar.firstChild);
		
		function addSearchbarClearButton() { 
			var searchbarTextBox = document.getElementsByClassName("search-go-container")[0];
			var searchbarClearBtn = new createBtn();
                	searchbarClearBtn.id = "searchClearButton"
			searchbarTextBox.insertBefore(searchbarClearBtn, searchbarTextBox.firstChild);
		}
		addSearchbarClearButton();

                window.addEventListener('resize', function(e) {
                        if (!document.getElementById("searchClearButton")) {
                        var searchbarTextBox = document.getElementsByClassName("search-go-container")[0];
                            var searchbarClearBtn = new createBtn();
                            searchbarClearBtn.id = "searchClearButton"
                            searchbarTextBox.insertBefore(searchbarClearBtn, searchbarTextBox.firstChild);
                        }
                });

                var searchbar = document.getElementById('searchbar');
		var observer=new window.MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				if(mutation.addedNodes!==null) {
					for (var i=0; i<mutation.addedNodes.length; i++) {
						if (mutation.addedNodes[i].className=='searchbar-textbox') {
							addSearchbarClearButton();
							break;
						}
					}
				}
			});
		});
		observer.observe(searchbar, {childList: true});
                
		createBtn();
})();
