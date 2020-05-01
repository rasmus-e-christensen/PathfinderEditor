$(document).ready(function () {
    $("#featInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".firstlevel .secondlevel .thirdlevel").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});