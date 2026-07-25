const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const selected = button.dataset.filter;
    projects.forEach((project) => {
      const categories = project.dataset.category.split(" ");
      project.classList.toggle(
        "hidden",
        selected !== "all" && !categories.includes(selected),
      );
    });
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
