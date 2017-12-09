
import system from '~/system';

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
export const toggleHamburgerMenu = (click) => ({
    type: TOGGLE__HAMBURGER_MENU,
    click
});

export const SEARCH = "SEARCH";
export const search = (url) => ({
    type: SEARCH,
    url
});

export const SET_ANNOTATION_STRING = "SET_ANNOTATION_STRING";
export const setAnnotationString = (annoString) => ({
    type: SET_ANNOTATION_STRING,
    annoString
});

export const ANNOTATE = 'ANNOTATE';

export function annotate(annoString) {
    return {
        type: ANNOTATE,
        promise: system.API.GET_OUTSIDE_RESOURCE(process.env.DBPEDIA_API, {text:annoString})
    }
}