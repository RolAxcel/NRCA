document.addEventListener("DOMContentLoaded", function () {
    const searchSavedDataInput = document.getElementById('searchSavedData');
    const searchDeletedDataInput = document.getElementById('searchDeletedData');
    const savedDataDiv = document.getElementById('savedData');
    const deletedDataDiv = document.getElementById('deletedData');

    // Function to filter saved data based on search
    function filterSavedData() {
        const searchTerm = searchSavedDataInput.value.toLowerCase();
        let savedData = JSON.parse(localStorage.getItem('savedData')) || [];
        const filteredSavedData = savedData.filter(entry => {
            return entry.inputs[0].toLowerCase().includes(searchTerm);
        });
        displaySavedData(filteredSavedData);
    }

    // Function to filter deleted data based on search
    function filterDeletedData() {
        const searchTerm = searchDeletedDataInput.value.toLowerCase();
        let deletedData = JSON.parse(localStorage.getItem('deletedData')) || [];
        const filteredDeletedData = deletedData.filter(entry => {
            return entry.inputs[0].toLowerCase().includes(searchTerm);
        });
        displayDeletedData(filteredDeletedData);
    }

    // Function to display saved data
    function displaySavedData(data) {
        savedDataDiv.innerHTML = data.map((entry, index) => ` 
             <div class="entry shadow">
            <h4>${entry.inputs[0]}</h4>
            <div class="date-names">
                <div class="name-etc">
                    ${entry.inputs.map((input, i) => {
                        const label = ['Trade Name', 'Address', 'General Manager', 'Address', 'Contract Amount Due to Contractor'][i]; // Updated labels
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
            <button class="delete-button" data-index="${index}">Delete</button>
        </div>
        `).join('');
        addDeleteEventListeners(data);
    }

    // Function to display deleted data
    function displayDeletedData(data) {
        deletedDataDiv.innerHTML = data.map((entry, index) => ` 
             <div class="entry shadow">
            <h4>${entry.inputs[0]}</h4>
            <div class="date-names">
                <div class="name-etc">
                    ${entry.inputs.map((input, i) => {
                        const label = ['Trade Name', 'Address', 'General Manager', 'Address', 'Contract Amount Due to Contractor'][i]; // Updated labels
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
            <button class="delete-button" data-index="${index}">Delete</button>
        </div>
        `).join('');
        addRetrieveEventListeners(data);
    }

    // Function to add delete event listeners
    function addDeleteEventListeners(savedData) {
        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', function () {
                const index = button.getAttribute('data-index');
                const entry = savedData.splice(index, 1)[0];
                let deletedData = JSON.parse(localStorage.getItem('deletedData')) || [];
                deletedData.unshift(entry);  // Add deleted entry to the beginning

                localStorage.setItem('savedData', JSON.stringify(savedData));
                localStorage.setItem('deletedData', JSON.stringify(deletedData));

                filterSavedData();  // Re-filter saved data after deletion
            });
        });
    }

    // Function to add retrieve event listeners
    function addRetrieveEventListeners(deletedData) {
        document.querySelectorAll('.retrieve-button').forEach(button => {
            button.addEventListener('click', function () {
                const index = button.getAttribute('data-index');
                const entry = deletedData.splice(index, 1)[0];
                let savedData = JSON.parse(localStorage.getItem('savedData')) || [];
                savedData.unshift(entry);  // Add retrieved entry to the beginning

                localStorage.setItem('savedData', JSON.stringify(savedData));
                localStorage.setItem('deletedData', JSON.stringify(deletedData));

                filterDeletedData();  // Re-filter deleted data after retrieval
            });
        });
    }

    // Listen to search input events
    searchSavedDataInput.addEventListener('input', filterSavedData);
    searchDeletedDataInput.addEventListener('input', filterDeletedData);

    // Initial display of all data
    filterSavedData();
    filterDeletedData();
});