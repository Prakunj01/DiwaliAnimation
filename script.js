document.addEventListener("DOMContentLoaded", function () {
    const diwaliText = document.getElementById("diwalitext");

    const textArray = ["Happy Diwali!!!!", "Wishing you joy and prosperity", "Let the light shine bright"];

    let index = 0;
    let charIndex = 0;

    function type() {
        if (index < textArray.length) {
            if (charIndex < textArray[index].length) {
                diwaliText.innerHTML += textArray[index].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(erase, 2000);
            }
        }
    }

    function erase() {
        if (charIndex > 0) {
            diwaliText.innerHTML = textArray[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            index++;
            if (index >= textArray.length) {
                index = 0; // Restart the animation
            }
            setTimeout(type, 500);
        }
    }

    type(); // Start the animation
});
