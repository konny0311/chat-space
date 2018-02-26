$(function() {
  function buildHTML(message){
    var html = `
    <li class="chat-each">
      ${message.user_name}
      <span class=posteddate>
        ${message.created_at}
        </span>
      <p class=message>
        ${message.content}
        </p>
        <%= image_tag message.image.url, class: 'image-message' if message.image.present? %>
        </li>`
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
  })
});
