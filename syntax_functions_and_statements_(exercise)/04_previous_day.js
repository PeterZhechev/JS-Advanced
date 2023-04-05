function previousDay(year, month, day) {

    let now = new Date(year, month - 1, day - 1);

    let currentDate = now.getDate();
    let currentMonth = now.getMonth();
    let currentYear = now.getFullYear();

    console.log(`${currentYear}-${currentMonth + 1}-${currentDate}`);
}

previousDay(2016, 9, 30);

previousDay(2023, 1, 1);