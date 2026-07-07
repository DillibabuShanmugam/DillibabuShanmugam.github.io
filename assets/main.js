// Theme cycle: crimson (light) -> blue -> dark (al-folio style, persisted)
        (function () {
            const root = document.documentElement;
            const toggle = document.getElementById('theme-toggle');
            const icon = toggle.querySelector('i');
            const order = ['light', 'blue', 'dark'];
            // icon shows the NEXT theme you'll switch to
            const icons  = { light: 'fa-solid fa-droplet', blue: 'fa-solid fa-moon', dark: 'fa-solid fa-sun' };
            const titles = { light: 'Crimson theme — click for blue', blue: 'Blue theme — click for dark', dark: 'Dark theme — click for crimson' };
            function apply(theme) {
                if (theme === 'light') root.removeAttribute('data-theme');
                else root.setAttribute('data-theme', theme);
                icon.className = icons[theme];
                toggle.title = titles[theme];
                localStorage.setItem('theme', theme);
            }
            let saved = localStorage.getItem('theme');
            if (!order.includes(saved)) saved = 'light';
            apply(saved);
            toggle.addEventListener('click', function () {
                const cur = localStorage.getItem('theme') || 'light';
                apply(order[(order.indexOf(cur) + 1) % order.length]);
            });
        })();

        // Mobile nav toggle
        document.getElementById('nav-toggle').addEventListener('click', function () {
            document.getElementById('nav-links').classList.toggle('open');
        });
        document.querySelectorAll('#nav-links a').forEach(function (a) {
            a.addEventListener('click', function () { document.getElementById('nav-links').classList.remove('open'); });
        });

        // Scrolling progress bar
        const progress = document.getElementById('progress');
        function updateProgress() {
            const h = document.documentElement;
            const scrolled = h.scrollTop;
            const height = h.scrollHeight - h.clientHeight;
            progress.value = height > 0 ? (scrolled / height) * 100 : 0;
        }
        window.addEventListener('scroll', updateProgress);
        window.addEventListener('resize', updateProgress);
        updateProgress();
