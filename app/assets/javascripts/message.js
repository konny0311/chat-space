$(function() {
  function buildHTML(message){
    var html_without_image =
    '<ul class="chat-history" data-message_id="' + message.id + '">' +
    '<li class="chat-each">' +
       message.user_name +
      '<span class=posteddate>' +
         message.created_at +
        '</span>' +
      '<p class=message>' +
         message.content +
        '</p>' +
        '</li>' +
        '</ul>'
    $('.contents_main--body').append(html_without_image)
    if (message.image.url) $('.chat-each:last').append(
      '<img class="image-message" src="' + message.image.url + '" alt="image">')
  }
  function insertHTML(message){
    buildHTML(message);
    $('.contents_main--body').animate({scrollTop: $('.contents_main--body')[0].scrollHeight}, 300, 'swing')
    $('.form__message').val('')
    $('#message_image').val('')
  }
  setInterval(function(){
    var id = ($('.chat-history')) ? $('.chat-history:last')[0].dataset.message_id : 0
    $.ajax({
      url: location.href,
      type: 'GET',
      data: {id: id},
      dataType:'json'
    })
    .always(function(data) {
      if (data) {console.log(data)}
      else {
        console.log('no data')
      }
      // data.forEach(function(message) {
      //   insertHTML(message);
      // })
    })
  }
  , 5000)
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
      cache: false
    })
    .done(function(data){
      insertHTML(data);
    })
    .fail(function() {
      alert('メッセージ送信に失敗しました');
      })
    return false;
  })
});
