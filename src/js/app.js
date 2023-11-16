import GamePlay from './GamePlay.js';
import GameController from './GameController.js';

const gamePlay = new GamePlay();
const gameCtrl = new GameController(gamePlay);

gameCtrl.init();