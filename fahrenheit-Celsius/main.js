//fahrenheit-Celcius
//Event Listeners
document.getElementById('Btn').addEventListener('click', convertEvent);
//Event Functions
function convertEvent() {
    //Read input
    let f = document.getElementById('Input').value
    
    //Convert when button is clicked
    let c =(f-32)*5/9
   

    //Output converted temperature
    document.getElementById('result').innerHTML = c;
}