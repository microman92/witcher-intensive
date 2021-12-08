const burgerMenu = (option) =>{
    const {
    selectorBurger = '.burger',
    activeBurger = 'burger__active',
    selectorMenu,
    openMenuSelector
 } = option

    const burger =document.querySelector(selectorBurger);
    const menu = document.querySelector(selectorMenu);

    burger.addEventListener('click', () => {
        burger.classList.toggle(activeBurger),
        menu.classList.toggle(openMenuSelector)
    })

};




export default burgerMenu;