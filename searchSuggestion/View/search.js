
$( document ).ready(function() {
  console.log( "ready!" );
  list   = document.querySelector("#list")

  // Load and return json data
  // I wasnt sure jquery allows loading json data from local. 
  // Its probably also not the greatest idea because of security reasons 
  $.getJSON("https://raw.githubusercontent.com/LeekSwan/developerTests/master/searchSuggestion/search.json", function(response){
    const fuse = new Fuse(response, {
      keys: ['word'],
      distance: 100,
      minMatchCharLength: 2,
      threshold: 0.5,
      includeMatches: true
    });

    // Reads input box text
    $('#target').on('keyup', function () {
      let result = fuse.search($(this).val());
      // Output it
      console.log(result)
      
      // Clears div so that it doesnt keep appending items.
      $("#list").empty();

      // Iterates through results and appends it to list
      let resultdiv = $('#list');
        for (i = 0; i < Object.keys(result).length; i++) {
          let searchitem = '<li>' + result[i].item.word + '</li>'
          resultdiv.append(searchitem);
        }

    });
  });
});





