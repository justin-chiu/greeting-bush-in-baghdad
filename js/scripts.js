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
const poemBlockAnimations = [ // on/off functions for each .poem-block
    {
        "on-animation": function (callback) {
            console.log("poem-blk-0 ON");
            callback ();
        },
        "off-animation": function (callback) {
            console.log("poem-blk-0 OFF");
            callback ();
        }
    },
    {
        "on-animation": function (callback) {
            console.log("poem-blk-1 ON");
            callback ();
        },
        "off-animation": function (callback) {
            console.log("poem-blk-1 OFF");
            callback ();
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
let activeBlock = 0; // which part of the poem user is on
let transitionStatus = false; // indicates whether running transition
const scrollDistance = 300; // scroll distance to trigger next or previous transition




// set height of scrolling element to control scroll interactions

function scrollerSetup() {

    let newHeight = docElement.clientHeight + (scrollDistance * 2);

    scroller.style.height = newHeight + "px";
    document.scrollingElement.scrollTop = scrollDistance;

    return "scroller.style.height = " + scroller.style.height + ", document.scrollingElement.scrollTop = " + document.scrollingElement.scrollTop;
}

console.log(scrollerSetup()); // setup scroller on load

window.addEventListener('resize', function (e) { // should setup scroller whenever viewport is resized
    console.log(scrollerSetup());
});




// function controls easing of most animations

function runAnimation(property, prefix, suffix, fromValue, toValue, time, easing, doAfter) {

    const frameLength = 40; // 25 fps --> 40 milliseconds per frame

    const repsTotal = Math.round (time / frameLength); // how many frames needed
    const valueDiff = toValue - fromValue; // current value of property
    const increment = 1 / repsTotal; // each frame represents what portion of the animation (from 0 to 1)

    property = prefix + fromValue + suffix;
    var repsSoFar = 0; // how many times the interval function has run

    var intervalAnimation = setInterval(function () {

        if (repsSoFar >= repsTotal) { // when the function has repeated enough times
            if (doAfter !== null && doAfter !== undefined) {
                doAfter (); // callback
            }
            clearInterval (intervalAnimation); // will this work?
        }

        else {
            repsSoFar++;
            var incrementSoFar = repsSoFar * increment; // out of 1, how far along is the animation in terms of time?
            var valueAbs = easing (incrementSoFar); // out of 1, how far along is the animation, in terms of the property value?
            var valueReal = valueAbs * valueDiff; // converting the value out of 1 to a real value.

            property = prefix + valueReal + suffix; // setting the value.
        }

    }, frameLength);
}

// easing functions

function linear (x) {
    return x;
}

function easeInOutQuart (x) { // x is absolute progress of animation from 0 to 1
    return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
}




// set event listeners

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




// animate title and poet name on load

function sampleAnimation() {
    let startBlock = document.querySelector("#pm-blk-0");
    let startSubBlocks = startBlock.children;

    startBlock.classList.add("ready");

    for (let i = 0; i < startSubBlocks.length; i++) {
        startSubBlocks[i].classList.add("active"); // not animating on first try
    }
}

sampleAnimation();

// on load

function showHeader (callback) {



    /*runAnimation ( // trying to run an animation with custom easing
            document.querySelector('#poem-header').style.transform,
            "translateY(",
            "%);",
            -100,
            0,
            300,
            linear,
            callback
        );*/

}


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
Sketch main animations
√ Sequential function
Program main interactions
Program stanza
√ Easing functions
Program scroll down
Responsive
Info
Notes

*/