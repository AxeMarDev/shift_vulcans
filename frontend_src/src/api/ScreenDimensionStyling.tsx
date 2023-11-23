import React from "react";

/*

    usage:
    screenDimension( "bg-black" , "w-50", "w-20", 500 ).style
    screenDimension( "bg-black" , "w-50", "w-20", 500 ).isDesktop


 */


const screenDimension = (both:string, mobile:string,desktop:string,mobilePx?:number) =>{

    if ( mobilePx === undefined ) mobilePx = 300

    if ( mobilePx >= window.innerWidth)  return {style:`${both} ${mobile}`, isDesktop: false }
    else  return { style:`${both} ${desktop}`, isDesktop: true}
}

export default screenDimension