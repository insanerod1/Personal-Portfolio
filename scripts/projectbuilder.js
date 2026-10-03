let project = {
    id: "habit-tracker",
    title: "Habit Tracker",
    description: "Replace this with your project description.",
    image: "#",
    imageAlt: "Habit Tracker app screenshot",
    technologies: ["Flutter", "Dart"],
    githubUrl: "",
    demoUrl: "",
    featured: true
}

//contants
const projectContainer = document.getElementById("project-container");

function buildcard(project)
{
    let card = document.createElement('div');
    let img = document.createElement('img');
    let title = document.createElement('h1');
    let description = document.createElement('p');

    img.src = project.image;
    title.textContent = project.title;
    description.textContent = project.description;
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);
    return card;
}

function appendCard(container)
{
    let child = buildcard(project);
    container.appendChild(child);
}

appendCard(projectContainer);