

function getdata(n){
    url="https://www.cheapshark.com/api/1.0/games?title="+n+"&limit=15&exact=";
    fetch(url).then(response=>{
        return response.json();
    }).then(render);
    
}
function name1(){
    var x=document.getElementById("gname").value;   
    getdata(x);
    
}
function render(data1){
    data1.forEach(element=>{
        if(element["steamAppID"]==null){
            return;
        }
        var t=element["steamAppID"];
        var thumb="https://cdn.cloudflare.steamstatic.com/steam/apps/"+t+"/header.jpg?t=1669134695";
        var image=document.createElement("img");
        image.setAttribute("src",thumb);
        var name=document.createElement("h1");
        name.innerHTML=element['external'];
        var sid=document.createElement("h2");
        sid.innerHTML="Steam ID: "+element['steamAppID'];
        var rate=document.createElement("h2");
        var x=element["cheapest"];
        rate.innerHTML="Cheapest Price: "+x+"$";
        var link1=document.createElement("a");
        t="https://store.steampowered.com/app/"+t;
        link1.setAttribute("href",t);
        link1.setAttribute("target","_blank")
        link1.innerHTML="Steam Link <br><br>"; 
/*         if(t!=null){
            var link1=document.createElement("a");
            t="https://store.steampowered.com/app/"+t;
            link1.setAttribute("href",t);
            link1.setAttribute("target","_blank")
        } */
        document.getElementById("sname").appendChild(name);
        document.getElementById("sname").appendChild(image);
        document.getElementById("sname").appendChild(sid);
        document.getElementById("sname").appendChild(rate);
        document.getElementById("sname").appendChild(link1);
        return;
        //document.getElementById("sname").appendChild(link1);
    })
}