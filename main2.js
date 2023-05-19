function getImages(){
    url = "https://picsum.photos/v2/list" // url of the API
    fetch(url).then(response=>{ // fetch response from the url
        return response.json(); // convert the response in the json format
    }).then(render); // send the response as a parameter to callback function - render
}

function render(images){
    var id=1 // initial value of id
    images.forEach(element => { // for each element in the images array (which is a javascript object (analogous to map/dictionary in other languages))
        download_url = element['download_url'] // get the download_url
        var image = document.createElement('img') // create an img element
        image.setAttribute("src", download_url) // add src attribute with value of the download_url
        image.setAttribute("id", id) // give a unique id to the img tag
        image.setAttribute("width", 200) // set width
        // image.setAttribute("height", 200) // you can also set height if you want
        document.getElementById("grid").appendChild(image) // Append (Add) this img tag to the div by id of grid
        id=id+1 // increase the id counter
    });
}

getImages(); // calling the getImages function in the main script
