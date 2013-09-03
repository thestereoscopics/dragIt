/* 
 * What are the objects in this exercise?
 * What are their properties and methods?
 * How do your objects interact with their respective DOM elements?
 */
function GroceryList() {
  this.items = [];
  this.total = 0;
}

GroceryList.prototype.addItem = function(item){
  this.items.push(item);
  this.total += item.price;
}

function StoreList() {}

function Item(price) {
  this.price = price;
}

$('document').ready(function(){
  var c = {};
  $('.item').draggable({
        helper: 'clone'
      });
  $('#grocery_list').droppable({
    accept: '.item',
    drop: function(event, ui) {
      var listItem = (ui.draggable).clone();
      $(this).find('tbody').append($(listItem));
    }
  });
})
