export const time = document.getElementById('time');

setInterval(() => {
  const date = new Date();
  time.innerHTML = date.toLocaleTimeString();
}, 1000);