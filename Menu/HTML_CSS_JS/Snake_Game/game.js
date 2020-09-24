import { SNAKE_SPEED } from './snake.js'

let lastRenderTime = 0
function main(currentTime) {
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    window.requestAnimationFrame(main)
    if (secondsSinceLastRender < 1 /SANKE_SPEED) return

    lastRenderTime=currentTime
    console.log(secondsSinceLastRender)
    upadate()
    draw()
}
window.requestAnimationFrame(main)

function update() {
    
}