
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const display = (day, history) => {

   document.getElementById('reset').style.display = 'inline-block';
   document.getElementById('day-text').innerText = history;
   document.getElementById('top').style.display = 'none';
   document.getElementById('bottom').style.display = 'inline-block';
   document.getElementById('day-head').innerText = `You were born on a ${day}`;
   //ATTRIBUTION CHANGES ON CLICK
}

//Determine what day of the week the date is. 
const findDay = async () => {

   let inputDate = document.getElementById('input').value;
   if (!inputDate){
      alert("Please enter your birthdate.");
      return;
   }


   let birthdate = new Date(inputDate);
   let day = birthdate.getDay();
   let dayOfWeek = days[day];
   let history = await thisDay(birthdate);
   
   //Display results
   display(dayOfWeek, history);

}

//Retrieve 'this day in history' info. //Try Catch
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
const init = async () =>{
   document.getElementById('input').value = "";
  
   document.getElementById('top').style.display = 'inline-block';
   // document.getElementById('top').style.display = 'none';

   document.getElementById('bottom').style.display = 'none';
   // document.getElementById('bottom').style.display = 'inline-block';

// GET TODAY'S DATE AND MAKE IT THE PLACEHOLDER DATE;
   let today = new Date();
   let month = today.getMonth();
   month  = months[month];
   let day = today.getDate();
   let year = today.getFullYear();
   let date = `${month} ${day}, ${year}`;
   document.getElementById('input').setAttribute('placeholder', date);

   //SET ATTRIBUTION
}

init();

document.getElementById('submit').addEventListener('click', findDay);
document.getElementById("reset").addEventListener('click', init);