document.addEventListener('DOMContentLoaded', function() {
    var anchors = document.querySelectorAll('.side-panel a');

    anchors.forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            // Check if the anchor link points to an external page
            if (this.getAttribute('href').startsWith('#')) {
                // Prevent the default anchor behavior for internal links
                event.preventDefault();
                var targetId = this.getAttribute('href').substring(1);
                var targetElement = document.getElementById(targetId);
                targetElement.scrollIntoView({ behavior: 'smooth' });
                document.body.classList.remove('menu-active');
            }
            // For external links, let the default behavior occur (i.e., navigating to another page)
        });
    });

    var $body = document.body;
    var $menu_trigger = $body.querySelector('.menu-trigger');
    var $side_panel = $body.querySelector('.side-panel');
    var $close_button = $side_panel.querySelector('.close-button'); 

    if ($menu_trigger) {
        $menu_trigger.addEventListener('click', function() {
            $body.classList.toggle('menu-active');
        });
    }

    if ($close_button) {
        $close_button.addEventListener('click', function() {
            $body.classList.remove('menu-active'); 
        });
    }
    adjustMenuTriggerPosition();

    window.addEventListener('scroll', function() {
        adjustMenuTriggerPosition();
    });
});

function adjustMenuTriggerPosition() {
    var $body = document.body;
    var $menu_trigger = $body.querySelector('.menu-trigger');
    var $side_panel = $body.querySelector('.side-panel');
    var scrollPos = window.scrollY;
    var minimumTop = 50; 

    if ($menu_trigger) {
        if (scrollPos > $side_panel.offsetTop) {
            $menu_trigger.style.position = 'fixed';
            $menu_trigger.style.top = '20px'; 
        } else {
            $menu_trigger.style.position = 'absolute';
            $menu_trigger.style.top = minimumTop + 'px'; 
        }
    }
}
