$(function() {
  function searchHTML(user){
    var html = `
    <div class="chat-group-user clearfix">
  <p class="chat-group-user__name">${user.name}</p>
  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
</div>`
return html;
}
  $(".chat-group-form__input").on("keyup", function(){
    var input = $(".chat-group-form__input").val();
    console.log(input);
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(
      function(users) {
      $('#user-search-result').empty();
      if (users.length !== 0) {
        users.forEach(function(user) {
          var html = searchHTML(user)
          $('#user-search-result').append(html)
        })
      }
      else {
        $('#user-search-result').append(
          `<div class="chat-group-user clearfix">
        <p class="chat-group-user__name">一致するユーザーはいません</p>
      </div>`
        )
      }
    })
    .fail(function() {
      alert('検索に失敗しました');
    })
  })
})
