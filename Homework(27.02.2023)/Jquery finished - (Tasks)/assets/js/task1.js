$(document).ready(function () {
    let btn = $("button");
    let peoples = [];

    if (localStorage.getItem("peoples") != null) {
        peoples = JSON.parse(localStorage.getItem("peoples"));
    }




    $("button").click(function (e) {
        e.preventDefault();
        $("ul").empty();



        let input1 = $("input").eq(0);
        let input2 = $("input").eq(1);

        if ((input1.val().length != 0 && input2.val().length != 0)) {
            peoples.push({
                id: new Date().getMilliseconds(),
                name: input1.val(),
                surname: input2.val()
            })

            localStorage.setItem("peoples", JSON.stringify(peoples));

            for (const item of peoples) {
                $("ul").append(`<li data-id = ${item.id} class="list-group-item">${item.name + " " + item.surname}</li>`);
                $("input").eq(0).val("");
                $("input").eq(1).val("");
            }
        } else {
            alert("Please dont empty");
        }

        window.location.reload();



    })



    for (const item of peoples) {
        $("ul").append(`<li data-id = ${item.id} class="list-group-item">${item.name + " " + item.surname}</li>`);

    }

    function deleteId(id) {

        peoples = peoples.filter(m => m.id != id);
        localStorage.setItem("peoples", JSON.stringify(peoples));
    }


    $(document).on("click", "li", function () {

        for (const user of peoples) {
            if (user.id == $(this).attr("data-id")) {
                deleteId(user.id);
                $(this).remove();
            }
        }
    })
})