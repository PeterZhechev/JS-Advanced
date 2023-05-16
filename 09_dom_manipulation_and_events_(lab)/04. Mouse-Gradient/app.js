function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', funcMove);
    gradient.addEventListener('mouseout', funcOut);

    function funcMove(e) {
        let power = e.offsetX / (e.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + "%";    
    }

    function funcOut() {
        document.getElementById('result').textContent = "";
    }
}