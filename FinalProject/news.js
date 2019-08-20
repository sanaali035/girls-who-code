function getNews(countryCode){
var query = "https://newsapi.org/v2/top-headlines?country=" + countryCode + "&apiKey=5d82c0d61fae485ebc2743cff3629ec0";
newsRequest=new XMLHttpRequest();
newsRequest.open("GET", query);
newsRequest.onload = processNewsRequest;
newsRequest.send();
}

var found = $(".main-content")
console.log(found)

function processNewsRequest(){
  if(newsRequest.readyState != 4){
    return;
  }
  if(newsRequest.status !=200|| newsRequest.responseText===""){
    alert("This information is not available at this time");
    return;
  }
  var newsInfo = JSON.parse(newsRequest.responseText);




  var i;
  for (i=0; i<5; i++) {
    var myTitle = String(newsInfo.articles[i].title);
    var myDes = String(newsInfo.articles[i].description);
    var myurl = String(newsInfo.articles[i].url);

    var t = document.createElement("H2");
    t.innerHTML = myTitle;
    document.body.appendChild(t);

    var d = document.createElement("H4");
    d.innerHTML = myDes;
    document.body.appendChild(d);

    var u = document.createElement("H9");
    u.innerHTML= myurl;
    document.body.appendChild(u);
  } //end for loop

} //end of function
