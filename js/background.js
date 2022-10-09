const images =[
    "01.JPG",
    "2BEAD89D-C459-4266-8C96-7E43261242C2.jpeg",
    "23-1.jpg",
    "39DD1EF5-5BAD-4CEE-B586-79A90675328D.jpeg",
    "8006C32D-6C67-4AD2-A5A3-9917ABEC8E8D.jpeg",
    "20201119_223923.jpg",
    "DSC_7463.jpg",
    "DSC01152-2(in).jpg",
    "DSC05770-2.jpg",
    "IMG_6645-1comp.jpg",
    "JPAF9142.JPG",
    "LRM_EXPORT_202157600262457_20190420_193233200.jpeg",
    "LRM_EXPORT_67354248704073_20190517_232129963.jpeg",
    "sanchihiro.jpg",
    "seangrass.jpg",
    "slideimg02.jpg",
    "slideimg04.jpg",
    "Untitled-1.jpg",
    "굿데이지-.jpg",
    "솜사탕_UHD.jpg",
    "연파랑_UHD.jpg",
    "흐리고_따뜻한2.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];
const imageUrl = `img/${chosenImage}`;
const bgImg = document.querySelector(".backgorund");
// bgImg.style.backgroundImage =`url(${imageUrl})`;
// bgImg.style.backgroundSize =`cover`; 

document.body.style.backgroundImage =`url(${imageUrl})`;