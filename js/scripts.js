// get HTML elements

let docElement = document.documentElement;
let body = document.querySelector('body');
let poemBlocks = document.querySelectorAll('.poem-block');
let stanzaButtons = document.querySelectorAll('.stanza-nav-button');
let scroller = document.querySelector('.page-scroller');
let scrollPrompt = document.querySelector(".instruction-scroll-down");
let scrollText = document.querySelector(".scroll-down-text");
let scrollArrow = document.querySelector("#img-down-arrow");
let nav = document.querySelector("#navigation");
let header = document.querySelector("#poem-header");




// global variables and constants

const idPrefix = { // id prefixes of repeated elements
    "stanza-button": "stz-nav-"
}

let defaultAnim = function (blockNum, dir, duration, callback) { // default animation for every poem block
    if (dir == "in") { // animate in
        poemBlocks[blockNum].classList.add("ready"); // sets width and height of block
        poemBlocks[blockNum].classList.add("animate-in"); // class with animate-in CSS transitions

        setTimeout(function () {
            console.log("poem-blk-" + blockNum + " ON");
            callback();
        }, duration);
    }
    else if (dir == "out") { // animate out
        poemBlocks[blockNum].classList.add("animate-out"); // class with animate-out CSS transitions

        setTimeout(function () { // reset classList, log event
            poemBlocks[blockNum].classList.remove("animate-in");
            poemBlocks[blockNum].classList.remove("animate-out");
            poemBlocks[blockNum].classList.remove("ready");
            console.log("poem-blk-" + blockNum + " OFF");
            callback();
        }, duration);
    }
}

const poemBlockAnimations = [ // animations and custom instructions for each .poem-block 
    {
        "on-animation": function (callback) {
            defaultAnim(0, "in", 1500, callback);
        },
        "off-animation": function (callback) {
            defaultAnim(0, "out", 900, callback);
        }
    },
    {
        "on-animation": function (callback) {
            defaultAnim(1, "in", 7500, callback);
        },
        "off-animation": function (callback) {
            defaultAnim(1, "out", 1000, callback);
        },
    },
    {
        "on-animation": function (callback) {
            defaultAnim(2, "in", 10000, callback);
            setTimeout(function () {
                const waitingChars = document.querySelectorAll(".custom-js-2-1-0");
                let charNum = 0;
                let typing = setInterval(function () {
                    if (charNum < waitingChars.length) {
                        waitingChars[charNum].classList.add("animate-in");
                        charNum++;
                    }
                    else {
                        clearInterval(typing);
                    }
                }, 300);

            }, 5400);
        },
        "off-animation": function (callback) {
            defaultAnim(2, "out", 1600, callback);
            setTimeout(function () {
                const waitingChars = document.querySelectorAll(".custom-js-2-1-0");
                for (let i = 0; i < waitingChars.length; i++) {
                    waitingChars[i].classList.remove("animate-in");
                }
            }, 1600);
        }
    },
    {
        "on-animation": function (callback) {
            defaultAnim(3, "in", 9200, callback);


            setTimeout(function () {
                const rainedChars = document.querySelectorAll("#custom-js-3-0-0 > span");
                let charNum = 0;
                let rainedRipple = setInterval(function () {
                    if (charNum < rainedChars.length) {
                        rainedChars[charNum].classList.add("animate-in");
                        charNum++;
                    }
                    else {
                        clearInterval(rainedRipple);
                    }
                }, 50);
            }, 850);

            setTimeout(function () {
                const deathChars = document.querySelectorAll("#custom-js-3-0-1 > span");
                let charNum = 0;
                let deathRipple = setInterval(function () {
                    if (charNum < deathChars.length) {
                        deathChars[charNum].classList.add("animate-in");
                        charNum++;
                    }
                    else {
                        clearInterval(deathRipple);
                    }
                }, 50);
            }, 1300);

        },
        "off-animation": function (callback) {
            defaultAnim(3, "out", 1600, callback);
            setTimeout(function () {
                const rainedChars = document.querySelectorAll("#custom-js-3-0-0 > span");

                for (let i = 0; i < rainedChars.length; i++) {
                    rainedChars[i].classList.remove("animate-in");
                }

                const deathChars = document.querySelectorAll("#custom-js-3-0-1 > span");

                for (let i = 0; i < deathChars.length; i++) {
                    deathChars[i].classList.remove("animate-in");
                }

            }, 1600);
        }
    },
    {
        "on-animation": function (callback) {
            defaultAnim (4, "in", 8500, callback);

            setTimeout(function () {
                const frontierTown = document.querySelector("#custom-js-4-0-0");

                const flashTimes = [0, 100, 150, 200, 250];
                let flashIndicator = false;

                for (let i = 0; i < flashTimes.length; i++) {

                    setTimeout (function () {
                        if (flashIndicator == false) {
                            frontierTown.classList.add("animate-in");
                            flashIndicator = true;
                        }
                        else {
                            frontierTown.classList.remove("animate-in");
                            flashIndicator = false;
                        }
                    }, flashTimes[i]);
                }
            }, 1200);

            setTimeout(function () {
                const ourMarshal = document.querySelector("#pm-ln-4-0-1");

                const flashTimes = [0, 100, 150, 200, 250];
                let flashIndicator = false;

                for (let i = 0; i < flashTimes.length; i++) {

                    setTimeout (function () {
                        if (flashIndicator == false) {
                            ourMarshal.classList.add("animate-in");
                            flashIndicator = true;
                        }
                        else {
                            ourMarshal.classList.remove("animate-in");
                            flashIndicator = false;
                        }
                    }, flashTimes[i]);
                }
            }, 2800);

        },
        "off-animation": function (callback) {
            defaultAnim (4, "out", 2000, callback);
            document.querySelector("#custom-js-4-0-0").classList.add("animate-out");
            document.querySelector("#pm-ln-4-0-1").classList.add("animate-out");
            
            setTimeout(function () {
                document.querySelector("#custom-js-4-0-0").classList.remove("animate-in");
                document.querySelector("#pm-ln-4-0-1").classList.remove("animate-in");
                document.querySelector("#custom-js-4-0-0").classList.remove("animate-out");
                document.querySelector("#pm-ln-4-0-1").classList.remove("animate-out");
            },2000);
        }
    },
    {
        "on-animation": function (callback) {
            defaultAnim(5, "in", 10700, callback);
            scrollText.innerHTML = "back to top";
            scrollArrow.setAttribute("src", "img/arrow_scroll_up.svg");
            scrollText.classList.add("back-to-top");
        },
        "off-animation": function (callback) {
            defaultAnim(5, "out", 4000, callback);
            setTimeout (function () {
                scrollText.innerHTML = "scroll down";
                scrollArrow.setAttribute("src", "img/arrow_scroll_down.svg");
                scrollText.classList.add("back-to-top");
            }, 300);
        }
    }
]

let activeBlock; // which part of the poem user is on
let transitionStatus = true; // indicates whether running transition
const scrollDistance = 300; // scroll distance to trigger next or previous transition




// set height of scrolling element to control scroll interactions

function scrollerSetup() {

    let newHeight = docElement.clientHeight + (scrollDistance * 2);

    scroller.style.height = newHeight + "px";
    document.scrollingElement.scrollTop = scrollDistance;

    return "scroller.style.height = " + scroller.style.height + ", document.scrollingElement.scrollTop = " + document.scrollingElement.scrollTop;
}

window.addEventListener('resize', function (e) { // should setup scroller whenever viewport is resized
    console.log(scrollerSetup());
});




// scroll-down indicator

let arrowUp = true;
setInterval(function () {

    if (arrowUp == false) {
        scrollArrow.classList.remove("animate");
        scrollText.classList.remove("animate");
        arrowUp = true;
    }
    else {
        scrollArrow.classList.add("animate");
        scrollText.classList.add("animate");
        arrowUp = false;
    }
}, 1000);




// stanza-nav functions

function removeActiveStanza() {
    for (let i = 0; i < stanzaButtons.length; i++) {
        stanzaButtons[i].classList.remove("active");
        stanzaButtons[i].classList.add("inactive");
        stanzaButtons[i].classList.add("disabled");
    }
}

function setActiveStanza(active) {
    stanzaButtons[active].classList.remove("inactive");
    stanzaButtons[active].classList.add("active");
}

function enableStanza() {
    for (let i = 0; i < stanzaButtons.length; i++) {
        stanzaButtons[i].classList.remove("disabled");
    }
}




// set event listeners

window.addEventListener("load", function () { // on load
    console.log(scrollerSetup()); // setup scroller on load
    transitionStatus = true;
    header.classList.remove("hide");
    poemBlockAnimations[0]["on-animation"](function () {
        document.scrollingElement.scrollTop = scrollDistance;
        activeBlock = 0;
        console.log("activeBlock = " + activeBlock);
        setTimeout(function () {
            nav.classList.remove("hide");
            setActiveStanza(activeBlock);
            enableStanza();
            scrollPrompt.classList.add("active");
            transitionStatus = false;
        }, 1200);
    });
});

for (let i = 0; i < stanzaButtons.length; i++) { // navigate using stanza buttons
    stanzaButtons[i].addEventListener("click", function (e) {
        let stzBtnNum = stanzaButtons[i].getAttribute("id");
        toStanza(activeBlock, stzBtnNum);
    });
}

let scrollStop; // variable for firing function when user stops scrolling
window.addEventListener("scroll", function (e) { // navigate using scroll wheel

    // console.log("document.scrollingElement.scrollTop = " + document.scrollingElement.scrollTop)
    if (transitionStatus == false) {
        if (document.scrollingElement.scrollTop == 0) { // user scrolls up --> navigate to prev stanza

            if (activeBlock > 0) {
                prevBlock(activeBlock);
            }
            else {
                document.scrollingElement.scrollTop = scrollDistance;
            }
        }
        else if (document.scrollingElement.scrollTop == (scrollDistance * 2)) { // user scrolls down --> navigate to next stanza

            if (activeBlock < 5) {
                nextBlock(activeBlock);
            }
            else {
                document.scrollingElement.scrollTop = scrollDistance;
            }
        }
        else { // if user doesn't scroll far enough to trigger next/prev
            if (scrollStop) {
                clearTimeout(scrollStop);
            }

            scrollStop = setTimeout(function () {
                document.scrollingElement.scrollTop = scrollDistance;
            }, 60);
        }
    }
    else {
        document.scrollingElement.scrollTop = scrollDistance;
    }
});

// back to top
scrollText.addEventListener("click", function (e) {
    if (activeBlock == 5) {
        toStanza (activeBlock, "stz-nav-0");
    }
});




// navigate to next, previous, or specific stanza

function nextBlock(stanzaFrom) { // when next stanza triggered
    if (transitionStatus == false) {
        scrollPrompt.classList.remove("active");
        transitionStatus = true;
        // run off-animation of current block
        removeActiveStanza();
        poemBlockAnimations[stanzaFrom]["off-animation"](function () {
            // when previous function done, run on-animation of next block
            setActiveStanza(stanzaFrom + 1);
            poemBlockAnimations[(stanzaFrom + 1)]["on-animation"](function () {
                // when completely done
                document.scrollingElement.scrollTop = scrollDistance;
                activeBlock = stanzaFrom + 1;
                enableStanza();
                transitionStatus = false;
                scrollPrompt.classList.add("active");
                console.log("activeBlock = " + activeBlock);
            });
        });
    }
}

function prevBlock(stanzaFrom) { // when previous stanza triggered
    if (transitionStatus == false) {
        scrollPrompt.classList.remove("active");
        transitionStatus = true;
        // run off-animation of current block
        removeActiveStanza();
        poemBlockAnimations[stanzaFrom]["off-animation"](function () {
            // when previous function done, run on-animation of previous block
            setActiveStanza(stanzaFrom - 1);
            poemBlockAnimations[(stanzaFrom - 1)]["on-animation"](function () {
                // when completely done
                document.scrollingElement.scrollTop = scrollDistance;
                activeBlock = stanzaFrom - 1;
                enableStanza();
                transitionStatus = false;
                scrollPrompt.classList.add("active");
                console.log("activeBlock = " + activeBlock);
            });
        });
    }
}

function toStanza(stanzaFrom, stanzaTo) { // when specific stanza triggered
    if (transitionStatus == false) {
        scrollPrompt.classList.remove("active");
        transitionStatus = true;
        stanzaTo = parseInt(stanzaTo.replace(idPrefix["stanza-button"], ""));
        // run off-animation of current block
        removeActiveStanza();
        poemBlockAnimations[stanzaFrom]["off-animation"](function () {
            // when previous function done, run on-animation of previous block
            setActiveStanza(stanzaTo);
            poemBlockAnimations[stanzaTo]["on-animation"](function () {
                // when completely done
                document.scrollingElement.scrollTop = scrollDistance;
                activeBlock = stanzaTo;
                enableStanza();
                transitionStatus = false;
                scrollPrompt.classList.add("active");
                console.log("activeBlock = " + activeBlock);
            });
        });
    }
}

alert("This webpage is best viewed at a width of 1100px. Built in VS code and Brave.");

/*

To do:

√ Experiment with colours
√ Experiment with images
√ Implement colours and images
√ Sketch main animations
√ Sequential function
Program main interactions
Program stanza
√ Easing functions
Program scroll down
Responsive
Info
Notes

*/

/* transition object to set CSS transitions
[
    {
        property: "",
        duration: 0,
        easing: "",
        delay: 0,
        amount: ""
    }
]
*/

/* running CSS transitions using JS
function runTransition (node, trans, transAfter) {

    let transArray = [];

    for (let i = 0; i < trans.length; i++) {
        transArray.push([
            trans[i].property, 
            (trans[i].duration / 1000) + "s",
            trans[i].easing,
            (trans[i].delay / 1000) + "s"
        ].join(" "));
    }

    node.style.transition = transArray.join(", ") + ";";

    for (let i = 0; i < trans.length; i++) {
        node.style[trans[i].property] = trans[i].amount;
    }

    let afterTiming = 0;

    for (let i = 0; i < trans.length; i++) {
        if (afterTiming < (trans[i].duration + trans[i].delay)) {
            afterTiming = trans[i].duration + trans[i].delay;
        }
    }

    setTimeout (function () {
        transAfter ();    
    }, afterTiming);

}*/
