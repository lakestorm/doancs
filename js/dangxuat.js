var popupOverlay = document.getElementById("popupOverlay");
var confirmBtn = document.getElementById("confirmBtn");
var cancelBtn = document.getElementById("cancelBtn");
var popupLink = document.getElementById("popupLink");

// Function to show the popup
function showPopup(event) {
    event.preventDefault();
    popupOverlay.style.display = "flex";
}

// Function to close the popup
function closePopup() {
    popupOverlay.style.display = "none";
}

// Event listener for the popup link
popupLink.addEventListener("click", showPopup);

// Event listener for the confirm button
confirmBtn.addEventListener("click", function() {
    // Perform actions when confirmed, e.g., navigate to another page
    window.location.href = "home.html";
});

// Event listener for the cancel button
cancelBtn.addEventListener("click", closePopup);