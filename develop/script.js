// jQuery ready funcion, wrapped everthing in this
$(document).ready(function () {
    var now = moment().format('MMMM Do YYYY, h:mm:ss a');
    var hourCurrent = moment().hours();
    const baseSavedValues = JSON.stringify({});

    
    // add funtcion class to change colors 
    function hour() {
        $(".time-block").each(function (index) {
            var block = +$(this).attr("id");
            if (hourCurrent > block) {
                $(this).addClass("past");
            } else if (hourCurrent === block) {
                $(this).addClass("present");
            } else {
                $(this).addClass("future");
            }


        });

    }

    // Display the current day
    $("#currentDay").append(moment().format('dddd ll'));

    // Creawte click function for save button
    $(".saveBtn").click(function () {
        var savedValue = $(this).siblings(".description").val();
        var savedTime = $(this).parent().attr("id");

        // Trying to save to local storage, not working.  Why the empty array?


        var obj = JSON.parse(localStorage.getItem("saveTodo") || baseSavedValues);
       
        obj[savedTime] = savedValue
       

        localStorage.setItem("saveTodo", JSON.stringify(obj));

    })

    // get the items from the array
    let saveItems = JSON.parse(localStorage.getItem("saveTodo") || baseSavedValues)
    console.log(saveItems);

    const saveItemKeys = Object.keys(saveItems);

    if(saveItemKeys.length > 0){
        for (let i = 0; i < saveItemKeys.length; i++) {
            const key = saveItemKeys[i];
            $('#' + key).find('.description').text(saveItems[key]);
        }
    }
    
   

    hour();

})


