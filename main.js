menu_list_array = ["Chicken Tandoori Pizza", "Veg Supreme Pizza", "Paneer Ticka Pizza", "Cheese Pizza", "Deluxe Veggie Pizza", "Veg Extravaganza Pizza"];


function getmenu() {

    var data;
    data = "<ol class='menulist'>"
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) {
        data = data + '<li>' + menu_list_array[i] + '</li>'
    }
    data = data + "</ol>"
    document.getElementById("display_menu").innerHTML = data;
}

function add_item() {
    var data;
    var item = document.getElementById("add_item").Value;
    menu_list_array.push(item);
    menu_list_array.sort();
    data = "<section class='cards'>"
    for (var i = 0; i < menu_list_array.length; i++) {
        data = data + '<div class="card">' + '<img src="images/pizzaImg.png"/>' + menu_list_array[i] + '</div>'
    }
    data = data + "</section>"
    document.getElementById("display_addedmenu").innerHTML = data;
}