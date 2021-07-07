let open_icon = document.getElementById("open");
let close_icon = document.getElementById("close");
let list = document.getElementById("list");

open_icon.addEventListener("click", () => {
    open_icon.style.display = "none";
    close_icon.style.display = "block";
    list.style.left = "0";
});

list.addEventListener("click", () => {
    open_icon.style.display = "block";
    close_icon.style.display = "none";
    list.style.left = "100vw";
});
