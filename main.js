function getdata(){
    url="https://www.cheapshark.com/api/1.0/deals?upperPrice=100&sortBy=recent&lowerPrice=10&AAA=1&steamworks=1";
    fetch(url).then(response=>{
        return response.json();
    }).then(render);
    
}

function render(images){
    var id=1;
    images.forEach(element=>{
        //console.log(element['download_url'])
        var t=element["steamAppID"];
        if(t==null || t=="513710" || t=="1259420"){
            return;
        }
        var thumb="https://cdn.cloudflare.steamstatic.com/steam/apps/"+t+"/header.jpg?t=1669134695";
        var image=document.createElement("img");
        image.setAttribute("src",thumb);
        var name=document.createElement("h1");
        name.innerHTML=element['title'];
        var link=document.createElement("a");
        var d=element['metacriticLink'];
        d="https://www.metacritic.com"+d;
        link.setAttribute("href",d);
        link.setAttribute("target","_blank")
        link.innerHTML="<br>Metacritic Link";
        var rating1=document.createElement("pre");
        var a=element['metacriticScore'];
        var b=element['steamRatingText'];
        var c=element["steamRatingPercent"];
        var e=element["salePrice"];
        e=e+"$";
        var f=element["normalPrice"];
        f="<del>"+f+"$ </del>";
        var g=parseFloat(element["savings"]);
        g=g.toFixed(2);
        var price=document.createElement("h5");
        var date1=element["releaseDate"];
        var numdate=new Date(date1*1000);
        numdate=numdate.toDateString();
        var link1=document.createElement("a");
        t="https://store.steampowered.com/app/"+t;
        link1.setAttribute("href",t);
        link1.setAttribute("target","_blank")
        link1.innerHTML="Steam Link <br><br>";
        price.innerHTML="Normal Price: "+f+"<br> Sale Price: "+e+"<br>"+"Discount: "+g+"%";
        rating1.innerHTML=id+' Metacritic Score: '+a +'        ' + 'Steam Rating: ' +b + '  ' + c +'%<br><br>' + "Release Date: "+numdate ;

        document.getElementById("grid").appendChild(name);
        document.getElementById("grid").appendChild(image);
        document.getElementById("grid").appendChild(link);
        document.getElementById("grid").appendChild(rating1);
        document.getElementById("grid").appendChild(price);
        document.getElementById("grid").appendChild(link1);
        id=id+1;

        
    });
}
getdata();