document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById('payment');
    inputField.addEventListener('input', calculateTax);

function calculateTax() {
    const inputValue = Number(document.getElementById('payment').value.trim()); 

    // Select all elements to update by their IDs
    const taxCom1 = document.getElementById('tax-com1');
    const taxCom2 = document.getElementById('tax-com2');
    const taxCom3 = document.getElementById('tax-com3');

    const taxFor1 = document.getElementById('tax-for1');
    const taxFor2 = document.getElementById('tax-for2');
    const taxFor3 = document.getElementById('tax-for3');
    const taxFor4 = document.getElementById('tax-for4');
    const taxFor5 = document.getElementById('tax-for5');
    const taxFor6 = document.getElementById('tax-for6');
    const equals = document.getElementById('equals');
    const amnt = document.getElementById('amnt');
    const businessTax = document.getElementById('businessTax');
    const regulatoryFees = document.getElementById('regulatoryFees');
    const assessment = document.getElementById('assessment');
    const uwu = document.getElementById('uwu');

    console.log("User Input:", inputValue); 

    if (inputValue === 3_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "3,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "₱1,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱7,500.00";
        taxFor3.textContent = "₱28,372.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱19,860.82";
        taxFor6.textContent = "1,500.00";
        equals.textContent = "21,360.82";
        amnt.textContent = "21,360.82";
        businessTax.textContent = "19,860.82";
        regulatoryFees.textContent = "1,500.00";
        assessment.textContent = "21,360.82";
        uwu.textContent = "1,500.00";
    } else if (inputValue === 4_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "4,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "2,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱15,000.00";
        taxFor3.textContent = "₱35,872.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱25,110.82";
        taxFor6.textContent = "1,500.00";
        equals.textContent = "26,610.82";
        amnt.textContent = "26,610.82";
        businessTax.textContent = "25,110.82";
        regulatoryFees.textContent = "1,500.00";
        assessment.textContent = "26,610.82";
        uwu.textContent = "1,500.00";
    } else if (inputValue === 5_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "5,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "3,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱22,500.00";
        taxFor3.textContent = "₱43,372.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱30,360.82";
        taxFor6.textContent = "1,500.00";
        equals.textContent = "31,860.82";
        amnt.textContent = "31,860.82";
        businessTax.textContent = "30,360.82";
        regulatoryFees.textContent = "1,500.00";
        assessment.textContent = "31,860.82";
        uwu.textContent = "1,500.00";
    } else if (inputValue === 6_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "6,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "4,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱30,000.00";
        taxFor3.textContent = "₱50,872.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱35,610.82";
        taxFor6.textContent = "2,500.00";
        equals.textContent = "38,110.82";
        amnt.textContent = "38,110.82";
        businessTax.textContent = "35,610.82";
        regulatoryFees.textContent = "2,500.00";
        assessment.textContent = "38,110.82";
        uwu.textContent = "2,500.00";
    } else if (inputValue === 7_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "7,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "4,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱37,500.00";
        taxFor3.textContent = "₱58,372.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱40,860.82";
        taxFor6.textContent = "2,500.00";
        equals.textContent = "43,360.82";
        amnt.textContent = "43,360.82";
        businessTax.textContent = "40,860.82";
        regulatoryFees.textContent = "2,500.00";
        assessment.textContent = "43,360.82";
        uwu.textContent = "2,500.00";
    } else if (inputValue === 8_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "8,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "6,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱45,000.00";
        taxFor3.textContent = "₱65,872.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱46,110.82";
        taxFor6.textContent = "2,500.00";
        equals.textContent = "48,610.82";
        amnt.textContent = "48,610.82";
        businessTax.textContent = "46,110.82";
        regulatoryFees.textContent = "2,500.00";
        assessment.textContent = "48,610.82";
        uwu.textContent = "2,500.00";
    } else if (inputValue === 9_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "9,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "7,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱62,500.00";
        taxFor3.textContent = "₱73,372.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱51,360.82";
        taxFor6.textContent = "2,500.00";
        equals.textContent = "53,860.82";
        amnt.textContent = "53,860.82";
        businessTax.textContent = "51,360.82";
        regulatoryFees.textContent = "2,500.00";
        assessment.textContent = "53,860.82";
        uwu.textContent = "2,500.00";
    } else if (inputValue === 10_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "10,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "8,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱60,000.00";
        taxFor3.textContent = "₱80,872.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱56,610.82";
        taxFor6.textContent = "2,500.00";
        equals.textContent = "59,110.82";
        amnt.textContent = "59,110.82";
        businessTax.textContent = "56,610.82";
        regulatoryFees.textContent = "2,500.00";
        assessment.textContent = "59,110.82";
        uwu.textContent = "2,500.00";
    } else if (inputValue === 11_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "11,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "9,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱67,500.00";
        taxFor3.textContent = "₱88,372.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱61,860.82";
        taxFor6.textContent = "3,000.00";
        equals.textContent = "64,860.82";
        amnt.textContent = "64,860.82";
        businessTax.textContent = "61,860.82";
        regulatoryFees.textContent = "3,000.00";
        assessment.textContent = "64,860.82";
        uwu.textContent = "3,000.00";
    } else if (inputValue === 12_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "12,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "10,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱75,000.00";
        taxFor3.textContent = "₱95,872.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱67,110.82";
        taxFor6.textContent = "3,000.00";
        equals.textContent = "70,110.82";
        amnt.textContent = "70,110.82";
        businessTax.textContent = "67,110.82";
        regulatoryFees.textContent = "3,000.00";
        assessment.textContent = "70,110.82";
        uwu.textContent = "3,000.00";
    } else if (inputValue === 14_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "14,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "12,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱90,500.00";
        taxFor3.textContent = "₱110,872.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱77,610.82";
        taxFor6.textContent = "3,000.00";
        equals.textContent = "80,610.82";
        amnt.textContent = "80,610.82";
        businessTax.textContent = "77,610.82";
        regulatoryFees.textContent = "3,000.00";
        assessment.textContent = "80,610.82";
        uwu.textContent = "3,000.00";
    } else if (inputValue === 15_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "15,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "13,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱97,500.00";
        taxFor3.textContent = "₱118,372.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱82,860.82";
        taxFor6.textContent = "3,000.00";
        equals.textContent = "85,860.82";
        amnt.textContent = "85,860.82";
        businessTax.textContent = "82,860.82";
        regulatoryFees.textContent = "3,000.00";
        assessment.textContent = "85,860.82";
        uwu.textContent = "3,000.00";
    } else {
        console.log("Condition not met: Resetting tax values...");
    
        // Reset to default values if input is not 2,000,000 or 3,000,000
        taxCom1.textContent = "0.00";
        taxCom2.textContent = "0.00";
        taxCom3.textContent = "₱ -0.00";
    
        taxFor1.textContent = "₱ 0.00";
        taxFor2.textContent = "₱ -0.00";
        taxFor3.textContent = "₱ 0.00";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱ 0.00";
        taxFor6.textContent = "0.00";
        equals.textContent = "0.00";
    };
    
};

});