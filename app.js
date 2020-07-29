let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



const findDay= () => {
   let inputDate = document.getElementById('input').value
   let birthdate = new Date(inputDate);
   let day = birthdate.getDay();
   let dayOfWeek = days[day];
   document.getElementById('input').value = dayOfWeek;
   document.getElementById('submit').style.display = 'none';
   document.getElementById('reset').style.display = 'inline-block';
   thisDay(birthdate);
}

const thisDay = (date) =>{

   let month = date.getMonth();
   let day = date.getDate();

   let response = fetch(`http://numbersapi.com/7/29/date?json`)
      .then(response => response.json())
      .then(data=>console.log(data));

}

const init = () =>{
   document.getElementById('input').value = "";
   document.getElementById('submit').style.display = 'inline-block';
   document.getElementById('reset').style.display = 'none';
}

init();

document.getElementById('submit').addEventListener('click', findDay);
document.getElementById("reset").addEventListener('click', init);