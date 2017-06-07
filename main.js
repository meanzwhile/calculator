
function main() {
    $("#calculator").hide();
    $("#calculator").fadeIn(1000);
    $("#clear").on("click", function() {
        $("#screen").text("");
    })
    $(".keys span").on("click", function() {
        if ($(this).hasClass("operand") && $.inArray($("#screen").text()[$("#screen").text().length-1], [".", "+", "-", "*", "/"]) >= 0) {
            $("#screen").text($("#screen").text().slice(0, -1));
        }
        $("#screen").text($("#screen").text() + $(this).text());
    })
    $("#result").on("click", function() {
        $("#loader").fadeIn(1000);
        $("#cal").fadeIn(1000, function() {
            $("#loader").fadeOut("slow");
            $("#cal").fadeOut("slow", function() {
                var result = eval($("#screen").text());
                $("#screen").text(result);
            })
        })
    })
}
$(document).ready(main);