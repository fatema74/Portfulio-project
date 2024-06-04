let menuIcon = document.querySelector('.menu-icon');
let cancelIcon = document.querySelector('.cancel-icon');
let headerLinks = document.querySelector('.header-links');

menuIcon.addEventListener('click', function () {
  headerLinks.style.display = 'block';
  headerLinks.style.right = '0';
})

cancelIcon.addEventListener('click', function () {
  headerLinks.style.right = '-100vh';
  headerLinks.style.display = 'none';
})

// theme color change script
let themeInput = document.getElementById('theme');
const root = document.documentElement; //get the root element(<html></html>)
const primaryThemeColor = getComputedStyle(root).getPropertyValue('--primary-theme-color');
themeInput.value = primaryThemeColor;

themeInput.addEventListener('change', function () {
  // get the value of the input element when it changes
  const color = themeInput.value;
  document.documentElement.style.setProperty('--primary-theme-color', color);
})

// typing animation 
document.addEventListener('DOMContentLoaded', function () {
  const options = {
    Strings: ['DEVELOPER', 'WEB-DESIGNER'],
    typeSpeed: 150,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
  }
  const multiTextElement = document.querySelector('.multi-text');
  let currentTextIndex = 0;
  let currentText = '';
  let isDeleting = false;

  function type() {
    const fullText = options.Strings[currentTextIndex];
    if (isDeleting) {
      currentText = fullText.substring(0, currentText.length - 1)
    } else {
      currentText = fullText.substring(0, currentText.length + 1);
    }

    multiTextElement.textContent = currentText;

    let typeSpeed = options.typeSpeed;
    if (isDeleting) {
      typeSpeed /= 2; //faster when deleting
    }

    if (!isDeleting && currentText === fullText) {
      typeSpeed = options.backDelay;
      isDeleting = true;
    } else if (isDeleting && currentText === '') {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % options.Strings.length;
    }

    setTimeout(type, typeSpeed);
  }

  type();

})
  
// portfolio section

var tablinks = document.getElementsByClassName('tab-link');
var tabcontants = document.getElementsByClassName('tab-contant');

function opentab(tabname) {
  for(tablink of tablinks) {
    tablink.classList.remove('active-link');
  }
  for (tabcontant of tabcontants) {
    tabcontant.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add('active-tab')
}

// contact form
const scriptURL =
  'https://script.google.com/macros/s/AKfycbxdBEncitTpT_bYZ_bXTdu4c9YGFIZfgQVGN2A12znpAcXF24JlbobsW67zl7_K5Prq/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = 'Message sent successfully'
      setTimeout(function () {
        msg.innerHTML=''
      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message));
});