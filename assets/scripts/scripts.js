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
]

// Storage for about me text
const aboutMeText = "If you would like to work with me, you can fill out the form, or click on any of the links below.\nPlease note, this is a work in progress. Currently the form is not functional.";

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

// PORTFOLIO LINKS AND FUNCTIONS ------------------------------------------------------------------------------------------------0

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
            titleBanner.style.paddingTop = "5px";
            titleBanner.style.height = "10%";
            titleBanner.style.backgroundColor = "#EFC4ED";
            titleBanner.style.border = "4px solid purple";
            titleBanner.style.position = "relative";

            // Add and style the background -- IMPORTANT, I forgot about backticks here, useful to remember these
            PORTFOLIO_DIV_ARRAY[i].style.backgroundImage = `url("${PORTFOLIO_OBJECTS[i].image}")`;
            PORTFOLIO_DIV_ARRAY[i].style.backgroundPosition = "bottom";
            PORTFOLIO_DIV_ARRAY[i].style.backgroundSize = "150%";
            PORTFOLIO_DIV_ARRAY[i].style.backgroundRepeat = "none";

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

