


window.onload = function () {
    $("#cos, i").click(function () {
        $("#myModal").show();
        $('.mdc-card').children("button").text("Add");
    });

    $(".close").click(function () {
        $("#myModal").hide();
    });
    $("i.fa.fa-pencil").click(function () {
        $("#myModal").show();
        $('.mdc-card').children("button").text("Edit");
    });

    $("button.add_task").click(function () {
        var title = $("input[name='Title']").val();
        alert("Dodano Taska o tytule: " + title);

    });
    $(function () {
        $(".sortable1, .sortable2, .sortable3").sortable({
            connectWith: ".connectedSortable"
        }).disableSelection();
    });


};

// $(document).ready(function () {
//     $("input[type=checkbox]").click(function () {
//         $("#title1").toggle();
//     });
// });

