
//Get input

//Display func

const display = (day, history) => {
   document.getElementById('input').value = day;
   document.getElementById('submit').style.display = 'none';
   document.getElementById('reset').style.display = 'inline-block';
   document.getElementById('this-day-text').innerText = history;
   document.getElementById('bottom').style.visibility = 'visible';
   console.log(history);
}

//Determine what day of the week the date is. 
const findDay = async () => {
   let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   let inputDate = document.getElementById('input').value
   let birthdate = new Date(inputDate);
   let day = birthdate.getDay();
   let dayOfWeek = days[day];
   // document.getElementById('input').value = dayOfWeek;
   // document.getElementById('submit').style.display = 'none';
   // document.getElementById('reset').style.display = 'inline-block';
   let history = await thisDay(birthdate);
   
   //Display results
   display(dayOfWeek, history);

}

//Retrieve 'this day in history' info.
const thisDay = async (date) =>{
   let data, history;
   let month = date.getMonth();
   let day = date.getDate();
   let response = await fetch(`http://numbersapi.com/${month + 1}/${day}/date?json`)
      .then(response => data = response.json())
      .then(data => {
         history = data.text;
      })
      return history;
}

//Initialize app
const init = async (date) =>{
   document.getElementById('input').value = "";
   document.getElementById('submit').style.display = 'inline-block';
   document.getElementById('reset').style.display = 'none';
   document.getElementById('bottom').style.visibility = 'hidden';
// GET TODAY'S DATE AND MAKE IT THE PLACEHOLDER DATE;
   
}

init();

document.getElementById('submit').addEventListener('click', findDay);
document.getElementById("reset").addEventListener('click', init);