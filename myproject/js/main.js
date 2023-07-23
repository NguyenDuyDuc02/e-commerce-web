let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
function handleClick() {
    let countNum = document.getElementById("number").value;
    document.getElementById("number").value = Number(countNum) + 1;
}
function Click() {
    let countNum = document.getElementById("number").value;
    if (Number(countNum) <= 1) {
        let countNum = document.getElementById("number").value = 1;
    }
    else
        document.getElementById("number").value = Number(countNum) - 1;
}
