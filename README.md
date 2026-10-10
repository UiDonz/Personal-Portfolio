# Personal-Portfolio
A personal portfolio i made for my BCS 377 Web Development Frameworks Class!

# Web Design Document

## Table of Contents
1. [Project Overview](#1-project-overview)
2. [Target Audience](#2-target-audience)
3. [Content Strategy](#3-content-strategy)
4. [Information Organization](#4-information-organization)
5. [Visual Design](#5-visual-design)
6. [Interaction / Functionality](#6-interaction--functionality)
7. [Technical Overview](#7-technical-overview)
8. [Timeline / Project Milestones](#8-timeline--project-milestones)
9. [External Resources](#9-external-resources)

---

## 1. Project Overview
This is a single-page personal portfolio website I built for my BCS 377 Web Development Frameworks class. It introduces who I am (a Computer Programming Information Systems major with a minor in CyberSecurity) and shows my projects, my skills and how to contact me.

**Goals:**
- Show off my projects (MarketMate, my senior project NewRamCentral, and UFC-tracker)
- List my technical skills (HTML, CSS, JavaScript, Java, Python, Git)
- Give visitors an easy, spam-protected way to contact me
- Look clean, modern and professional, with a "tech" feel that fits IT and security work

## 2. Target Audience
- **Employers and recruiters** looking for programming, IT or cybersecurity candidates. The site should feel polished and professional, which reflects the kind of work I want to show them.
- **My instructor and classmates** in BCS 377, reviewing the site as a class project.
- **Other developers and people I network with**, who may view the site on desktop or phone, in light or dark mode.

## 3. Content Strategy
The site is a single page with these sections:

| Section | Content |
|---|---|
| Header | My name and title (Computer Programmer/IT) |
| About Me | My major and minor, what I enjoy building, and personal interests (UFC, friends, raving) |
| Projects | MarketMate, NewRamCentral (Senior Project) and IOS Development, each with a short description and a "View Project" link |
| Skills | HTML, CSS, JavaScript, Java, Python, Git |
| Contact | Email, GitHub and LinkedIn, revealed through a "Contact Me" button protected by reCAPTCHA |
| Footer | Copyright |

**Q2.11: Will you use icons, images, or illustrations? Why?**
Right now the design uses color, cards and pill-shaped tags instead of images, which keeps the site fast, clean and easy to maintain. I plan to add a profile photo in the header and screenshots of each project, since those show my actual work better than text alone. I may also add small icons for GitHub, LinkedIn and email in the Contact section so they're quicker to recognize.

**Content still to finish:**
- Real descriptions for each project (they are placeholder text right now)
- Real links for the "View Project" buttons and the GitHub/LinkedIn links

## 4. Information Organization

**Q2.5: What layout will your homepage follow?**
A single-page, top-to-bottom layout:
1. A full-width header (a banner with a blue gradient) with my name and title
2. A navigation bar that stays at the top while you scroll
3. About Me
4. Projects
5. Skills
6. Contact
7. Footer

The content sits in a centered column (max 860px wide) so lines don't get too long on big screens.

**Site map:**
```
portfolio.html (single page)
├── Header
├── Navigation ── About me | Projects | Skills | Contact
├── #about
├── #projects
│   ├── MarketMate
│   ├── NewRamCentral (Senior Project)
│   └── IOS development
├── #skills
├── #contact
└── Footer
```

**Q2.6: How will you organize project sections visually?**
Each project is its own card in a grid. Every card has a blue accent bar on top, a title, a short description and a "View Project" button. The grid shows the cards side by side on desktop and stacks them in one column on phones. Cards lift slightly with a shadow when you hover over them, so each project feels like something you can click.

**Q2.8: What visual hierarchy will guide visitors?**
The eye goes to the big gradient header and my name first, then the navigation bar. Each section starts with a large bold heading and a short blue underline accent. Inside each section, the important content (project titles, buttons, skill tags) uses the blue accent color or bold text, and supporting text uses a softer gray. That way visitors scan headings first and read details second.

## 5. Visual Design

### Wireframe
**Desktop:**
```
+--------------------------------------------------------------+
|                                                              |
|                      DONOVIN BERMUDEZ                        |
|                   COMPUTER PROGRAMMER/IT                     |
|                   (blue gradient banner)                     |
+--------------------------------------------------------------+
|        [About me]   [Projects]   [Skills]   [Contact]        |  <- stays on top
+--------------------------------------------------------------+
|                                                              |
|   About Me                                                   |
|   ____                                                       |
|   Paragraph about me...                                      |
|                                                              |
|   Projects                                                   |
|   ____                                                       |
|   +----------------+ +----------------+ +----------------+   |
|   | MarketMate     | | NewRamCentral  | | IOS development|   |   
|   | Description... | | Description... | | Description... |   |
|   | [View Project] | | [View Project] | | [View Project] |   |
|   +----------------+ +----------------+ +----------------+   |
|                                                              |
|   Skills                                                     |
|   ____                                                       |
|   (HTML) (CSS) (JavaScript) (Java) (Python) (Git)            |
|                                                              |
|   Contact                                                    |
|   ____                                                       |
|   [ Contact Me ]                                             |
|   [x] I'm not a robot  -> reveals Email / GitHub / LinkedIn  |
|                                                              |
+--------------------------------------------------------------+
|                (c) 2026 Donovin Bermudez                     |
+--------------------------------------------------------------+
```

**Mobile:**
```
+----------------------+
|   DONOVIN BERMUDEZ   |
| COMPUTER PROGRAMMER  |
+----------------------+
| About Projects       |
| Skills Contact       |
+----------------------+
| About Me             |
| Paragraph...         |
|                      |
| Projects             |
| +------------------+ |
| | MarketMate       | |
| | [View Project]   | |
| +------------------+ |
| +------------------+ |
| | NewRamCentral    | |
| | [View Project]   | |
| +------------------+ |
| +------------------+ |
| | IOS development  | |
| | [View Project]   | |
| +------------------+ |
|                      |
| Skills               |
| (HTML) (CSS) (JS)    |
| (Java) (Python)(Git) |
|                      |
| Contact              |
| [ Contact Me ]       |
+----------------------+
|        Footer        |
+----------------------+
```

### Design Questions

**Q2.3: What fonts will you use for headings and body text?**
Headings and body text both use one clean sans-serif font stack: Inter, with Segoe UI, the system font and Arial as fallbacks. I separate the two by weight and size rather than by font: headings are bold and large (the name in the header scales up to about 3.4rem), and the body text is a regular-weight 17px with extra line spacing so paragraphs are easy to read.

**Q2.4: How will your design reflect your personality or field?**
I'm a Computer Programming Information Systems major with a minor in CyberSecurity, so I went with a clean, modern, "tech" look. The color scheme is built around a deep blue that feels professional and trustworthy, which suits IT and security work. The site also follows the visitor's light or dark mode setting, which a lot of developers expect. The About section adds the personal side: UFC, friends and raving.

**Q2.7: Will the site be mobile-friendly? How will you ensure responsiveness?**
Yes. I use the viewport meta tag, a CSS grid that rearranges itself (`auto-fit` / `minmax`), flexbox that wraps for the nav and skill tags, and a heading size that scales with screen width (`clamp()`). A media query at 600px reduces the padding and font sizes. Long links in the Contact section wrap instead of overflowing. I tested the page at desktop width and at phone width (375px).

**Q2.9: How will consistency be maintained across pages?**
All styling lives in one external stylesheet (`styles.css`) instead of inline styles. Colors, shadows, corner radius and max width are defined once as CSS variables (`--accent`, `--surface`, `--radius`, etc.) and reused everywhere. If I add more pages, they link the same stylesheet and automatically share the same look, and changing one variable updates the whole site.

**Q2.10: How will accessibility be considered (contrast, font size, readability)?**
- **Contrast:** dark text on light backgrounds, and light text on dark backgrounds in dark mode, with colors chosen to stay readable.
- **Font size:** the base size is 17px (16px on phones) with a line height of 1.7.
- **Readability:** the content column has a max width so lines aren't too long.
- **Keyboard users:** nav links show a visible highlight when focused.
- **Motion:** animations and smooth scrolling turn off for users whose system is set to reduce motion.
- **Structure:** the page uses semantic HTML (`header`, `nav`, `section`, `footer`, headings in order) and a `lang` attribute so screen readers can navigate it.

**Q2.11: Will you use icons, images, or illustrations? Why?**
Answered under [Content Strategy](#3-content-strategy).

**Q2.12: What portfolio websites inspired your design?**
 The Portfolio websites that were shown in class inspired my design

## 6. Interaction / Functionality

**Q3.1: What interactive elements will your site include (navigation menus, buttons, forms)?**
- **Navigation:** a navigation bar that stays at the top while you scroll, with links that scroll smoothly to each section and highlight when hovered or focused
- **Project buttons:** a "View Project" button on every project card, plus cards that lift on hover
- **Skill tags:** grow slightly when hovered
- **Contact:** a "Contact Me" button protected by Google reCAPTCHA v2

**Q3.2: Will your site include a contact form? How will it work?**
The Contact section will have a "Contact Me" button. When it's clicked, a Google reCAPTCHA v2 "I'm not a robot" checkbox appears. Once the visitor passes it, my email address (as a clickable `mailto:` link), GitHub and LinkedIn are revealed. My email isn't written directly in the HTML, which helps protect it from spam bots that scrape websites for addresses. Because the site has no server, the captcha is only checked in the visitor's browser. Later I could add a full message form through a service like Formspree, which can check the captcha on its own server.

**Q3.3: What JavaScript features will you implement?**
- A click event listener on the "Contact Me" button
- Rendering the reCAPTCHA widget with Google's reCAPTCHA API (`grecaptcha.render`)
- A callback function that runs when the captcha passes and shows the hidden contact info
- Building the email address in JavaScript so it isn't readable in the HTML source

Smooth scrolling and hover effects are handled with CSS, so the page stays lightweight.

**Q3.4: How will users receive feedback from interactions?**
- Nav links change color and get a highlighted background on hover or keyboard focus.
- Buttons brighten on hover, and project cards lift with a bigger shadow.
- Skill tags grow slightly when hovered.
- Clicking a nav link visibly scrolls to that section.
- In the contact flow, the reCAPTCHA checkbox shows a green checkmark when it passes, and then the contact info appears right away.

**Q3.5: How does interactivity improve the user experience?**
Interactivity makes the site easier and more enjoyable to use. The navigation bar stays visible and links scroll smoothly, so visitors can jump to any section without getting lost on a long page. Hover effects and visual feedback show what is clickable. The reCAPTCHA contact flow keeps contacting me simple for real people while protecting my email from bots. Overall, these touches make the portfolio feel polished and professional, which reflects the kind of work I want to show employers.

## 7. Technical Overview

| Item | Details |
|---|---|
| Languages | HTML5, CSS, JavaScript |
| Files | `portfolio.html` (page structure and content), `styles.css` (all styling), `README.md` (this document) |
| Layout | CSS Grid (project cards), Flexbox (nav and skill tags), centered column with max width 860px |
| Theming | CSS custom properties (variables) with automatic dark mode (`prefers-color-scheme`) |
| Responsiveness | Viewport meta tag, `auto-fit` / `minmax` grid, `clamp()` font sizing, media query at 600px |
| Accessibility | Semantic HTML, visible focus styles, `prefers-reduced-motion` support, readable font size and line height |
| Third-party services | Google reCAPTCHA v2 (checkbox) for the contact section |
| Version control | Git and GitHub |
| Testing | Checked in the browser at desktop width and phone width (375px), in light and dark mode |

## 8. Timeline / Project Milestones

| Date | Milestone | Status |
|---|---|---|
| 2026-09-18 | Created the repo and the first version of `portfolio.html` | Done |
| 2026-09-21 | Added more details (About Me, projects, skills, contact info) | Done |
| 2026-09-27 | Added CSS styling: external stylesheet, card layout, sticky nav, dark mode, mobile layout | Done |
| 2026-10-10 | Wrote the Web Design Document (this README) | Done |
| TBD | Add the "Contact Me" button with Google reCAPTCHA v2 | Planned |
| TBD | Write real project descriptions and connect the project, GitHub and LinkedIn links | Planned |
| TBD | Add a profile photo, project screenshots and contact icons | Planned |
| TBD | Final testing and publishing the site | Planned |

## 9. External Resources
- [Google reCAPTCHA admin console](https://www.google.com/recaptcha/admin): register the site and get a site key
- [Google reCAPTCHA v2 documentation](https://developers.google.com/recaptcha/docs/display)
- [Formspree](https://formspree.io/): option for a future contact form with server-side handling
- [MDN Web Docs](https://developer.mozilla.org/): HTML, CSS and JavaScript reference
