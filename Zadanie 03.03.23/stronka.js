const elements = document.getElementsByTagName("pre");
for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
}
function op(obj, id) {
    const x = document.getElementById(obj);
    const elements = document.getElementsByTagName("pre");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].id === obj) {
            if (elements[i].style.display === "none") {
                elements[i].style.display = "block";
                document.getElementById(id).innerHTML = "&#8613;";
                document.getElementById(id).href = "#";
            } else {
                elements[i].style.display = "none";
                document.getElementById(id).innerHTML = "&#8615;";
                document.getElementById(id).href = "/";
            }
        } else {
            elements[i].style.display = "none";
        }
    }
    return false;
}