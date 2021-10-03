// modify HTML elements
// document.getElementById() (older)
// document.querySelector() (newer, more powerful)


document.querySelector("#myButton").onclick = function() {

    const h1 = document.querySelector("#myH1");
    const undrline = document.createElement("u");
    undrline.innerText =  "Bye World!";
    //h1.innerText = "Bye World!";
    h1.innerText = " ";
    h1.append(undrline);


    const p = document.querySelectorAll(".myp");
   // p[1].innerText = "WHOAAAAAA!";
    p.forEach(element => element.innerText = "WHOAA!");

   // const button = document.querySelector("button");
    //button.remove();

   // const button = document.querySelectorAll("button");
    // button[2].remove();

    const button = document.querySelectorAll("button");
    button.forEach(element => element.remove());
   
}