/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// Selecting sections 
let sections = document.querySelectorAll('section'); 
// Counting the number of sections
const countSec = sections.length; 

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/* 
The onbeforeunload event occurs when the document is about to be unloaded.

This event allows you to display a message in a confirmation dialog box to inform the user whether to stay or leave the current page. 
*/
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}; 

function createListItem(){
        // Loop through sections
    for (let x = 0; x < countSec; x++){

        // Assign the navbar__list to ul Element
        let ul = document.getElementById("navbar__list");
        let addListItem = document.createElement('li');

        // Set a Class for the li items 
        addListItem.setAttribute('class','newlist');  

        let secName = document.createTextNode(`Section ${x + 1}`);
        let a = document.createElement('a');

        a.style.cssText = 'text-decoration: none; font-weight: bold';
        addListItem.appendChild(a);

        // Link to each section sections with the href 
        a.href = `#section${x + 1}`;
        a.appendChild(secName);

        // Append li items in the ul, then add styling
        ul.appendChild(addListItem);
        addListItem.style.cssText = 'margin-right: 15px; position: relative; right: 10px; padding: 15px 0 15px 0;'
        
    }

}
createListItem();

// Is the section in the viewport?
function checkViewPort(element){
    /* The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.  */
    let rect = element.getBoundingClientRect();
    return (rect.top); 
}

// add or remove active class based on the rect output from this function getBoundingClientRect().
function activeSection() {
    for (sec of sections){
        if(checkViewPort(sec) >= 0){
            if(!sec.classList.contains('your-active-class')){
                sec.classList.add('your-active-class');
        }
        }else{
            sec.classList.remove('your-active-class');
        }
    }
}


// Add event to apply the function based on the scroll
document.addEventListener('scroll', activeSection);

// Get button class
let btn = document.querySelector(".btn_scroll");

// Function to show the button after scrolling
window.onscroll = function() {scroll()};

function scroll() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}