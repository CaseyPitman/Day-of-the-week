let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


document.getElementById('submit').addEventListener('click', () => {
  let inputDate = document.getElementById('input').value
  let birthdate = new Date(inputDate);
  let day = birthdate.getDay();
  let dayOfWeek = days[day];
  document.getElementById("result").innerHTML = dayOfWeek;
  document.getElementById("input").style.display = 'none';
  document.getElementById("submit").style.display = 'none';
  document.getElementById("result").style.display = 'block';
  document.getElementById("reset").style.display = 'inline-block';
});


const init = () =>{
	document.getElementById('input').value = "";
  document.getElementById('input').style.display = 'inline-block';
  document.getElementById('submit').style.display = 'inline-block';
	document.getElementById('result').style.display = 'none';
  document.getElementById('reset').style.display = 'none';
}

init();

document.getElementById("reset").addEventListener('click', init);