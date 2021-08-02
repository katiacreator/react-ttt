import React from "react";
import Square from "./Square";

class Board extends React.Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true,
  };

  handleClick(i){
      const squares = this.state.squares.slice()//creates a new array to track history
      squares[i] = this.state.xIsNext ? 'X' : 'O'//rotates x and O on screen
      this.setState({
          squares: squares,
        xIsNext: !this.state.xIsNext,
    })//tracks if x or o turn
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}//returns x or o to ui
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;//message to players of game state

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
