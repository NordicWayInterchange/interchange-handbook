const originalTitle = document.title;
const favicon = document.getElementById("favicon");

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function (e) {
        if (this.hostname !== window.location.hostname) return;

        e.preventDefault();

        document.body.classList.add("page-exit");

        setTimeout(() => {
            window.location.href = this.href;
        }, 300);
    });
});

window.addEventListener("pageshow", () => {
    document.body.classList.remove("page-exit");
});