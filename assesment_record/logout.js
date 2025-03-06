function logout() {
    let confirmLogout = confirm("Do you want to logout?");
    
    if (confirmLogout) {
        // User clicked "Yes" - Logout and redirect to login page
        window.location.href = "/index.html"; // Change this to your actual logout page
    } else {
        // User clicked "No" - Redirect to another page
        window.location.href = "/assesment_record/assessRecord.html"; // Change this to the page you want
    }
};

function toggleDrawer() {
    const drawer = document.getElementById("drawer");
    drawer.classList.toggle("open"); // Use class for toggling visibility
}

// Close sidebar when clicking outside
document.addEventListener("click", function (event) {
    let drawer = document.getElementById("drawer");
    let drawerIcon = document.querySelector(".drawer-icon");

    if (!drawer || !drawerIcon) return;

    // If sidebar is open and click is outside both sidebar and icon, close it
    if (drawer.classList.contains("open") && !drawer.contains(event.target) && !drawerIcon.contains(event.target)) {
        drawer.classList.remove("open");
    }
});

// Close sidebar when clicking an item inside
document.querySelectorAll("#drawer .items").forEach(function (item) {
    item.addEventListener("click", function () {
        let drawer = document.getElementById("drawer");
        drawer.classList.remove("open");
    });
});
