const navitems = document.getElementById("navitems");

for (let i = 0; i < navitems.children.length; i++) {
    let child = navitems.children[i];
    if (child.id != 'userprofile') {
        child.addEventListener("click", (event) => {
            window.open("./", "_self");
        });   
    }
}