//login - register
const wraper = document.querySelector('.wraper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

registerlink.addEventListener('click', ()=>{
    wraper.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    wraper.classList.remove('active');
});

// add to cart
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

// description
const content = document.querySelector('.content');
const list1 = document.querySelector('.des-list-1');
const list2 = document.querySelector('.des-list-2');
const list3 = document.querySelector('.des-list-3');


list2.addEventListener('click', ()=>{
    content.classList.add('active');
    content.classList.remove('active1');
});

list3.addEventListener('click', ()=>{
    content.classList.add('active1');
    content.classList.remove('active');
});

list1.addEventListener('click', ()=>{
    content.classList.remove('active');
    content.classList.remove('active1');
});