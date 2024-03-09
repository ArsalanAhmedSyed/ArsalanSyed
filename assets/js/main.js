/*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$sidebar = $('#sidebar');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Hack: Enable IE flexbox workarounds.
		if (browser.name == 'ie')
			$body.addClass('is-ie');

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Forms.

		// Hack: Activate non-input submits.
			$('form').on('click', '.submit', function(event) {

				// Stop propagation, default.
					event.stopPropagation();
					event.preventDefault();

				// Submit form.
					$(this).parents('form').submit();

			});



	// Sidebar.
		if ($sidebar.length > 0) {

			var $sidebar_a = $sidebar.find('a');

			$sidebar_a
				.addClass('scrolly')
				.on('click', function() {

					var $this = $(this);

					// External link? Bail.
						if ($this.attr('href').charAt(0) != '#')
							return;

					// Deactivate all links.
						$sidebar_a.removeClass('active');

					// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
						$this
							.addClass('active')
							.addClass('active-locked');

				})
				.each(function() {

					var	$this = $(this),
						id = $this.attr('href'),
						$section = $(id);

					// No section for this link? Bail.
						if ($section.length < 1)
							return;

					// Scrollex.
						$section.scrollex({
							mode: 'middle',
							top: '-20vh',
							bottom: '-20vh',
							initialize: function() {

								// Deactivate section.
									$section.addClass('inactive');

							},
							enter: function() {

								// Activate section.
									$section.removeClass('inactive');

								// No locked links? Deactivate all links and activate this section's one.
									if ($sidebar_a.filter('.active-locked').length == 0) {

										$sidebar_a.removeClass('active');
										$this.addClass('active');

									}

								// Otherwise, if this section's link is the one that's locked, unlock it.
									else if ($this.hasClass('active-locked'))
										$this.removeClass('active-locked');

							}
						});

				});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() {

				// If <=large, >small, and sidebar is present, use its height as the offset.
					if (breakpoints.active('<=large')
					&&	!breakpoints.active('<=small')
					&&	$sidebar.length > 0)
						return $sidebar.height();

				return 0;

			}
		});

	// Spotlights.
		$('.spotlights > section')
			.scrollex({
				mode: 'middle',
				top: '-10vh',
				bottom: '-10vh',
				initialize: function() {

					// Deactivate section.
						$(this).addClass('inactive');

				},
				enter: function() {

					// Activate section.
						$(this).removeClass('inactive');
				}
			})
			.each(function() {

				var	$this = $(this),
					$image = $this.find('.image'),
					$img = $image.find('img'),
					x;

				// Assign image.
					$image.css('background-image', 'url(' + $img.attr('src') + ')');

				// Set background position.
					if (x = $img.data('position'))
						$image.css('background-position', x);

				// Hide <img>.
					$img.hide();

			});

	// Features.
		$('.features')
			.scrollex({
				mode: 'middle',
				top: '-20vh',
				bottom: '-20vh',
				initialize: function() {

					// Deactivate section.
						$(this).addClass('inactive');

				},
				enter: function() {

					// Activate section.
						$(this).removeClass('inactive');
				}
			});

			$(document).ready(function() {
		  $('.btn').click(function() {
		    // Remove active class from all buttons
		    $('.btn').removeClass('active');

		    // Add active class to the clicked button
		    $(this).addClass('active');
		  });
		});

})(jQuery);

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//POP UP //
//////////////////////////////////////////
function togglePopup(PopupId, btnId, closeId){
	var Popup = document.getElementById(PopupId);
	// Get the button that opens the Popup
	var btn = document.getElementById(btnId);
	// Get the <span> element that closes the Popup
	var span = document.getElementById(closeId);

	// When the user clicks on the button, open the Popup
	btn.onclick = function() {
	  Popup.style.display = "block";
	}

	// When the user clicks on <span> (x), close the Popup
	span.onclick = function() {
	  Popup.style.display = "none";
	}
}

// Store all Popup IDs in an array
var PopupIds = ["Mario", "TwoSouls", "SuperFox", "LightsAndShadows", "DirectX", "SeasonScape", "MLD", "TankWarfair", "PopPop", "MageVenture"];

// Call the function for each Popup
PopupIds.forEach(function(PopupId) {
  togglePopup(PopupId + "Popup", PopupId + "Btn", PopupId + "Close");
});

// Event delegation to handle Popup closing
window.onclick = function(event) {
  PopupIds.forEach(function(PopupId) {
    var Popup = document.getElementById(PopupId + "Popup");
    var btn = document.getElementById(PopupId + "Btn");
    var close = document.getElementById(PopupId + "Close");
    if (event.target === Popup) {
      Popup.style.display = "none";
    }
    if (event.target === btn) {
      Popup.style.display = "block";
    }
    if (event.target === close) {
      Popup.style.display = "none";
    }
  });
}

// Function to show overlay image on hover
function showOverlayImage(baseId, overlayId) {
  const baseImage = document.getElementById(baseId);
  const overlayImage = document.getElementById(overlayId);

  baseImage.addEventListener('mouseenter', function () {
    overlayImage.style.opacity = 0.95;
  });

  baseImage.addEventListener('mouseleave', function () {
    overlayImage.style.opacity = 0;
  });
}

// Call the function for each button's hover effect
showOverlayImage('MarioBtn', 'MarioOverlayImg');
showOverlayImage('LightsAndShadowsBtn', 'LightsAndShadowsOverlayImg');
showOverlayImage('TwoSoulsBtn' , 'TwoSoulsOverlayImg');
showOverlayImage('SeasonScapeBtn', 'SeasonScapeOverlayImg');
showOverlayImage('SuperFoxBtn', 'SuperFoxOverlayImg');
showOverlayImage('DirectXBtn', 'DirectXOverlayImg');
showOverlayImage('MLDBtn', 'MLDOverlayImg');
showOverlayImage('TankWarfairBtn', 'TankWarfairOverlayImg');
showOverlayImage('PopPopBtn', 'PopPopOverlayImg');
showOverlayImage('MageVentureBtn', 'MageVentureOverlayImg');
