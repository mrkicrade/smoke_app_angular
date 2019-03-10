//S E L E C T O R S

let d = new Date();
let day = d.getDay();
let tabs = document.querySelectorAll('.tab');
if (day == 0) {
	day = 6
} else {
	day = day - 1
}
let days = ['Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday'];
let currentDay = days[0];
// let currentDay = days[day];
let today = tabs[0];
// let today = tabs[day];
let smokeBtn = document.querySelector('.btnHolder button');
let resetBtn = document.querySelector('.repeatAll');
let newWeekBtn = document.querySelector('.newWeek');
let statisticBtn = document.querySelector('.statistic');
let nowTime = d.getTime();

let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let int;
let todayTabb = today.querySelector('.procent');
let stat = [];

if (currentDay != localStorage.day) {
	localStorage.today_cigaretes = 0;
}

if (localStorage.today_cigaretes) {
	cigaretes = parseInt(localStorage.today_cigaretes)
} else {
	cigaretes = 0;
}

//E V E N T S

smokeBtn.addEventListener('click' , startSmoke);
newWeekBtn.addEventListener('click', newWeek);
resetBtn.addEventListener('click' , reset);
statisticBtn.addEventListener('click' , allStatistic);

// localStorage.clear();
startApp();
smoking();

//F U N C T I O N S

function startApp(){
	today.style.boxShadow = "5px 5px 10px black";
	// console.log(currentDay);
	localStorage.setItem('day' , currentDay);
	smokeBtn.style.display = 'block';
	displaySmoked();
	localStorage.setItem('Monday' , localStorage.getItem('Monday') || 0);
	localStorage.setItem('Tuesday' , localStorage.getItem('Tuesday') || 0);
	localStorage.setItem('Wednesday' , localStorage.getItem('Wednesday') || 0);
	localStorage.setItem('Thursday' , localStorage.getItem('Thursday') || 0);
	localStorage.setItem('Friday' , localStorage.getItem('Friday') || 0);
	localStorage.setItem('Saturday' , localStorage.getItem('Saturday') || 0);
	localStorage.setItem('Sunday' , localStorage.getItem('Sunday') || 0);
}

function smoking(){
	if (localStorage.zadnja_cigara) {
		stopwatch();
	}
}

function startSmoke(){
	// localStorage.setItem(days[day] , cigaretes + 1);
	localStorage.setItem(days[0] , cigaretes + 1);
	this.style.display = 'none';
	clearInterval(int);
	zadnjaCigara = new Date().getTime();
	localStorage.setItem('zadnja_cigara' , zadnjaCigara);
	stopwatch();		
	localStorage.setItem('today_cigaretes' , cigaretes + 1);
	if (localStorage.today_cigaretes) {
		cigaretes = parseInt(localStorage.today_cigaretes)
	}
	todayCigaretes();
}
function stopwatch(){
	// pocetne vrednosti prve cigare
	let h = 0;
	let m = 0;
	let s = 0;

	let min = 0;
	let sec = 0;
	function display(){
		sec++;
		if (sec >= 60) {
			sec = 0;
			min++;
			if (min >= 60) {
				min = 0;
				h++;
			}
		}
		hours.innerHTML = h;
		minutes.innerHTML = min;
		seconds.innerHTML = sec;
	}
	if (localStorage.zadnja_cigara) {
		zadnja_cigara = parseInt(localStorage.zadnja_cigara);
		razlika = new Date().getTime() - zadnja_cigara;
		// console.log(razlika);
		s = Math.floor(razlika/1000);
		m = Math.floor(s / 60);
		h = Math.floor(m / 60);

		// //odredjivanje trenutne vrednosti
		min = Math.floor(m - (h * 60))
		sec = Math.floor(s - (m * 60)) 
		int = setInterval(display , 1000);
		display();
	} else {
		int = setInterval(display , 1000);
		display();
		// console.log('ne radi');
	}
}

function todayCigaretes(){
	displaySmoked();
	var theCSSprop = parseInt(window.getComputedStyle(todayTabb, null).getPropertyValue("height"));
	todayTabb.style.height = cigaretes * 5 + "%";
}

function displaySmoked(){
	todayTabb.innerHTML = cigaretes;
	let x = parseInt(localStorage.today_cigaretes) * 5;
	todayTabb.style.height = x + "%";
}

function newWeek(){
    if(currentDay == 'Monday'){

        monday = parseInt(localStorage.getItem('Monday'));
        tuesday = parseInt(localStorage.getItem('Tuesday'));
        thursday = parseInt(localStorage.getItem('Thursday'));
        wednesday = parseInt(localStorage.getItem('Wednesday'));
        friday = parseInt(localStorage.getItem('Friday'));
        saturday = parseInt(localStorage.getItem('Saturday'));
        sunday = parseInt(localStorage.getItem('Sunday'));
        reset();
    } else {
        alert('Today is not Monday!!!');
    }
}

function reset(){
    if (localStorage.stat) {
        stat = JSON.parse(localStorage.getItem('stat'));
    } else {
        stat = [];
    }

    currentStat = [];

    currentStat.push(monday);
    currentStat.push(tuesday);
    currentStat.push(wednesday);
    currentStat.push(thursday);
    currentStat.push(friday);
    currentStat.push(saturday);
    currentStat.push(sunday);

    console.log(currentStat);

    stat.push(currentStat);
    console.log(stat);
    localStorage.setItem('stat' , JSON.stringify(stat));

    localStorage.setItem('Monday' , 0);
    localStorage.setItem('Tuesday' , 0);
    localStorage.setItem('Wednesday' , 0);
    localStorage.setItem('Thursday' , 0);
    localStorage.setItem('Friday' , 0);
    localStorage.setItem('Saturday' , 0);
    localStorage.setItem('Sunday' , 0);

    localStorage.setItem('today_cigaretes' , 0);
}

function allStatistic(){
    // alert('radi');
}
