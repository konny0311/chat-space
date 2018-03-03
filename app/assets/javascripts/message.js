$(function() {
  function buildHTML(message){
    var html_with_image = `
    <ul class="chat-history" data-message_id="${message.id}">
    <li class="chat-each">
      ${message.user_name}
      <span class=posteddate>
        ${message.created_at}
        </span>
      <p class=message>
        ${message.content}
        </p>
      <img class="image-message" src="${message.image.url}" alt="image">
        </li>
        </ul>`
    return html_with_image;
  }
  function insertHTML(message){
    var html = buildHTML(message);
    $('.contents_main--body').append(html).trigger('create');
    if (message.image.url == null) $('.image-message').remove();
    $('.contents_main--body').animate({scrollTop: $('.contents_main--body')[0].scrollHeight}, 300, 'swing')
    $('.form__message').val('')
    $('#message_image').val('')
  }
  setInterval(function(){
    if ($('.chat-history')) {
      var id = $('.chat-history:last')[0].dataset.message_id
    }
    else {
      var id = 0
    }
    $.ajax({
      url: location.href,
      type: 'GET',
      data: {id: id},
      dataType:'json'
    })
    .always(function(data) {
      data.forEach(function(message) {
        insertHTML(message);
      })
    })
  }
  , 5000)
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    console.log(this)
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
