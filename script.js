(
    function name(params) {

        // 🍀const

        const outputElemA = document.querySelector('.output_a');
        const outputElemB = document.querySelector('.output_b');
        const outputElemC = document.querySelector('.output_c');
        const outputElemD = document.querySelector('.output_d');
        const outputElemE = document.querySelector('.output_e');

        const pokeElem = document.querySelector('.poke');
        let pokeElemGBCR; /* js 30 */

        // init. js 10, js 30
        window.addEventListener("scroll", init);

        function init(params) {
            showValue();
            outputHandler();
        }

        // 🍀js 10. scroll and showValue function
        //🦄window.pageYOffset
        //🦄getBoundingClientRect() , getBoundingClientRect().top;
        function showValue() {

            // pokeElemGBCR = pokeElem.getBoundingClientRect().top;

            // js 10 
            if (pokeElemGBCR < window.innerHeight * 0.2) {
                pokeElem.classList.add("zoom");
            } else {
                pokeElem.classList.remove("zoom");
            }
        }

        /*🍀 js 30 scroll and outputHandler */
        function outputHandler() {

            // console.log(pokeElem.getBoundingClientRect());
            // console.log(pokeElem.getBoundingClientRect().top);
            // console.log(window.innerHeight)
    
            pokeElemGBCR = pokeElem.getBoundingClientRect().top;
            outputElemC.innerHTML = pokeElemGBCR;

            outputElemD.innerHTML = window.pageYOffset;
            
            outputElemE.innerHTML = window.scrollY;
            

            outputElemA.innerHTML = window.innerHeight;
            outputElemB.innerHTML = pokeElem.offsetTop;

        

        }
    }
)();