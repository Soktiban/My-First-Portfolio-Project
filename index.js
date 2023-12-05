const projects = [
    { name: 'Project 1', category: 'HTML' },
    { name: 'Project 2', category: 'CSS' },
    { name: 'Project 3', category: 'JavaScript' },
  ];
  function displayProjects(category = '') {
    const projectsSection = document.querySelector('.projects');
    projectsSection.innerHTML = '';
  
    const filteredProjects = category ?
      projects.filter(project => project.category === category) :
      projects;
  
    filteredProjects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.classList.add('project');
      projectElement.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.category}</p>
      `;
      projectsSection.appendChild(projectElement);
    });
  }
  displayProjects();
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      displayProjects(category);
    });
  });
  