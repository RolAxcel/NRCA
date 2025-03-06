document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("notes");

    textarea.addEventListener("input", function () {
        this.style.height = "1"; // Reset height
        this.style.height = this.scrollHeight + "px"; // Set new height based on content
    });
});
