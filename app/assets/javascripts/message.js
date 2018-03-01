$(function() {
  function buildHTML(message){
    var html_with_image = `
    <ul class="chat-history">
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
      var html = buildHTML(data);
      $('.contents_main--body').append(html).trigger('create');
      if (data.image.url == null) $('.image-message').remove();
      $('.form__message').val('')
      $('#message_image').val('')
      $('.contents_main--body').animate({scrollTop: $('.contents_main--body')[0].scrollHeight}, 300, 'swing')
    })
    .fail(function() {
      alert('メッセージ送信に失敗しました');
      })
    return false;
  })

  setInterval(function(){
    $.ajax({
      url: location.href.json,
    })
    .done(function(messages) {
      messages.forEach(function(message) {
        var
      })
    })
    .fail(function() {

    });
  }, 5000);

});
