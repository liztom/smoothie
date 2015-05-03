$( document ).ready(function() {

    var ingredients = document.getElementById('js-ingredients');
    var ingredients2 = document.getElementById('js-ingredients2');
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

    Sortable.create(ingredients2, {
      group: "sorting",
      sort: true,
    });
});
