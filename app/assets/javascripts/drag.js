$( document ).ready(function() {

    var ingredients = document.getElementById('js-ingredients');
    var ingredients2 = document.getElementById('js-ingredients2');
    var container = document.getElementById('js-container');

    Sortable.create(ingredients, {
      group: { name: "sorting", pull: 'clone' },
      sort: false,
      draggable: '.ingredient',
      onAdd: function(/**Event*/evt){
        evt.item.remove();
      }
    });

    // sort: false
    Sortable.create(container, {
      group: "sorting",
      sort: true,
      draggable: '.ingredient',
      onAdd: function(/**Event*/evt){
        if (evt.path[1].childElementCount > 8) {
          evt.item.remove();
          alert('you can not add more than 8 items');
        } else {
          console.log(evt)
          evt.item.style.width = '100%';
        }
      }
    });
});
