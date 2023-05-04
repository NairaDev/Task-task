const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let timerArr = timerEl.innerText.split(":")
    
    let interval = setInterval(()=>{
      let a = seconds
      timerArr[0] = parseInt(a / 3600)
      a -= 3600 * timerArr[0]
      timerArr[1] = parseInt(a / 60)
      a -= 60 * timerArr[1]
      timerArr[2] = a
      if(timerArr[0] >= 0 && timerArr[0] <= 9){
        timerArr[0] = "0" + timerArr[0]
      }
      if(timerArr[1] >= 0 && timerArr[1] <= 9){
        timerArr[1] = "0" + timerArr[1]
      }
      if(timerArr[2] >= 0 && timerArr[2] <= 9){
        timerArr[2] = "0" + timerArr[2]
      }
      timerEl.innerText = timerArr.join(':')
      
      if(timerArr[0] == "00" && timerArr[1] == "00" && timerArr[2] == "00"){
        alert("Time is over")
        buttonEl.disabled = false
        clearInterval(interval)
      }
      seconds--
    },1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  let str = inputEl.value.replace(/\D+/g,'')
  
  inputEl.value = str

});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  
  animateTimer(seconds);

  buttonEl.disabled = true
  
  inputEl.value = '';
});