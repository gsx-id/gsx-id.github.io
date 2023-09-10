const h1 = document.getElementById("processing")
const description = document.getElementById("description")
const receipt = document.getElementById("receipt")
let miliseconds = 1000
let process = "."
let currencyName = localStorage.getItem("currencyName")
let currency = localStorage.getItem("currency")

if (!currencyName || !currency){
    alert("You haven't filled out the form or you already just purchased an item! go back to the shop menu and pick an item and fill the form!")
    window.open("shop.html", "_self")
}

while (miliseconds < 10000){
    setTimeout(() => {
        h1.innerHTML = `Processing${process}`
        if (process === "..."){
            process = "."
        } else if (process === "..") {
            process = "..."
        } else if (process === ".") {
            process = ".."
        } 
    }, miliseconds);


    miliseconds += 1000
}

setTimeout(() => {
    h1.innerHTML = "Done!";
    setTimeout(() => {
        h1.style.visibility = "hidden"
        h1.style.opacity = 0
    }, 500);
    setTimeout(() => {
        description.innerHTML = `Thanks for trusting our site! Pleasure doing business with you. You bought <strong>${currency}</strong> total of <strong>${currencyName}</strong> at <strong>10/09/2023</strong>`
        receipt.style.visibility = "visible"
        receipt.style.opacity = 1
        localStorage.clear()
    }, 1100);
}, 11000);