$( document ).ready(function() {

    var ingredients = document.getElementById('js-ingredients');
    var ingredients2 = document.getElementById('js-ingredients2');
    var container = document.getElementById('js-container');

    Sortable.create(ingredients, {
      group: { name: "sorting", pull: 'clone' },
      sort: false,
      onAdd: function(/**Event*/evt){
        evt.item.remove();
      }
    });

    // sort: false
    Sortable.create(container, {
      group: "sorting",
      sort: true,
    });

    Sortable.create(ingredients2, {
      group: { name: "sorting", pull: 'clone' },
      sort: false,
      onAdd: function(/**Event*/evt){
        evt.item.remove();
      }
    });
});
