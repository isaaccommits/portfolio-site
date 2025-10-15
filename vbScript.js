// Website Name - Make sure to set this!
let siteName = "Isaac C.";

// URL Info for Generating Links
let currentURL = window.location.pathname;
let relativePath = ".";

// GENERATE NAVBAR //////////////////////////////////////////

// Open navbar
let navHTML = '<nav class="navbar navbar-expand-lg bg-body-tertiary"><div class="container-fluid">';

// Add site name
navHTML += '<a class="navbar-brand" href="' + relativePath + '/index.html">'+ siteName + '</a>';

// Add navbar toggle, etc.
navHTML += '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">                <span class="navbar-toggler-icon"></span>            </button>            <div class="collapse navbar-collapse" id="navbarNav">';

// Add Top link
navHTML += '<ul class="navbar-nav"><li class="nav-item"><a class="nav-link" aria-current="page" href="' + relativePath + '/index.html">Home</a></li>';
navHTML += '<li class="nav-item"><a class="nav-link" href="' + relativePath + '/english.html">English Work</a></li>';
navHTML += '<li class="nav-item"><a class="nav-link" href="' + relativePath + '/code.html">Programming Work</a></li>';

// Close navbar
navHTML += '</ul></div></div></nav>';

// HTML INSERT //////////////////////////////////////////

// Insert navbar
// if (document.getElementById("navDiv")) {
//     document.getElementById("navDiv").innerHTML = navHTML;
// }

// Dynamically set the <title> tag
if (document.title === "Site Title") {
    document.title = siteName;
}