/* ── Navbar: scroll effect ── */
(function () {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    const onScroll = () =>
        navbar.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();

/* ── Navbar: mobile toggle ── */
(function () {
    const toggle = document.getElementById('navToggle');
    const links  = document.getElementById('navLinks');
    if (!toggle || !links) return;
    toggle.addEventListener('click', () => {
        const open = links.classList.toggle('open');
        toggle.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', open);
    });
    document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !links.contains(e.target)) {
            links.classList.remove('open');
            toggle.classList.remove('open');
        }
    });
})();

/* ── Smooth reveal on scroll ── */
(function () {
    if (!('IntersectionObserver' in window)) return;
    const targets = document.querySelectorAll(
        '.step-card, .feature-card, .stat, .cta-content, .cta-actions'
    );
    const obs = new IntersectionObserver(
        (entries) => entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.style.opacity = '1';
                e.target.style.transform = 'translateY(0)';
                obs.unobserve(e.target);
            }
        }),
        { threshold: 0.12 }
    );
    targets.forEach(t => {
        t.style.opacity = '0';
        t.style.transform = 'translateY(24px)';
        t.style.transition = 'opacity .5s ease, transform .5s ease';
        obs.observe(t);
    });
})();
