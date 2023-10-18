// GLOBALS -----------------------------------------------------------------------------------------------------------------
let portfolioWIndow = document.getElementById('portfolio');
let contactWindow = document.getElementById('contact');

// Storage for about me text
const aboutMeText = "If you would like to work with me, you can fill out the form, or click on any of the links below.\nPlease note, this is a work in progress. Currently the form is not functional.";

// Variables to determine total divs needed per section
// -- side note, this is determined by the total grid area names not the columns and rows!
// update idea: call a function that can read the css and automatically generate this variable. -- NOT URGENT!!
const portRequires = 7;
const contactRequires = 7;

// Arrays to store the divs
const PORTFOLIO_DIV_ARRAY = [];
const CONTACT_DIV_ARRAY = [];

// Array for portfolio links
const PORTFOLIO_OBJECTS = [
    {
        name: "Touch Grass",
        link: "https://jaycossey.github.io/touch-grass/",
        image: "./assets/images/touch-grass.PNG"
    },
    {
        name: "Settlement Generator",
        link: "https://codepen.io/Jaycossey/pen/zYmJgZw",
        image: "./assets/images/settlement.PNG"
    },
    {
        name: "Dethklok Quote Machine",
        link: "https://codepen.io/Jaycossey/pen/dyjdmWG",
        image: "./assets/images/dethklok-quote.PNG"
    },
    {
        name: "Posture Check",
        link: "https://jaycossey.github.io/posture-check/",
        image: "./assets/images/posture-check.PNG"
    },
    {
        name: "Bootstrap Portfolio",
        link: "https://jaycossey.github.io/Bootstrap-Portfolio/",
        image: "./assets/images/bootstrap-screenshot.PNG"
    },
    {
        name: "Coming Soon",
        link: "",
        image: ""
    },
    {
        name: "Coming Soon",
        link: "",
        image: ""
    },
    {
        name: "Coming Soon",
        link: "",
        image: ""
    }
];

// create elements and push to arrays -------------------------------------------------------------------------------------------
function createElements(sectionName, targetArray, divsNeeded) {
    // variables to allow some scalability
    for (let i = 0; i < divsNeeded; i++) {
        // element
        let div = document.createElement('div');
        // unique id + class specifications
        div.className = sectionName + i;
        // push to array
        targetArray.push(div);
    }

    positionDivs(sectionName, targetArray);
    return;
}

// apply the styles / grids to the divs
function positionDivs(sectionName, targetArray) {
    // ensure divs are visual and correct size
    targetArray.forEach((element) => {
        element.style.border = "4px inset purple";
        element.style.height = "100%";
        element.style.width = "100%";

    });

    // loop through array to set gridArea
    for (let i = 0; i < targetArray.length; i++) {
        let element = targetArray[i];
        // dynamic classes, to make this scalable will be in a future update.
        switch(true) {
            case (sectionName === "portfolio" && i < 1):
                element.id = "mainFeature";
                break;
            case(sectionName === "portfolio" && i <= 3):
                element.id = "secondary" + i;
                break;
            case(sectionName === "portfolio" && i < 7):
                element.id = "tertiary" + i;
                break;
            case(sectionName === "contact" && i < 1):
                element.id = "mainContact";
                break;
            case(sectionName === "contact" && i < 2):
                element.id = "emailForm";
                break;
            case(sectionName === "contact" && i < 3):
                element.id = "links";
                element.innerText = aboutMeText;
                break;
            case(sectionName === "contact" && i < 7):
                element.id = "icon" + i;
                break;
        }
    }
    appendDivs(sectionName, targetArray);
    
}

// put divs on screen
function appendDivs(sectionName, targetArray) {
    
    if (sectionName === "portfolio") {
        targetArray.forEach((element) =>{
            portfolioWIndow.appendChild(element);
        });
    } else if (sectionName === "contact") {
        targetArray.forEach((element) => {
            contactWindow.appendChild(element);
        })
    };

}

// generate containers for section content
function generateDivs(sectionName) {
    // create elements depending on input, then position.
    switch (sectionName) {
        case "portfolio":
            createElements(sectionName, PORTFOLIO_DIV_ARRAY, portRequires);
            positionDivs(sectionName, PORTFOLIO_DIV_ARRAY);
            break;
        case "contact":
            createElements(sectionName, CONTACT_DIV_ARRAY, contactRequires);
            positionDivs(sectionName, CONTACT_DIV_ARRAY);
    }
    return;
}

// call functions
portfolioWIndow.onload = generateDivs("portfolio");
contactWindow.onload = generateDivs("contact");

// PORTFOLIO LINKS AND FUNCTIONS ------------------------------------------------------------------------------------------------

// Create some simple CSS art to display a "notice board" coming soon.
function comingSoon(div) {
    div.style.backgroundImage = "url(./assets/images/manadacrystal.png)";
    div.style.backgroundColor = "white";
    div.style.backgroundRepeat = "no-repeat";
    div.style.backgroundPosition = "center";
    div.style.paddingTop = "10px";
    div.innerText = "Coming Soon!";
    div.style.textAlign = "center";
    div.title = "comingSoon";
}

// Generate content dynamically using object array
function portfolioContent() {
    // I could look at other loops but for ease of writing, I went with the for loop
    for (let i = 0; i < PORTFOLIO_DIV_ARRAY.length; i++) {
        if (PORTFOLIO_OBJECTS[i].name === "Coming Soon") {
            comingSoon(PORTFOLIO_DIV_ARRAY[i]);
        } else {
            // Create and style the banner
            let titleBanner = document.createElement('div');

            titleBanner.innerText = PORTFOLIO_OBJECTS[i].name;
            titleBanner.style.textAlign = "center";
            titleBanner.style.zIndex = "0";
            titleBanner.style.fontSize = "1rem";
            titleBanner.style.padding = "10px";
            titleBanner.style.height = "10%";
            titleBanner.style.backgroundColor = "#EFC4ED";
            titleBanner.style.border = "4px solid purple";
            titleBanner.style.position = "relative";

            // Add and style the background -- IMPORTANT, I forgot about backticks here, useful to remember these
            PORTFOLIO_DIV_ARRAY[i].style.backgroundImage = `url("${PORTFOLIO_OBJECTS[i].image}")`;
            PORTFOLIO_DIV_ARRAY[i].style.backgroundPosition = "bottom";
            PORTFOLIO_DIV_ARRAY[i].style.backgroundSize = "150%";
            PORTFOLIO_DIV_ARRAY[i].style.backgroundRepeat = "none";
            PORTFOLIO_DIV_ARRAY[i].title = PORTFOLIO_OBJECTS[i].name;

            // Add links to each element
            PORTFOLIO_DIV_ARRAY[i].onclick = function() {
                window.open(PORTFOLIO_OBJECTS[i].link, '_blank');
            };

            // Append the banner to the parent container
            PORTFOLIO_DIV_ARRAY[i].appendChild(titleBanner);
        }
    }
    return;
}

portfolioContent();


// CONTACT FORM GENERATION AND ICONS --------------------------------------------------------------------------------------------
let emailFormElement = document.getElementById('emailForm');

function generateForm() {
    let formElement = document.createElement('form');
    let nameInput = document.createElement('input');
    let emailInput = document.createElement('input');
    let textInput = document.createElement('input');
    let sendButton = document.createElement('button');

    formElement.className = "formElement";

    nameInput.className = "nameGrid";
    nameInput.type = "text";
    // nameInput.name = "sname";
    nameInput.placeholder = "Your Name:";

    emailInput.className = "emailGrid";
    emailInput.type = "email";
    emailInput.placeholder = "Your Email:";
    
    textInput.className = "textGrid";
    textInput.placeholder = "Your Message:";
    
    sendButton.className = "sendGrid";
    sendButton.innerText = "Send Email";
    sendButton.type = "submit";
    sendButton.value = "Send";

    formElement.appendChild(nameInput);
    formElement.appendChild(emailInput);
    formElement.appendChild(textInput);
    formElement.appendChild(sendButton);

    emailFormElement.appendChild(formElement);
}

generateForm();

// Create the icons for contact section -----------------------------------------------------------------------------------------
function generateIcons() {
    const iconArray = [
        '<a href="https://www.linkedin.com/in/ian-scott-6112ba258/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>',
        '<a href="https://github.com/Jaycossey" target="_blank"><i class="fa-brands fa-github"></i></a>',
        '<a href="https://stackoverflow.com/users/20585015/jaycossey" target="_blank"><i class="fa-brands fa-stack-overflow"></a></i>',
        '<a href="https://codepen.io/Jaycossey" target="_blank"><i class="fa-brands fa-codepen"></i></a>'
    ]

    for (let i = 3; i < CONTACT_DIV_ARRAY.length; i++) {
        CONTACT_DIV_ARRAY[i].innerHTML = (iconArray[i - 3]);
    }
}

generateIcons();


// ANIMATION IN BANNER ----------------------------------------------------------------------------------------------------------

// Khayman Animation
// Create reference to canvas and context
const playerCanvas = document.getElementById('khayman');
const playerCtx = playerCanvas.getContext('2d');

// Set default state for sprite
let playerState = 'run';

// Canvas width and height
const PLAYER_CANVAS_WIDTH = playerCanvas.width = 32;
const PLAYER_CANVAS_HEIGHT = playerCanvas.height = 32;

// assign spritesheet
const playerSprite = new Image();
playerSprite.src = "./assets/images/khayman-spritesheet.png";

// assign spritesheet frame width and height
const spriteWidth = 32;
const spriteHeight = 32;

// declare and assign framerates
let playerFrame = 0;
const staggerFrames = 6;

// set animation states and array
const spriteAnimations = [];
const animationStates = [
    {
        name: 'run',
        frames: 7
    },
    {
        name: 'jump',
        frames: 7
    }
];

// set frame locations on spritesheet
animationStates.forEach((state, index) => {
    // create array for each of the states locations
    let frames = {
        loc: [],
    }
    // for each of the total frames required, assign the locations
    for (let i = 0; i < state.frames; i++) {
        let positionX = i * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    // assign the locations to each state
    spriteAnimations[state.name] = frames;
});

// Animate player sprite
function playerAnimate() {
    // clear current frame
    playerCtx.clearRect(0, 0, PLAYER_CANVAS_WIDTH, PLAYER_CANVAS_HEIGHT);
    // funky maths to assign position of the current sprite frame
    let position = Math.floor(playerFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;

    // draw the new frame using the assigned position of each frame
    playerCtx.drawImage(playerSprite, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    playerFrame++;
    requestAnimationFrame(playerAnimate);
}

playerAnimate();

// Parallax Background Animation
// Create reference to canvas and context 2d
const backgroundCanvas = document.getElementById('parallax-bg');
const bgCtx = backgroundCanvas.getContext('2d');

// Declare canvas width and heights
const BG_CANVAS_WIDTH = backgroundCanvas.width;
const BG_CANVAS_HEIGHT = backgroundCanvas.height;

// Set speed of the spritesheet animation
let bgSpeed = 3;
let bgFrame = 0;

// Declare and set source for each layer
const bgLayer1 = new Image();
bgLayer1.src = "./assets/images/grassLayer1.png";
const bgLayer2 = new Image();
bgLayer2.src = "./assets/images/treeLayer1.png";
const bgLayer3 = new Image();
bgLayer3.src = "./assets/images/bg-layer-5.png";

// Create classes for each layer
class Layer {
    // set each layer's attributes with this keyword
    constructor(image, speedModifier) {
        this.x = 0;
        this.y = 0;
        this.width = BG_CANVAS_WIDTH;
        this.height = BG_CANVAS_HEIGHT;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = bgSpeed * speedModifier;
    }
    // when the object update function is called, move the layer at set speeds and frames
    update() {
        this.speed = bgSpeed * this.speedModifier;
        this.x = bgFrame * this.speed % this.width;
    }
    // draw the new position on the canvas
    draw() {
        // draw on canvas with new, updated parameters. 
        bgCtx.drawImage(this.image, this.x, this.y, this.width, this.height);
        // draw a second time to prevent gaps as the image resets
        bgCtx.drawImage(this.image, this.x + this.width - 1, this.y, this.width, this.height);
    }
}

// Set the layers with the images
const layer1 = new Layer(bgLayer1, 1);
const layer2 = new Layer(bgLayer2, 0.75);
const layer3 = new Layer(bgLayer3, 0.5);

// store the variables in an array
const bgObjects = [layer3, layer2, layer1];

// Animate the layers on the canvas, providing infinite loop to handle the constant movement.
function animateBackground() {
    // clear current frame
    bgCtx.clearRect(0, 0, BG_CANVAS_WIDTH, BG_CANVAS_HEIGHT);

    // Update all layers in the array by calling their assigned functional properties
    bgObjects.forEach(object => {
        object.update();
        object.draw();
    });

    // reduce frame, otherwise the animation will move right
    bgFrame--;
    // recursive call to provide the infinite loop
    requestAnimationFrame(animateBackground);
}

animateBackground();