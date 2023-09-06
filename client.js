console.log(`lets object travel`)

let travelBook = [ 
    {
    picName: `Alaskan Bones`,
    image: `travelPhotos/B - Bones7.JPG`,
    local: `Alaska`,
    water: false,
    },
    {
    picName: `The Captain`,
    image: `travelPhotos/B - Captain1.jpg`,
    local: `New Zealand`,
    water: true,
    },
    {
    picName: `Cold Water Diving`,
    image: `travelPhotos/B-Diver.jpg`,
    local: `New Zealand`,
    water: true,
    },
    {
    picName: `Kayak Adventure`,
    image: `travelPhotos/B - RessurectionBay5.jpg`,
    local: `Alaska`,
    water: true,
    },
    {
    picName: `Up the Mainsail!`,
    image: `travelPhotos/B - Rigging2.JPG`,
    local: `New Zealand`,
    water: true,
    },
    {
    picName: `Creep in the Water`,
    image: `travelPhotos/B - TaupoSailing.JPG`,
    local: `New Zealand`,
    water: true,
    },
    {
    picName: `Swim the Agean`,
    image: `travelPhotos/B_Monemvasia4.jpg`,
    local: `Greece`,
    water: true,
    },
    {
    picName: `Climb with the Monks`,
    image: `travelPhotos/B-MeteoraView4.JPG`,
    local: `Greece`,
    water: false,
    },
    {
    picName: `The Olympics`,
    image: `travelPhotos/B-PanathenaicStadium4.JPG`,
    local: `Greece`,
    water: false,
    },
    {
    picName: `Land Hoooo!`,
    image: `travelPhotos/Island13.JPG`,
    local: `Bahamas`,
    water: true,
    },
    {
    picName: `Self Serve Coconut`,
    image: `travelPhotos/PinkBeach4.JPG`,
    local: `Bahamas`,
    water: true,
    },
]

const addImage = document.querySelector(`#gallery`)

function addImageDOM(arr){
    for(let i = 0; i < arr.length; i++){
        addImage.innerHTML += `<img src="${arr[i].image}">`;
        // addImage.innerHTML += `<p>${arr[i].picName}</p>`;
        console.log(arr[i].picName);
    }// end for loop
}// end function
addImageDOM(travelBook);


