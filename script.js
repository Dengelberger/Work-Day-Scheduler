//WINDOWS ACCESS TO LOCAL STORAGE

var ls = window.localStorage

//WE ARE USING JQUERY.
$(document).ready(function () {

    //CURRENT DATE TO APPEAR ON JUMBOTRON.

    var date = $("#currentDay");
    currDateEl = moment().format("dddd, MMMM Do, YYYY");
    console.log(currDateEl);
    date.text(currDateEl);
})

//SINCE EVERYTHING IS GOING INTO THE SCHEDULER AREA, OR CONTAINER, WE ESTABLISH THE CONTAINER-EL VARIABLE FIRST OUTSIDE OF THE LOOP.

var containerEl = document.getElementById('container')

//RUN LOOP TO ACCOUNT FOR HOURS FROM 9 AM TO 5 PM IN MILITARY TIME.

for (var i = 9; i < 18; i++) {

    //ADD A NEW ROW TO THE SCHEDULER.

    var newRow = document.createElement('div')
    newRow.classList.add('row')
    newRow.setAttribute('id', 'row' + i)

    //ADD A NEW COLUMN FOR THE TIME LABEL.

    var newH3 = document.createElement('h3')
    newH3.classList.add('hour', 'col-md-1')
    if (i > 12) {
        newH3.innerHTML = (i - 12) + ':00';
    } else {
        newH3.innerHTML = i + ':00';
    }

    //APPEND THE TIME LABEL TO THE ROW.

    newRow.appendChild(newH3)

    //ADD A NEW COLUMN FOR THE USER TO ENTER INFORMATION.

    var newInput = document.createElement('input')
    newInput.classList.add('col-md-10')
    newInput.setAttribute('id', 'text' + i)

    //APPEND THE USER INPUT AREA TO THE ROW.

    newRow.appendChild(newInput)

    //ADD A NEW COLUMN WITH SAVE BUTTONS FOR EACH ROW.

    var newButton = document.createElement('button')
    newButton.classList.add('saveBtn', 'col-md-1')
    newButton.setAttribute('id', 'save' + i)

    //ADD THE LOCK ICON TO THE SAVE BUTTON.

    var newIcon = document.createElement('i')
    newIcon.classList.add('fas', 'fa-lock')

    //APPEND THE LOCK ICON TO THE BUTTON COLUMN.

    newButton.appendChild(newIcon)

    //APPEND THE SAVE BUTTON TO THE ROW.

    newRow.appendChild(newButton)

    //APPEND THE ROW TO THE CONTAINER (SCHEDULER AREA).

    containerEl.appendChild(newRow)
    var textInput = localStorage.getItem("text" + i);
    $("#text" + i).val(textInput);
}
//CLICK EVENTS FOR THE SAVE BUTTONS.  


for (var i = 9; i < 18; i++) {
    $(document).on('click', "#save" + i, function (event) {
        event.preventDefault();
        inputEl = $(this).prev();
        var inputId = $(this).prev().attr("id");
        localStorage.setItem(inputId, inputEl.val());
    }
    )
}

//CHANGE THE BACKGROUND OF THE ROWS TO ACCOUNT FOR PAST, PRESENT, AND FUTURE HOURS.

currHourEl = moment().format('HH');


for (var i = 9; i < 18; i++) {
    if (currHourEl > i) {
        $("#text" + i).addClass("past");
    } else if (currHourEl >= i && currHourEl < (i + 1)) {
        $("#text" + i).addClass("present");
    } else if (currHourEl < i) {

        $("#text" + i).addClass("future");
    }
}
