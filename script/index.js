const listItems = document.getElementById("navitems")
for (let index = 0; index < listItems.children.length; index++) {
    let child = listItems.children[index];
    if (child.id != "userprofile"){
        child.addEventListener('click', (_event) => {
            window.open('./', "_self");
        })
    }
}