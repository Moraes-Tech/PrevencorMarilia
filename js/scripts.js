/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var accordionButtons = document.querySelectorAll('#accordion button[data-toggle="collapse"]');

    accordionButtons.forEach(function(button) {
      button.addEventListener('keydown', function(event) {
        var keyCode = event.keyCode;
        var target = event.target;

        if (keyCode === 13 || keyCode === 32) { // Enter or Space key
          event.preventDefault();
          target.click(); // Toggle accordion item
        } else if (keyCode === 38 || keyCode === 40) { // Up or Down arrow key
          var nextButton = keyCode === 38 ? target.parentElement.previousElementSibling : target.parentElement.nextElementSibling;
          if (nextButton) {
            nextButton.querySelector('button').focus();
          }
        }
      });
    });
  });
</script>