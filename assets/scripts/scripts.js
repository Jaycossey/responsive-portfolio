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

const MAIN_DIV_ARRAY = [];
const SEC_DIV_ARRAY = [];
const TER_DIV_ARRAY = [];

// Create main divs
function createMainDiv(sectionName) {
    console.log("main");
    // create container element for content
    let mainDiv = document.createElement('div');

    // classNames and id's
    mainDiv.id = sectionName + "-main";
    mainDiv.className = "mainDiv";

    MAIN_DIV_ARRAY.push(mainDiv);
    console.log(MAIN_DIV_ARRAY);

    return mainDiv;
}

// Create secondary divs
function createSecondaryDivs(sectionName, columnCount) {
    console.log("secfeature" + columnCount);
    for (let i = 0; i < columnCount; i++) {
        let newDiv = document.createElement('div');
        
        newDiv.id = sectionName + "-secondary" + columnCount;
        newDiv.className = sectionName + "Secondary";

        SEC_DIV_ARRAY.push(newDiv);
    }
    return;

}

// create tertiary divs
function createTertiaryDivs(sectionName, columnCount) {
    console.log("soon" + columnCount);
    return;
}

function generateFeatures(sectionName) {
    let mainFeature;
    let secondaryFeature;
    let comingSoon;
    
    // designed to be able to add different conditionals if more is added to the site.
    switch(sectionName) {
        case "portfolio":
            mainFeature = createMainDiv(sectionName);        
            secondaryFeature = createSecondaryDivs(sectionName, 3);
            comingSoon = createTertiaryDivs(sectionName, 3);
            break;
        case "contact":
            mainFeature = createMainDiv(sectionName);        
            secondaryFeature = createSecondaryDivs(sectionName, 2);
            comingSoon = createTertiaryDivs(sectionName, 4);
            break;
    }

    return mainFeature, secondaryFeature, comingSoon;
}

// attach all features to the sections in html
function attachFeatures() {
    let portfolio = generateFeatures("portfolio");
    let contact = generateFeatures("contact")
    portfolioWIndow.appendChild(portfolio);
    contactWindow.appendChild(contact);
    return;
}

portfolioWIndow.onload = attachFeatures();

// Too tired, missed huge logical error, I want to append within the functions rather
// than or at least as well as storing within the arrays. will handle this tomorrow.