function Snake(){
  // init body
  this.body = [
    {"row":3, "col":5 },
    {"row":3, "col":4 },
    {"row":3, "col":3 },
    {"row":3, "col":2 },
    {"row":3, "col":1 }
  ]
  this.direction = "R"
  this.willDirection = "R"
}

Snake.prototype.update = function() {
  // 1. change direction & update body
  this.direction = this.willDirection
  switch(this.direction) {
    // right
    case "R":
      this.body.unshift({"row": this.body[0].row, "col": this.body[0].col+1})
      break
    // down
    case "D":
      this.body.unshift({"row": this.body[0].row+1, "col": this.body[0].col})
      break
    // left
    case "L":
      this.body.unshift({"row": this.body[0].row, "col": this.body[0].col-1})
      break
    // up
    case "U":
      this.body.unshift({"row": this.body[0].row-1, "col": this.body[0].col})
      break
  }
  
  
  // 2. death
  // 2.1 out of table
  if(this.body[0].col > game.col-1 || this.body[0].col < 0 || this.body[0].row > game.row-1 || this.body[0].row<0){
    alert("bye")
    this.body.shift()
    clearInterval(game.timer)
  }
  // 2.2 hit snake itself
  for(let i=1; i<this.body.length;i++){
    if(this.body[0].row==this.body[i].row && this.body[0].col==this.body[i].col){
      alert("bye")
      this.body.shift()
      clearInterval(game.timer)
    }
  }

  // 3. eat food
  if(this.body[0].row == game.food.row && this.body[0].col == game.food.col) {
    game.food = new Food(game)
    game.f = 0
    game.score++
  } else {
    this.body.pop()
  }
  
}

Snake.prototype.changeDirection = function(direction){
  this.willDirection = direction
}

Snake.prototype.render = function() {
  game.setColor(this.body[0].row, this.body[0].col, '#999999')
  for (let i=1; i<this.body.length;i++){
    game.setColor(this.body[i].row, this.body[i].col, '#000000')
  }
}