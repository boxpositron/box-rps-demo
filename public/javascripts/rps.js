  var rock = document.getElementById("rock");
  var paper = document.getElementById("paper");
  var scissors = document.getElementById("scissors");
  var playbtn = document.getElementById("play");


  window.onload = animate;

  async function animate() {
      playbtn.disabled = true;

      showTile(rock)
      await sleep(1000)
      hideTile(rock)
      showTile(paper)
      await sleep(1000)
      hideTile(paper)
      showTile(scissors)
      await sleep(1000)
      hideTile(scissors)
      playbtn.disabled = false;


  }

  function showTile(tile) {
      tile.style.display = 'block';
  }

  function hideTile(tile) {
      tile.style.display = 'none';
  }


  function playGame() {
      playbtn.disabled = true;
      var result = getRandomInt(1, 4);
      if (result == 1) {
          rock.style.display = 'block';
      } else if (result == 2) {
          paper.style.display = 'block';
      } else if (result == 3) {
          scissors.style.display = 'block';
      }
      setInterval(resetBoard, 2000);
  }

  function resetBoard() {
      playbtn.disabled = false;
      rock.style.display = 'none';
      paper.style.display = 'none';
      scissors.style.display = 'none';
  }

  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }


  function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }