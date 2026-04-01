const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
// console.log(dropdowns);
const btn = document.querySelector("form .exchange");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// PRINTING THE CURRENCY AND COUNTRY CODES
/* for (const currCode in countryList) {    
    const countryCode = countryList[currCode];
    console.log(currCode, countryCode);
} */


for (const select of dropdowns) {
    for (const currCode in countryList) {
        const countryCode = countryList[currCode];
        // creating new options for each select:
        let newOption = document.createElement("option");
        newOption.value = currCode;
        newOption.innerHTML = currCode;

        // Setting default visible option for each select:
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "PKR") {
            newOption.selected = "selected";
        }

        // Appending new Options to each select
        select.append(newOption);
    }

    // Changing the flag according to the respective select 
    select.addEventListener("change", (e) => {
        updateFlag(e.target);
    });
}

function updateFlag(element) {
    // console.log(element);
    let currCode = element.value;
    let countryCode = countryList[currCode];

    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", async (e) => {
    e.preventDefault();

    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    // console.log(response);
    let data = await response.json();

    for (const key in data) {
        const element = data[key];
        if (key === fromCurr.value.toLowerCase()) {
            // console.log(key, element);
            for (const currCode in element) {
                const value = element[currCode];
                // console.log(currCode,value);

                // WE WILL GET OUR REQUIRED OUTPUT COUNTRY RATE BY:
                if (currCode === toCurr.value.toLowerCase()) {
                    // console.log(value);
                    let finalAmount = Math.ceil(amtVal * value);
                    console.log(finalAmount);
                    // DISPLAYING THE FINAL EXCHANGE MSG:
                    // msg.innerHTML = `1 USD = 280 PKR`;
                    msg.innerHTML = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
                }
            }
        }
    }
})