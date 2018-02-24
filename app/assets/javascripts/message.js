$(function() {
  $('#send-button').on('submit', function(c){
    c.preventDefault();
    console.log(this);
  });
})
