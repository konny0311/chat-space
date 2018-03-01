$(function() {
  function searchHTML(user){
    var html = `
    <div class="chat-group-user clearfix">
  <p class="chat-group-user__name">${user.name}</p>
  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user_id="${user.id}" data-user_name="${user.name}">追加</a>
</div>`
return html;
}
  $(".chat-group-form__input").on("keyup", function(){
    var input = $(".chat-group-form__input").val();
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
      $('.chat-group-user').on('click',　'.chat-group-user__btn--add', function(user) {
        console.log(this)
        function addHTML(id, name) {
          var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
    <input name='group[user_ids][]' type='hidden' value='${id}'>
    <p class='chat-group-user__name'>${name}</p>
    <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
    </div>`
    return html;
        }
        var id = this.dataset.user_id
        var name = this.dataset.user_name
        console.log(id)
        console.log(name)
        var html = addHTML(id, name)
        $('#chat-group-seletcted-members').append(html)
        $(this).parent().remove();
      })
    })
    .fail(function() {
      alert('検索に失敗しました');
    })
    return false;
  })


})

// メンバー追加処理は@group.users << user みたいな感じ?
