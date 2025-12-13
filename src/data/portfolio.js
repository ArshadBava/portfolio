
import cyenosureLogo from '../assets/cyenosure_enter_the_technoverse_logo.jpg';
import physicsmasterlogo from '../assets/physicsmasters.png';
import pondicherryLogo from '../assets/pondciherryuniversity.png';
import calicutLogo from '../assets/calicutuniversity.png';
import askpuimg from '../assets/AskPu.jpg';
import valoreimg from '../assets/valore-billingsoftware.png';
import portfolioimg from '../assets/portfolioimg.png';
import joyofcomputing from '../assets/pythonnptel.png';

export const portfolioData = {
    name: "Arshad Bava M",
    title: "Software Developer",
    education: [
        {
            year: "2024 - Present",
            degree: "Master of Computer Applications (MCA)",
            institution: "Pondicherry University",
            logo: pondicherryLogo,
            description: "Relevant Coursework: Data Structures and Algorithms, Advanced Web Technologies, Database Management Systems, Object-Oriented Programming, Software Engineering, Cloud Computing"
        },
        {
            year: "2021 - 2024",
            degree: "Bachelor of Science in Mathematics",
            institution: "Calicut University",
            logo: calicutLogo,
            description: "Relevant Coursework: Linear Algebra, Calculus, Statistics and Probability, Discrete Mathematics"
        },
    ],
    experience: [
        {
            id: 1,
            company: "Cyenosure- Enter The Technoverse",
            role: "Software Developer Intern",
            period: "Dec 2025 – Present",
            location: "Kochi, Ernakulam",
            description: "Working as a Software Developer Intern.",
            logo: cyenosureLogo,
            link: "https://cyenosure.com/",
            skills: ["Software Development"]
        },
        {
            id: 2,
            role: "Mathematics Tutor",
            company: "Physics Masters · Part-time",
            period: "Oct 2025 – Present",
            location: "Remote",
            description: `Conduct part-time Mathematics tutoring sessions for students of Classes 10, 11, and 12 (CBSE & State syllabus).`,
            logo: physicsmasterlogo,
            link: "https://physicsmasters.in/",
            skills: ["Teaching", "Mentoring", "Problem-Solving", "Communication"]
        },
        {
            id: 3,
            role: "Accountant",
            company: "MSR Paper Products & Trade Links · Full-time",
            period: "Jun 2025 – Aug 2025",
            location: "On-site, Malappuram, Kerala",
            description: `Handled full-cycle accounting operations using Tally ERP, ensuring financial accuracy, compliance, and efficiency.`,
            skills: ["Account Management", "Financial Reporting", "Tally ERP", "GST Filing"]
        }
    ],
    skills: [
        "JavaScript",
        "React",
        "Python",
        "Django",
        "C++",
        "SQL",
        "Tailwind CSS",
        "R",
    ],
    projects: [
        {
            id: 1,
            title: "Personal Portfolio",
            image: portfolioimg,
            techStack: ["React", "Tailwind CSS", "Vite"],
            description: "A modern, responsive portfolio website to showcase my skills and projects.",
            link: "https://github.com/arshadbavam",
        },
        {
            id: 2,
            title: "AskPU: An Intelligent Multilingual AI Chatbot",
            image: askpuimg,
            techStack: ["React", "Django", "PostgreSQL"],
            description: "Developed a full-stack multilingual AI chatbot (Ask PU) using Python, Django REST Framework, React.js, and PostgreSQL for 24/7 information services at Pondicherry University",
            link: "https://github.com/ArshadBava/ask-pu-chatbot",
        },
        {
            id: 3,
            title: "Valore - Billing Software",
            image: valoreimg,
            techStack: ["Html", "Css", "JavaScript"],
            description: "A Billing Software for Men Clothing businesses.",
            link: "https://github.com/ArshadBava/billing-software",
        },
    ],
    certificates: [
        {
            id: 1,
            name: "Python Django Certification",
            issuer: "Simplilearn",
            image: "https://media.licdn.com/dms/image/v2/D561FAQFJyA2zhuvGfg/feedshare-document-images_1920/B56ZsNMbXhI4Ao-/1/1765452922459?e=1766620800&v=beta&t=UXMVnPTd76kWTklyGp9zZznkvRTMHJcmciRMjjyBdhI",
            skillsGained: ["Python", "Django"],
        },
        {
            id: 2,
            name: "React Js Certification",
            issuer: "Simplilearn",
            image: "https://media.licdn.com/dms/image/v2/D561FAQHa32T-HIIIgw/feedshare-document-images_1920/B56Zr8onEkHIAo-/1/1765175097999?e=1766620800&v=beta&t=LtSgHNtPC7pSd43Bl_hdVQLkJC_tAJ7WVyIiM2ObDiQ",
            skillsGained: ["React", "JavaScript", "Tailwind CSS"],
        },
        {
            id: 3,
            name: "GenAI Powered Data Analytics Job Simulation",
            issuer: "Tata - Forage",
            image: "https://media.licdn.com/dms/image/v2/D4E1FAQGdYtmAQZybzA/feedshare-document-images_1920/B4EZp2wCK7IoAY-/1/1762928896716?e=1766620800&v=beta&t=oKlNS5UlycPgJNGjGhMeySczM4FjOHok32hHmbWX4qM",
            skillsGained: ["Data Analytics", "Data Visualization", "Data Science", "Statistics and Probability"],
        },
        {
            id: 4,
            name: "Cloud Computing",
            issuer: "NPTEL",
            image: "https://media.licdn.com/dms/image/v2/D561FAQFWeWFSI4JMXA/feedshare-document-images_1920/B56Zq1xxbrH8AU-/1/1763986324340?e=1766620800&v=beta&t=54xYuMq1KTKNQUK4aQr9FF9iQTs2XvKrbMNeZXRps-0",
            skillsGained: ["Cloud Computing", "AWS", "Azure", "Google Cloud"],
        },
        {
            id: 5,
            name: "Foundation of R Software",
            issuer: "NPTEL",
            image: "https://media.licdn.com/dms/image/v2/D4E1FAQEL_DG2fwC6fw/feedshare-document-images_1920/B4EZp2mgRPIIAU-/1/1762926401897?e=1766620800&v=beta&t=zPaIegNnTj73v-yq9F0oF3Grigv0ozGdIAHr4B9CDwo",
            skillsGained: ["R", "Data Analysis", "Data Visualization", "Data Science", "Statistics and Probability"],
        },
        {
            id: 6,
            name: "Joy of computing using Python",
            issuer: "NPTEL",
            image: joyofcomputing,
            skillsGained: ["Python", "Data Analysis", "Data Visualization"],
        },
        {
            id: 7,
            name: "Overview of Global Navigation Satellite Systems (GNSS)",
            issuer: "ISRO IIRS",
            image: "https://media.licdn.com/dms/image/v2/D5622AQEPkMzDPV8-Qw/feedshare-shrink_1280/B56ZoKQUKiKAAs-/0/1761108648491?e=1767225600&v=beta&t=BqAhvF3aqZSM74ySzcu4l0LNSzcQ4SQxadq4SciRQ6Y",
            skillsGained: ["GNSS", "Navigation", "Satellite", "Communication"],
        },
        {
            id: 8,
            name: "Intoduction to Ethical Hacking",
            issuer: "Offenso Hackers Academy",
            image: "https://media.licdn.com/dms/image/v2/C5622AQFrgCf-amDs-w/feedshare-shrink_1280/feedshare-shrink_1280/0/1677465485171?e=1767225600&v=beta&t=5k7G5ISyh8PU5_2YdL_PbasgwkM7FqzCpv9R_eUST8Q",
            skillsGained: ["Ethical Hacking", "Penetration Testing", "Network Security", "Data Analysis", "Data Visualization"],
        },
        {
            id: 9,
            name: "Prompt Engineering",
            issuer: "Dubai Future Foundation",
            image: "https://media.licdn.com/dms/image/v2/D5622AQFeD3BKGYTNdg/feedshare-shrink_2048_1536/B56Zo0yla0I0Aw-/0/1761822274537?e=1767225600&v=beta&t=R7py68EV6rrwoy2s4LPqsmhYBYUiSlXopXEz2GsV38E",
            skillsGained: ["Prompt Engineering", "AI", "Machine Learning"],
        },

    ],
};
