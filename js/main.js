//********************* [ NanBar ]******************** */

// let nav_links = document.querySelectorAll(`ul li a`);

// nav_links.forEach((element) => {
//     element.onclick = () => {
//         nav_links.forEach((element) => {
//             element.classList.remove('active');
//         });
//         element.classList.add('active');

//     }
// });

let megaMenu = document.querySelector(".mega-menu");
let navLinks = document.querySelectorAll(".nav-link");
console.log(navLinks[3]);
navLinks[3].addEventListener("click", (event) => {
  megaMenu.classList.add("show-mega-menu");
  event.preventDefault();
});

// navLinks.forEach((element) => {
//   element.onclick = () => {
//     navLinks.forEach((element) => {
//       element.classList.remove("active");
//     });
//     element.classList.add("active");
//   };
// });

// megaMenu.classList.add("mega-menu-closed");
// console.log(megaMenu);
// console.log(navLinks );

// navLink.onclick = () => {
//     megaMenuLink.classList.add('mega-menu-open');
// }

// nashowMegaMenuvLink.onclicK = () => {
// megaMenu.classList.add('mega-menu-open');
// megaMenu.classList.add('mega-menu-open');
// };

/* ****************************************************************
 * ********************* [ OUR SKILLS - part - 7 -] ***********************
 *  */
// Access to progress element
let progressDegree = document.querySelectorAll(".progress-degree");
console.log(progressDegree);

let i = 0;
progressDegree.forEach((Element) => {
  let degreeValue = document.querySelectorAll(".degree-value")[i].innerHTML;
  // console.log(degreeValue);
  Element.style.cssText = `
    width: ${degreeValue}
    `;
  i++;
});

/* ****************************************************************
 * ******************* [ LATEST EVENTS - part - 9 -] ***********************
 *  */
let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let second = document.querySelector(".second");
console.log(days);
console.log(hours);
console.log(minutes);
console.log(second);
let date = new Date();
// days.innerHTML = date.getDay();
// hours.innerHTML = date.getHours();
// minutes.innerHTML = date.getMinutes();
// second.innerHTML = date.getSeconds();
