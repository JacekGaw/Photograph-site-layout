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
let sections;
window.onload = () => {
    sections = 
    [
        { "sectionName": "header", "offsetTop": document.querySelector('#header').offsetTop },
        { "sectionName": "offer", "offsetTop": document.querySelector('#offer').offsetTop },
        { "sectionName": "portfolio", "offsetTop": document.querySelector('#portfolio').offsetTop },
        { "sectionName": "pricing", "offsetTop": document.querySelector('#pricing').offsetTop },
        { "sectionName": "contact", "offsetTop": document.querySelector('#contact').offsetTop }
    ];
}
window.addEventListener('resize', () => {
    sections = 
    [
        { "sectionName": "header", "offsetTop": document.querySelector('#header').offsetTop },
        { "sectionName": "offer", "offsetTop": document.querySelector('#offer').offsetTop },
        { "sectionName": "portfolio", "offsetTop": document.querySelector('#portfolio').offsetTop },
        { "sectionName": "pricing", "offsetTop": document.querySelector('#pricing').offsetTop },
        { "sectionName": "contact", "offsetTop": document.querySelector('#contact').offsetTop }
    ];
});

document.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset;
    let i = 0;
    console.log(i);
    
    scrollTop < sections[1]["offsetTop"] ? (
        sections.forEach(() => {
            document.querySelector('a[href="#'+sections[i]['sectionName']+'"]').classList.remove("item__link--active");
            i++;
        }),i=0)
    : (
        scrollTop >= sections[1]["offsetTop"] && scrollTop < sections[2]["offsetTop"] ? (
            sections.forEach(() => {
                document.querySelector('a[href="#'+sections[i]['sectionName']+'"]').classList.remove("item__link--active");
                i++;
            }),i=0,
            document.querySelector('a[href="#'+sections[1]['sectionName']+'"]').classList.add("item__link--active"))
        : (
            scrollTop >= sections[2]["offsetTop"] && scrollTop < sections[3]["offsetTop"] ? (
                sections.forEach(() => {
                    document.querySelector('a[href="#'+sections[i]['sectionName']+'"]').classList.remove("item__link--active");
                    i++;
                }),i=0,
                document.querySelector('a[href="#'+sections[2]['sectionName']+'"]').classList.add("item__link--active"))
            : (
                scrollTop >= sections[3]["offsetTop"] && scrollTop < sections[4]["offsetTop"] ? (
                    sections.forEach(() => {
                        document.querySelector('a[href="#'+sections[i]['sectionName']+'"]').classList.remove("item__link--active");
                        i++;
                    }),i=0,
                    document.querySelector('a[href="#'+sections[3]['sectionName']+'"]').classList.add("item__link--active"))
                : (
                    scrollTop >= sections[4]["offsetTop"] ? (
                        sections.forEach(() => {
                            document.querySelector('a[href="#'+sections[i]['sectionName']+'"]').classList.remove("item__link--active");
                            i++;
                        }),i=0,
                        document.querySelector('a[href="#'+sections[4]['sectionName']+'"]').classList.add("item__link--active"))
                    : (
                        sections.forEach(() => {
                            document.querySelector('a[href="#'+sections[i]['sectionName']+'"]').classList.remove("item__link--active");
                            i++;i=0;
                        })
                    )
                )
            )
        )
    )

});