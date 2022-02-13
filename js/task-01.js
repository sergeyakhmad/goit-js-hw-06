// const listItemEl = document.querySelectorAll('.item');
// console.log('Number of categories: ', listItemEl.length);

const listEl = document.querySelector('#categories');
const listItemEl = listEl.querySelectorAll('.item');
console.log('Number of categories: ', listItemEl.length);

listItemEl.forEach(element => {
    console.log('Category: ', element.querySelector('h2').textContent);
    console.log('Elements: ', element.querySelectorAll('li').length);
});