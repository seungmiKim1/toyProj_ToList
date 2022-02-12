const now = new Date();

const today = {
    year : now.getFullYear(),
    date : now.getDate(),
    month : now.toLocaleString('en-US', {month: 'short'}), // 첫번째 인자를 국가를 넣어주고, 두번째 인자로 옵션 값을 전달해주면 옵션 값에 맞는 문자열 값을 해당 국가에 맞게 리턴해준다.
    day : now.toLocaleString('en-US', {weekday:'short'}),
}

document.getElementById('year').textContent = today.year; 
document.getElementById('date').textContent = today.date; 
document.getElementById('month').textContent = today.month; 
document.getElementById('day').textContent = today.day; 

