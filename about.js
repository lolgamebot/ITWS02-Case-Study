// Tabs functionality

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Mobile Navbar functionality

var sidemenyu = document.getElementById("sidemenu");

function openmenu() {
    sidemenyu.style.right = "0";
}

function closemenu() {
    sidemenyu.style.right = "-200px";
}

// Form Submission
// Kinuha lang sa online para sa form
const scriptURL = 'https://script.google.com/macros/s/AKfycbzXYdk8vZaRgG2rwXAxg2UcTjdt7oOcZX-Lbvs9aBWUR3boQmp9zsulQE0PjiOBzu-pYQ/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function() {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});

// Scroll to top functionality

function toggleScrollToTopButton() {
    const scrollToTopButton = document.querySelector('.to-top');
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

window.onscroll = function() {
    toggleScrollToTopButton();
};

window.onload = function() {
    toggleScrollToTopButton();
};

document.querySelector('.to-top').onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

//Circle Area Calculator
function calculateArea() 
{
    const radiusInput = document.getElementById('radius');
    const resultDiv = document.getElementById('result');
    const radius = parseFloat(radiusInput.value);

    if (isNaN(radius) || radius <= 0) {
        resultDiv.textContent = 'Please enter a valid positive number for the radius.';
        return;
    }

    const area = Math.PI * Math.pow(radius, 2);
    resultDiv.textContent = `Area: ${area.toFixed(2)} square units`;
}

function reset() {
    document.getElementById('radius').value = '';
    document.getElementById('result').textContent = 'Area will be shown here';
}