
:root {
    --background: #080d19;
    --surface: #101a2d;
    --surface-light: #15233b;
    --text: #f2f6ff;
    --muted: #aab8d0;
    --blue: #38aaff;
    --cyan: #66e0ff;
    --border: #263957;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 85px;
}

body {
    background: var(--background);
    color: var(--text);
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.7;
}

a {
    color: var(--cyan);
    text-decoration: none;
}

a:hover {
    color: white;
}

img {
    display: block;
    max-width: 100%;
}

.container {
    width: min(1120px, 90%);
    margin-inline: auto;
}

.site-header {
    background: rgba(8, 13, 25, 0.96);
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 100;
}

.navbar {
    min-height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
}

.logo {
    color: white;
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: -1px;
}

.logo span,
.hero h1 span,
.section-title span {
    color: var(--blue);
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 25px;
    list-style: none;
}

.nav-links a {
    color: var(--text);
    font-size: 0.95rem;
    font-weight: 600;
}

.nav-links a:hover {
    color: var(--cyan);
}

.menu-button {
    display: none;
    background: transparent;
    color: white;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 7px 12px;
    font-size: 1.4rem;
    cursor: pointer;
}

.hero {
    padding: 105px 0;
    background:
        radial-gradient(ellipse at 85% 20%, #123565 0%, transparent 38%),
        var(--background);
}

.hero-grid {
    display: grid;
    grid-template-columns: 1.3fr 0.7fr;
    align-items: center;
    gap: 65px;
}

.eyebrow {
    color: var(--cyan);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 3px;
    margin-bottom: 14px;
}

.hero h1 {
    font-size: clamp(2.8rem, 6vw, 5rem);
    line-height: 1.08;
    letter-spacing: -2px;
    margin-bottom: 24px;
}

.hero-description,
.section-intro {
    max-width: 650px;
    color: var(--muted);
    font-size: 1.08rem;
}

.hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin: 30px 0 20px;
}

.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    border: 1px solid var(--blue);
    border-radius: 9px;
    font: inherit;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.2s, background 0.2s;
}

.button:hover {
    transform: translateY(-2px);
}

.button-primary {
    background: var(--blue);
    color: #06101f;
}

.button-primary:hover {
    background: var(--cyan);
    color: #06101f;
}

.button-outline {
    background: transparent;
    color: var(--text);
}

.small-note {
    color: var(--muted);
    font-size: 0.85rem;
}

.profile-card {
    padding: 22px;
    text-align: center;
    background: linear-gradient(145deg, var(--surface-light), var(--surface));
    border: 1px solid var(--border);
    border-radius: 22px;
    box-shadow: 0 25px 70px #0005;
}

.profile-photo,
.photo-placeholder {
    width: 100%;
    aspect-ratio: 4 / 4.2;
    max-height: 340px;
    object-fit: cover;
    object-position: center;
    border-radius: 15px;
    margin-bottom: 20px;
    background: #0b1830;
}

.photo-placeholder {
    place-content: center;
    gap: 8px;
    color: var(--cyan);
    padding: 20px;
}

.photo-placeholder small {
    color: var(--muted);
}

.profile-label,
.project-type {
    color: var(--cyan);
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 1.5px;
}

.profile-card h2 {
    margin: 7px 0;
    font-size: 1.35rem;
}

.profile-card p:last-child {
    color: var(--muted);
    font-size: 0.9rem;
}

.section {
    padding-top: 90px;
    padding-bottom: 90px;
}

.section-title {
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.2;
    margin-bottom: 22px;
}

.about-card {
    padding: 28px;
    max-width: 850px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 15px;
    color: var(--muted);
}

.about-card p + p {
    margin-top: 15px;
}

.section-dark {
    background: #0b1221;
    border-top: 1px solid #172641;
    border-bottom: 1px solid #172641;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
    margin-top: 32px;
}

.skill-card {
    padding: 24px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 13px;
    transition: border-color 0.2s, transform 0.2s;
}

.skill-card:hover,
.project-card:hover {
    transform: translateY(-4px);
    border-color: var(--blue);
}

.skill-card span {
    color: var(--cyan);
    font-weight: 800;
}

.skill-card h3 {
    margin: 10px 0 5px;
}

.skill-card p {
    color: var(--muted);
    font-size: 0.95rem;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    margin-top: 35px;
}

.project-card {
    overflow: hidden;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    transition: border-color 0.2s, transform 0.2s;
}

.project-card img {
    width: 100%;
    height: 225px;
    object-fit: cover;
    background: var(--surface-light);
}

.project-content {
    padding: 24px;
}

.project-content h3 {
    margin: 7px 0;
    font-size: 1.35rem;
}

.project-content > p:not(.project-type) {
    color: var(--muted);
    margin-bottom: 18px;
}

.project-link {
    display: inline-block;
    font-weight: 700;
}

.coming-soon {
    color: var(--muted);
    cursor: default;
}

.center-action {
    margin-top: 35px;
    text-align: center;
}

.contact-grid {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 35px;
    margin-top: 35px;
}

.contact-info,
.contact-form {
    padding: 27px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 15px;
}

.contact-info h3 {
    margin-bottom: 18px;
}

.contact-info p {
    margin-bottom: 15px;
    overflow-wrap: anywhere;
}

.contact-info p strong {
    color: white;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.contact-form label {
    font-weight: 700;
    margin-top: 5px;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 13px;
    background: #091222;
    border: 1px solid var(--border);
    border-radius: 8px;
    color: white;
    font: inherit;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: 2px solid var(--blue);
    border-color: transparent;
}

.contact-form textarea {
    resize: vertical;
}

.contact-form button {
    margin-top: 10px;
}

.form-status {
    min-height: 25px;
    color: var(--cyan);
    overflow-wrap: anywhere;
}

.honeypot {
    position: absolute;
    left: -10000px;
    width: 1px !important;
    height: 1px;
}

.site-footer {
    padding: 30px 0;
    background: #060a13;
    border-top: 1px solid var(--border);
}

.footer-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
}

.footer-content p {
    color: var(--muted);
    font-size: 0.88rem;
}

@media (max-width: 800px) {
    .hero {
        padding: 70px 0;
    }

    .hero-grid {
        grid-template-columns: 1fr;
        gap: 35px;
    }

    .profile-card {
        max-width: 420px;
        width: 100%;
        margin: auto;
    }

    .skills-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .contact-grid {
        grid-template-columns: 1fr;
    }

    .menu-button {
        display: block;
    }

    .navbar {
        position: relative;
        flex-wrap: wrap;
    }

    .nav-links {
        display: none;
        position: absolute;
        top: 76px;
        left: 0;
        right: 0;
        padding: 20px;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 10px;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }

    .nav-links.open {
        display: flex;
    }
}

@media (max-width: 520px) {
    .container {
        width: 92%;
    }

    .section {
        padding-top: 65px;
        padding-bottom: 65px;
    }

    .skills-grid,
    .projects-grid {
        grid-template-columns: 1fr;
    }

    .hero h1 {
        font-size: 2.8rem;
    }

    .contact-info,
    .contact-form,
    .about-card {
        padding: 20px;
    }

    .footer-content {
        flex-direction: column;
        align-items: flex-start;
    }
}
