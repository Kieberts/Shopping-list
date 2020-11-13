var btnAddItem = document.getElementById("btnAddItem");
var btnAddMarket = document.getElementById("btnAddMarket");
var tbxItem = document.getElementById("tbxItem");
var tbxMarket = document.getElementById("tbxMarket");
var listMarket = document.getElementById("UlSupermarket");
var listItem = document.getElementById("UlItems");
var indexItem = 0;
var indexMarket = 0;
var selectedArray = [];


window.onload = function () {

    // Enters default items 
    var itemArray = ["Apfel", "Birne", "Schoko"];

    for (let i = 0; i < itemArray.length; i++) {
        const element = itemArray[i];
        var addItem = document.createElement('li');
        let test = 'item' + indexItem;
        addItem.id = test;
        console.log(addItem.id);        
        addItem.className = 'ulItems';
        addItem.draggable = true;
        addItem.addEventListener("click", function() {
            console.log(addItem.id + ' was clicked');
          });
        addItem.appendChild(document.createTextNode(element));
        listItem.appendChild(addItem);
        indexItem++;
    }

    // Enters defauft marktet
    var marketArray = ["Rewe", "Edeka", "Aldi"];

    for (let i = 0; i < marketArray.length; i++) {
        const element = marketArray[i];
        var addMarket = document.createElement('li');        
        let test = 'market' + indexMarket;
        addMarket.id = test;
        console.log(addMarket.id);   
        addMarket.className = 'ulmarket';
        addMarket.draggable = false;
        addMarket.addEventListener("click", function() {
            console.log(addMarket.id + ' was clicked');
          });
        addMarket.appendChild(document.createTextNode(element));
        listMarket.appendChild(addMarket);
        indexMarket++;
    }

};


btnAddItem.onclick = function () {
    // Saves the value in a variable
    let item = tbxItem.value;

    // Checks if it isnt empty
    if (item == "") {
        // if it is empty it will do nothing and return
        return;
    }
    
    // Creates list entry
    let addItem = document.createElement('li');

    // Cant be moved around
    addItem.draggable = true;

    let test = 'item' + indexItem;
        addItem.id = test;
        console.log(addItem.id + ' was added to Itemlist');  
    indexItem++;

    // gives the item a class which will make the text bold
    addItem.className = 'ulItems';
    addItem.style.backgroundColor = "white";

    // Adds Click event
    addItem.addEventListener("click", function() {
        let item = document.getElementById(addItem.id);
        if (item.style.backgroundColor == "white"){
            item.style.backgroundColor = "lightgray";
            item.style.width = "80%";            
            item.style.borderRadius = "5px"; 
            
            // Adds to array
            selectedArray.push(item.id.toString());
            console.log(selectedArray);

            document.getElementById("btnClearAll").innerText = "Delete selected items";
            document.getElementById("btnClearAll").onclick = function() {ClearSelectedItems()};

            console.log(this.id + ' was clicked / written in Array');
        }
        else {
            item.style.backgroundColor = "white";

            RemoveFromArray(selectedArray, item.id.toString());
            console.log(selectedArray);

            document.getElementById("btnClearAll").innerText = "Clear Lists";
            document.getElementById("btnClearAll").onclick = function() {ClearAll()};

            console.log(this.id + ' was clicked / out of Array');
        }

      });

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
    let item = tbxMarket.value;

    // Checks if it isnt empty
    if ( item == "") {
        // if it is empty it will do nothing and return
        return;
    }

    // Creates list entry
    let addItem = document.createElement('li');

    let test = 'market' + indexMarket;
        addItem.id = test;
        console.log(addItem.id + ' was added to Marketlist');  
    indexMarket++;

    // gives the item a class which will make the text bold
    addItem.className = 'ulmarket';

    // Cant be moved around
    addItem.draggable = false;
    addItem.style.backgroundColor = "white";

    // Adds Click event
    addItem.addEventListener("click", function() {
        let item = document.getElementById(addItem.id);
        if (item.style.backgroundColor == "white"){
            item.style.backgroundColor = "lightgray";
            item.style.width = "80%";            
            item.style.borderRadius = "5px"; 
            
            // Adds to array
            selectedArray.push(item.id.toString());
            console.log(selectedArray);

            document.getElementById("btnClearAll").innerText = "Delete selected items";
            document.getElementById("btnClearAll").onclick = function() {ClearSelectedItems()};

            console.log(this.id + ' was clicked / written in Array');
        }
        else {
            item.style.backgroundColor = "white";

            RemoveFromArray(selectedArray, item.id.toString());
            console.log(selectedArray);

            document.getElementById("btnClearAll").innerText = "Clear Lists";
            document.getElementById("btnClearAll").onclick = function() {ClearAll()};

            console.log(this.id + ' was clicked / out of Array');
        }

      });

    // give item name from nameBox
    addItem.appendChild(document.createTextNode(item));

    // Adds it to the list
    listMarket.appendChild(addItem);
   
    // Clears boxes
    tbxMarket.value = null;

    // Curser is in box
    tbxMarket.focus();
};

// 
$(function () {
    $("#UlItems, #UlSupermarket").sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();
});


btnDelAllITem.onclick = function() {
    DeleteByClass('.ulItems');
    indexItem = 0;
    console.log('All items in Itemslist were deleted');
}
btnDelAllMarkets.onclick = function() {
    DeleteByClass('.ulmarket');
    indexMarket = 0;
    console.log('All markets in Marketlist were deleted');
}

function DeleteByClass(classnaeme) {
    $(classnaeme).remove();
}
function DeleteById(idName) {
    $(idName).remove();
}

btnClearAll.onclick = function() {
    ClearAll();
};

function RemoveFromArray(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

function ClearAll() {
    DeleteByClass('.ulmarket');
    indexMarket = 0;
    DeleteByClass('.ulItems');
    indexItem = 0;
    console.log('Both lists are clear');
}

function ClearSelectedItems() {

    console.log(selectedArray);
    let idNam;

    selectedArray.forEach((item) => {
      idNam = "#";
      idNam += item.toString();
      DeleteById(idNam);
    });

    selectedArray.forEach((item) => {
      RemoveFromArray(selectedArray, item);
    });
    
    console.log(selectedArray);

    document.getElementById("btnClearAll").innerText = "Clear Lists";
    document.getElementById("btnClearAll").onclick = function() {ClearAll()};
}