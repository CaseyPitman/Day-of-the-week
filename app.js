
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//DISPLAY RESULTS
const display = (day, history = '') => {

   document.getElementById('day-text').innerText = history;
   document.getElementById('top').style.display = 'none';
   document.getElementById('bottom').style.display = 'inline-block';
   document.getElementById('day-head').innerText = `You were born on a ${day}.`;

   //Attribution will change on click. 
   document.getElementById('attribution-calendar').style.display = 'none';
   document.getElementById('attribution-cake').style.display = 'inline-block';
}

//DETERMINE THE DAY OF THE WEEK THE INPUT DATE REPRESENTS
const findDay = async () => {
   //Get input
   let inputDate = document.getElementById('input').value;
   if (!inputDate){
      alert("Please enter your birthdate.");
      return;
   }
   //Figure out what day of the week the date was/is.
   let birthdate = new Date(inputDate);
   let day = birthdate.getDay();
   let dayOfWeek = days[day];
   //User inputs an ivalid date.
   if (!dayOfWeek){
      alert(`What the heck? Don't you know your own birthday? Enter a valid birthdate and try again.`);
      init();
      return;
   }
   //Call to retrieve a 'this day in history' object
   let history = await thisDay(birthdate);
   //Call for display
   display(dayOfWeek, history);
}

//RETRIEVE THIS DAY IN HISTORY
const thisDay = async (date) =>{
   let history;
   let month = date.getMonth();
   let day = date.getDate();
   try {
      let response = await fetch(`http://numbersapi.com/${month + 1}/${day}/date?json`)
         .then(response => data = response.json())
         .then(data => {
            history = data.text;
         });
         return history;
   } catch (error) {
      return error
   }
}

//INITIALIZE
const init = async () =>{
   //Set initial display
   document.getElementById('input').value = "";
   document.getElementById('top').style.display = 'inline-block';
   document.getElementById('bottom').style.display = 'none';

   // Make today's date the placeholder
   let today = new Date();
   let month = today.getMonth();
   month  = months[month];
   let day = today.getDate();
   let year = today.getFullYear();
   let date = `${month} ${day}, ${year}`;
   document.getElementById('input').setAttribute('placeholder', date);

   //Set the attribution
   document.getElementById('attribution-calendar').style.display = 'inline-block';
   document.getElementById('attribution-cake').style.display = 'none';
}

//CALL INITIALIZE ON STARTUP
init();

//EVENT LISTENERS

//Click submit button
document.getElementById('submit').addEventListener('click', findDay);
//Enter in input field
document.getElementById('input').addEventListener("keyup", function(event) {
   if (event.key === "Enter" || event.keyCode === 13) {
       findDay();
   }});
//Click reset button
document.getElementById("reset").addEventListener('click', init);