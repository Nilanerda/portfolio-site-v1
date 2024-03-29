window.onscroll = function() {
    hideWelcomePage();
    animateNavTabs();
};

function hideWelcomePage() {
    let welcomePage = document.getElementById('welcomePage');
    let header = document.getElementById('header');
    let rect = header.getBoundingClientRect();
    if (rect.top === 0) {
        welcomePage.style.display = 'none';
    }
}

function animateNavTabs() {
    const TOP_CONTENT_INDENT = 40;
    let sections = document.getElementsByClassName('main-content');
    let headerHeight = document.getElementById('header').getBoundingClientRect().height;
    for (let section of sections) {
        let rect = section.getBoundingClientRect();
        let id = section.id;
        if (rect.top <= headerHeight + TOP_CONTENT_INDENT  &&  rect.top + rect.height > headerHeight + TOP_CONTENT_INDENT) {
            document.querySelector('a[href*=' + id + ']').setAttribute('class', 'active');
        } else {
            document.querySelector('a[href*=' + id + ']').setAttribute('class', '');
        }
    }
}
function scrollOnClick(elementId) {
    let sectionTop = document.getElementById(elementId).offsetTop;
    let headerHeight = document.getElementById('header').getBoundingClientRect().height;
    window.scrollTo({top: sectionTop - headerHeight, behavior: "smooth"})
}

let navLinks = document.querySelectorAll('a[href*="#nav"]');
for (let navlink of navLinks) {
    navlink.addEventListener('click', function (e) {
        e.preventDefault();
        scrollOnClick(navlink.hash.substr(1));
    })
}