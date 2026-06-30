const originalTitle = document.title;
const favicon = document.getElementById("favicon");

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location = link.href;
        }, 500);
    });
});