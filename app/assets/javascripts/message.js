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
      url: location.href.json
    })
    .done(function(messages) {
      console.log('自動更新中')
      var insertHTML = "";
      messages.forEach(function(message) {
      var id = $('.chat-history').data('message-id')
      if (message.id > id) {
      insertHTML += buildHTML(message)
      $('.contents_main--body').append(insertHTML);
      // if (message.image.url == null) $('.image-message').remove();
      }
      })
    })
    .fail(function() {
      alert('自動更新に失敗しました')
    });
  }, 3000);

});
