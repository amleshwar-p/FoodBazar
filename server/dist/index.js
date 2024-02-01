"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
        {
            name: "Bread",
            price: 10,
            text: "Freshly baked bread, perfect for any meal of the day.",
            image: "/images/bread.png",
            type: "breakfast",
        },
        {
            name: "Donut",
            price: 15,
            text: "Delicious and sweet donut to satisfy your cravings.",
            image: "/images/donut.png",
            type: "snack",
        },
        {
            name: "Dark Donut",
            price: 18,
            text: "Indulge in the richness of a dark chocolate donut.",
            image: "/images/dark_donut.png",
            type: "snack",
        },
        {
            name: "French Baguette",
            price: 12,
            text: "A classic French baguette, perfect for sandwiches or as a side.",
            image: "/images/french_baguette.png",
            type: "lunch",
        },
        {
            name: "Puff Pastry",
            price: 20,
            text: "Flaky and buttery puff pastry, a delightful treat for any occasion.",
            image: "/images/puff_pastry.png",
            type: "snack",
        },
        {
            name: "Chocolate Pastry",
            price: 22,
            text: "Indulge your sweet tooth with our irresistible chocolate pastry.",
            image: "/images/chocolate_pastry.png",
            type: "dessert",
        },
        {
            name: "Four Seed Whole Wheat",
            price: 15,
            text: "Healthy and flavorful four seed whole wheat bread for a nutritious meal.",
            image: "/images/four_seed_whole_wheat.png",
            type: "breakfast",
        },
    ];

    // Rest of the code remains the same...

    res.json(foodData);
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map