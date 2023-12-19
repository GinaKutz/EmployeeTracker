var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches(".box")) {
    //getter for the data-state found in the html file
    var state = element.getAttribute("data-state")
    //conditional for if the data-state is hidden or visible

    if (state === "hidden") {

      element.textContent = element.dataset.number
      console.log(element.dataset.number)
      element.dataset.state ="visible"

    }
    else{
      element.textContent= "";
      element.setAttribute("data-state", "hidden")
    }
  }


  // TODO: Complete function
});


