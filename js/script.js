

const singleuserAction = async () => {
  var filterbox=document.getElementById('filterbox').value;
  if(filterbox && filterbox!="")
  {
    const response = await fetch('https://api.openbrewerydb.org/breweries/'+filterbox, {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json'
    }
    });
    const myJsonobj = await response.json(); //extract JSON from the http response
    loadSingleList(myJsonobj);
  }
  else
  {
    alert('Id is required');
  }

}

function loadSingleList(item)
{
  var mylistdiv=document.getElementById('mylist');
  var htmloutput="";


var street=(item.street)?item.street:"";
var address_2=(item.address_2)?item.address_2:"";
var address_3=(item.address_3)?item.address_3:"";
var phone=(item.phone)?item.phone:"";
var website_url=(item.website_url)?item.website_url:"";

var wholeAddress=street+""+address_2+address_3;

    htmloutput=htmloutput+"<tr>"+
    "<td>"+item.id+"</td>\
    <td>"+item.name+"</td>\
    <td>"+item.brewery_type+"</td>\
    <td>"+wholeAddress+"</td>\
    <td>"+phone+"</td>\
    <td>"+website_url+"</td>\
    </tr>";

  mylistdiv.innerHTML=htmloutput;
}




const showAllUser = async () => {
  const response = await fetch('https://api.openbrewerydb.org/breweries', {
  method: 'GET',
  headers: {
  'Content-Type': 'application/json'
  }
  });
  const myJson = await response.json(); //extract JSON from the http response
  loadList(myJson);
  // do something with myJson
}

function loadList(myJson)
{
  var mylistdiv=document.getElementById('mylist');
  var htmloutput="";
  myJson.forEach((item, i) => {

var street=(item.street)?item.street:"";
var address_2=(item.address_2)?item.address_2:"";
var address_3=(item.address_3)?item.address_3:"";
var phone=(item.phone)?item.phone:"";
var website_url=(item.website_url)?item.website_url:"";

var wholeAddress=street+""+address_2+address_3;

    htmloutput=htmloutput+"<tr>"+
    "<td>"+item.id+"</td>\
    <td>"+item.name+"</td>\
    <td>"+item.brewery_type+"</td>\
    <td>"+wholeAddress+"</td>\
    <td>"+phone+"</td>\
    <td>"+website_url+"</td>\
    </tr>";
  });

  mylistdiv.innerHTML=htmloutput;
}



function toggleClass(e)
{

    if(e.classList.contains("mobilemenuclicked"))
    {
    e.classList.remove("mobilemenuclicked");
    }
    else
    {
        e.classList.add("mobilemenuclicked");
    }

}
