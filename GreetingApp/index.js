function greeting() {
    let name = document.getElementById("get").value;
    let message = document.getElementById("message");

    if (name.trim() === "") {
        message.textContent = "Please enter your name!";
        message.style.color = "red";
    } else {
        message.textContent = `Hello, ${name}!`;
        message.style.color = "green";
    }
}