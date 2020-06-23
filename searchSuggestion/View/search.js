
$( document ).ready(function() {
  console.log( "ready!" );

// Load and return local json data
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
      
    });
  });
});







  // inject html back into list
const inject = function() {
  document.getElementById('printchatbox').innerHTML = readInput();
}

