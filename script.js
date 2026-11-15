const contactForm = document.getElementById("contactForm");

// Get projects from the backend
async function loadProjects() {
    const response = await fetch(" https://personal-portfolio-cgts.onrender.com/api/projects");
    const projects = await response.json();

    const container = document.getElementById("projects-container");

    container.innerHTML = "";

    projects.forEach((project) => {
        container.innerHTML += `
            <div class="project">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <span>${project.status}</span>
            </div>
        `;
    });
}

// Load projects when the page opens
loadProjects();
