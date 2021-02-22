function Game(){
  // Create a 20*20 table
  this.row = 20
  this.col = 20
  // init dom
  this.init()
  
  this.snake = new Snake()
  // init food
  this.food = new Food(this)

  this.start()
  this.bindEvent()
}

Game.prototype.init = function() {
  // create a table (row*col)
  this.dom = document.createElement("table")
  let tr, td
  for( let i=0; i<this.row; i++){
    // append row to dom
    tr = document.createElement("tr")
    // append col to every row
    for (let j=0; j<this.col;j++){
      td = document.createElement("td")
      tr.appendChild(td)
    }
    this.dom.appendChild(tr)
  }
  document.getElementById("app").appendChild(this.dom)
}

// set table color
Game.prototype.setColor = function(row, col, color) {
  this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].style.background = color
}

// render food
Game.prototype.setHTML = function (row, col, html) {
  this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].innerHTML = html
}

Game.prototype.bindEvent = function(){
  let self = this
  document.onkeydown = function(event) {
    switch(event.keyCode){
      // left
      case 37:
        if(self.snake.direction == "R") return
        self.snake.changeDirection("L")
        break
      // up
      case 38:
        if(self.snake.direction == "D") return
        self.snake.changeDirection("U")
        break
      // right
      case 39:
        if(self.snake.direction == "L") return
        self.snake.changeDirection("R")
        break
      // down
      case 40:
        if(self.snake.direction == "U") return
        self.snake.changeDirection("D")
        break
    }
  }
}

Game.prototype.clean = function() {
  for( let i=0; i<this.row; i++){
    for (let j=0; j<this.col;j++){
      //this.dom.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].style.background = 'white'
      this.setColor(i, j, 'white')
    }
  }
}

Game.prototype.start = function() {
  this.timer = setInterval(function(){
    // timer: clear -> update -> render
    game.clean()
    game.snake.update()
    game.snake.render()
    game.food.render()
  }, 400)
}

