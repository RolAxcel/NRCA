const saveButton = document.getElementById('saveButton');
const viewDataButton = document.getElementById('viewDataButton');
const retrieveDeletedButton = document.getElementById('retrieveDeletedButton');
const modal = document.getElementById('myModal'); // View Data Modal
const retrieveModal = document.getElementById('retrieveModal'); // Retrieve Deleted Data Modal
const closeModalButtons = document.getElementsByClassName('close');
const savedDataDiv = document.getElementById('savedData');
const deletedDataDiv = document.getElementById('deletedData');

let deletedData = JSON.parse(localStorage.getItem('deletedData')) || [];

// Save Data to localStorage
saveButton.addEventListener('click', function () {
    // Capture the values from the h4 elements
    const data = {
        taxCom1: document.getElementById('tax-com1').textContent,
        taxCom2: document.getElementById('tax-com2').textContent,
        taxCom3: document.getElementById('tax-com3').textContent,
        taxFor1: document.getElementById('tax-for1').textContent,
        taxFor2: document.getElementById('tax-for2').textContent,
        taxFor3: document.getElementById('tax-for3').textContent,
        taxFor4: document.getElementById('tax-for4').textContent,
        taxFor5: document.getElementById('tax-for5').textContent,
        taxFor6: document.getElementById('tax-for6').textContent,
        equals: document.getElementById('equals').textContent,
        amnt: document.getElementById('amnt').textContent,
        businessTax: document.getElementById('businessTax').textContent,
        regulatoryFees: document.getElementById('regulatoryFees').textContent,
        assessment: document.getElementById('assessment').textContent,
        uwu: document.getElementById('uwu').textContent,

        // Capture the values from input fields
        inputs: Array.from(document.querySelectorAll('.input1')).map(input => input.value),
        dateValue: document.querySelector('.input[type="date"]').value,
        textareaValue: document.getElementById('notes').value || ''
    };

    console.log('notes saved successfully');

    // Check if required fields are filled
    if (!data.inputs.every(value => value.trim() !== '') || !data.dateValue.trim()) {
        alert("Please fill in all the required fields.");
        return;
    }

    // Retrieve existing data from localStorage
    let savedData = JSON.parse(localStorage.getItem('savedData')) || [];

    // Add the new data to the beginning of the array
    savedData.unshift(data);

    // Save the updated data array back to localStorage
    localStorage.setItem('savedData', JSON.stringify(savedData));

    // Show confirmation
    alert("Data saved successfully!");
});

// Load Data from localStorage to Form
document.querySelectorAll('.render-button').forEach(button => {
    button.addEventListener('click', function () {
        const index = button.getAttribute('data-index');
        renderDataToForm(index);
    });
});

function renderDataToForm(index) {
    // Get saved data from localStorage
    const savedData = JSON.parse(localStorage.getItem('savedData')) || [];
    
    if (!savedData[index]) {
        alert("Entry not found!");
        return;
    }

    const entry = savedData[index];

    // Populate h4 elements
    document.getElementById('tax-com1').textContent = entry.taxCom1;
    document.getElementById('tax-com2').textContent = entry.taxCom2;
    document.getElementById('tax-com3').textContent = entry.taxCom3;
    document.getElementById('tax-for1').textContent = entry.taxFor1;
    document.getElementById('tax-for2').textContent = entry.taxFor2;
    document.getElementById('tax-for3').textContent = entry.taxFor3;
    document.getElementById('tax-for4').textContent = entry.taxFor4;
    document.getElementById('tax-for5').textContent = entry.taxFor5;
    document.getElementById('tax-for6').textContent = entry.taxFor6;
    document.getElementById('equals').textContent = entry.equals;
    document.getElementById('amnt').textContent = entry.amnt;
    document.getElementById('businessTax').textContent = entry.businessTax;
    document.getElementById('regulatoryFees').textContent = entry.regulatoryFees;
    document.getElementById('assessment').textContent = entry.assessment;
    document.getElementById('uwu').textContent = entry.uwu;

    // Populate input fields
    const inputFields = document.querySelectorAll('.input1');
    entry.inputs.forEach((value, i) => {
        if (inputFields[i]) {
            inputFields[i].value = value;
        }
    });

    // Populate date field
    const dateInput = document.querySelector('.input[type="date"]');
    if (dateInput) {
        dateInput.value = entry.dateValue;
    }

    // Populate textarea field
    const textareaElement = document.getElementById('notes');
    if (textareaElement) {
        textareaElement.value = entry.textareaValue;
    }

    // Close the modal (if applicable)
    if (typeof modal !== "undefined") {
        modal.style.display = "none";
    }

    // Optional: Notify user
    alert("Data has been loaded to the form");
}

viewDataButton.addEventListener('click', function () {
    // Retrieve the existing data from localStorage
    let savedData = JSON.parse(localStorage.getItem('savedData')) || [];
    
    // Display the values inside the modal as separate divs
    savedDataDiv.innerHTML = savedData.map((entry, index) => `
        <div class="entry shadow">
            <h4>${entry.inputs[0]}</h4>
            <div class="date-names">
                <div class="name-etc">
                    ${entry.inputs.map((input, i) => {
                        const label = ['Trade Name', 'Address', 'General Manager', 'Address', 'Contract Amount Due to Contractor'][i];
                        return `<p>${label}: ${input}</p>`;
                    }).join('')}
                </div>
                <div class="date">
                    ${entry.dateValue}
                </div>
            </div>
            <div class="other-fees">
                <p>Tax Amount: ${entry.amnt}</p>
                <p>Business Tax: ${entry.businessTax}</p>
                <p>Regulatory Fees: ${entry.regulatoryFees}</p>
                <p>Assessment: ${entry.assessment}</p>
                <p>Mayor's Permit Fee: ${entry.uwu}</p>
            </div>
            <div class="for-com">
                <div class="first-col">
                    <p>Data: ${entry.taxCom1}</p>
                    <p>Minus: ${entry.taxCom2}</p>
                    <p>Equal: ${entry.taxCom3}</p>
                </div>
                <div class="second-col">
                    <p>2,000,000 above: ${entry.taxFor1}</p>
                    <p>75% of 1% excess 2,000,000: ${entry.taxFor2}</p>
                    <p>Total Tax Assessment: ${entry.taxFor3}</p>
                    <p>Multiplied by the Tax: ${entry.taxFor4}</p>
                    <p>Business Tax Due: ${entry.taxFor5}</p>
                    <p>Add Regulatory fee: ${entry.taxFor6}</p>
                    <p>Total Tax & regulatory Fee: ${entry.equals}</p>
                </div>
            </div>
            ${entry.textareaValue ? `
            <div class="notes-section">
                <h5>Contract Amount Due to Contractor:</h5>
                <p>${entry.textareaValue}</p>
            </div>` : ''}
            <div class="button-container">
                <button class="render-button" data-index="${index}">Render Data</button>
                <button class="delete-button" data-index="${index}">Delete</button>
            </div>
        </div>
    `).join('');

    // Add event listeners for delete buttons
    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', function () {
            const index = button.getAttribute('data-index');
            const entry = savedData.splice(index, 1)[0];
            let deletedData = JSON.parse(localStorage.getItem('deletedData')) || [];
            deletedData.unshift(entry);  // Add deleted entry to the beginning

            localStorage.setItem('savedData', JSON.stringify(savedData));
            localStorage.setItem('deletedData', JSON.stringify(deletedData));

            viewDataButton.click();  // Refresh the view modal
        });
    });

    // Show the modal for saved data
    modal.style.display = "block";
});

// Retrieve Deleted Data Button
retrieveDeletedButton.addEventListener('click', function () {
    // Retrieve the existing deleted data from localStorage
    deletedData = JSON.parse(localStorage.getItem('deletedData')) || [];

    // Display the deleted data inside the modal as separate divs
    deletedDataDiv.innerHTML = deletedData.map((entry, index) => `
        <div class="entry shadow">
            <h4>${entry.inputs[0]}</h4>
            <div class="date-names">
                <div class="name-etc">
                    ${entry.inputs.map((input, i) => {
                        const label = ['Trade Name', 'Address', 'General Manager', 'Address'][i]; // Updated labels
                        return `<p>${label}: ${input}</p>`;
                    }).join('')}
                </div>
                <div class="date">
                    ${entry.dateValue}
                </div>
            </div>
            <div class="other-fees">
                <p>Tax Amount: ${entry.amnt}</p>
                <p>Business Tax: ${entry.businessTax}</p>
                <p>Regulatory Fees: ${entry.regulatoryFees}</p>
                <p>Assessment: ${entry.assessment}</p>
                <p>Mayor's Permit Fee: ${entry.uwu}</p>
            </div>
            <div class="for-com">
                <div class="first-col">
                    <p>Data: ${entry.taxCom1}</p>
                    <p>Minus: ${entry.taxCom2}</p>
                    <p>Equal: ${entry.taxCom3}</p>
                </div>
                <div class="second-col">
                    <p>2,000,000 above: ${entry.taxFor1}</p>
                    <p>75% of 1% excess 2,000,000: ${entry.taxFor2}</p>
                    <p>Total Tax Assessment: ${entry.taxFor3}</p>
                    <p>Multiplied by the Tax: ${entry.taxFor4}</p>
                    <p>Business Tax Due: ${entry.taxFor5}</p>
                    <p>Add Regulatory fee: ${entry.taxFor6}</p>
                    <p>Total Tax & regulatory Fee: ${entry.equals}</p>
                </div>
            </div>
            ${entry.textareaValue ? `
                <div class="notes-section">
                    <h5>Contract Amount Due to Contractor:</h5>
                    <p>${entry.textareaValue}</p>
                </div>` : ''}
            <button class="retrieve-button" data-index="${index}">Retrieve</button>
        </div>
    `).join('');

    // Add event listeners for retrieve buttons
    document.querySelectorAll('.retrieve-button').forEach(button => {
        button.addEventListener('click', function () {
            const index = button.getAttribute('data-index');
            const entry = deletedData.splice(index, 1)[0];
            let savedData = JSON.parse(localStorage.getItem('savedData')) || [];
            savedData.unshift(entry);  // Add retrieved entry to the beginning

            localStorage.setItem('savedData', JSON.stringify(savedData));
            localStorage.setItem('deletedData', JSON.stringify(deletedData));

            retrieveDeletedButton.click();  // Refresh the retrieve modal
        });
    });

    // Show the modal for deleted data
    retrieveModal.style.display = "block";
});

// Close the modals when the close button is clicked
Array.from(closeModalButtons).forEach(button => {
    button.addEventListener('click', function () {
        modal.style.display = "none";
        retrieveModal.style.display = "none";
    });
});

// Close the modal when clicking outside of it
window.addEventListener('click', function (event) {
    if (event.target === modal || event.target === retrieveModal) {
        modal.style.display = "none";
        retrieveModal.style.display = "none";
    }
});

function resetData() {
    localStorage.removeItem(savedData);
    loadData();
    alert = ("humana");
}

