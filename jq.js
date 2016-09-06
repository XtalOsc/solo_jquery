console.log('jq.js sourced');

//global variables
redCount=0;
yellowCount=0;
greenCount=0;
blueCount=0;
color='';

$(document).ready(function(){
  console.log('document ready');


  $( 'body' ).on( 'click', '.color-button', function(){
    // get data-color of clicked button
    console.log( 'in on click', $( this ).attr( 'data-color' ) );

    color = $( this ).attr( 'data-color');

    //if button clicked, append colored div to container
    $('.container').append('<div class="' + color + ' color-cube">' +'</div>');

    if (color=='red'){
      //update color counter
      redCount++
      //update <p> tag to show the correct number of clicks
      $('#red').text('Total red: ' + redCount);
    }
    else if (color=='yellow'){
      //update color counter
      yellowCount++
      //update <p> tag to show the correct number of clicks
      $('#yellow').text('Total yellow: ' + yellowCount);
    }
    else if (color=='green'){
      //update color counter
      greenCount++
      //update <p> tag to show the correct number of clicks
      $('#green').text('Total green: ' + greenCount);
    }
    else if (color=='blue'){
      //update color counter
      blueCount++
      //update <p> tag to show the correct number of clicks
      $('#blue').text('Total blue: ' + blueCount);
    }

  });//end button click
});//end document ready
