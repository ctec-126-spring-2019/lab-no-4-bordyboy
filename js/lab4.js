// lab4.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

function verse1(){
    let output = "<br> <h2>Verse 1</h2> <br> So many different versions of a word that’s been distorted <br> Twisted into something that it’s not <br> Yeah love’s just an expression, <br> No I don’t think that we get it <br> Cause the truth of the meaning’s been lost <br> I won’t live my whole life and be desensitized, missing all You have for me <br>";
    // your code here

    return output;
}

function verse2(){
    let output = "<br> <h2>Verse 2</h2> <br> I don’t understand it, no my mind can’t comprehend it <br> Something worth more than a billion is free <br> The sacrifice was given so my sin would be forgiven <br> Cause I’m loved unconditionally <br> I won’t live my whole life and be desensitized, missing all You have for me <br>";
    // your code here

    return output;
}

function chorus1(){
    let output = "<br> <h2>Chorus 1</h2> <br> Give me that love, that Jesus love <br> Give me that Jesus love <br> Give me that love, that Jesus love <br> Give me that Jesus love <br> No greater love, than Jesus love <br> His love’s more than enough <br> I’m lost without it, now I’ve found it <br> All about it, Jesus love <br>";
    // your code here

    return output;
}

function chorus2(){
    let output = " <br> <h2> Chorus 2 </h2> <br> Love came callin, came knockin <br> A young punk in these dunks, I’m rockin’ <br> Just 13 with that young boy, lean <br> No gotee, the face was clean <br> Dozens of friends, but then I ran with the cousins <br> Head to the sky, you could never tell me nothin’ <br> But You called, I heard and just soon enough <br> I got trucked by that Jesus Love <br>";
    // your code here

    return output;
}



function main(){
    let finalOutput = verse1()+chorus1()+verse2()+chorus2(); // used to build lyrics string
    // call verse and chorus functions
    // each verse/chorus should return text including HTML paragraph tags

    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput;
}

window.onload = function(){
    main();
}