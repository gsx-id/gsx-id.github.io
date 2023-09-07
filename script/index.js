const listItems = document.getElementsByClassName("navlist")
listItems.forEach(element => {
    if (element )
    element.addEventListener("click", (event) => {
        window.open("http://localhost:5500/", "_self")
    })
});