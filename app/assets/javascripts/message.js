$(function() {
  function buildHTML(message){
    var html = `
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
        return html;
  }
  $('#send_message').on('submit', function(e){
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
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.show_messages').append(html)
      $('.form__message').val('')
    })
    return false;
  })
});
