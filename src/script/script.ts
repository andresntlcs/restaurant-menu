const menu = [
    {
        title: "Signature Breakfast",
        category: "breakfast",
        price: 10,
        img: "../../src/assets/breakfast-base.png",
        desc: "lorem ipsum",
    },
    {
        title: "Pancakes",
        category: "breakfast",
        price: 10,
        img: "../../src/assets/breakfast-pancakes.png",
        desc: "lorem ipsum",
    },
    {
        title: "Egg Toast",
        category: "breakfast",
        price: 10,
        img: "../../src/assets/breakfast-egg_toast.png",
        desc: "lorem ipsum",
    },
    {
        title: "Classic Burger",
        category: "meal",
        price: 10,
        img: "../../src/assets/meal-burger.png",
        desc: "lorem ipsum",
    },
    {
        title: "Fried Chicken",
        category: "meal",
        price: 10,
        img: "../../src/assets/meal-chicken.png",
        desc: "lorem ipsum",
    },
    {
        title: "Spaghetti",
        category: "meal",
        price: 10,
        img: "../../src/assets/meal-spaghetti.png",
        desc: "lorem ipsum",
    },
    {
        title: "Chicken Tenders",
        category: "sides",
        price: 10,
        img: "../../src/assets/sides-chicken_tenders.png",
        desc: "lorem ipsum",
    },
    {
        title: "Fries",
        category: "sides",
        price: 10,
        img: "../../src/assets/sides-fries.png",
        desc: "lorem ipsum",
    },
    {
        title: "Fish and Chips",
        category: "sides",
        price: 10,
        img: "../../src/assets/sides-fish_and_chips.png",
        desc: "lorem ipsum",
    },
    {
        title: "Chocolate Smoothie",
        category: "drinks",
        price: 10,
        img: "../../src/assets/drinks-choco_smoothie.png",
        desc: "lorem ipsum",
    },
    {
        title: "Mango Shake",
        category: "drinks",
        price: 10,
        img: "../../src/assets/drinks-mango_shake.png",
        desc: "lorem ipsum",
    },
    {
        title: "Strawberry Milkshake",
        category: "drinks",
        price: 10,
        img: "../../src/assets/drinks-strawberry_milkshake.png",
        desc: "lorem ipsum",
    },
]

interface menuTypes {
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
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
        return `
        <div id="MenuDisplay">
            <img src=${item.img}></img>
            <header>
                <h4 class="font-black">${item.title}</h4>
                <h4>$${item.price}</h4>
            </header>
            <p>${item.desc}</p>
        </div>
        `
    
       });
    
       displayMenu = displayMenu.join("");
       menuSection.innerHTML = displayMenu;
}