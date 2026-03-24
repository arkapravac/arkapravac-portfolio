const portfolioData = {
    hero: {
        roles: ["AI & ML Engineer", "Computer Vision Specialist", "Python Developer", "Independent Researcher"],
        description: "Building intelligent systems using Computer Vision, Deep Learning, and Predictive Analytics. Currently researching Adaptive Thermal Management Algorithms."
    },
    skills: [
        { category: "Languages", items: ["Python", "Java"] },
        { category: "Frameworks", items: ["TensorFlow", "PyTorch", "MediaPipe", "FastAPI", "DinoV2", "YOLOv8n"] },
        { category: "Tools", items: ["OpenCV", "OpenCV-headless", "Scikit-Learn", "NumPy", "Pandas", "Git", "PyAutoGUI", "UMAP", "Matplotlib"] },
        { category: "Soft Skills", items: ["Problem Solving", "Leadership", "Project Management", "Critical Thinking"] }
    ],
    experience: [
        {
            role: "Freelance Engineer",
            company: "Self-Employed",
            date: "Since March 2025",
            desc: "I am a Freelance Machine Learning & Computer Vision Engineer specializing in end-to-end model development and data engineering. I partner with clients to build custom Computer Vision systems and predictive models, delivering fully optimized, royalty-free assets. My workflow is designed for seamless integration: I develop the solution, train the datasets, and provide a complete transfer of ownership (including all source code) upon project completion.",
            tech: ["As mentioned in the skill set."]
        }
    ],
    projects: [
        {
            title: "Neuro-Agentix",
            date: "Mar 2025 - Apr 2025",
            desc: "Hand-Gesture Based Windows Management System. Real-time vision-based interface controlling cursor using finger movements.",
            tech: ["Python", "TensorFlow", "MediaPipe", "OpenCV", "PyAutoGUI"],
            link: "https://github.com/arkapravac"
        },
        {
            title: "AEDPA",
            date: "Jun 2025 - Aug 2025",
            desc: "Asteroid Early Detection and Preparedness Assistant. Tracks NEOs using NASA's API with threat assessment and emergency protocols.",
            tech: ["Python", "CustomTkinter", "NASA API", "JSON"],
            link: "https://github.com/arkapravac"
        },
        {
            title: "VigilEye Proctor",
            date: "Aug 2025 - Sep 2025",
            desc: "Exam Proctored Camera using YOLOv8n. Detects anomalies like mobile phones or multiple faces and logs violations.",
            tech: ["Python", "OpenCV", "Ultralytics YOLO", "pyttsx3"],
            link: "https://github.com/arkapravac"
        },
        {
            title: "A.A.T.M.A Algorithm",
            date: "Apr 2025 - Cont.",
            desc: "CPU-Cooling Agent Simulator. Proprietary algorithm using Linear Regression to forecast thermal trends for proactive cooling.",
            tech: ["Python", "Scikit-Learn", "WMI", "Matplotlib"],
            link: "https://github.com/arkapravac"
        },
        {
            title: "Gold & Stock Prediction",
            date: "Sept 2025 - Dec 2025",
            desc: "Probabilistic forecasting pipeline using Bayesian analysis (PyMC) and LSTM. Includes walk-forward backtesting.",
            tech: ["PyMC", "XGBoost", "TensorFlow", "Prophet"],
            link: "https://github.com/arkapravac"
        },
        {
            title: "Trackelectro",
            date: "Feb 2025",
            desc: "Desktop-based CV application to track electronic devices using multi-camera support and timestamp logging.",
            tech: ["Python", "OpenCV", "Threading"],
            link: "https://github.com/arkapravac"
        }
    ],
    education: [
        {
            degree: "B.Tech - Computer Science",
            school: "Lovely Professional University",
            location: "Punjab, India",
            date: "Since Aug 2023"
        },
        {
            degree: "High School (10+2)",
            school: "St. Patrick's H.S School",
            location: "Asansol, West Bengal",
            date: "2021 - 2023"
        }
    ],
    achievements: [
        {
            title: "Volunteer Mentor",
            desc: "Educated orphan children at Andal Parivar Orphanage on computer fundamentals, digital safety, and AI concepts."
        },
        {
            title: "Certifications",
            desc: "Computer Communications Specialization, Prompt Engineering, Scientific Computing in Python."
        }
    ],
    contact: {
        email: "arkapravac366@gmail.com",
        github: "https://github.com/arkapravac",
        linkedin: "https://www.linkedin.com/in/arkaprava-chakraborty-8",
        phone: "+91-8250163783"
    }
};

const elements = {
    typewriter: document.getElementById('typewriter'),
    heroDesc: document.getElementById('hero-desc'),
    skills: document.getElementById('skills-container'),
    experience: document.getElementById('experience-container'),
    projects: document.getElementById('projects-container'),
    education: document.getElementById('education-container'),
    achievements: document.getElementById('achievements-container')
};

function renderTypewriter() {
    const roles = portfolioData.hero.roles;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentRole = roles[roleIndex];
        if (isDeleting) {
            elements.typewriter.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            elements.typewriter.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        elements.typewriter.classList.add('typewriter-cursor');

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    type();
    elements.heroDesc.textContent = portfolioData.hero.description;
}

function renderSkills() {
    elements.skills.innerHTML = portfolioData.skills.map(skill => `
        <div class="bg-card p-6 rounded-lg border border-gray-800 hover:border-primary transition fade-in-up">
            <h3 class="text-xl font-bold text-primary mb-4">${skill.category}</h3>
            <div class="flex flex-wrap gap-2">
                ${skill.items.map(item => `<span class="px-3 py-1 bg-gray-800 text-sm rounded text-gray-300">${item}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderExperience() {
    elements.experience.innerHTML = portfolioData.experience.map(exp => `
        <div class="border-l-2 border-primary pl-6 relative fade-in-up">
            <div class="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full"></div>
            <h3 class="text-xl font-bold text-white">${exp.role}</h3>
            <div class="text-primary font-mono text-sm mb-2">${exp.company} | ${exp.date}</div>
            <p class="text-gray-400 mb-4">${exp.desc}</p>
            <div class="flex flex-wrap gap-2">
                ${exp.tech.map(t => `<span class="text-xs text-gray-500">#${t}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    elements.projects.innerHTML = portfolioData.projects.map(project => `
        <div class="bg-card p-6 rounded-lg border border-gray-800 project-card fade-in-up">
            <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-bold text-white">${project.title}</h3>
                <span class="text-xs font-mono text-primary">${project.date}</span>
            </div>
            <p class="text-gray-400 text-sm mb-4 h-20 overflow-hidden">${project.desc}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${project.tech.map(t => `<span class="px-2 py-1 bg-gray-800 text-xs rounded text-primary">${t}</span>`).join('')}
            </div>
            <a href="${project.link}" class="text-sm text-secondary hover:text-white transition">View Project <i class="fas fa-arrow-right ml-1"></i></a>
        </div>
    `).join('');
}

function renderEducation() {
    elements.education.innerHTML = portfolioData.education.map(edu => `
        <div class="bg-card p-6 rounded-lg border border-gray-800 fade-in-up">
            <h3 class="text-lg font-bold text-white">${edu.degree}</h3>
            <div class="text-primary">${edu.school}</div>
            <div class="text-gray-500 text-sm flex justify-between mt-2">
                <span>${edu.location}</span>
                <span>${edu.date}</span>
            </div>
        </div>
    `).join('');
}

function renderAchievements() {
    elements.achievements.innerHTML = portfolioData.achievements.map(ach => `
        <div class="bg-card p-6 rounded-lg border border-gray-800 fade-in-up">
            <h3 class="text-lg font-bold text-secondary mb-2"><i class="fas fa-trophy mr-2"></i>${ach.title}</h3>
            <p class="text-gray-400 text-sm">${ach.desc}</p>
        </div>
    `).join('');
}

function initObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
}

function initCanvas() {
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2;
            this.color = Math.random() > 0.5 ? '#00f2ff' : '#7000ff';
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < 100; i++) particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach((p, index) => {
            p.update();
            p.draw();
            for (let j = index; j < particles.length; j++) {
                const dx = p.x - particles[j].x;
                const dy = p.y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(100, 100, 100, ${1 - dist / 100})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => { resize(); initParticles(); });
    resize();
    initParticles();
    animate();
}

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
}

function initContactButtons() {
    const emailBtn = document.getElementById('email-btn');
    if (emailBtn) {
        emailBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = portfolioData.contact.email;
            const subject = encodeURIComponent('Portfolio Inquiry');
            const body = encodeURIComponent('Hello Arkaprava,\n\nI came across your portfolio and would like to discuss...');
            window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        });
    }

    const callBtnContainer = document.getElementById('call-btn-container');
    if (callBtnContainer) {
        if (isMobileDevice()) {
            callBtnContainer.style.display = 'block';
            const callBtn = document.getElementById('call-btn');
            if (callBtn) {
                callBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const phone = portfolioData.contact.phone.replace(/[^0-9+]/g, '');
                    window.location.href = `tel:${phone}`;
                });
            }
        } else {
            callBtnContainer.style.display = 'none';
        }
    }
}

function downloadResearch() {
    const files = [
        { url: 'assets/research.pdf.pdf', name: 'research.pdf.pdf' },
        { url: 'assets/research.pdf.pdf', name: 'research2.pdf.pdf' }
    ];

    files.forEach((file, index) => {
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = file.url;
            link.download = file.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, index * 300);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderTypewriter();
    renderSkills();
    renderExperience();
    renderProjects();
    renderEducation();
    renderAchievements();
    initObserver();
    initCanvas();
    initContactButtons();
});
