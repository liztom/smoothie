$( document ).ready(function() {

    var ingredients = document.getElementById('js-ingredients');
    var container = document.getElementById('js-container');

    Sortable.create(ingredients, {
      group: "sorting",
      sort: true,
    });

    // sort: false
    Sortable.create(container, {
      group: "sorting",
      sort: true,
    });
});
