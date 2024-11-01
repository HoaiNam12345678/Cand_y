function showMessage() {
    const message = document.getElementById("hiddenMessage");
    if (message.classList.contains("hidden")) {
        message.classList.remove("hidden");
    } else {
        message.classList.add("hidden");
    }
    moveButton(); // Appelle la fonction pour déplacer le bouton
}

function moveButton() {
    const button = document.querySelector("button");
    const container = document.querySelector(".container");

    // Obtenir les dimensions de la zone pour éviter que le bouton sorte des limites
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Calculer une nouvelle position aléatoire
    const newLeft = Math.random() * (containerWidth - button.offsetWidth);
    const newTop = Math.random() * (containerHeight - button.offsetHeight);

    // Appliquer la nouvelle position
    button.style.position = "absolute";
    button.style.left = `${newLeft}px`;
    button.style.top = `${newTop}px`;
}
