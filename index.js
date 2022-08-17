for(var i = 0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function()
  {
    const rc = Math.floor(Math.random()*16777215).toString(16);
    this.style.color = "#" + rc;
    var buttonPressed = this.innerHTML;
    switch (buttonPressed) {
      case 'w':
      {
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;
      }
      case 'a':
      {
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
      }
      case 's':
      {
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;
      }
      case 'd':
      {
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
      }
      case 'j':
      {
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;
      }
      case 'k':
      {
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
      }
      case 'l':
      {
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
      }


      default:
      alert("nope");

    }
  });
}
document.addEventListener("keydown",function (event){
  switch (event.key) {
    case 'w':
    {
      const rc = Math.floor(Math.random()*16777215).toString(16);
      document.getElementById("w").style.color = "#" + rc;
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    }
    case 'a':
    {
      const rc = Math.floor(Math.random()*16777215).toString(16);
      document.getElementById("a").style.color = "#" + rc;
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    }
    case 's':
    {
      const rc = Math.floor(Math.random()*16777215).toString(16);
      document.getElementById("s").style.color = "#" + rc;
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    }
    case 'd':
    {
      const rc = Math.floor(Math.random()*16777215).toString(16);
      document.getElementById("d").style.color = "#" + rc;
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    }
    case 'j':
    {
      const rc = Math.floor(Math.random()*16777215).toString(16);
      document.getElementById("j").style.color = "#" + rc;
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    }
    case 'k':
    {
      const rc = Math.floor(Math.random()*16777215).toString(16);
      document.getElementById("k").style.color = "#" + rc;
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    }
    case 'l':
    {
      const rc = Math.floor(Math.random()*16777215).toString(16);
      document.getElementById("l").style.color = "#" + rc;
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    }

    default:
    alert("Not A Valid Drum Key");

  }
})
