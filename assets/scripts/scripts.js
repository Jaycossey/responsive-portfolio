// Functions needed (will code these once structure is made)
/**
 * Profile image link (onclick handler)
 *  -https://www.linkedin.com/in/ian-scott-6112ba258/
 * 
 * Portfolio Links
 * 
 * Contact links
 */

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


// create elements and push to arrays
function createElements(sectionName, targetArray, divsNeeded) {
    // variables to allow some scalability
    for (let i = 0; i < divsNeeded; i++) {
        // element
        let div = document.createElement('div');
        // unique id + class specifications
        div.id = sectionName + i;
        // push to array
        targetArray.push(div);
    }

    positionDivs(sectionName, targetArray);
    return;
}

// apply the styles / grids to the divs
function positionDivs(sectionName, targetArray) {

    targetArray.forEach((element) => {
        element.style.border = "2px dashed orange";
        element.style.height = "100%";
        element.style.width = "100%";
    });

    // loop through array to set gridArea
    for (let i = 0; i < targetArray.length; i++) {
        let element = targetArray[i];
        switch(true) {
            case (sectionName === "portfolio" && i < 1):
                element.className = "mainFeature";
                break;
            case(sectionName === "portfolio" && i <= 3):
                element.className = "secondary" + i;
                break;
            case(sectionName === "portfolio" && i < 7):
                console.log(element);
                element.className = "tertiary" + i;
                break;
            case(sectionName === "contact" && i < 1):
                element.className = "mainContact";
                break;
            case(sectionName === "contact" && i < 2):
                element.className = "emailForm";
                break;
            case(sectionName === "contact" && i < 3):
                element.className = "links";
                break;
            case(sectionName === "contact" && i < 7):
                element.className = "icon" + i;

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