const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var cardElement = document.getElementsByClassName("card");
    for (let i = 0; i < cardElement.length; i += 1) {
        cardElement.item(i).classList.toggle("dark-card");
    }
    var infoElement = document.getElementsByClassName("info");
    for (let i = 0; i < infoElement.length; i += 1) {
        infoElement.item(i).classList.toggle("info-dark");
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);
