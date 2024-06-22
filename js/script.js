var button = document.querySelector(".btn");                  //selecting the button tag using its class name "btn"           
var p = document.querySelector(".para");                      //selecting the p tag using its class name "para" 
button.addEventListener("click", () => {                      // adding event listeners click  to button
    fetch("https://catfact.ninja/fact")                       // fetching api using promise
        .then((res) => res.json())                            // converting the response to json
        .then((data) => {
            p.textContent = data.fact;                        //fetching the facts from api and passing it to the p tag using textcontent
            p.classList.add("show");                          //adding class name show
        })
        .catch((error) => {                                   // adding catch if the api cant be fetch which returns an error
            console.error("Error fetching data:", error);
        });
});