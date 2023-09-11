const h1 = document.getElementById("processing")
const description = document.getElementById("description")
const receipt = document.getElementById("receipt")
const currencyName = localStorage.getItem("currencyName")
const currency = localStorage.getItem("currency")
const price = localStorage.getItem("price")
const time = localStorage.getItem("time")
const accountInformation = localStorage.getItem("accountInformation")
let miliseconds = 1000
let process = "."

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
        if (!isNaN(currency)){
            description.innerHTML = `
            Thanks for trusting our site! Pleasure doing business with you. You bought <strong>${currency}</strong> total of <strong>${currencyName}</strong> for <strong>${price}</strong> IDR at <strong>${time}</strong><br>Account Information: <span id="spoiler"><strong>${accountInformation}</strong><br></span>
            `
        } else {
            description.innerHTML = `
            Thanks for trusting our site! Pleasure doing business with you. You bought <strong>${currency}</strong> for <strong>${price}</strong> IDR at <strong>${time}</strong><br>Account Information: <span id="spoiler">${accountInformation}</span><br>
            `
        }
        document.getElementById("buttonbox").innerHTML = `
        <button id="copybutton">Copy Me</button>
        `
        document.getElementById("copybutton").addEventListener("click", (_event) => {
            navigator.clipboard.writeText(accountInformation);
            alert("Copied the text: " + accountInformation);
        })

        document.getElementById("spoiler").addEventListener("click", (_event) => {
            let target = _event.target.style
            if (target.backgroundColor == "aliceblue"){
                target.backgroundColor = "black"
            } else {
                target.backgroundColor = "aliceblue";
            }
        })
        receipt.style.visibility = "visible"
        receipt.style.opacity = 1
        localStorage.clear()
    }, 1100);
}, 11000);