// const container = (document.querySelector('.container').innerText =
//   'Make Some Donuts!');

  let counter=0;
  

  let autoClicker = 0;

  let clickerCost = 10;
  

  function addDonuts(){
    let donutCount = document.getElementById("donut-counter");
    counter = counter +1;
    donutCount.textContent = "Donuts " + counter;
  }

  function addAutoClicker(){
    let autoDonut = document.getElementById("auto-clicker");
    let donutCount = document.getElementById("donut-counter");
    let autoClickerCost = document.getElementById("auto-clicker-cost");
    
    if (counter >= clickerCost){
      counter = counter - clickerCost;
      autoClicker ++;
      autoDonut.textContent = "Auto Clicker: " + autoClicker;
      clickerCost = Math.round(clickerCost * 1.1);
      donutCount.textContent = "Donuts " + counter;
      autoClickerCost.textContent = "Auto Clicker Cost: " + clickerCost;
    }
  }

  function activateAutoClicker(){
    setInterval(()=>{
     for(let x=0 ; x<autoClicker ; x++){
      counter ++;
     }
     let donutCount = document.getElementById("donut-counter");
     donutCount.textContent = "Donuts " + counter;
     autoClickerCost.textContent = "Auto Clicker Cost: " + clickerCost;
    }, 1000)
  }

  activateAutoClicker();
