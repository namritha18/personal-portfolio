
const contactForm = document.getElementById("contactForm");

// Get projects from the backend
async function loadProjects() {
    try {
        const response = await fetch(" https://personal-portfolio-cgts.onrender.com/api/projects");

        if (!response.ok) {
            throw new Error("Failed to load projects");
        }

        const projects = await response.json();

        const container = document.getElementById("projects-container");

        container.innerHTML = "";

        projects.forEach((project) => {

            const isPPW = Number(project.id) === 1;

            let extraContent = "";

            if (isPPW) {
                const techList = project.technologies
                    ? project.technologies.split(",")
                    : [];

                extraContent = `
                    <div class="tech-tags">
                        ${techList.map(tech =>
                            `<span>${tech.trim()}</span>`
                        ).join("")}
                    </div>
                `;
            } else {
                extraContent = `
                    <span class="project-status">Ongoing</span>
                `;
            }

            container.innerHTML += `
                <div class="project">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    ${extraContent}
                </div>
            `;
        });

    } catch (error) {
        console.error("Error loading projects:", error);

        const container = document.getElementById("projects-container");

        container.innerHTML = "<p>Unable to load projects. Please try again later.</p>";
    }
}

// Load projects when the page opens
loadProjects();
