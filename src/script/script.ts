const menu = [
    {
        id: 1,
        title: "Signature Breakfast",
        category: "Breakfast",
        price: 10,
        img: "../../src/assets/breakfast-base.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cum.",
    },
    {
        id: 2,
        title: "Egg Toast",
        category: "Breakfast",
        price: 10,
        img: "../../src/assets/breakfast-egg_toast.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cum.",
    },
    {
        id: 3,
        title: "Pancakes",
        category: "Breakfast",
        price: 10,
        img: "../../src/assets/breakfast-pancakes.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cum.",
    },
    {
        id: 4,
        title: "Classic Burger",
        category: "Meal",
        price: 10,
        img: "../../src/assets/meal-burger.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cum.",
    },
    {
        id: 5,
        title: "Fried Chicken",
        category: "Meal",
        price: 10,
        img: "../../src/assets/meal-chicken.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cum.",
    },
    {
        id: 6,
        title: "Spaghetti",
        category: "Meal",
        price: 10,
        img: "../../src/assets/meal-spaghetti.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cum.",
    },
    {
        id: 7,
        title: "Chicken Tenders",
        category: "Sides",
        price: 10,
        img: "../../src/assets/sides-chicken_tenders.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cum.",
    },
    {
        id: 8,
        title: "Fish and Chips",
        category: "Sides",
        price: 10,
        img: "../../src/assets/sides-fish_and_chips.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cum.",
    },
    {
        id: 9,
        title: "Fries",
        category: "Sides",
        price: 10,
        img: "../../src/assets/sides-fries.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cum.",
    },
    {
        id: 10,
        title: "Chocolate Smoothie",
        category: "Drinks",
        price: 10,
        img: "../../src/assets/drinks-choco_smoothie.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cum.",
    },
    {
        id: 11,
        title: "Mango Shake",
        category: "Drinks",
        price: 10,
        img: "../../src/assets/drinks-mango_shake.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cum.",
    },
    {
        id: 12,
        title: "Strawberry Milkshake",
        category: "Drinks",
        price: 10,
        img: "../../src/assets/drinks-strawberry_milkshake.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cum.",
    },
];

const MenuItems = document.querySelector('.MenuItems')!;
const buttons = document.querySelectorAll('.filter');

window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
});

interface MenuStats {
    id: number;
    img: string;
    title: string;
    price: number;
    desc: string;
}

function displayMenuItems(menuItems: MenuStats[]) {
    let displayMenu: string[] | string = menuItems.map(function(listing) {
        return `<div>${listing.title}</div>`;

        // return `<article class=" mx-2 my-5 text-gray-900">
        //     <div class="flex flex-col justify-center items-center p-3 duration-500 hover:scale-105 hover:shadow-lg">
        //         <img src="${listing.img}" class="rounded-md size-1/2" alt="${listing.title}" />
        //             <header class="flex justify-between my-3 text-md">
        //                 <h1>${listing.title}</h1>
        //                 <h1>$${listing.price}</h1>
        //             </header>
        //         <p class="text-sm w-fit">${listing.desc}</p>
        //     </div>
        // </article>`;
    });

    if (MenuItems) {
        displayMenu = displayMenu.join("//");
        MenuItems.innerHTML = displayMenu;
    }
}