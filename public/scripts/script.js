const raceTrack = document.getElementById("race-track");
const laneNumber = document.getElementById("lane-numbers");

let finished = 0;


document.addEventListener("DOMContentLoaded", () =>
{
    addLanes(4);
});

document.getElementById("numbrCars").addEventListener("change", (event) =>
{
    addLanes(event.target.value);
});

document.getElementById("startBtn").addEventListener("click", () =>
{
    let cars = document.querySelectorAll(".car");
    let lanes = document.querySelectorAll(".lane-numb");
    let speedNumbers = getRandomNumbersArray(cars.length);
    let trackWidth = raceTrack.offsetWidth - 65;

    for (let i = 0; i < cars.length; i++)
    {
        cars[i].style.transition = `transform ${speedNumbers[i]}s cubic-bezier(.${getRandomNumber()},.${getRandomNumber()},.${getRandomNumber()},.${getRandomNumber()})`;
        cars[i].style.transform = `translate(${trackWidth}px)`;
    }
    announcePlacements(cars, lanes);
});

document.getElementById("resetBtn").addEventListener("click", () =>
{
    addLanes(document.getElementById("numbrCars").value);
});

const getRandomNumbersArray = (cars) => 
{
    let speedArray = [];
    const min = 5;
    const max = 16;

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
        let lane = document.createElement("div");
        lane.classList.add("lane-numb");
        lane.textContent = i + 1;
        if(i % 2 === 0)
        {
            raceLane.style.background = "#8ee4af";
            lane.style.background = "#8ee4af";
        }
        let car = document.createElement("div");
        let carIcon = document.createElement("img");
        carIcon.setAttribute("src", "../images/carImg.svg");
        car.classList.add("car");
        car.appendChild(carIcon);
        raceLane.appendChild(car);
        raceTrack.appendChild(raceLane);
        laneNumber.appendChild(lane);

    }
}

const removeLanes = () =>
{
    while (raceTrack.firstChild)
    {
        raceTrack.removeChild(raceTrack.lastChild);
        laneNumber.removeChild(laneNumber.lastChild);
    }
}

const announcePlacements = (cars, lanes) =>
{
    for (let i = 0; i < cars.length; i++)
    {
        let track = cars[i].parentElement;
        cars[i].addEventListener('transitionend', () =>
        {
            if(finished === 0)
            {
                track.style.background = "#FFD700";
                lanes[i].style.background = "#FFD700";
            }
            else if(finished === 1)
            {
                track.style.background = "#B6C2CC";
                lanes[i].style.background = "#B6C2CC";
            }
            else if(finished === 2)
            {
                track.style.background = "#cd7f32";
                lanes[i].style.background = "#cd7f32";
            }
            finished ++;            
        });
    }

}