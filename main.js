function calculate() {
    document.getElementById("errorMSG").innerHTML = ""; 
    document.getElementById("totalInput").style.borderColor = "grey"; 
    document.getElementById("rateInput").style.borderColor = "grey";
    
    
    let totalAmount = parseFloat(document.getElementById("totalInput").value);
    let rateAmount = parseFloat(document.getElementById("rateInput").value);
    
    
    if(isNaN(totalAmount)) {
        
        document.getElementById("totalInput").style.borderColor = "red";
    }
    if(isNaN(rateAmount)) { 
        rateAmount = 0.0;
        document.getElementById("rateInput").style.borderColor = "red";
    }

    let tipAmount = parseFloat(totalAmount) * (parseFloat(rateAmount) * 0.01);
    let taxAmount = parseFloat(totalAmount) * 0.055;
    let grandTotalAmount = parseFloat(totalAmount) + parseFloat(tipAmount) + parseFloat(taxAmount);
    
   
    if(isNaN(tipAmount)) {
        document.getElementById("tipInfo").innerHTML = "$0.00";
    }
    else {
        document.getElementById("tipInfo").innerHTML = "$" + tipAmount.toFixed(2);
    }
    
    if(isNaN(taxAmount)) {
        document.getElementById("taxInfo").innerHTML = "$0.00";
    }
    else {
        document.getElementById("taxInfo").innerHTML = "$" + taxAmount.toFixed(2);
    }
    
    if(isNaN(grandTotalAmount)) {
        document.getElementById("grandTotalInfo").innerHTML = "$0.00";
    }
    else {
        document.getElementById("grandTotalInfo").innerHTML = "$" + grandTotalAmount.toFixed(2);
    }
}

let toggle = 0;

function toggleDarkMode() {
    const darkSheet = document.getElementById("darkModeStyleSheet");
    toggle++;
    
    if(toggle % 2 == 0) {
        darkSheet.disabled = false;
        document.getElementById("darkModeBTN").innerHTML = "Light Mode"
    }
    else {
        darkSheet.disabled = true;
        document.getElementById("darkModeBTN").innerHTML = "Dark Mode"
    }
    
}