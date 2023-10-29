const btnEn = document.getElementById("btnEn");
const btnRo = document.getElementById("btnRo");
const pdfEmbed = document.querySelector("iframe"); // Changed to select the iframe
const pdfLink = document.getElementById("pdfLink");

if (btnEn && btnRo && pdfEmbed && pdfLink) {
    btnEn.addEventListener("click", function() {
        pdfEmbed.src = "Savin_Razvan_EN.pdf"; // Changed to update the src of the iframe
        pdfLink.href = "Savin_Razvan_EN.pdf";
    });

    btnRo.addEventListener("click", function() {
        pdfEmbed.src = "Savin_Razvan_RO.pdf"; // Changed to update the src of the iframe
        pdfLink.href = "Savin_Razvan_RO.pdf";
    });

    window.onload = function() {
        btnRo.click();
    };
}
