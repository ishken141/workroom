class RoomsController < ApplicationController 
  def index  
    @messages = Message.all
  end 
  def show
    @messages = Message.all
  end 
  def edit  
    @messages = Message.all
  end 
end
