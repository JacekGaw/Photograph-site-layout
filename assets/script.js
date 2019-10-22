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