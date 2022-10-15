/*function incrementCount(){
    console.log("increment");
    let prevcount = document.getElementById
    ("count-el").innerText;
    let newCount = parseInt(prevcount) + 1;
    console.log(newCount);
    document.getElementById
    ("count-el").innerText = newCount


} */
  function changeCount(booL) {
    let prevcount = document.getElementById ("count-el").innerText;

    var newCount
    if (booL) {
        newCount = parseInt(prevcount) + 1;
    } else {
        newCount = parseInt(prevcount) - 1;
    }

    document.getElementById("count-el").innerText
     = newCount;
}
/*var a = 7

if (a>0){
    console.log("Positive");
    var tempNum = a%5;{
        console.log("rem: " + tempNum)
    }
} else if (a<0){
    console.log("Negative")
} else {
    console.log("Zero")
}*/