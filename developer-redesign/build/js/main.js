const pinkGradientButton = document.querySelector('.sign-up__button')
const inputContainer = document.querySelector('#input')
const arrow = document.createElement('div')
const documentationLink = document.querySelector('.navigation__documentation')
const navOptions = document.querySelector('.navigation__options')
const secondaryNav = document.querySelector('.navigation-secondary__button')
const secondaryNavLinks = document.querySelector('.navigation-secondary__links')
const secondaryNavContainer = document.querySelector('.navigation-secondary')

arrow.classList.add('arrow-left')

secondaryNav.addEventListener('click', showSecondaryMenu)
documentationLink.addEventListener('mouseover', mouseOver)
documentationLink.addEventListener('mouseout', mouseOut)

pinkGradientButton.addEventListener('click', () => {
  inputContainer.classList.add('expanded')
  pinkGradientButton.innerText = "Sign up"
  pinkGradientButton.appendChild(arrow)
})

function showSecondaryMenu () {
  if (!secondaryNavLinks.classList.contains('menu-on')) {
    secondaryNavLinks.classList.add('menu-on')
    secondaryNavContainer.classList.add('background-color')
  } else {
    secondaryNavLinks.classList.remove('menu-on')
    secondaryNavContainer.classList.remove('background-color')
  }
}

function mouseOver () {
  navOptions.classList.add('visible')
}

function mouseOut () {
  navOptions.classList.remove('visible')
}

jwplayer("player").setup ({
   "file": "//content.jwplatform.com/manifests/rTTGvOdA.m3u8",
   "image": "",
   "title": "Super Cool Video",
   "description": "This is a JW Prototype Video",
   "autostart": true
});
