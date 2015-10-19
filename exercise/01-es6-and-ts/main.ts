import {BoardGame} from "./BoardGame";
import {VideoGame} from "./VideoGame"

var boardGame = new BoardGame("Dungeons and Dragons");

var videoGame = new VideoGame("pacman");

document.body.innerHTML = `
<div>${boardGame.play()}</div>
<div>${videoGame.play()}</div>
`;