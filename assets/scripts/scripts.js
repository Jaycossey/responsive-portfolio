// SECTION STYLING AND CREATION --------------------------------------------------------------------------------------------

// GLOBALS ---------------------------------
let portfolioWIndow = document.getElementById('portfolio');
let contactWindow = document.getElementById('contact');

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
        image: "../images/touch-grass.PNG"     
    },
    {
        name: "Settlement Generator",
        link: "https://codepen.io/Jaycossey/pen/zYmJgZw",
        image: "../images/settlement.PNG"
    },
    {
        name: "Dethklok Quote Machine",
        link: "https://codepen.io/Jaycossey/pen/dyjdmWG",
        image: "../images/dethklok-quote.PNG"
    }
]

// Storage for about me text
const aboutMeText = "If you would like to work with me, you can fill out the form, or click on any of the links below.\nPlease note, this is a work in progress.";

// create elements and push to arrays
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
/**
 * TOMORROW MAIN FOCUS!!!!!
 *  - need to apply the bg images (screenshots) to each div within the portfolio section
 *  - need to make sure they are all links to their respective live pages/ codepens.
 *  - can do this with JS to save myself time, loop through the array and if project exists,
 *          - then apply that bg image and link to the div. 
 *          - remember to add an alt attribute to all images 
 *          - remember to add TITLE to each of the divs, could do an append 'p' element to make it simple. 
 *          - use OOP to generate titles depending on position of the array values. new Title(dethklok) etc. 
 *      I have now got an array of objects, each with name, link and title. I can add to this array as needed.
 *     
 * Pseudocode:
 *      For each div in portfolio,
 *          iterate through and add the corresponding images and links
 *      if there is no value in (objectarray[i]) (divarray[j]) t
 *          then return "coming soon" div, style with JS for speed and automation. 
 */


// CONTACT FORM GENERATION AND ICONS --------------------------------------------------------------------------------------------
let emailFormElement = document.getElementById('emailForm');

function generateForm() {
    let nameInput = document.createElement('input');
    let emailInput = document.createElement('input');
    let textInput = document.createElement('input');
    let sendButton = document.createElement('button');

    nameInput.className = "nameGrid";
    nameInput.placeholder = "Your Name:";

    emailInput.className = "emailGrid";
    emailInput.placeholder = "Your Email:";
    
    textInput.className = "textGrid";
    textInput.placeholder = "Your Message:";
    
    sendButton.className = "sendGrid";
    sendButton.innerText = "Send Message"

    emailFormElement.appendChild(nameInput);
    emailFormElement.appendChild(emailInput);
    emailFormElement.appendChild(textInput);
    emailFormElement.appendChild(sendButton);


}

generateForm();

// Create the icons for contact section -----------------------------------------------------------------------------------------
function openURL(url) {
    console.log("openlink " + url);
}

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

// // This is for a future update. Currently the banner class will only display text / gradient

// // // Khayman Animation
// const playerCanvas = document.getElementById('khayman');


// // Parallax Background Animation
// const BackgroundCanvas = document.getElementById('parallax-bg');

