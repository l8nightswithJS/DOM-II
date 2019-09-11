// Your code goes here
const navContainer = document.querySelector('.nav-container')
window.addEventListener('load', () => {
    navContainer.style.backgroundColor = 'lightblue';
    return alert("Hello friend if you click the Anchors Links they will change color, also double click pictures see what chnages if you like 'red' scroll to bottom")
})

const funBusQuery = document.querySelector('h1')
funBusQuery.addEventListener('mouseover', (event) => {
    funBusQuery.style.color = "green";
}) 

function changeColor(event) {
    event.target.style.color = "blue";
    event.preventDefault();
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


const headerQuery = document.querySelectorAll('h2');
headerQuery.forEach((headers) => {
    headers.addEventListener('mouseover', changeColor);
})
const containerQuery = document.querySelector('.all');

document.addEventListener('scroll', () => {
    const scrollSpace = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (Math.ceil(scrollSpace) === scrollHeight) {
        containerQuery.style.backgroundColor = "red";
        return alert("Click Ok see me go red!!!")
    }
});

const smallHeadersQuery = document.querySelectorAll('h4');

smallHeadersQuery.forEach((smallHeaders) => {
    document.addEventListener('mouseover', () => {
        smallHeaders.style.color = 'yellow';    

    })
});




  




