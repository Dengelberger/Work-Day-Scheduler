//this tells us that we are using jQuery.

$(document).ready(function () {

    //establish current date and write on calendar page jumbotron.
    var date = $("#currentDay");
    currDateEl = moment().format("dddd, MMMM Do, YYYY");
    console.log(currDateEl);
    date.text(currDateEl);
})

//CLICK EVENTS FOR THE SAVE BUTTONS

for (var i = 9; i < 18; i++) {
    event.preventDefault();
    var toDoText[i] = $("#input-field-"+[i]).val.trim();
    localStorage.setItem("toDo"+[i], toDoText[i]);

    }
}



