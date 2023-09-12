const jsonUrl = 'https://gsx-id.github.io/data.json';
const searchParams = new URLSearchParams(window.location.search);
const checkboxes = document.getElementById("checkboxes")
const description = document.getElementById("description")
const topupMessage = document.getElementById("topup-message")
const itemName = searchParams.get("item")
const submitBtn = document.getElementById("submit")
const accountInput = document.getElementById("account")
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let item, target, overrideCurrency;
fetch(jsonUrl).then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
        // Parse the JSON data from the response
        return response.json();
    }).then(data => {
        // Now you can work with the JSON data
        if (data.hasOwnProperty(itemName)){
            Object.keys(data).forEach(key => {
                if (itemName == key && itemName == "mobile"){
                    item = data.mobile;
                } else if (itemName == key && itemName == "valorant"){
                    item = data.valorant;
                } else if (itemName == key && itemName == "roblox"){
                    item = data.roblox;
                } else if (itemName == key && itemName == "PUBG"){
                    item = data.PUBG;
                } else if (itemName == key && itemName == "genshin"){
                    item = data.genshin;
                } else if (itemName == key && itemName == "freeFire"){
                    item = data.freeFire
                } 
            })
        }
        
        if (!item){
            alert(`Cannot find item: ${itemName}`)
            window.open("shop.html", "_self")
        }
        
        description.innerText = `You want to buy ${item.currency} from ${item.name}`
        accountInput.innerHTML = `
        <label for="input-information">
            Please Insert your account information! 
        </label><br>
        <input type="text" name="input-information" id="input-information" placeholder="${item.accountInformation}" autofocus required>
        `
        
        Array.from(checkboxes.children).forEach((el, index) => {
            let quantity = item.quantities[index];
            if (quantity.overrideCurrency){
                el.innerHTML = `${quantity.howMany} <br>${quantity.price} IDR`;
                overrideCurrency = quantity
        
            } else {
                el.innerHTML = `${quantity.howMany} ${item.currency}<br>${quantity.price} IDR`;
            }
            el.setAttribute("value", quantity.howMany);
            el.setAttribute("price", quantity.price);
            el.setAttribute("id", itemName);
            el.addEventListener("click", (event) => {
                if (target){
                    target.style.backgroundColor = "white";
                    target.style.color = "black"
                    target = event.target;
                } else {
                    target = event.target;
                }
                target.style.backgroundColor = "red"
                target.style.color = "white"
            })
        })
        
        topupMessage.innerText = `Please pick the nominal to Top Up`
        submitBtn.addEventListener("click", (_event) => {
            let result = '';
            let inputInformation = document.getElementById("input-information")
            if (inputInformation.value.length <= 0){
                return;
            }
            for (let i = 0; i < 12; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                result += characters.charAt(randomIndex);
            }
            localStorage.setItem("accountInformation", document.getElementById("input-information").value)
            document.getElementById("input-information").value = result
            localStorage.setItem("time", new Date().toDateString())
            if (overrideCurrency){
                localStorage.setItem("currencyName", overrideCurrency.howMany);
                localStorage.setItem("currency", overrideCurrency.howMany);
            } else {
                localStorage.setItem("currencyName", item.currency)
                localStorage.setItem("currency", target.getAttribute("value"))
            }
            localStorage.setItem("price", target.getAttribute("price"))
            
        })
    }).catch(error => {
        // Handle errors, such as network issues or JSON parsing errors
        console.error('Fetch error:', error);
    })