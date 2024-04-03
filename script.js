document.addEventListener('DOMContentLoaded', function() {
    const $body = document.body;
    const $menu_trigger = $body.querySelector('.menu-trigger');
    const $side_panel = $body.querySelector('.side-panel');
    const $close_button = $side_panel.querySelector('.close-button'); 

    const adjustMenuTriggerPosition = () => {
        const scrollPos = window.scrollY;
        const minimumTop = 50; 

        if ($menu_trigger) {
            if (scrollPos > $side_panel.offsetTop) {
                $menu_trigger.style.position = 'fixed';
                $menu_trigger.style.top = '20px'; 
            } else {
                $menu_trigger.style.position = 'absolute';
                $menu_trigger.style.top = minimumTop + 'px'; 
            }
        }
    };

    const smoothScrollToTarget = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            $body.classList.remove('menu-active');
        }
    };

    const handleClick = (event) => {
        const href = event.target.getAttribute('href');
        if (href && href.startsWith('#')) {
            event.preventDefault();
            const targetId = href.substring(1);
            smoothScrollToTarget(targetId);
        }
    };

    if ($menu_trigger) {
        $menu_trigger.addEventListener('click', () => {
            $body.classList.toggle('menu-active');
        });
    }

    if ($close_button) {
        $close_button.addEventListener('click', () => {
            $body.classList.remove('menu-active'); 
        });
    }

    adjustMenuTriggerPosition();
    window.addEventListener('scroll', adjustMenuTriggerPosition);

    $body.querySelectorAll('.side-panel a').forEach(anchor => {
        anchor.addEventListener('click', handleClick);
    });
});
