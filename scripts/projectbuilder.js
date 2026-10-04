//contants
const projectContainer = document.getElementById("project-container");

function buildcard(project)
{
    let card = document.createElement('div');
    let img = document.createElement('img');
    let content = document.createElement('div')
    let title = document.createElement('h1');
    let description = document.createElement('p');
    let badges = document.createElement("div");

    card.className = "d-flex flex-column flex-md-row align-items-center gap-4" + " border border-3 border-dark rounded-4 p-4 mb-4";

    img.src = project.image;
    img.alt = project.imageAlt;
    img.width = 120;
    img.height = 120;
    img.className = "rounded-4 flex-shrink-0";
    img.style.objectFit = "cover";

    content.className = "flex-grow-1 ms-4";
    title.textContent = project.title;
    title.className = "title-text";

    description.textContent = project.description;
    description.className = "mb-3 intro-text";

    badges.className = "d-flex flex-wrap gap-2";

    for (let i = 0; i < project.technologies.length; i++)
    {
        const badge = document.createElement("span");

        badge.textContent = project.technologies[i];
        badge.className = "badge text-bg-secondary p-2";

        badges.appendChild(badge);
    }
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(badges);
    
    card.appendChild(img);
    
    card.appendChild(content);

    const button = document.createElement("button");

    button.type = "button";
    button.textContent = "➜";
    button.className = "btn btn-light fs-2 ms-auto flex-shrink-0";
    button.setAttribute("aria-label", `View details for ${project.title}`);

    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#projectModal");

    button.addEventListener("click", function () {
        document.getElementById("projectModalTitle").textContent = project.title;

        document.getElementById("projectModalDescription").textContent =
            project.details || project.description;
    });

    card.appendChild(button);


    
    return card;
}

function appendCard(container, project)
{
    let child = buildcard(project);
    container.appendChild(child);
}

async function loadProjects() {
    try {
        const response = await fetch("../objects/projects.json");

        if (!response.ok) {
            throw new Error("Could not load projects");
        }

        const projects = await response.json();

        projectContainer.replaceChildren();

        for(let i = 0; i < projects.length; i++)
        {
            appendCard(projectContainer, projects[i]);
        }

        if (projects.length === 0)
        {
            projectContainer.textContent = "No projects yet.";
        }
    } catch(error) {
        console.error(error);
        projectContainer.textContent =
            "Projects could not be loaded. Please try again later.";
    }
}

loadProjects();