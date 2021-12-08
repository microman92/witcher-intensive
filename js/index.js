import burgerMenu from "./burger.js";
import tabs from "./tabs.js";
import renderTabs from "./renderTabs.js";


burgerMenu ({
    selectorMenu: '.nav__list',
    openMenuSelector: 'nav__list_active',
})
    tabs({
        selectorTabsButtons: '.tabs__btn',
        activeClassButton:'tabs__btn-active',
        selectorTabsElement: '.tabs__item',
        activeClassTab: 'tabs__item-active',
        callback: renderTabs,
    })