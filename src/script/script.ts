const menu = [
    {
        title: "Signature Breakfast",
        category: "breakfast",
        price: 10,
    },
    {
        title: "Pancakes",
        category: "breakfast",
        price: 10,
    },
    {
        title: "Egg Toast",
        category: "breakfast",
        price: 10,
    },
    {
        title: "Classic Burger",
        category: "meal",
        price: 10,
    },
    {
        title: "Fried Chicken",
        category: "meal",
        price: 10,
    },
    {
        title: "Spaghetti",
        category: "meal",
        price: 10,
    },
    {
        title: "Chicken Tenders",
        category: "sides",
        price: 10,
    },
    {
        title: "Fries",
        category: "sides",
        price: 10,
    },
    {
        title: "Fish and Chips",
        category: "sides",
        price: 10,
    },
    {
        title: "Chocolate Smoothie",
        category: "drinks",
        price: 10,
    },
    {
        title: "Mango Shake",
        category: "drinks",
        price: 10,
    },
    {
        title: "Strawberry Milkshake",
        category: "drinks",
        price: 10,
    },
]

interface menuTypes {
    title: string;
    category: string;
    price: number;
}

const menuSection = document.querySelector('#MenuSection')!;
const filterButtons = document.querySelectorAll('.filter');

window.addEventListener('DOMContentLoaded', function() {

    displayMenu(menu);

    filterButtons.forEach(button => {
        button.addEventListener('click', function(this: HTMLButtonElement) {
            const category = this.id.toLowerCase();
            const filteredMenu = category === 'all' ? menu : menu.filter(item => item.category === category);
            displayMenu(filteredMenu);
        });
    });
   
});

function displayMenu(menu: menuTypes[]){
    let displayMenu: string | string[] = menu.map(function (item) {
        return `<p class="font-black">${item.title}</p> <p>$${item.price}</p> <br>`
    
       });
    
       displayMenu = displayMenu.join("");
       menuSection.innerHTML = displayMenu;
}