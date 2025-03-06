// Get modal elements
const modal = document.getElementById("myModal");
const modalBody = document.getElementById("modal-body");
const closeModal = document.querySelector(".close");
const viewDataBtn = document.getElementById("addedData");

// Function to Populate Modal with Firestore Data
async function populateModal() {
    modalBody.innerHTML = "<p>Loading data...</p>"; // Show loading message

    const entries = await getEntries(); // Fetch data from Firestore

    if (entries.length === 0) {
        modalBody.innerHTML = "<p>No data available.</p>";
        return;
    }

    // Create a list of entries
    modalBody.innerHTML = entries.map(entry => `
        <div class="entry">
            <p><strong>Trade Name:</strong> ${entry.tradeName}</p>
            <p><strong>Address:</strong> ${entry.address}</p>
            <p><strong>General Manager:</strong> ${entry.genMngr}</p>
            <p><strong>Date:</strong> ${entry.date}</p>
            <hr>
        </div>
    `).join(""); // Convert array to HTML string
}

// Event: Open Modal and Load Data
viewDataBtn.addEventListener("click", async () => {
    await populateModal(); // Load data when button is clicked
    modal.style.display = "block"; // Show modal
});

// Event: Close Modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal if user clicks outside of it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Auto-refresh modal when new data is added
async function saveEntryAndRefresh() {
    await saveEntry(); // Save data to Firestore
    await populateModal(); // Refresh modal data
}

// Update event listener for "Save" button
document.getElementById('saveButton').addEventListener('click', async () => {
    await saveEntryAndRefresh();
});
