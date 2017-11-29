export const HAMBURGER_CLICK = "HAMBURGER_CLICK";
export const hamburgerClick = boolean => ({
    type: HAMBURGER_CLICK,
    boolean
});

export const SCROLL_AT_TOP = "SCROLL_AT_TOP";
export const scrollAtTop = boolean => ({
    type: SCROLL_AT_TOP,
    boolean
});

export const COLLAPSE_MENU = "COLLAPSE_MENU";
export const collapseMenu = (click) => ({
    type: COLLAPSE_MENU,
    click
});

export const TOGGLE__HAMBURGER_MENU = "TOGGLE__HAMBURGER_MENU";
export const ToggleMenu = (click) => ({
    type: TOGGLE__HAMBURGER_MENU,
    click
});
