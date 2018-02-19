class MessagesController < ApplicationController

  def index
    @message = current_user.messages
  end

  def create
    @message = Message.find(params[:id])
  end

  private
  def message_params
    params.require(:message).permit(:content, :image)
  end
end
