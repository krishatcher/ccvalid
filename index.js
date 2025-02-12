const ccNum = document.querySelector("#ccNumber");
const errorTxt = document.querySelector(".validation");
const issuer = document.querySelector(".ccIssuer");
const form = document.querySelector("form");

addEventListener("input", (event) => {
    const button = document.querySelector(".submit");
    var typedData = ccNum.value;
    setLogos(typedData);

    if (!event.data) {
        document.getElementById("result").classList.add("hidden");
        button.classList.add("inactive");
    }

    // check the length, only report error here based on max length
    if (typedData.length > 16) {
        errorTxt.innerHTML = "Number is invalid.";
        button.classList.add("inactive");
    } else {
        errorTxt.innerHTML = "";
        button.classList.remove("inactive");
    }
});

document.querySelector(".clear").addEventListener('click', (event) => {
    event.preventDefault();
    // clear the input
    ccNum.value = "";
    // hide the results display
    document.getElementById("result").classList.add("hidden");
    // mark the submit button 'inactive'
    document.querySelector(".submit").classList.add("inactive");
    // reset the issuer display
    setLogos("");
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    typedData = ccNum.value;
    const resultDiv = document.getElementById("result");

    if (isValid(typedData)) {
        var issuerName = getIssuerName(typedData);
        document.querySelector(".resultText").innerHTML = "You have entered a valid " + issuerName + " card number!";
        resultDiv.classList.remove("hidden");
        resultDiv.classList.remove("error");
    } else {
        document.querySelector(".resultText").innerHTML = "You have entered an invalid card number.<br/>Please try again.";
        resultDiv.classList.remove("hidden");
        resultDiv.classList.add("error")
    }
});

function isVisa(ccNum) {
    if (ccNum.indexOf("4") == 0) {
        return true;
    } else {
        return false;
    }
}

function isMC(ccNum) {
    if (ccNum.indexOf("5") == 0) {
        if (ccNum[1] >= 0 && ccNum[1] < 6) {
            return true;
        }
    } else {
        return false;
    }
}

function isDiscover(ccNum) {
    if (ccNum.indexOf("6011") == 0 || ccNum.indexOf("65") == 0) {
        return true;
    } else {
        return false;
    }
}

function isValid(ccNum) {
    var lengthSixteen = ccNum.length == 16
    var result = false;

    if (isVisa(ccNum) && (lengthSixteen || ccNum.length == 13)) {
        result = true;
    } else if (isMC(ccNum) && lengthSixteen) {
        result = true;
    } else if (isDiscover(ccNum) && lengthSixteen) {
        result = true;
    }

    return result;
}

function getIssuerName(ccNum) {
    var result = "";

    if (isVisa(ccNum)) {
        result = "Visa";
    } else if (isMC(ccNum)) {
        result = "MasterCard";
    } else if (isDiscover(ccNum)) {
        result = "Discover";
    }

    return result;
}

function setLogos(ccNum) {
    const visa = document.querySelector(".visa");
    const mc = document.querySelector(".mc");
    const discover = document.querySelector(".discover");

    if (isVisa(ccNum)) {
        visa.classList.add("active");
        mc.classList.remove("active");
        discover.classList.remove("active");
    } else if (isMC(ccNum)) {
        visa.classList.remove("active");
        mc.classList.add("active");
        discover.classList.remove("active");
    } else if (isDiscover(ccNum)) {
        visa.classList.remove("active");
        mc.classList.remove("active");
        discover.classList.add("active");
    } else {
        visa.classList.remove("active");
        mc.classList.remove("active");
        discover.classList.remove("active");
    }
}