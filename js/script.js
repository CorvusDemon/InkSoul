// ==========================================
// INK SOUL STUDIO - JAVASCRIPT
// Features: Navigation, Lightbox, FAQ, Counters,
// Filter, Form validation, i18n Bilingual Switch
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    // ============================
    // SŁOWNIK JĘZYKOWY (i18n PL / EN)
    // ============================
    const translations = {
        pl: {
            nav_home: "Strona główna",
            nav_about: "O nas",
            nav_services: "Usługi",
            nav_gallery: "Galeria",
            nav_artists: "Mistrzowie",
            nav_reviews: "Opinie",
            nav_faq: "FAQ",
            nav_contact: "Kontakt",
            
            hero_badge: "TATTOO STUDIO",
            hero_title: 'SZTUKA,<br>KTÓRA POZOSTAJE<br>Z TOBĄ <span class="accent">NA ZAWSZE</span>',
            hero_subtitle: "Styl. Doświadczenie. Emocje.",
            hero_btn_book: "Zapisać się",
            hero_btn_gallery: "Zobacz prace",
            
            about_title_1: "O",
            about_title_2: "NAS",
            about_lead: '<strong>INK SOUL</strong> — studio tatuażu we Wrocławiu. Od ponad <strong>10 lat</strong> tworzymy autorskie projekty na skórze, łącząc precyzję, sztukę i sterylność.',
            about_f1: "Indywidualny projekt dla każdego klienta",
            about_f2: "Medyczny standard sterylności i bezpieczeństwa",
            about_f3: "Wszystkie style: realizm, grafika, blackwork i inne",
            
            stat_exp: "LAT DOŚWIADCZENIA",
            stat_clients: "ZADOWOLONYCH KLIENTÓW",
            stat_awards: "NAGRÓD I PUBLIKACJI",
            stat_sterility: "STERYLNOŚĆ",
            
            services_title_1: "NASZE",
            services_title_2: "USŁUGI",
            service_1_title: "Autorskie szkice",
            service_1_desc: "Opracowujemy unikalny projekt dostosowany do Państwa życzeń, uwzględniając anatomię i styl.",
            service_2_title: "Tatuaże o dowolnym stopniu trudności",
            service_2_desc: "Wykonujemy tatuaże we wszystkich popularnych stylach — od mikro-tatuaży po rozbudowane projekty na całe ciało.",
            service_3_title: "Cover-Up / Zakrycie",
            service_3_desc: "Przekształcamy stare lub nieudane tatuaże w nowe arcydzieła.",
            service_4_title: "Piercing",
            service_4_desc: "Bezpieczny piercing przy użyciu wysokiej jakości biżuterii i sterylnych narzędzi.",
            service_5_title: "Pielęgnacja i porady",
            service_5_desc: "Towarzyszymy klientowi aż do całkowitego wyleczenia i udzielamy wskazówek dotyczących pielęgnacji.",
            service_6_title: "Korekcja tatuażu",
            service_6_desc: "Odświeżamy kolory, kontury i detale istniejących tatuaży.",
            
            gallery_title_1: "NASZE",
            gallery_title_2: "REALIZACJE",
            filter_all: "Wszystko",
            filter_realism: "Realizm",
            filter_graphic: "Grafika",
            filter_minimal: "Minimalizm",
            filter_blackwork: "Blackwork",
            filter_oldschool: "Oldschool",
            
            artists_title_1: "NASI",
            artists_title_2: "MISTRZOWIE",
            artist_adam_spec: "Realizm / Portrety",
            artist_kordian_spec: "Minimalizm / Akwarela",
            artist_klaudia_spec: "Blackwork / Grafika",
            artist_exp_prefix: "Doświadczenie:",
            years_text: "lat",
            
            why_title_1: "DLACZEGO",
            why_title_2: "MY?",
            why_1_title: "Indywidualne podejście",
            why_1_desc: "Dla każdego klienta i jego pomysłu – żadnych szablonów, tylko unikalne rozwiązania.",
            why_2_title: "Sterylność i bezpieczeństwo",
            why_2_desc: "Materiały jednorazowego użytku, certyfikowane farby, autoklaw medyczny do sterylizacji.",
            why_3_title: "Doświadczeni artyści",
            why_3_desc: "Międzynarodowe certyfikaty, udział w festiwalach i konwencjach tatuażu.",
            why_4_title: "Uczciwe ceny",
            why_4_desc: "Bez ukrytych opłat — znasz ostateczną cenę jeszcze przed rozpoczęciem sesji.",
            
            process_title_1: "JAK",
            process_title_2: "PRACUJEMY",
            step_1_title: "Konsultacja",
            step_1_desc: "Omówimy Państwa pomysł, styl, rozmiar i rozmieszczenie na ciele",
            step_2_title: "Szkic",
            step_2_desc: "Mistrz tworzy wyjątkowy projekt specjalnie dla Ciebie",
            step_3_title: "Sesja",
            step_3_desc: "Pracujemy w komfortowej atmosferze, przestrzegając wszystkich standardów",
            step_4_title: "Pielęgnacja",
            step_4_desc: "Przekazujemy instrukcje dotyczące pielęgnacji i zapewniamy wsparcie aż do wygojenia",
            
            reviews_title_1: "OPINIE",
            reviews_title_2: "KLIENTÓW",
            review_1_text: "„Robiłem rękaw w stylu realizmu u Adama. Kunszt i dbałość o każdy mikroskopijny detal dosłownie zapierają dech w piersiach! W studiu panuje świetny klimat i pełna higiena.”",
            review_1_meta: "Tatuaż Realizm • Mistrz: Adam Muś",
            review_2_text: "„Klaudia stworzyła dla mnie absolutnie hipnotyzujący projekt w stylu blackwork! Linie są równe jak cięte laserem, a cały proces gojenia minął bez żadnych problemów.”",
            review_2_meta: "Grafika / Blackwork • Mistrzyni: Klaudia Naglik",
            review_3_text: "„Mój pierwszy tatuaż i strasznie się bałam. Kordian rozwiał wszystkie obawy, dobrał idealny minimalistyczny wzór i zrobił to praktycznie bezboleśnie. Wrócę na 100%!”",
            review_3_meta: "Minimalizm • Mistrz: Kordian Betcher",
            
            faq_title_1: "CZĘSTO ZADAWANE",
            faq_title_2: "PYTANIA",
            faq_q1: "Czy zrobienie tatuażu bardzo boli?",
            faq_a1: "Odczuwanie bólu jest indywidualne i zależy od miejsca na ciele. Miejsca nad kością (żebra, łokcie, kostki) są bardziej czułe, natomiast ramiona, uda czy łydki są zazwyczaj bardzo dobrze znoszone. Nasi mistrzowie dbają o częste przerwy i komfortową atmosferę.",
            faq_q2: "Jak przygotować się do sesji tatuażu?",
            faq_a2: "Dobrze się wyśpij, zjedz sycący posiłek 1–2 godziny przed sesją oraz pij dużo wody. Przez 24 godziny przed wizytą unikaj alkoholu i leków rozrzedzających krew (np. aspiryny). Załóż wygodne ubranie, które nie będzie uciskać tatuowanego miejsca.",
            faq_q3: "Jak dbacie o bezpieczeństwo i sterylność?",
            faq_a3: "Używamy wyłącznie jednorazowych, sterylnie pakowanych igieł i modułów kartridżowych otwieranych przy kliencie. Pozostałe narzędzia przechodzą autoklawowanie w certyfikowanym sprzęcie medycznym. Korzystamy z najwyższej jakości atestowanych pigmentów z UE i USA.",
            faq_q4: "Ile kosztuje tatuaż i od czego zależy cena?",
            faq_a4: "Cena zależy od rozmiaru, złożoności motywu, wybranego stylu oraz czasu trwania sesji. Dokładny koszt ustalamy na bezpłatnej konsultacji jeszcze przed przystąpieniem do pracy — nie ma u nas żadnych ukrytych dopłat.",
            faq_q5: "Jak długo trwa gojenie tatuażu?",
            faq_a5: "Podstawowe gojenie naskórka trwa około 10–14 dni, a pełna regeneracja głębszych warstw skóry trwa około miesiąca. Po sesji otrzymasz od nas specjalną folię ochronną i dokładną instrukcję pielęgnacyjną.",
            
            contact_title: "KONTAKT",
            form_title: "Umówić się na sesję",
            form_name: "Twoje imię",
            form_phone: "Telefon",
            form_email: "Email",
            form_msg: "Opisz swój pomysł...",
            form_opt_choose: "Wybierz usługę",
            form_opt_tattoo: "Tatuaż",
            form_opt_sketch: "Opracowanie szkicu",
            form_opt_coverup: "Cover-Up",
            form_opt_piercing: "Piercing",
            form_opt_correction: "Korekta",
            form_opt_consult: "Konsultacja",
            form_submit: "Wyślij zgłoszenie",
            
            contact_data_title: "Nasze dane",
            hours_title: "Godziny otwarcia:",
            hours_value: "Pn-Sb: 11:00 – 22:00",
            social_title: "Jesteśmy w mediach:",
            
            notif_empty: "Wypełnij wszystkie pola obowiązkowe!",
            notif_sending: "Wysyłanie...",
            notif_success: "Zgłoszenie zostało wysłane! Skontaktujemy się wkrótce."
        },
        en: {
            nav_home: "Home",
            nav_about: "About Us",
            nav_services: "Services",
            nav_gallery: "Gallery",
            nav_artists: "Artists",
            nav_reviews: "Reviews",
            nav_faq: "FAQ",
            nav_contact: "Contact",
            
            hero_badge: "TATTOO STUDIO",
            hero_title: 'ART THAT<br>STAYS WITH YOU<br><span class="accent">FOREVER</span>',
            hero_subtitle: "Style. Experience. Emotions.",
            hero_btn_book: "Book a Session",
            hero_btn_gallery: "View Gallery",
            
            about_title_1: "ABOUT",
            about_title_2: "US",
            about_lead: '<strong>INK SOUL</strong> — premier tattoo studio in Wrocław. For over <strong>10 years</strong>, we have been crafting bespoke body art blending artistry, precision, and medical sterility.',
            about_f1: "Custom artwork tailored to each client",
            about_f2: "Hospital-grade sterility and safety standards",
            about_f3: "All styles: realism, graphics, blackwork & more",
            
            stat_exp: "YEARS OF EXPERIENCE",
            stat_clients: "HAPPY CLIENTS",
            stat_awards: "AWARDS & PUBLICATIONS",
            stat_sterility: "STERILITY & SAFETY",
            
            services_title_1: "OUR",
            services_title_2: "SERVICES",
            service_1_title: "Custom Tattoo Sketches",
            service_1_desc: "We develop original bespoke concepts tailored to your personal aesthetic and body anatomy.",
            service_2_title: "Tattoos of Any Complexity",
            service_2_desc: "From delicate micro-tattoos to full body-suit masterpieces across all contemporary tattoo styles.",
            service_3_title: "Cover-Up & Rework",
            service_3_desc: "Transforming old, faded, or unwanted tattoos into fresh, high-impact artwork.",
            service_4_title: "Body Piercing",
            service_4_desc: "Safe, sterile piercing procedures utilizing implant-grade titanium jewelry.",
            service_5_title: "Aftercare & Guidance",
            service_5_desc: "We provide comprehensive healing protocols and full support throughout recovery.",
            service_6_title: "Tattoo Refresh & Correction",
            service_6_desc: "Restoring crisp outlines, deep contrasts, and vibrant saturation to existing work.",
            
            gallery_title_1: "OUR",
            gallery_title_2: "PORTFOLIO",
            filter_all: "All",
            filter_realism: "Realism",
            filter_graphic: "Graphic",
            filter_minimal: "Minimalism",
            filter_blackwork: "Blackwork",
            filter_oldschool: "Oldschool",
            
            artists_title_1: "OUR",
            artists_title_2: "ARTISTS",
            artist_adam_spec: "Realism / Portraiture",
            artist_kordian_spec: "Minimalism / Watercolor",
            artist_klaudia_spec: "Blackwork / Graphic",
            artist_exp_prefix: "Experience:",
            years_text: "years",
            
            why_title_1: "WHY",
            why_title_2: "CHOOSE US?",
            why_1_title: "Bespoke Approach",
            why_1_desc: "No cookie-cutter templates. Every piece is designed specifically for your individuality.",
            why_2_title: "Clinical Sterility",
            why_2_desc: "100% single-use needles, certified inks, and hospital-grade autoclaves.",
            why_3_title: "Master Craftsmanship",
            why_3_desc: "Internationally awarded resident artists with convention accolades.",
            why_4_title: "Transparent Pricing",
            why_4_desc: "Honest quotes with no hidden fees — agreed upon prior to your appointment.",
            
            process_title_1: "HOW WE",
            process_title_2: "WORK",
            step_1_title: "Consultation",
            step_1_desc: "We explore your concept, style preference, placement, and sizing.",
            step_2_title: "Custom Sketch",
            step_2_desc: "Your chosen artist crafts a tailored visual concept.",
            step_3_title: "Tattoo Session",
            step_3_desc: "Relax in a comfortable, sanitary studio environment.",
            step_4_title: "Aftercare",
            step_4_desc: "Receive professional healing film and complete step-by-step guidance.",
            
            reviews_title_1: "CLIENT",
            reviews_title_2: "REVIEWS",
            review_1_text: "„Got a full realism sleeve done by Adam. The level of detail and contrast is simply mindblowing! Clean, friendly, and utterly professional studio.”",
            review_1_meta: "Realism Tattoo • Artist: Adam Muś",
            review_2_text: "„Klaudia created a dark blackwork masterpiece on my forearm. The linework is razor sharp and healing was an absolute breeze. 10/10!”",
            review_2_meta: "Graphic / Blackwork • Artist: Klaudia Naglik",
            review_3_text: "„My very first tattoo and I was quite nervous. Kordian made the entire experience super comfortable and painless. Beautiful fine-line work!”",
            review_3_meta: "Minimalism • Artist: Kordian Betcher",
            
            faq_title_1: "FREQUENTLY ASKED",
            faq_title_2: "QUESTIONS",
            faq_q1: "Does getting a tattoo hurt a lot?",
            faq_a1: "Pain sensitivity varies by person and body location. Bony areas like ribs, elbows, and ankles are more sensitive, whereas arms and thighs are very manageable. We ensure regular breaks and a calm pace.",
            faq_q2: "How should I prepare for my session?",
            faq_a2: "Get a full night of sleep, eat a substantial meal 1–2 hours beforehand, and stay well hydrated. Avoid alcohol and blood-thinning painkillers for 24 hours prior. Wear comfortable, loose clothing.",
            faq_q3: "How do you guarantee safety and sterility?",
            faq_a3: "We use exclusively single-use, sterile cartridge needles opened right before your eyes. Inks are EU/US-certified non-toxic pigments, and surfaces are rigorously sanitized.",
            faq_q4: "How much does a tattoo cost?",
            faq_a4: "Pricing depends on design complexity, dimensions, technique, and session length. We provide a firm quote during your free consultation — no surprises.",
            faq_q5: "How long does healing take?",
            faq_a5: "Surface healing takes around 10–14 days, with full deep-layer skin restoration completing in about one month. We provide medical protective foil and clear aftercare balm recommendations.",
            
            contact_title: "CONTACT US",
            form_title: "Book an Appointment",
            form_name: "Your Name",
            form_phone: "Phone Number",
            form_email: "Email Address",
            form_msg: "Describe your tattoo idea...",
            form_opt_choose: "Select a service",
            form_opt_tattoo: "Tattoo Session",
            form_opt_sketch: "Custom Sketch Design",
            form_opt_coverup: "Cover-Up / Rework",
            form_opt_piercing: "Body Piercing",
            form_opt_correction: "Tattoo Refresh",
            form_opt_consult: "Free Consultation",
            form_submit: "Send Request",
            
            contact_data_title: "Studio Details",
            hours_title: "Opening Hours:",
            hours_value: "Mon-Sat: 11:00 AM – 10:00 PM",
            social_title: "Connect with us:",
            
            notif_empty: "Please fill in all required fields!",
            notif_sending: "Sending...",
            notif_success: "Request sent successfully! We will get in touch shortly."
        }
    };

    let currentLang = localStorage.getItem('inksoul_lang') || 'pl';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('inksoul_lang', lang);

        document.documentElement.lang = lang;

        // Aktualizacja przycisków języka
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const isSelected = btn.getAttribute('data-lang') === lang;
            btn.classList.toggle('active', isSelected);
            btn.setAttribute('aria-pressed', String(isSelected));
        });

        // Tłumaczenie elementów z data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Tłumaczenie placeholderów
        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            if (translations[lang] && translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });
    }

    // Inicjalizacja języka
    setLanguage(currentLang);

    // Nasłuchiwanie kliknięć przełącznika języka
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // ============================
    // NAWIGACJA — przewijanie i navbar
    // ============================
    const navbar = document.getElementById('navbar');
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        highlightNavLink();
    }, { passive: true });

    // Burger menu
    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            const isActive = burger.classList.toggle('active');
            navLinks.classList.toggle('active');
            burger.setAttribute('aria-expanded', String(isActive));
            document.body.style.overflow = isActive ? 'hidden' : '';
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('active');
                navLinks.classList.remove('active');
                burger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    // Zamykanie menu przy kliknięciu poza obszarem
    document.addEventListener('click', (e) => {
        if (navLinks && navLinks.classList.contains('active')) {
            if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
                burger.classList.remove('active');
                navLinks.classList.remove('active');
                burger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        }
    });

    // Podświetlenie aktywnego punktu menu
    function highlightNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-links a[href="#${id}"]`);

            if (link) {
                if (scrollPos >= top && scrollPos < top + height) {
                    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    }

    // Przycisk "Do góry"
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Płynne przewijanie do kotwic z uwzględnieniem wysokości navbara
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navHeight = navbar ? navbar.offsetHeight : 70;
                const position = target.offsetTop - navHeight + 5;
                window.scrollTo({ top: position, behavior: 'smooth' });
            }
        });
    });

    // ============================
    // ANIMACJA LICZNIKÓW
    // ============================
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 1800;
            const stepTime = 20;
            const totalSteps = duration / stepTime;
            const increment = target / totalSteps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current);
                }
            }, stepTime);
        });
    }

    const statsSection = document.querySelector('.stats');
    let countersAnimated = false;
    if (statsSection && 'IntersectionObserver' in window) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersAnimated) {
                    animateCounters();
                    countersAnimated = true;
                }
            });
        }, { threshold: 0.3 });
        statsObserver.observe(statsSection);
    }

    // ============================
    // FILTROWANIE GALERII
    // ============================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeInUp 0.4s ease forwards';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // ============================
    // LIGHTBOX / ZOOM DLA GALERII
    // ============================
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxStyle = document.getElementById('lightboxStyle');
    const lightboxArtist = document.getElementById('lightboxArtist');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    let currentItemIndex = 0;

    function getVisibleGalleryItems() {
        return Array.from(document.querySelectorAll('.gallery-item:not(.hidden)'));
    }

    let lastFocusedGalleryTrigger = null;

    function openLightbox(index, triggerEl) {
        const visibleItems = getVisibleGalleryItems();
        if (!visibleItems.length) return;
        if (index < 0) index = visibleItems.length - 1;
        if (index >= visibleItems.length) index = 0;

        currentItemIndex = index;
        const item = visibleItems[currentItemIndex];
        if (!item) return;

        if (triggerEl) {
            lastFocusedGalleryTrigger = triggerEl;
        }

        const imgEl = item.querySelector('img');
        const title = item.getAttribute('data-title') || imgEl.alt;
        const style = item.getAttribute('data-style') || item.getAttribute('data-category');
        const artist = item.getAttribute('data-artist') || 'INK SOUL Artist';

        lightboxImg.src = imgEl.src;
        lightboxImg.alt = title;
        lightboxTitle.textContent = title;
        lightboxStyle.textContent = style;
        lightboxArtist.textContent = `Artist: ${artist}`;

        lightboxModal.classList.add('active');
        lightboxModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        if (triggerEl && lightboxClose) {
            lightboxClose.focus();
        }
    }

    function closeLightbox() {
        if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
        lightboxModal.classList.remove('active');
        lightboxModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (lastFocusedGalleryTrigger && typeof lastFocusedGalleryTrigger.focus === 'function') {
            lastFocusedGalleryTrigger.focus();
        }
        lastFocusedGalleryTrigger = null;
    }

    galleryItems.forEach(item => {
        if (!item.hasAttribute('tabindex')) {
            item.setAttribute('tabindex', '0');
            item.setAttribute('role', 'button');
            const title = item.getAttribute('data-title') || 'Tattoo work';
            item.setAttribute('aria-label', title);
        }

        const triggerOpen = () => {
            const visibleItems = getVisibleGalleryItems();
            const index = visibleItems.indexOf(item);
            if (index !== -1) {
                openLightbox(index, item);
            }
        };

        item.addEventListener('click', triggerOpen);
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                triggerOpen();
            }
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxModal) {
        lightboxModal.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);
    }

    const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
    const lightboxNextBtn = document.getElementById('lightboxNextBtn');

    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            openLightbox(currentItemIndex - 1);
        });
    }

    if (lightboxNext) {
        lightboxNext.addEventListener('click', (e) => {
            e.stopPropagation();
            openLightbox(currentItemIndex + 1);
        });
    }

    if (lightboxPrevBtn) {
        lightboxPrevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openLightbox(currentItemIndex - 1);
        });
    }

    if (lightboxNextBtn) {
        lightboxNextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openLightbox(currentItemIndex + 1);
        });
    }

    // Klawisze do nawigacji lightbox (Esc, Lewo, Prawo, Tab trap)
    document.addEventListener('keydown', (e) => {
        if (!lightboxModal || !lightboxModal.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            openLightbox(currentItemIndex - 1);
        } else if (e.key === 'ArrowRight') {
            openLightbox(currentItemIndex + 1);
        } else if (e.key === 'Tab') {
            const focusables = Array.from(lightboxModal.querySelectorAll('button')).filter(
                btn => window.getComputedStyle(btn).display !== 'none'
            );
            if (!focusables.length) return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    });

    // ============================
    // FAQ AKKORDEON
    // ============================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        if (questionBtn) {
            questionBtn.addEventListener('click', () => {
                const willOpen = !item.classList.contains('active');

                // Zamykamy inne otwarte elementy dla schludnego wyglądu
                faqItems.forEach(other => {
                    other.classList.remove('active');
                    const otherBtn = other.querySelector('.faq-question');
                    if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
                });

                if (willOpen) {
                    item.classList.add('active');
                    questionBtn.setAttribute('aria-expanded', 'true');
                }
            });
        }
    });

    // ============================
    // ANIMACJE POJAWIANIA SIĘ (FADE-IN)
    // ============================
    const animatedSelectors = '.service-card, .artist-card, .why-item, .stat-item, .step, .about-text, .about-image, .review-card, .faq-item';
    const fadeElements = document.querySelectorAll(animatedSelectors);

    fadeElements.forEach(el => el.classList.add('fade-in'));

    if ('IntersectionObserver' in window) {
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        fadeElements.forEach(el => fadeObserver.observe(el));
    } else {
        fadeElements.forEach(el => el.classList.add('visible'));
    }

    // ============================
    // OBSŁUGA FORMULARZA KONTAKTOWEGO
    // ============================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameEl = document.getElementById('name');
            const phoneEl = document.getElementById('phone');
            const emailEl = document.getElementById('email');
            const serviceEl = document.getElementById('service');

            const name = nameEl.value.trim();
            const phone = phoneEl.value.trim();
            const email = emailEl ? emailEl.value.trim() : '';
            const service = serviceEl.value;

            const t = translations[currentLang];
            const phoneDigits = phone.replace(/\D/g, '');
            const validPhone = phone.length > 0 && /^\+?[\d\s().-]+$/.test(phone) && phoneDigits.length >= 9 && phoneDigits.length <= 15;
            const validEmail = !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

            nameEl.setAttribute('aria-invalid', String(!name));
            phoneEl.setAttribute('aria-invalid', String(!validPhone));
            if (emailEl) emailEl.setAttribute('aria-invalid', String(!validEmail));
            serviceEl.setAttribute('aria-invalid', String(!service));

            if (!name || !validPhone || !validEmail || !service) {
                showNotification(t.notif_empty, 'error');
                const firstInvalid = contactForm.querySelector('[aria-invalid="true"]');
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalContent = submitBtn.innerHTML;
            submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> <span>${t.notif_sending}</span>`;
            submitBtn.disabled = true;

            setTimeout(() => {
                showNotification(t.notif_success, 'success');
                contactForm.reset();
                submitBtn.innerHTML = originalContent;
                submitBtn.disabled = false;
            }, 1200);
        });
    }

    // ============================
    // POWIADOMIENIA (TOAST)
    // ============================
    function showNotification(text, type = 'success') {
        const existing = document.querySelector('.notification');
        if (existing) existing.remove();

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${text}</span>
            <button class="notification-close" aria-label="Zamknij">&times;</button>
        `;

        Object.assign(notification.style, {
            position: 'fixed',
            top: '25px',
            right: '25px',
            padding: '16px 24px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '14px',
            fontWeight: '600',
            color: '#fff',
            zIndex: '100000',
            boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
            background: type === 'success'
                ? 'linear-gradient(135deg, #1b5e20, #2e7d32)'
                : 'linear-gradient(135deg, #a00d24, #c8102e)',
            animation: 'fadeInUp 0.3s ease',
            maxWidth: '380px'
        });

        const closeBtn = notification.querySelector('.notification-close');
        Object.assign(closeBtn.style, {
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '20px',
            cursor: 'pointer',
            marginLeft: 'auto',
            padding: '0 0 0 10px',
            opacity: '0.8'
        });

        document.body.appendChild(notification);

        closeBtn.addEventListener('click', () => notification.remove());

        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.opacity = '0';
                notification.style.transition = 'opacity 0.4s ease';
                setTimeout(() => notification.remove(), 400);
            }
        }, 4000);
    }

});