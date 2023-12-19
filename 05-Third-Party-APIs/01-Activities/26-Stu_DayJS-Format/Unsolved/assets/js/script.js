// Use Day.js to format the date and assign to the declared variable.
var gradDate = dayjs(2023-05-14);
$('#1a').text(gradDate);

// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?
var weekDay = dayjs('01-01-2027', 'M-D-YYYY').format('dddd');
$('#2a').text(weekDay); 

// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
var dayWeek = today.format('[Today is] dddd');
$('#2a').text(dayWeek);

// TODO: 3. What is the current time in the format: hours:minutes:seconds
var time =dayjs().format('h:mm:ss')
$('#3a').text(time);

// TODO: 4. What is the current Unix timestamp?

// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.

// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)

