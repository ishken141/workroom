App.room = App.cable.subscriptions.create("RoomChannel", {
  connected: function() { 

    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {  　
    var messages = document.getElementById('messages') 
    messages.innerHTML += `<h2>${data}</h2>` 
    // Called when there's incoming data on the websocket for this channel　
  },
  speak: function(content) {
    return this.perform('speak', {message: content});
  }
});


document.addEventListener('DOMContentLoaded', function() { 　
  var input = document.getElementById('chat-input')　
  var button = document.getElementById('button') 
  button.addEventListener('click', function() { 　
  var content = input.value 　
  App.room.speak(content) 
  input.value = ''　
  })
}) 


