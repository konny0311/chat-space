class UsersController < ApplicationController
  def edit
    redirect_to messages: :index 
  end

  def update
    @user = User.find(params[id])
  end
end
