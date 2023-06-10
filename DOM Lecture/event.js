const box = document.getElementById("box");


const coordinates = document.createElement('p');
document.append(coordinates);

const logMessage = (event) => {
    console.log(event);
    coordinates.innerHTML=`${event.offsetX} ${event.offsetY}`;
}

box.addEventListener('mousemove',logMessage);

