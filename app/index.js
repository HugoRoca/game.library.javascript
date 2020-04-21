import GameBoard from './game-board'

((window) => {
  let _init = (params) => {
    GameBoard.generate(params)
  }
  window.Game = {
    init: _init
  }
})(window)
