$( document ).ready(function() {

    var ingredients = document.getElementById('js-ingredients');
    var ingredients2 = document.getElementById('js-ingredients2');
    var container = document.getElementById('js-container');

    Sortable.create(ingredients, {
      group: { name: "sorting", pull: 'clone' },
      sort: false,
      draggable: '.ingredient',
      onAdd: function(evt){
        evt.item.remove();
      }
    });

    Sortable.create(container, {
      group: "sorting",
      sort: true,
      draggable: '.ingredient',
      onAdd: function(evt){
        if (evt.path[1].childElementCount > 8) {
          evt.item.remove();
          alert('you can not add more than 8 items');
        } else {
          evt.item.style.width = '100%';
        }
      }
    });
});
