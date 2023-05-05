const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('bxs-sun');
    document.body.classList.toggle('dark-mode');
})

function discordPopUpFunction() {
    var popUp = document.getElementById("discord-popup");
    popUp.classList.toggle("show");
}