const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict- $10', 'Oatmeal- $12', 'Frittata- $7'];
const mainCourseMenu = ['Chicken- $20', 'Pasta- $15', 'Burger- $12', 'Salmon- $5'];
const dessertMenu = ['Cake- $25', 'Ice Cream- $10', 'Pudding- $12', 'Fruit Salad- $12'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${indsex + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for(let i=0; i < dessertMenu.length; i++){
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;