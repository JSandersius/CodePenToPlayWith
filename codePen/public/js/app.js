/*this is the code relevent to keyframes and CSS animations//*/
Array.from(document.getElementsByClassName('letter')).forEach(letter => {
    letter.addEventListener("mouseover", (e) => {
        letter.classList.add("hovered")
    })
    letter.addEventListener("animationend", (e) => {
        letter.classList.remove("hovered")
    })
})


//___________RANDOM SHAPES 
// This is the P5 JS code--> from here to ------------>
const numShapes = 3
const maxSize = 200

let colors = []
//this runs as soon as the file is loaded, it initializes the HTML canvas
function setup() {
    colors = [
        color(255, 143, 0, 80),
        color(255, 128, 171, 80),
        color(255, 193, 7, 80),
        color(76, 175, 80, 80),
        color(0, 188, 212, 80),
        color(171, 71, 188, 80),
        color(239, 83, 80, 80)
    ]
    createCanvas(window.innerWidth, document.body.offsetHeight)
    noStroke()
}

function randomNumber(size) {
    return Math.floor(Math.random() * size)
}

function randomChoice(choices) {
    let index = randomNumber(choices.length)
    return choices[index]
}
//this function runs when the user clicks anywhere on the canvas
//it runs a couple random number generators to get the size, color and shape
function mouseClicked() {
    let sideLength = randomNumber(maxSize)
    fill(randomChoice(colors))
    let shapeType = randomNumber(numShapes)
    if (shapeType % numShapes == 0) {
        ellipse(mouseX, mouseY, sideLength, sideLength)
    } else if (shapeType % numShapes == 1) {
        rect(mouseX, mouseY, sideLength, sideLength)
    } else {
        triangle(mouseX, mouseY, mouseX + sideLength, mouseY,
            mouseX + (.5 * sideLength), mouseY - sideLength)
    }
}

//to Here  ------------>

//this is the particle js

