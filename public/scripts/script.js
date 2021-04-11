const raceTrack = document.getElementById("race-track");

document.addEventListener("DOMContentLoaded", () =>
{
    console.log(`DOM Content Loaded`);
});

document.getElementById("numbrCars").addEventListener("change", (event) =>
{
    while (raceTrack.firstChild)
    {
        raceTrack.removeChild(raceTrack.lastChild);
    }

    for (let i = 0; i < event.target.value; i++)
    {
        let raceLane = document.createElement("div");
        raceLane.classList.add("race-lane");
        let car = document.createElement("div");
        car.classList.add("car");
        raceLane.appendChild(car);
        raceTrack.appendChild(raceLane);
    }
    console.log(event.target.value);
});

document.getElementById("startBtn").addEventListener("click", () =>
{
    let cars = document.querySelectorAll(".car");
    let speedNumbers = getRandomNumbersArray(cars.length);
    
    for (let i = 0; i < cars.length; i++)
    {
        cars[i].style.transition = `transform ${speedNumbers[i]}s cubic-bezier(.${getRandomNumber()},.${getRandomNumber()},.${getRandomNumber()},.${getRandomNumber()})`;
        cars[i].style.transform = "translate(80vw)";
    }
});

const getRandomNumbersArray = (cars) => 
{
    let speedArray = [];

    while (speedArray.length < cars)
    {
        let speed = Math.floor(Math.random() * (20 - 12 + 1)) + 12;
        if (!speedArray.includes(speed))
        {
            speedArray.push(speed);
        }
    }

    return speedArray;
}

const getRandomNumber = () =>
{
    return Math.floor(Math.random() * (99 - 10 + 1)) + 10;
}