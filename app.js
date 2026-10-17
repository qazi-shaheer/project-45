let count = 0;
function plus() {
    count++;
    document.getElementById("count").innerHTML = count;
}
function minus() {
    count--;
    document.getElementById("count").innerHTML = count;
}
function reset() {
    count = 0;
    document.getElementById("count").innerHTML = count;
}