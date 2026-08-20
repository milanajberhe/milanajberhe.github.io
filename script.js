const projectLinks = document.querySelectorAll(
    ".project-link-preview, .project-pdf"
);

projectLinks.forEach((element) => {

    element.addEventListener("click", (event) => {
        event.stopPropagation();
    });

});
