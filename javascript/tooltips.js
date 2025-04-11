
document.addEventListener('DOMContentLoaded', () => {

// Back to home tooltip

const homeButton = document.getElementById('backtohome');
const homeTooltip = document.getElementById('backtohomeText');

let homeTooltipTimeout;
homeButton.onmouseover = function() {
    clearTimeout(homeTooltipTimeout);
    homeTooltipTimeout = setTimeout(() => {
        homeTooltip.style.display = 'block';
    }, 1000);
};
homeButton.onmouseout = function() {
    clearTimeout(homeTooltipTimeout);
    homeTooltip.style.display = '';
};







})
