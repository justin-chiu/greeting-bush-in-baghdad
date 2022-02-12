// get HTML elements

let docElement = document.documentElement;
let body = document.querySelector('body');
let poemBlocks = document.querySelectorAll('.poem-block');
let stanzaButtons = document.querySelectorAll('.stanza-nav-button');
let scroller = document.querySelector('.page-scroller');




// global variables and constants

const idPrefix = { // id prefixes of repeated elements
    "stanza-button": "stz-nav-"
}

let defaultAnim = function (blockNum, dir, duration, callback) { // default animation for every poem block
    if (dir == "in") {
        poemBlocks[blockNum].classList.add("ready");
        poemBlocks[blockNum].classList.add("animate-in");

        setTimeout (function () {
            console.log("poem-blk-" + blockNum + " ON");
            callback();
        },duration);
    }
    else if (dir == "out") {
        poemBlocks[blockNum].classList.add("animate-out");

        setTimeout (function () {
            poemBlocks[blockNum].classList.remove("animate-in");
            poemBlocks[blockNum].classList.remove("animate-out");
            poemBlocks[blockNum].classList.remove("ready");
            console.log("poem-blk-" + blockNum + " OFF");
            callback();
        },duration);
    }
}

const poemBlockAnimations = [ // animations and custom instructions for each .poem-block 
    {
        "on-animation": function (callback) {
            defaultAnim (0, "in", 1500, callback);
        },
        "off-animation": function (callback) {
            defaultAnim (0, "out", 900, callback);
        }
    },
    {
        "on-animation": function (callback) {
            defaultAnim (1, "in", 5500, callback);
        },
        "off-animation": function (callback) {
            defaultAnim (1, "out",1000, callback);
        }
    },
    {
        "on-animation": function (callback) {
            console.log("poem-blk-2 ON");
            callback ();
        },
        "off-animation": function (callback) {
            console.log("poem-blk-2 OFF");
            callback ();
        }
    },
    {
        "on-animation": function (callback) {
            console.log("poem-blk-3 ON");
            callback ();
        },
        "off-animation": function (callback) {
            console.log("poem-blk-3 OFF");
            callback ();
        }
    },
    {
        "on-animation": function (callback) {
            console.log("poem-blk-4 ON");
            callback ();
        },
        "off-animation": function (callback) {
            console.log("poem-blk-4 OFF");
            callback ();
        }
    },
    {
        "on-animation": function (callback) {
            console.log("poem-blk-5 ON");
            callback ();
        },
        "off-animation": function (callback) {
            console.log("poem-blk-5 OFF");
            callback ();
        }
    },
    {
        "on-animation": function (callback) {
            console.log("poem-blk-6 ON");
            callback ();
        },
        "off-animation": function (callback) {
            console.log("poem-blk-6 OFF");
            callback ();
        }
    }
]
let activeBlock; // which part of the poem user is on
let transitionStatus = false; // indicates whether running transition
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




// set event listeners

window.addEventListener ("load", function () { // on load
    console.log(scrollerSetup()); // setup scroller on load
    transitionStatus = true;
    poemBlockAnimations[0]["on-animation"](function () {
        document.scrollingElement.scrollTop = scrollDistance;
        activeBlock = 0;
        transitionStatus = false;
        console.log("activeBlock = " + activeBlock);
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
    
            if (activeBlock < 6) {
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




// navigate to next, previous, or specific stanza

function nextBlock(stanzaFrom) { // when next stanza triggered
    if (transitionStatus == false) {
        transitionStatus = true;
        // run off-animation of current block
        poemBlockAnimations[stanzaFrom]["off-animation"](function () {
            // when previous function done, run on-animation of next block
            poemBlockAnimations[(stanzaFrom + 1)]["on-animation"](function () {
                // when completely done
                document.scrollingElement.scrollTop = scrollDistance;
                activeBlock = stanzaFrom + 1;
                transitionStatus = false;
                console.log("activeBlock = " + activeBlock);
            });
        });
    }
}

function prevBlock(stanzaFrom) { // when previous stanza triggered
    if (transitionStatus == false) {
        transitionStatus = true;
        // run off-animation of current block
        poemBlockAnimations[stanzaFrom]["off-animation"](function () {
            // when previous function done, run on-animation of previous block
            poemBlockAnimations[(stanzaFrom - 1)]["on-animation"](function () {
                // when completely done
                document.scrollingElement.scrollTop = scrollDistance;
                activeBlock = stanzaFrom - 1;
                transitionStatus = false;
                console.log("activeBlock = " + activeBlock);
            });
        });
    }
}

function toStanza(stanzaFrom, stanzaTo) { // when specific stanza triggered
    if (transitionStatus == false) {
        transitionStatus = true;
        stanzaTo = parseInt(stanzaTo.replace(idPrefix["stanza-button"], ""));
        // run off-animation of current block
        poemBlockAnimations[stanzaFrom]["off-animation"](function () {
            // when previous function done, run on-animation of previous block
            poemBlockAnimations[stanzaTo]["on-animation"](function () {
                // when completely done
                document.scrollingElement.scrollTop = scrollDistance;
                activeBlock = stanzaTo;
                transitionStatus = false;
                console.log("activeBlock = " + activeBlock);
            });
        });
    }
}

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