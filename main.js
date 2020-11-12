var btnAddItem = document.getElementById("btnAddItem");
var btnAddMarket = document.getElementById("btnAddMarket");
var tbxItem = document.getElementById("tbxItem");
var tbxMarket = document.getElementById("tbxMarket");
var listMarket = document.getElementById("UlSupermarket");
var listItem = document.getElementById("UlItems");



window.onload = function () {

    var itemArray = ["Apfel", "Birne", "Schoko"];

    for (let i = 0; i < itemArray.length; i++) {
        const element = itemArray[i];
        var addItem = document.createElement('li');
        
        addItem.draggable = true;
        addItem.appendChild(document.createTextNode(element));
        listItem.appendChild(addItem);
    }

    var marketArray = ["Rewe", "Edeka", "Aldi"];

    for (let i = 0; i < marketArray.length; i++) {
        const element = marketArray[i];
        var addMarket = document.createElement('li');
        addMarket.className = 'ulmarket';
        addMarket.appendChild(document.createTextNode(element));
        listMarket.appendChild(addMarket);
    }

};


btnAddItem.onclick = function () {
    // Saves the value in a variable
    var item = tbxItem.value;

    // Checks if it isnt empty
    if (item == "") {
        // if it is empty it will do nothing and return
        return;
    }
    
    // Creates list entry
    var addItem = document.createElement('li');

    // Cant be moved around
    addItem.draggable = true;

    // give item name from nameBox
    addItem.appendChild(document.createTextNode(item));

    // Adds it to the list
    listItem.appendChild(addItem);
    
    // Clears boxes
    tbxItem.value = null;

    // Curser is in box
    tbxItem.focus();
};

btnAddMarket.onclick = function () {
    // Saves the value in a variable
    var item = tbxMarket.value

    // Checks if it isnt empty
    if ( item == "") {
        // if it is empty it will do nothing and return
        return;
    }

    // Creates list entry
    var addItem = document.createElement('li');

    // gives the item a class which will make the text bold
    addMarket.className = 'ulmarket';

    // Cant be moved around
    addItem.draggable = false;

    // give item name from nameBox
    addItem.appendChild(document.createTextNode(item));

    // Adds it to the list
    listMarket.appendChild(addItem);
   
    // Clears boxes
    tbxMarket.value = null;

    // Curser is in box
    tbxMarket.focus();
};


$(function () {
    $("#UlItems, #UlSupermarket").sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();
});



