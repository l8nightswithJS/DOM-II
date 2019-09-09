// Your code goes here
const funBusQuery = document.querySelector('h1')
funBusQuery.addEventListener('mouseover', (event) => {
    funBusQuery.style.color = "green";
}) 

function changeColor(event) {
    event.target.style.color = "orange";
}

const navQuery = document.querySelectorAll('a');
navQuery.forEach((nav) => {
    nav.addEventListener('click', changeColor);     
})


const busImg = document.querySelector('.intro img')
document.addEventListener('keyup', (event) => {
    if (event.code === 'Space') {
      busImg.style.display = "none";
    }

  })

const imgContent = document.querySelector('.img-content img');
imgContent.addEventListener('dblclick', (event) => {
    imgContent.setAttribute('src', 'https://i.pinimg.com/originals/cd/96/fe/cd96fef569a44a841a3d7bfe99c697dd.jpg')
});


