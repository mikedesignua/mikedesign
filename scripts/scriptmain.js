// Handles overlay navigation responsiveness
    function initMobileMenu() {
        const menuBtn = document.getElementById('menu-btn'); 
        const closeBtn = document.getElementById('close-menu'); 
        const mobileOverlay = document.getElementById('mobile-menu-overlay'); 
        
        if (menuBtn && mobileOverlay) {
            menuBtn.addEventListener('click', () => {
                mobileOverlay.classList.add('active');
                document.body.style.overflow = 'hidden'; 
            });

            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    mobileOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                });
            }

            const menuLinks = mobileOverlay.querySelectorAll('a');
            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
        }
    }

    // Handles the asynchronous AJAX email feedback submit safely
    function initContactForm() {
        const form = document.getElementById('contact-form');
        const result = document.getElementById('form-result');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                result.innerHTML = "SLANJE...";
                result.className = "text-center text-sm font-bold mt-4 text-cyan-400 animate-pulse";
                const formData = new FormData(form);
                const object = Object.fromEntries(formData);
                const json = JSON.stringify(object);

                fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                })
                .then(async (response) => {
                    let jsonRes = await response.json();
                    if (response.status == 200) {
                        result.innerHTML = "USPJEŠNO!";
                        result.className = "text-center text-sm font-bold mt-4 text-green-400";
                        form.reset();
                    } else {
                        console.log(response);
                        result.innerHTML = "POGREŠKA";
                        result.className = "text-center text-sm font-bold mt-4 text-red-500";
                    }
                })
                .catch(error => {
                    console.log(error);
                    result.innerHTML = "POGREŠKA";
                    result.className = "text-center text-sm font-bold mt-4 text-red-500";
                })
                .then(function() {
                    setTimeout(() => {
                        result.innerHTML = "";
                    }, 5000);
                });
            });
        }
    }

    window.onload = () => {
        initMobileMenu(); 
        initContactForm();
    }