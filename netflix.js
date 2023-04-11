const cancel = document.querySelector("#cancel");
const watch = document.querySelector("#watch");
const price = document.querySelector("#price");
const door = document.querySelector(".door");
const tablet = document.querySelector(".tablet");
const tag = document.querySelector(".tag");

door.addEventListener("click",
    () => {
        watch.style.display = "none";
        cancel.style.display = "grid";
        door.style.color = "red";
        tablet.style.color = "#999";
        tag.style.color = "#999";
        price.style.display = "none";
    }
)
tablet.addEventListener("click",
    () => {
        watch.style.display = "grid";
        tablet.style.color = "red"
        cancel.style.display = "none";
        tag.style.color = "#999";
        door.style.color = "#999";
        price.style.display = "none";


    }
)
tag.addEventListener("click",
    () => {
        watch.style.display = "none";
        cancel.style.display = "none";
        tablet.style.color = "#999"
        door.style.color = "#999";
        tag.style.color = "red";
        price.style.display = "grid ";
    }
)
