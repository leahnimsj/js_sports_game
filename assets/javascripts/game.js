(function (){

  let t1Shoot = document.querySelector("#teamone-shoot")
  console.log("t1Shoot")

  let t1NumShots = document.querySelector("#teamone-numshots")
  console.log("t1NumShots")

  let t2Shoot = document.querySelector("#teamtwo-shoot")
  console.log("t2Shoot")

  let t2NumShots = document.querySelector("#teamtwo-numshots")
  console.log("t2NumShots")

  let t1Goals = document.querySelector("#teamone-numhits")
  console.log("t1Goals")

  let t2Goals = document.querySelector("#teamtwo-numhits")
  console.log("t2Goals")

  let resets = document.querySelector("#reset")
  console.log("resets")

  let numResets = document.querySelector("#num-resets")
  console.log("resets");

  let myAudio = new Audio("assets/audio/foghorn-daniel_simon.mp3");

  resets.addEventListener("click", function () {
    console.log(numResets.innerHTML);
    numResets.innerHTML = parseInt(numResets.innerHTML) + 1;
    t1Goals.innerHTML = 0;
    t1NumShots.innerHTML = 0;
    t2Goals.innerHTML = 0;
    t2NumShots.innerHTML = 0;

  })

  t1Shoot.addEventListener("click", function(){

    console.log(t1NumShots.innerHTML);

    myAudio.play();

    t1NumShots.innerHTML = parseInt(t1NumShots.innerHTML) + 1;


    if (Math.random() > 0.7) {
      t1Goals.innerHTML = parseInt(t1Goals.innerHTML) + 1;

      console.log(t1Goals.innerHTML)
    }
  })

  t2Shoot.addEventListener("click", function(){

    console.log(t2NumShots.innerHTML);
    t2NumShots.innerHTML = parseInt(t2NumShots.innerHTML) + 1;

    if (Math.random() > 0.7) {
    t2Goals.innerHTML = parseInt(t2Goals.innerHTML) + 1;
    }

  })

})()
