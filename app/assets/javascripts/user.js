$(function() {
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
          $('#user-search-result').append(
            `<div class="username">
             ${user.name}
            </div>`
          )
        })
      }
      else {
        $('#user-search-result').append(
          `<div class="username">
           一致するユーザーはいません
          </div>`
        )
      }
    });
  })
})
