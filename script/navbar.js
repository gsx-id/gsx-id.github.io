const listItems = document.getElementById("navitems");

Array.from(listItems.children).forEach(child => {
    if (child.id.toLowerCase() == "shop"){
        child.addEventListener('click', (_event) => {
            window.open('shop.html', "_self");
        }
    )} else {
        child.addEventListener('click', (_event) => {
            window.open('./', "_self");
        }
    )};
});