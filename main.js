/* When a user hovers over any one of the boxes , highlight all of
the boxes with a different background color */
var box = document.getElementsByClassName("wrapper");

function highlight() {
    this.children[0].classList.toggle("highlight");
    this.children[1].classList.toggle("highlight");
    this.children[2].classList.toggle("highlight");
}

for(i=0; i < box.length; i++) {
    box[i].addEventListener("mouseenter", highlight);
    box[i].addEventListener("mouseleave", highlight);
}


/* When a user clicks on box #1 , have a message appear somewhere
on the page that says “Oooh - so close, but no cigar” by
appending a new DOM node */
var newPara1 = document.createElement("p");
newPara1.innerHTML = "Oooh - so close, but no cigar";

var one = document.getElementById("one");
one.addEventListener("click",
    function() {document.getElementById("main").appendChild(newPara1);
    }
);

/* When a user clicks on box #2 , have a message appear somewhere
on the page that says “DING DING DING - We have a winner” by
appending a new DOM node */
var newPara2 = document.createElement("p");
newPara2.innerHTML = "DING DING DING - We have a winner";

var two = document.getElementById("two");
two.addEventListener("click",
    function() {document.getElementById("main").appendChild(newPara2);
    }
);

/* When a user clicks on box #3 , have a message appear somewhere
on the page that says “Oops, butter luck next time” by appending
a new DOM node */


/* When any one of the three boxes are clicked , have a button
that says “Start Over” with an href of “index.html” appear
somewhere on the page by removing a hidden class and
resetting the page. */