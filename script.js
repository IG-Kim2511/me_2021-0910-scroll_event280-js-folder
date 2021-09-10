(
function name(params) {

    // 🍀const

    const outputElemA = document.querySelector('.output_a');
    const outputElemB = document.querySelector('.output_b');
    const outputElemC = document.querySelector('.output_c');

    const pokeElem = document.querySelector('.poke');
    let pokeElemGBCR; /* js 30 */
    let num = 0;


    // 🍀js 10. scroll and showValue function
    window.addEventListener("scroll", showValue);

    //🦄window.pageYOffset
    // 🦄getBoundingClientRect() , getBoundingClientRect().top;
    function showValue() {
        console.log(pokeElem.getBoundingClientRect());
        console.log(pokeElem.getBoundingClientRect().top);
             
        outputElemA.innerHTML = window.pageYOffset;
        outputElemB.innerHTML = pokeElem.offsetTop;

        /* js 30 */
        pokeElemGBCR =pokeElem.getBoundingClientRect().top;
        outputElemC.innerHTML = pokeElemGBCR;
        
    }


}
)();