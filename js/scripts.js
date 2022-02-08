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
        "on-animation": function () {
            console.log("poem-blk-0 ON");
        },
        "off-animation": function () {
            console.log("poem-blk-0 OFF");
        }
    },
    {
        "on-animation": function () {
            console.log("poem-blk-1 ON");
        },
        "off-animation": function () {
            console.log("poem-blk-1 OFF");
        }
    },
    {
        "on-animation": function () {
            console.log("poem-blk-2 ON");
        },
        "off-animation": function () {
            console.log("poem-blk-2 OFF");
        }
    },
    {
        "on-animation": function () {
            console.log("poem-blk-3 ON");
        },
        "off-animation": function () {
            console.log("poem-blk-3 OFF");
        }
    },
    {
        "on-animation": function () {
            console.log("poem-blk-4 ON");
        },
        "off-animation": function () {
            console.log("poem-blk-4 OFF");
        }
    },
    {
        "on-animation": function () {
            console.log("poem-blk-5 ON");
        },
        "off-animation": function () {
            console.log("poem-blk-5 OFF");
        }
    },
    {
        "on-animation": function () {
            console.log("poem-blk-6 ON");
        },
        "off-animation": function () {
            console.log("poem-blk-6 OFF");
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




// set event listeners

for (let i = 0; i < stanzaButtons.length; i++) { // navigate using stanza buttons
    stanzaButtons[i].addEventListener("click", function (e) {
        let stzBtnNum = stanzaButtons[i].getAttribute("id");
        console.log(toStanza(activeBlock, stzBtnNum));
    });
}

let scrollStop; // variable for firing function when user stops scrolling
window.addEventListener("scroll", function (e) { // navigate using scroll wheel

    // console.log("document.scrollingElement.scrollTop = " + document.scrollingElement.scrollTop)

    if (document.scrollingElement.scrollTop == 0) { // user scrolls up --> navigate to prev stanza
        
        if (activeBlock > 0) {
            console.log(prevBlock(activeBlock));
        }
        else {
            document.scrollingElement.scrollTop = scrollDistance;
        }
    }
    else if (document.scrollingElement.scrollTop == (scrollDistance * 2)) { // user scrolls down --> navigate to next stanza

        if (activeBlock < 6) {
            console.log(nextBlock(activeBlock));
        }
        else {
            document.scrollingElement.scrollTop = scrollDistance;
        }
    }
    else { // if user doesn't scroll far enough to trigger next/prev
        if (scrollStop) {
            clearTimeout(scrollStop);
        }
    
        scrollStop = setTimeout (function () {
            document.scrollingElement.scrollTop = scrollDistance;
        }, 60);
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




// navigate to next, previous, or specific stanza

function nextBlock(stanzaFrom) { // when next stanza triggered
    if (transitionStatus == false) {
        transitionStatus = true;
        // run off-animation of current block
        poemBlockAnimations[stanzaFrom]["off-animation"]();
        // when previous function done, run on-animation of next block
        poemBlockAnimations[(stanzaFrom + 1)]["on-animation"]();
        // when completely done
        document.scrollingElement.scrollTop = scrollDistance;
        activeBlock = stanzaFrom + 1;
        transitionStatus = false;
        return "activeBlock = " + activeBlock;
    }
}

function prevBlock(stanzaFrom) { // when previous stanza triggered
    if (transitionStatus == false) {
        transitionStatus = true;
        // run off-animation of current block
        poemBlockAnimations[stanzaFrom]["off-animation"]();
        // when previous function done, run on-animation of previous block
        poemBlockAnimations[(stanzaFrom - 1)]["on-animation"]();
        // when completely done
        document.scrollingElement.scrollTop = scrollDistance;
        activeBlock = stanzaFrom - 1;
        transitionStatus = false;
        return "activeBlock = " + activeBlock;
    }
}

function toStanza(stanzaFrom, stanzaTo) { // when specific stanza triggered
    if (transitionStatus == false) {
        transitionStatus = true;
        stanzaTo = parseInt(stanzaTo.replace(idPrefix["stanza-button"], ""));
        // run off-animation of current block
        poemBlockAnimations[stanzaFrom]["off-animation"]();
        // when previous function done, run on-animation of previous block
        poemBlockAnimations[stanzaTo]["on-animation"]();
        
        // when completely done
        document.scrollingElement.scrollTop = scrollDistance;
        activeBlock = stanzaTo;
        transitionStatus = false;
        return "activeBlock = " + activeBlock;
    }
}

/*

To do:

√ Experiment with colours
√ Experiment with images
Implement colours and images
Sketch main animations
Sequential function
Sketch main interactions
Easing functions
Program main interactions
Program stanza
Program scroll down
Responsive
Info
Notes

*/