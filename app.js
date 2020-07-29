let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


document.getElementById('submit').addEventListener('click', () => {
   let inputDate = document.getElementById('input').value
   let birthdate = new Date(inputDate);
   let day = birthdate.getDay();
   let dayOfWeek = days[day];
   document.getElementById('input').value = dayOfWeek;
   document.getElementById('submit').style.display = 'none';
   document.getElementById('reset').style.display = 'inline-block';
});


const init = () =>{
   document.getElementById('input').value = "";
   document.getElementById('submit').style.display = 'inline-block';
   document.getElementById('reset').style.display = 'none';
}

init();

document.getElementById("reset").addEventListener('click', init);