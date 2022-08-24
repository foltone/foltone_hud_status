$(function () {
    function display(bool) {
        if (bool) {
            $("#container").show();
        } else {
            $("#container").hide();
        }
    }
    display(true)
    window.addEventListener('message', function(event) {
        if (event.data.type === "ui") {
            if (event.data.status == true) {
                display(true)
            }
            else {
                display(false)
            }
        }
        else if (event.data.type === "update") {
            document.getElementById("health").style.width = event.data.health + "%";
            document.getElementById("armor").style.width = event.data.armor + "%";
            document.getElementById("hunger").style.width = event.data.food + "%";
            document.getElementById("thirst").style.width = event.data.water + "%";
        }
    }) 
})
