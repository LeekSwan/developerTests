
$( document ).ready(function() {
  console.log( "ready!" );
  list = document.querySelector("#list")

  // Load and return json data
  // I wasnt sure jquery allows loading json data from local. 
  // Its probably also not the greatest idea because of security reasons
  // Also runs fuse which is a lightweight fuzzy search library for JS.  
  $.getJSON("https://raw.githubusercontent.com/LeekSwan/developerTests/master/searchSuggestion/search.json", function(response){
    const fuse = new Fuse(response, {
      keys: ['word'],
      distance: 100,
      minMatchCharLength: 2,
      threshold: 0.5, 
    });

    // Reads input box text
    $('#target').on('keyup', function () {
      char_input = $(this).val();
      let result = fuse.search(char_input); // Calls fuse on input characters

      // Clears div so that it doesnt keep appending items.
      $("#list").empty();

      // Iterates through results and appends it to list
      let resultdiv = $('#list');
        for (i = 0; i < Object.keys(result).length; i++) {
          word = result[i].item.word;

          // Wraps input characters in bold html  
          strjoin = char_input.split('').join('|');
          let boldword = word.replace(new RegExp(strjoin, 'g'), m => char_object(char_input)[m]);

          // Wrap word in list and appends to html
          resultdiv.append('<li>' + boldword + '</li>');
        }
    });
  });

  // Creates object for replace to iterate through
  function char_object(char_input) {
    var char_array = {}

    for (i = 0; i < char_input.length; i++) {
      char_array[char_input[i].toString()] = '<b>' + char_input[i] + '</b>';
    }
    return char_array
  }

});





