document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Observer with safe fallback
    const revealEls = document.querySelectorAll('.reveal-item');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

        revealEls.forEach(el => {
            if (!el.classList.contains('is-visible')) {
                observer.observe(el);
            }
        });

        setTimeout(() => {
            revealEls.forEach(el => el.classList.add('is-visible'));
        }, 1400);
    } else {
        revealEls.forEach(el => el.classList.add('is-visible'));
    }

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const closeMenu = document.getElementById('close-menu');
    const mobileOverlay = document.getElementById('mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-close-trigger');

    if (menuBtn && mobileOverlay) {
        menuBtn.addEventListener('click', () => {
            mobileOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeMenu && mobileOverlay) {
        closeMenu.addEventListener('click', () => {
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // WhatsApp Form Submission
    const contactForm = document.getElementById('whatsapp-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const fullName = document.getElementById('wa-full-name').value;
            const phone = document.getElementById('wa-phone').value;
            const email = document.getElementById('wa-email').value;
            const selectedPkg = document.getElementById('wa-package').value;
            const message = document.getElementById('wa-message').value;

            const text = `Pozdrav Mike Design! Novi upit s web stranice mikedesign.net:\n\n*Ime i prezime:* ${fullName}\n*Telefon:* ${phone}\n*Email:* ${email}\n*Vrsta projekta:* ${selectedPkg}\n*Poruka:* ${message}`;
            const encodedText = encodeURIComponent(text);
            const phoneNumber = "380673626012";
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;
            window.open(whatsappURL, '_blank', 'noopener,noreferrer');
        });
    }
});

// Hero Interactive Project Selector (No Prices)
function setHeroProject(btnEl, projectType, timeframe, focusText) {
    document.querySelectorAll('.hero-opt').forEach(btn => {
        btn.className = 'hero-opt w-full text-left p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:scale-[1.015] transition-all duration-300 flex items-center justify-between gap-3';
    });
    btnEl.className = 'hero-opt w-full text-left p-3.5 rounded-2xl bg-cyan-500/15 border border-cyan-400 scale-[1.015] transition-all duration-300 flex items-center justify-between gap-3';

    const timeEl = document.getElementById('hero-est-time');
    const focusEl = document.getElementById('hero-est-focus');
    const ctaEl = document.getElementById('hero-est-cta');

    if (timeEl) timeEl.textContent = timeframe;
    if (focusEl) focusEl.textContent = focusText;

    if (ctaEl) {
        ctaEl.onclick = function() { selectProjectType(projectType); };
    }
}

// Reviews Filter Menu
function filterReviews(category, btnEl) {
    document.querySelectorAll('.rev-filter-btn').forEach(btn => {
        btn.className = 'rev-filter-btn px-4 py-2 rounded-full bg-white/5 text-gray-300 hover:bg-white/10 font-bold text-xs uppercase tracking-wider border border-white/10 transition';
    });
    if (btnEl) {
        btn.className = 'rev-filter-btn px-4 py-2 rounded-full bg-cyan-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition';
    }

    document.querySelectorAll('.review-card').forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// FAQ Accordion
function toggleFaq(element) {
    const allItems = document.querySelectorAll('.faq-item');
    allItems.forEach(item => {
        if (item !== element) {
            item.classList.remove('open');
        }
    });
    element.classList.toggle('open');
}

// Pre-select Project Type in Contact Form
function selectProjectType(projectType) {
    const selectEl = document.getElementById('wa-package');
    if (selectEl) {
        selectEl.value = projectType;
    }
}


// Floating WhatsApp Button Enhancement
document.addEventListener('DOMContentLoaded', () => {
    const waBtn = document.getElementById('floating-whatsapp-btn');
    if (waBtn) {
        waBtn.addEventListener('mouseenter', () => {
            waBtn.style.transform = 'translateY(-4px) scale(1.1)';
        });
        waBtn.addEventListener('mouseleave', () => {
            waBtn.style.transform = '';
        });
    }
});
