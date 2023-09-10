import data from '../data.json' assert { type: 'json' };

const searchParams = new URLSearchParams(window.location.search);
const checkboxes = document.getElementById("checkboxes")
const description = document.getElementById("description")
const topupMessage = document.getElementById("topup-message")
const itemName = searchParams.get("item")
const submitBtn = document.getElementById("submit")
let item, target;

if (data.hasOwnProperty(itemName)){
    Object.keys(data).forEach(key => {
        if (itemName == key && itemName == "mobile"){
            item = data.mobile;
        } else if (itemName == key && itemName == "valorant"){
            item = data.valorant;
        } else if (itemName == key && itemName == "roblox"){
            item = data.roblox;
        } else if (itemName == key && itemName == "PUBG"){
            item = data.pubg;
        } else if (itemName == key && itemName == "genshin"){
            item = data.genshin;
        } else if (itemName == key && itemName == "freeFire"){
            item = data.freeFire
        }
    })
}
description.innerText = `You want to buy ${item.currency} from ${item.name}`
Array.from(checkboxes.children).forEach((el, index) => {
    let label = el.children[0], checkbox = el.children[1];
    label.setAttribute("for", itemName);
    label.innerText = item.quantities[index];
    checkbox.setAttribute("value", new String(item.quantities[index]));
    checkbox.setAttribute("id", itemName);

    checkbox.addEventListener("click", (event) => {
        if (target){
            target.checked = false
        }
        target = event.target
    })
})

topupMessage.innerText = `Please pick the nominal to Top Up`
submitBtn.addEventListener("click", (_event) => {
    localStorage.setItem("currencyName", item.currency)
    localStorage.setItem("currency", target.value)
})