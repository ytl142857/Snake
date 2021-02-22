function Food(gameSnake) {
  let self = this
  // food position
  do {
    this.row = parseInt(Math.random() * gameSnake.row)
    this.col = parseInt(Math.random() * gameSnake.col)
  }while((function () {
    // if snake coincidence with food
    for(let i=0; i<gameSnake.snake.body.length; i++){
      if(gameSnake.snake.body[i].row == self.row && gameSnake.snake.body[i].col == self.col){
        return true
      }
    return false
    }  
  })())
  
  console.log(this.row, this.col)
}

Food.prototype.render = function () {
  game.setHTML(this.row, this.col, "♥")
}