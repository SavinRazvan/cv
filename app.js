const btnEn = document.getElementById("btnEn");
const btnRo = document.getElementById("btnRo");
const pdfEmbed = document.getElementById("pdfEmbed");
const pdfLink = document.getElementById("pdfLink");

btnEn.addEventListener("click", function() {
    pdfEmbed.data = "Savin_Razvan_EN.pdf";
    pdfLink.href = "Savin_Razvan_EN.pdf";
});

btnRo.addEventListener("click", function() {
    pdfEmbed.data = "Savin_Razvan_RO.pdf";
    pdfLink.href = "Savin_Razvan_RO.pdf";
});

// Trigger the "Savin Razvan [RO].pdf" button click on page load
window.onload = function() {
    btnRo.click();
};