const searchParams = new URLSearchParams(window.location.search);
const cards = document.getElementById("game-cards")
const item = searchParams.get("item")

function displayItem(item){
    window.open("test.html?item=hey")
};

let milleseconds = 220

Array.from(cards.children).forEach(child => {
    setTimeout(() => {
        child.style.visibility = "visible"
        child.style.opacity = 1
    }, milleseconds);
    milleseconds += 220
})