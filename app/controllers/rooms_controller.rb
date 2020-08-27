class RoomsController < ApplicationController 
  def index  
    @messages = Message.all
  end 
  def show
    @messages = Message.all
  end 
  def no_limit 
    @messages = Message.all
  end 
end
