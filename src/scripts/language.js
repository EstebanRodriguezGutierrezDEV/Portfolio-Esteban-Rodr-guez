export const translations = {
    es: {
        "profile.role": "Desarrollador",
        "profile.role.highlight": "Full Stack",
        "profile.location": "Toledo, España",
        "profile.showOptions": "Mostrar Opciones",
        "profile.options.translate": "Translate",
        "profile.options.contact": "Contactar",
        "profile.options.instagram": "Instagram",
        "profile.options.github": "GitHub",
        "profile.options.linkedin": "LinkedIn",
        "profile.about.title": "Sobre mí",
        "profile.about.p1": "Soy <strong>Desarrollador Multiplataforma y Web Junior</strong> con experiencia en <strong>frontend y backend</strong>, creando aplicaciones completas, seguras y escalables. Integro <strong>automatización con inteligencia artificial</strong> para optimizar procesos y mejorar la eficiencia de cada proyecto.",
        "skills.title": "Habilidades",
        "skills.frontend": "Frontend",
        "skills.backend": "Backend",
        "skills.database": "Bases de Datos",
        "skills.tools": "Herramientas",
        "skills.mobile": "Móvil",
        "experience.title": "Experiencia",
        "experience.job1.title": "Desarrollador Web Junior",
        "experience.job1.company": "Freelance",
        "experience.job1.date": "2025 - Presente",
        "experience.job1.description": "Desarrollo de aplicaciones web y sitios corporativos utilizando tecnologías modernas como Astro, React y Tailwind CSS.",
        "experience.job2.title": "Prácticas de Desarrollo Web",
        "experience.job2.company": "Get brit!",
        "experience.job2.date": "2024",
        "experience.job2.description": "Durante mi período en Get brit!, participé activamente en diferentes áreas del desarrollo tecnológico de la empresa. Colaboré en la implementación de nuevas funcionalidades en el backend, contribuyendo a mejorar el rendimiento y la eficiencia de los sistemas internos. Asimismo, realicé tareas de mantenimiento y gestión de bases de datos, garantizando su correcto funcionamiento y optimización. También tuve la oportunidad de involucrarme en el diseño y desarrollo de interfaces de usuario, aportando soluciones centradas en la experiencia del usuario. Además, llevé a cabo la creación desde cero de una de las páginas web de la empresa, responsabilizándome tanto de su estructura como de su diseño y funcionamiento. Finalmente, participé en el mantenimiento general de las diferentes webs de la compañía, asegurando su actualización y correcto rendimiento.",
        "projects.title": "Proyectos",
        "projects.topbar.title": "Proyectos Esteban",
        "projects.window.title": "Proyectos — Esteban",
        "projects.sidebar.favorites": "Favoritos",
        "projects.sidebar.projects": "Proyectos",
        "projects.sidebar.desktop": "Escritorio",
        "projects.sidebar.documents": "Documentos",
        "projects.statusbar": "1 ítem seleccionado, 2.5 GB disponibles",
        "projects.wip": "Estamos trabajando en ello",
        "certifications.title": "Certificaciones",
        "certifications.python.title": "Python desde cero",
        "certifications.python.issuer": "Midudev",
        "certifications.python.date": "Expedición: 2025",
        "certifications.scraping.title": "Iniciación al Scraping con Python",
        "certifications.scraping.issuer": "Midudev",
        "certifications.scraping.date": "Expedición: 2025",
        "certifications.ia.title": "Curso de Iniciación al Desarrollo con IA",
        "certifications.ia.issuer": "BIG school",
        "certifications.ia.date": "Expedición: 2025",
        "certifications.dam.title": "Grado Superior en Desarrollo de Aplicaciones Multiplataforma",
        "certifications.dam.issuer": "CES Juan Pablo II",
        "certifications.dam.date": "Expedición: 2024 - 2025",
    },
    en: {
        "profile.role": "Developer",
        "profile.role.highlight": "Full Stack",
        "profile.location": "Toledo, Spain",
        "profile.showOptions": "Show Options",
        "profile.options.translate": "Traducir",
        "profile.options.contact": "Contact",
        "profile.options.instagram": "Instagram",
        "profile.options.github": "GitHub",
        "profile.options.linkedin": "LinkedIn",
        "profile.about.title": "About Me",
        "profile.about.p1": "I am a <strong>Junior Cross-Platform and Web Developer</strong> with experience in <strong>frontend and backend</strong>, creating complete, secure, and scalable applications. I integrate <strong>automation with artificial intelligence</strong> to optimize processes and improve the efficiency of every project.",
        "skills.title": "Skills",
        "skills.frontend": "Frontend",
        "skills.backend": "Backend",
        "skills.database": "Databases",
        "skills.tools": "Tools",
        "skills.mobile": "Mobile",
        "experience.title": "Experience",
        "experience.job1.title": "Junior Web Developer",
        "experience.job1.company": "Freelance",
        "experience.job1.date": "2025 - Present",
        "experience.job1.description": "Development of web applications and corporate sites using modern technologies such as Astro, React, and Tailwind CSS.",
        "experience.job2.title": "Web Development Internship",
        "experience.job2.company": "Get brit!",
        "experience.job2.date": "2024",
        "experience.job2.description": "During my time at Get brit!, I actively participated in different areas of the company's technological development. I collaborated on the implementation of new backend features, contributing to improving the performance and efficiency of internal systems. I also performed database maintenance and management tasks, ensuring their proper functioning and optimization. I also had the opportunity to get involved in the design and development of user interfaces, providing solutions focused on user experience. Additionally, I carried out the creation from scratch of one of the company's websites, taking responsibility for both its structure and its design and operation. Finally, I participated in the general maintenance of the company's different websites, ensuring their update and correct performance.",
        "projects.title": "Projects",
        "projects.topbar.title": "Projects Esteban",
        "projects.window.title": "Projects — Esteban",
        "projects.sidebar.favorites": "Favorites",
        "projects.sidebar.projects": "Projects",
        "projects.sidebar.desktop": "Desktop",
        "projects.sidebar.documents": "Documents",
        "projects.statusbar": "1 item selected, 2.5 GB available",
        "projects.wip": "We are working on it",
        "certifications.title": "Certifications",
        "certifications.python.title": "Python from Scratch",
        "certifications.python.issuer": "Midudev",
        "certifications.python.date": "Issued: 2025",
        "certifications.scraping.title": "Introduction to Scraping with Python",
        "certifications.scraping.issuer": "Midudev",
        "certifications.scraping.date": "Issued: 2025",
        "certifications.ia.title": "Introduction to AI Development Course",
        "certifications.ia.issuer": "BIG school",
        "certifications.ia.date": "Issued: 2025",
        "certifications.dam.title": "Higher Technician in Cross-Platform Application Development",
        "certifications.dam.issuer": "CES Juan Pablo II",
        "certifications.dam.date": "Issued: 2024 - 2025",
    },
};

export function initLanguage() {
    const lang = (() => {
        if (typeof localStorage !== "undefined" && localStorage.getItem("lang")) {
            return localStorage.getItem("lang");
        }
        const userLang = navigator.language || navigator.userLanguage;
        return userLang.startsWith("es") ? "es" : "en";
    })();

    setLanguage(lang);
}

export function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === "es" ? "en" : "es";
    setLanguage(newLang);
}

function setLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);

    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'placeholder') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
}
