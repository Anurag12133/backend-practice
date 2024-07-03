"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const jokes = [
    {
        id: 1,
        title: "Why don't scientists trust atoms?",
        description: "Because they make up everything!",
    },
    {
        id: 2,
        title: "What do you call fake spaghetti?",
        description: "An impasta!",
    },
    {
        id: 3,
        title: "Why did the scarecrow win an award?",
        description: "Because he was outstanding in his field!",
    },
    {
        id: 4,
        title: "Why don’t skeletons fight each other?",
        description: "They don’t have the guts.",
    },
    {
        id: 5,
        title: "What do you get if you cross a snowman and a vampire?",
        description: "Frostbite.",
    },
];
app.get("/jokes", (req, res) => {
    res.send(jokes);
});
