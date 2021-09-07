console.log("your index.js file is loaded correctly!");


$( "p" ).hover(
    function() {
      $( this ).append( $( "<span> final fantasty rules </span>" ) );
    }, function() {
      $( this ).find( "span" ).last().remove();
    }
  );
   
  $( "#target" ).click(function() {
    alert( "Handler for .click() called." );
  });
  $( "#myID" ).click(function() {
    $( "#target" ).click();
  });
  $( "td" ).hover(
    function() {
      $( this ).addClass( "hover" );
    }, function() {
      $( this ).removeClass( "hover" );
    }
  );
  $( "p" ).click(function() {
    $( this ).slideUp();
  });
  

$( "li" )
  .odd()
    .hide()
  .end()
  .even()
    .hover(function() {
      $( this )
        .toggleClass( "active" )
        .next()
          .stop( true, true )
          .slideToggle();
    });
