// Get references to the English and Romanian buttons for both desktop and mobile modes
const btnEn = document.getElementById("btnEn");
const btnRo = document.getElementById("btnRo");
const btnEnMobile = document.getElementById("btnEnMobile");
const btnRoMobile = document.getElementById("btnRoMobile");

// Get references to the mobile menu button and its content
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenuContent = document.getElementById("mobileMenuContent");

// Function to load a PDF file
function loadPdf(pdfFileName) {
    // Construct the path to the PDF file
    const pdfPath = `assets/pdf/${pdfFileName}`;
    
    // Set the src attribute of the iframe to load the PDF
    const pdfEmbed = document.querySelector("iframe");
    pdfEmbed.src = pdfPath;
}

// Check if all required elements exist in the DOM
if (btnEn && btnRo && btnEnMobile && btnRoMobile) {
    // Event listener for the English button click (Desktop)
    btnEn.addEventListener("click", function() {
        console.log("English Button Clicked (Desktop)");
        // Load the English PDF file
        loadPdf("Savin_Razvan_EN.pdf");
    });

    // Event listener for the Romanian button click (Desktop)
    btnRo.addEventListener("click", function() {
        console.log("Romanian Button Clicked (Desktop)");
        // Load the Romanian PDF file
        loadPdf("Savin_Razvan_RO.pdf");
    });

    // Event listener for the English button click (Mobile)
    btnEnMobile.addEventListener("click", function() {
        console.log("English Button Clicked (Mobile)");
        // Load the English PDF file
        loadPdf("Savin_Razvan_EN.pdf");
        // Close the mobile menu
        mobileMenuContent.style.display = "none";
    });

    // Event listener for the Romanian button click (Mobile)
    btnRoMobile.addEventListener("click", function() {
        console.log("Romanian Button Clicked (Mobile)");
        // Load the Romanian PDF file
        loadPdf("Savin_Razvan_RO.pdf");
        // Close the mobile menu
        mobileMenuContent.style.display = "none";
    });

    // Event listener for the mobile menu button click
    mobileMenuBtn.addEventListener("click", function() {
        console.log("Mobile Menu Button Clicked");
        // Toggle the display of the mobile menu content when the menu button is clicked
        const displayStyle = mobileMenuContent.style.display;
        if (displayStyle === "none" || displayStyle === "") {
            mobileMenuContent.style.display = "block";
        } else {
            mobileMenuContent.style.display = "none";
        }
    });

    // Trigger the "Savin Razvan [RO].pdf" button click on page load (Desktop)
    window.onload = function() {
        btnRo.click();
    };
} else {
    // Display an error message if one or more elements are not found
    console.log("One or more elements not found.");
}
