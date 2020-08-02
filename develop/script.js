// Is this ready function the main function that has calls the usage of jQuery?
$(document).ready(function () {
    var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    var hourNow = moment().hours();

    // What is .each?  What is index?  How are we using this?  New block variable creating an ID attribute?
    // This should be changing the colors according to the current time
    function hour() {
        $(".time-block").each(function (index) {
            var block = +$(this).attr("id");
            if (hourNow > block) {
                $(this).addClass("past");
            } else if (hourNow === block) {
                $(this).addClass("present");
            } else {
                $(this).addClass("future");
            }


        });

    }

    // Not displaying current day
    $("#currentDay").append(moment().format('dddd ll'));

    // Click function for the save buttons.  Please explain "this" unless understood from above usage
    $(".saveBtn").click(function () {
        var savedValue = $(this).siblings(".description").val();
        var savedTime = $(this).parent().attr("id");

        // Trying to save to local storage, not working.  Why the empty array?

        var obj = JSON.parse(localStorage.getItem("saveTodo")) || [];
        obj.push({
            time: savedTime,
            value: savedValue
        })

        localStorage.setItem("saveTodo", JSON.stringify(obj));
        $(".time-block").each(function (index) {
            console.log(savedValue);
            console.log(savedTime);
        })

    })

    // get the items from the array
    let saveItems = JSON.parse(localStorage.getItem("saveTodo"))
    console.log(saveItems);

    // for each description, from the id == which is the time it was saved, and store the item.
    // $(".description").each(function (index, value) {
    //     let id = $(this).parent().attr("id");
    //     console.log(index, value, id);
    //     for (let i = 0; i < saveItems.length; i++) {
    //         console.log(saveItems[i].time);
    //         if (id == saveItems[i].time) {
    //             $(this).text(saveItems[i].value);
    //         }

    //     }


    // })

    hour();

})


