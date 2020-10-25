var btnAddItem = document.getElementById("btnAddItem");
var btnAddMarket = document.getElementById("btnAddMarket");
var tbxItem = document.getElementById("tbxItem");
var tbxMarket = document.getElementById("tbxMarket");

btnAddItem.onclick = function () {
    var item = tbxItem.value;
    if (item == "") {
        return;
    }

    var list = document.getElementById("UlItems");

    var addItem = document.createElement('li');
    addItem.appendChild(document.createTextNode(item));
    list.appendChild(addItem);
    
    tbxItem.value = null;
    tbxItem.focus();
}

btnAddMarket.onclick = function () {
    var item = tbxMarket.value
    if ( item == "") {
        return;
    }

    var list = document.getElementById("UlSupermarket");

    var addItem = document.createElement('li');
    addItem.appendChild(document.createTextNode(item));
    list.appendChild(addItem);
   
    tbxMarket.value = null;
    tbxMarket.focus();
}


