"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*

    usage:
    screenDimension( "bg-black" , "w-50", "w-20", 500 ).style
    screenDimension( "bg-black" , "w-50", "w-20", 500 ).isDesktop


 */
const screenDimension = (both, mobile, desktop, mobilePx) => {
    if (mobilePx === undefined)
        mobilePx = 300;
    if (mobilePx >= window.innerWidth)
        return { style: `${both} ${mobile}`, isDesktop: false };
    else
        return { style: `${both} ${desktop}`, isDesktop: true };
};
exports.default = screenDimension;
