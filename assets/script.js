const macyContainer = new Macy({
    container: '.macy__container',
    mobileFirst: true,
    columns: 2,
    breakAt: {
        400: 2,
        700: 3,
        1100: 4
    },
    margin: {
        x: 20,
        y: 20
    }
});

const scrollNav = new SmoothScroll('a[class*="item__link"]');
const scrollLogo = new SmoothScroll('a[href*="#header"]');


// const nav = document.querySelector('.nav');
// window.addEventListener('scroll', () => {
//     (window.scrollY > 0) ? nav.classList.add('nav--scroll');
// });