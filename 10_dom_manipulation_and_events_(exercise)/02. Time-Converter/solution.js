function attachEventsListeners() {

    let daysInputElement = document.getElementById('days');
    let hoursInputElement = document.getElementById('hours');
    let minutesInputElement = document.getElementById('minutes');
    let secondsInputElement = document.getElementById('seconds');

    let daysButtonElement = document.getElementById('daysBtn');
    let hoursButtonElement = document.getElementById('hoursBtn');
    let minutesButtonElement = document.getElementById('minutesBtn');
    let secondsButtonElement = document.getElementById('secondsBtn');

    daysButtonElement.addEventListener('click', daysFunc);
    hoursButtonElement.addEventListener('click', hoursFunc);
    minutesButtonElement.addEventListener('click', minutesFunc);
    secondsButtonElement.addEventListener('click', secondsFunc);

    function daysFunc() {
        hoursInputElement.value = Number(daysInputElement.value) * 24;
        minutesInputElement.value = Number(daysInputElement.value) * 1440;
        secondsInputElement.value = Number(daysInputElement.value) * 86400;
    }

    function hoursFunc() {
        daysInputElement.value = Number(hoursInputElement.value) / 24;
        minutesInputElement.value = Number(hoursInputElement.value) * 60;
        secondsInputElement.value = Number(hoursInputElement.value) * 3600;
    }

    function minutesFunc() {
        daysInputElement.value = Number(minutesInputElement.value) / 1440;
        hoursInputElement.value = Number(minutesInputElement.value) / 60;
        secondsInputElement.value = Number(minutesInputElement.value) * 60;
    }

    function secondsFunc() {
        daysInputElement.value = Number(secondsInputElement.value) / 86400;
        hoursInputElement.value = Number(secondsInputElement.value) / 3600;
        minutesInputElement.value = Number(secondsInputElement.value) / 60;
    }
}