document.addEventListener("DOMContentLoaded", function () {
    // Select the button inside the "2 MILLION ABOVE" box
    const aboveButton = document.querySelector(".box1 .icon-btn");

    // Redirect when the button is clicked
    aboveButton.addEventListener("click", function () {
        window.location.href = '/below_assessment_record/below_assess_record.html'; // Change this to your target page
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Select the button inside the "2 MILLION ABOVE" box
    const aboveButton = document.querySelector(".box2 .icon-btn");

    // Redirect when the button is clicked
    aboveButton.addEventListener("click", function () {
        window.location.href = '/assesment_record/assessRecord.html'; // Change this to your target page
    });
});

// Add this after you've created the HTML for all entries
document.querySelectorAll('.render-button').forEach(button => {
    button.addEventListener('click', function() {
        const index = button.getAttribute('data-index');
        renderDataToForm(index);
    });
});
