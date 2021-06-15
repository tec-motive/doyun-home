//selector

const verso1 = document.querySelector(".verse-1-es")
const verso2 = document.querySelector(".verse-2-es")
const verso3 = document.querySelector(".verse-3-es")
const verso4 = document.querySelector(".verse-4-es")

//end selector

//event listener

verso1.addEventListener('click', () => {
    verso1.classList.toggle('active');
});

verso2.addEventListener('click', () => {
    verso2.classList.toggle('active');
});

verso3.addEventListener('click', () => {
    verso3.classList.toggle('active');
});

verso4.addEventListener('click', () => {
    verso4.classList.toggle('active');
});

//end event listener
