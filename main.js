import { defaultObject } from "./objects/defult.js";

const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

canvas.width = window.screen.width
canvas.height = window.screen.height

const renderList = []

function run() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(run)
    renderList.forEach(object => object.render(context))
}

run()