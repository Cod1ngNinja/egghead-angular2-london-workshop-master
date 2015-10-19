import {BoardGame} from "./BoardGame";
import {VideoGame} from "./VideoGame"

var boardGame = new BoardGame("Dungeons and Dragons");

var videoGame = new VideoGame("pacman");

document.body.innerHTML = `${boardGame.play()} + ${videoGame.play()}` 