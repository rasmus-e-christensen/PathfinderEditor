$(document).ready(function () {
    $("#featInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#spell_list div.card").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});