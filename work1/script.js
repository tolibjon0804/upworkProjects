const navigation = document.querySelector(".navigation");
const navItems = document.querySelector(".navigation__links");
const sectionDropdown = document.querySelectorAll(".section-dropdown");
const navigationNavItem = document.querySelectorAll(".navigation__navItem");
const dropdownTitle = document.querySelectorAll(".dropdown-title");
const inputs = document.querySelectorAll("input");
const requestAnchor = document.querySelectorAll(".request__anchor")

hamburger.addEventListener("change", function (e) {
  if (e.target.checked) {
    navigation.setAttribute(
      "style",
      `
    animation: overlayOpen 1s;
    animation-fill-mode: forwards;
    `
    );

    navItems.setAttribute(
      "style",
      `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 8rem;
    left: 50%;
    transform: translateX(-50%);
    animation: opacity 3s;
    animation-fill-mode: forwards;
    `
    );

    navigationNavItem.forEach((el) => {
      el.setAttribute(
        "style",
        `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      `
      );
    });

    dropdownTitle.forEach((el) => {
      el.setAttribute(
        "style",
        `
      height: none; 
      `
      );
    });

    sectionDropdown.forEach((el) => {
      el.setAttribute(
        "style",
        `
        position: relative;
        top: 0;
        `
      );
    });
  }

  if (!e.target.checked) {
    navigation.setAttribute(
      "style",
      `
    animation: overlayClose 1s;
    animation-fill-mode: forwards;
    `
    );
    navItems.setAttribute(
      "style",
      `
    display: none;
 
    `
    );
  }
});

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


requestAnchor.forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    })
  })
})