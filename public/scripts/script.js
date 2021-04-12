const raceTrack = document.getElementById("race-track");
let finished = 0;

document.getElementById("numbrCars").addEventListener("change", (event) =>
{
    addLanes(event.target.value);
});

document.getElementById("startBtn").addEventListener("click", () =>
{
    let cars = document.querySelectorAll(".car");
    let speedNumbers = getRandomNumbersArray(cars.length);
    let trackWidth = raceTrack.offsetWidth - 55;

    for (let i = 0; i < cars.length; i++)
    {
        cars[i].style.transition = `transform ${speedNumbers[i]}s cubic-bezier(.${getRandomNumber()},.${getRandomNumber()},.${getRandomNumber()},.${getRandomNumber()})`;
        cars[i].style.transform = `translate(${trackWidth}px)`;
    }
    announcePlacements(cars);
});

document.getElementById("resetBtn").addEventListener("click", () =>
{
    addLanes(document.getElementById("numbrCars").value);
});

const getRandomNumbersArray = (cars) => 
{
    let speedArray = [];
    const min = 2;
    const max = 11;

    while (speedArray.length < cars)
    {
        let speed = Math.floor(Math.random() * (max - min + 1)) + min;
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

const addLanes = (lanes) =>
{
    finished = 0;
    removeLanes();
    for (let i = 0; i < lanes; i++)
    {
        let raceLane = document.createElement("div");
        raceLane.classList.add("race-lane");
        let car = document.createElement("div");
        let carIcon = document.createElement("img");
        carIcon.setAttribute("src", "../images/carImg.svg");
        car.classList.add("car");
        car.appendChild(carIcon);
        raceLane.appendChild(car);
        raceTrack.appendChild(raceLane);
    }
}

const removeLanes = () =>
{
    while (raceTrack.firstChild)
    {
        raceTrack.removeChild(raceTrack.lastChild);
    }
}

const announcePlacements = (cars) =>
{
    for (let i = 0; i < cars.length; i++)
    {
        let lane = cars[i].parentElement;
        cars[i].addEventListener('transitionend', () =>
        {
            if(finished === 0)
            {
                lane.style.background = "#FFD700";
            }
            else if(finished === 1)
            {
                lane.style.background = "#B6C2CC";
            }
            else if(finished === 2)
            {
                lane.style.background = "#cd7f32 ";
            }
            finished ++;            
        });
    }

}