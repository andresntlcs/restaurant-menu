const menu = [
    {
        title: "Signature Breakfast",
        category: "breakfast"
    },
    {
        title: "Pancakes",
        category: "breakfast"
    },
    {
        title: "Egg Toast",
        category: "breakfast"
    },
    {
        title: "Classic Burger",
        category: "meal"
    },
    {
        title: "Fried Chicken",
        category: "meal"
    },
    {
        title: "Spaghetti",
        category: "meal"
    },
    {
        title: "Chicken Tenders",
        category: "sides"
    },
    {
        title: "Fries",
        category: "sides"
    },
    {
        title: "Fish and Chips",
        category: "sides"
    },
    {
        title: "Chocolate Smoothie",
        category: "drinks"
    },
    {
        title: "Mango Shake",
        category: "drinks"
    },
    {
        title: "Strawberry Milkshake",
        category: "drinks"
    },
    // Add more menu items as needed
]

interface menuTypes {
    title: string;
    category: string;
}

const menuSection = document.querySelector('#MenuSection')!;
const filterButtons = document.querySelectorAll('.filter');

window.addEventListener('DOMContentLoaded', function() {

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
        return `<p>${item.title}</p><br/>`
    
       });
    
       displayMenu = displayMenu.join("");
       menuSection.innerHTML = displayMenu;
    
}