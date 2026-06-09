const startdate = new Date(2023, 6, 23);
function updateTimer(){
    const now = new Date();
    const diff = now - startdate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const afterdays = diff % (1000 * 60 * 60 * 24);
    const hours = Math.floor(afterdays / (1000 * 60 * 60));
    const afterHours = afterdays % (1000 * 60 * 60);
    const minutes = Math.floor(afterHours / (1000 * 60));
    const seconds = Math.floor((afterHours % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

updateTimer();
setInterval(updateTimer, 1000);