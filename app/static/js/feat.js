$(document).ready(function () {
    $("#featInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#accordion-baseFeats #accordion-archTypeFeats").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});