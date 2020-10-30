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
        addMarket.appendChild(document.createTextNode(element));
        listMarket.appendChild(addMarket);
    }

};


btnAddItem.onclick = function () {
    var item = tbxItem.value;
    if (item == "") {
        return;
    }

    

    var addItem = document.createElement('li');
    addItem.draggable = true;
    addItem.appendChild(document.createTextNode(item));
    listItem.appendChild(addItem);
    
    tbxItem.value = null;
    tbxItem.focus();
};

btnAddMarket.onclick = function () {
    var item = tbxMarket.value
    if ( item == "") {
        return;
    }

    

    var addItem = document.createElement('li');
    addItem.draggable = false;
    addItem.appendChild(document.createTextNode(item));
    listMarket.appendChild(addItem);
   
    tbxMarket.value = null;
    tbxMarket.focus();
};

$(function () {
    $("#UlItems, #UlSupermarket").sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();
});