const burger = (menuSelector, burgerSelector) => {
    const menuElement = document.querySelector(menuSelector);
    const burgerElement = document.querySelector(burgerSelector);

    menuElement.style.display = 'none';

    burgerElement.addEventListener('click', (e) => {
        if (menuElement.style.display === 'none' && window.innerWidth < 993) {
            menuElement.style.display = 'block';
        } else {
            menuElement.style.display = 'none';
        }
    });

    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            menuElement.style.display = 'none';
        }
    });
}

export default burger;