let mobileView = false;
let bergStatues = false;
let nav = document.querySelector('nav');
let ulNav = document.querySelector('nav ul');
let mobileNav = document.querySelector('.mobileNav');
let bergIcon = document.querySelector('.berg');
let bergSpan = document.querySelectorAll('.berg span');
let mobileNavMenu = document.querySelector('.menu');
checkWidth();

function checkWidth() {
    let width = window.innerWidth;
    if (width <= 768 && !mobileView) {
        mobileView = true;
        handleNavHide();
    }
    else if (width > 768 && mobileView) {
        mobileView = false;
        bergStatues === true ? berg() : null;
        handleNavHide();
    }
}

window.addEventListener('resize', checkWidth);

function handleNavHide() {
    if (mobileView) {
        ulNav.classList.add('hidden');
        mobileNav.classList.remove('hidden');
    }
    else {
        ulNav.classList.remove('hidden');
        mobileNav.classList.add('hidden');
    }
}

function berg() {
    if (!bergStatues) {
        bergStatues = true;
        bergSpan.forEach(e => e.style.width = '100%');
        mobileNavMenu.classList.remove('hidden');
        mobileNavMenu.style.opacity = '1'
    } else {
        bergStatues = false;
        let i = 0
        bergSpan.forEach(e => {
            i === 0 ? console.log()
                : i === 1 ? e.style.width = '75%'
                    : e.style.width = '50%'
            i++;
        });
        mobileNavMenu.style.opacity = '0'
        setTimeout(() => {
            mobileNavMenu.classList.add('hidden');
        }, 200);
    }
}

document.addEventListener('click', event => {
    const isClickInside = bergIcon.contains(event.target) || mobileNavMenu.contains(event.target);
    if (!isClickInside) berg();
});

document.querySelectorAll('.menu ul li a').forEach(e => {
    e.addEventListener('click', berg);
})

bergIcon.addEventListener('click', berg);