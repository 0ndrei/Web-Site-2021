/* Buton credit */
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

/* Buton go-to-shop */
function goshop() {
    location.replace("Products.html");
}
/* Buton purchase */
function purchase() {
    alert("Your data has been entered correctly, the order has been given. Congratulations!!!");
}