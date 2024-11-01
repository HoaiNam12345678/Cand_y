function showMessage() {
    const message = document.getElementById("hiddenMessage");
    if (message.classList.contains("hidden")) {
        message.classList.remove("hidden");
    } else {
        message.classList.add("hidden");
    }
}
