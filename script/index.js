const listItems = document.getElementById("navitems");
const welcome = document.getElementById("welcome");
const el = document.getElementById("el");
const img = document.getElementById("img");
const gameCards = document.getElementById("game-cards")

const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
      ? ((top > 0 && top < innerHeight) ||
          (bottom > 0 && bottom < innerHeight)) &&
          ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  };


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

setTimeout(() => {
    welcome.style.visibility = "visible"
    welcome.style.opacity = 1
    welcome.style.transform = "translateY(-50px)"
}, 300)