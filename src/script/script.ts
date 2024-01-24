const menu = [
    {
        id: 1,
        title: "Signature Breakfast",
        category: "Breakfast",
        price: 10,
        img: "../assets/breakfast-base.jpg",
    },
    {
        id: 2,
        title: "Egg Toast",
        category: "Breakfast",
        price: "12php GCash",
        img: "../assets/breakfast-egg_toast.jpg",
    },
    {
        id: 3,
        title: "Pancakes",
        category: "Breakfast",
        price: "10php GCash",
        img: "../assets/breakfast-pancakes.jpg",
    },
    {
        id: 4,
        title: "Classic Burger",
        category: "Meal",
        price: "10php GCash",
        img: "../assets/meal-burger.jpg",
    },
    {
        id: 5,
        title: "Fried Chicken",
        category: "Meal",
        price: "10php GCash",
        img: "../assets/meal-chicken.jpg",
    },
    {
        id: 6,
        title: "Spaghetti",
        category: "Meal",
        price: "10php GCash",
        img: "../assets/meal-spaghetti.jpg",
    },
    {
        id: 7,
        title: "Chicken Tenders",
        category: "Sides",
        price: "10php GCash",
        img: "../assets/sides-chicken_tenders.jpg",
    },
    {
        id: 8,
        title: "Fish and Chips",
        category: "Sides",
        price: "10php GCash",
        img: "../assets/breakfast-base.jpg",
    },
    {
        id: 9,
        title: "Fries",
        category: "Sides",
        price: "10php GCash",
        img: "../assets/sides-fries.jpg",
    },
    {
        id: 10,
        title: "Chocolate Smoothie",
        category: "Drinks",
        price: "10php GCash",
        img: "../assets/drinks-choco_smoothie.jpg",
    },
    {
        id: 11,
        title: "Mango Shake",
        category: "Drinks",
        price: "10php GCash",
        img: "../assets/drinks-mango_shake.jpg",
    },
    {
        id: 12,
        title: "Strawberry Milkshake",
        category: "Drinks",
        price: "10php GCash",
        img: "../assets/drinks-straberry_milkshake.jpg",
    },
];

const sectionCenter = document.querySelector('.section-center')!;

window.addEventListener('DOMContentLoaded', function() {
    let displayMenu = menu.map(function(item) {
        return `<article className="grid grid-cols-3">
            <img src="${item.img}" class="photo" alt="${item.title}" />
            <div>
                <header>
                    <h4>${item.title}</h4>
                    <h4>${item.price}</h4>
                </header>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cum.</p>
            </div>
        </article>`;
    });

    if (sectionCenter) {
    displayMenu = displayMenu.join("");
    }

    sectionCenter.innerHTML = displayMenu;
});
