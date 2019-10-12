$(function() {
    $(".devoured").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
       

        console.log(id, true);

        var newBurgerState = {
            id: id,
            devoured: true
        };

        console.log(newBurgerState);

        // Send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function() {
                console.log("changed devoured to", true);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

  

    