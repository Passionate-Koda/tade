var next = document.getElementById("getPosts");
var property_title = document.getElementById('property_title');
var property_description = document.getElementById('property_description');
var property_status = document.getElementById('property_status');
var property_type = document.getElementById('property_type');
var contract_type = document.getElementById('contract_type');
var basic_handle = document.getElementById('basic_handle');
var internal_handle = document.getElementById('internal_handle');
var external_handle = document.getElementById('external_handle');
var environmental_handle = document.getElementById('environmental_handle');




next.addEventListener('click', function(e){
var basic_features = document.getElementsByClassName('basic_features');
var internal_features = document.getElementsByClassName('internal_features');
var external_features = document.getElementsByClassName('external_features');
var environmental_features = document.getElementsByClassName('environmental_features');
var property_title_value = document.getElementById("property_title_value");
var property_description_value = document.getElementById("property_description_value");
var property_status_value = document.getElementById("property_status_value");
var property_type = document.getElementById("property_type");
var contract_type_value = document.getElementById("contract_type_value");
var amount_value = document.getElementById("amount_value");


var i;

for(i = 0; i < basic_features.length; ++i){
  if(basic_features[i].checked){

    var text = document.createElement("p");
    var textValue = document.createTextNode(basic_features[i].value);
    text.appendChild(textValue);
    basic_handle.appendChild(text);

}
}

for(i = 0; i < environmental_features.length; ++i){
  if(environmental_features[i].checked){

    var text = document.createElement("p");
    var textValue = document.createTextNode(environmental_features[i].value);
    text.appendChild(textValue);
    environmental_handle.appendChild(text);

}
}

for(i = 0; i < external_features.length; ++i){
  if(external_features[i].checked){

    var text = document.createElement("p");
    var textValue = document.createTextNode(external_features[i].value);
    text.appendChild(textValue);
    external_handle.appendChild(text);

}
}
for(i = 0; i < internal_features.length; ++i){
  if(internal_features[i].checked){

    var text = document.createElement("p");
    var textValue = document.createTextNode(internal_features[i].value);
    text.appendChild(textValue);
    internal_handle.appendChild(text);

}
}


property_title_value.innerHTML = property_title.value;
property_description_value.innerHTML = property_description.value;
property_status_value.innerHTML = property_status.value;
property_type_value.innerHTML = property_type.value;
contract_type_value.innerHTML = contract_type.value;
amount_value.innerHTML = amount.value;








// console.log(property_title.value);
// console.log(property_description.value);
// console.log(property_status.value);
// console.log(property_type.value);
// console.log(contract_type.value);
// console.log(amount.value);
}, false);


function PreviewImage() {
  var diva = document.getElementsByName('holder');
  diva.innerHTML= null;
var img = document.getElementById("uploadImage");
var i;
for(i = 0; i < img.files.length; i++){
  console.log(img.files[i]);
var description = document.getElementById('describe_m');
 describe_img = document.createElement('div'),
 dis_left = document.createElement('div'),
 image = document.createElement('img'),
 ifrm = document.createElement('i'),
 dis_right = document.createElement('div'),
 dis_input = document.createElement('input');

 describe_img.setAttribute("class", "describ-img");
 dis_left.setAttribute("class", "dis-left");
 image.setAttribute("id", "uploadPreview");
 image.setAttribute("src", window.URL.createObjectURL(img.files[i]));
 ifrm.setAttribute("class", "fa fa-pencil");
 ifrm.setAttribute("aria-hidden", "true");
 dis_right.setAttribute("class", "des-right");
 dis_input.setAttribute("type", "text");

 dis_input.setAttribute("id","prev");
 dis_input.setAttribute("name","description[]");
 dis_input.setAttribute("placeholder", "Property Description");

 describe_img.appendChild(dis_left);
 describe_img.appendChild(dis_right);
 dis_left.appendChild(image);
 dis_left.appendChild(ifrm);
 dis_right.appendChild(dis_input);
 description.appendChild(describe_img);


}
};



function PreviewImageValue() {
var img = document.getElementById("uploadImage");

var i;
for(i = 0; i < img.files.length; i++){
  console.log(img.files[i]);
  var val_id = document.getElementById("prev");
  var description = document.getElementById('describe_val');
  doble_img = document.createElement('div'),
  describe_img = document.createElement('div'),
  dis_left = document.createElement('div'),
  image = document.createElement('img'),
  dis_right = document.createElement('div'),
  dis_val = document.createElement('h4'),
  title = document.createElement('h5');

 describe_img.setAttribute("class", "describ-img");
 doble_img.setAttribute("class", "doble-img");
 dis_left.setAttribute("class", "dis-left");
 image.setAttribute("id", "uploadPreview");
 image.setAttribute("src", window.URL.createObjectURL(img.files[i]));
 dis_right.setAttribute("class", "des-right");
 discrib_val = document.createTextNode(val_id.value);
 dis_val.appendChild(discrib_val);
 var offset = 1;
 var v = ( i + offset) ;
 title_val = document.createTextNode("Property Images " + v);
 title.appendChild(title_val);




 describe_img.appendChild(dis_left);
 describe_img.appendChild(dis_right);
 dis_left.appendChild(image);
 dis_right.appendChild(dis_val);
 doble_img.appendChild(title);
 doble_img.appendChild(describe_img);
 description.appendChild(doble_img);



}
};





function getstate(cnt_ID){
  var url = '/states/'+ cnt_ID;
  console.log(cnt_ID);
  var method = 'GET';
  // var params = 'state=' + document.getElementById('stateid').value;
  stajax(url,method);
  console.log(url);

}

function stajax(url, method){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
      console.log(xhr.responseText);
      document.getElementById('state').innerHTML = xhr.responseText

    }
  }
  xhr.open(method, url, true);
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  var sd = xhr.send();
  //console.log(sd);
}










function getlga(cnt_ID){
  var url = '/lga/'+ cnt_ID;
  console.log(cnt_ID);
  var method = 'GET';
  // var params = 'state=' + document.getElementById('stateid').value;
  lgaajax(url,method);
  console.log(url);
}

function lgaajax(url, method){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
      console.log(xhr.responseText);
      document.getElementById('lga').innerHTML = xhr.responseText

    }
  }
  xhr.open(method, url, true);
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  var sd = xhr.send();
  //console.log(sd);
}




var type = document.getElementById('property_type');
var contract_type = document.getElementById('contract_type');
var addField = document.getElementById('field');
var contract_behaviour = document.getElementById('contract_type_behaviour')
type.addEventListener('change', function(e){
  contract_behaviour.innerHTML = "";


  if(type.value == "Agricultural Farm(s)" ){
    var html = '<p>';

    html += '<label>' + "What is the size land?" + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Acre" >' + "Acre" + '</option>';
    html += '<option value="Hecters" >' + "Hecters" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';

    addField.innerHTML = html;
  }

  if(type.value == "Apartment" ){
    var html = '<p>';
    html += '<label>' + "How many Apartments?" + '</label>';
    html += '<select name="quantity">';
    html += '<option>' + "-select-" + '</option>';
    for(var i = 1; i <= 500; i++){
      html += '<option value="' + i + ' Apartments" >' + i +  " Apartments" +'</option>';
    }
    html += '</select>';
    html += '<label>' + "Approximate Size of Livable Space?" + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Acre" >' + "Acre" + '</option>';
    html += '<option value="Hecters" >' + "Hecters" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';




    html += '</p>';

    addField.innerHTML = html;
  }

  if(type.value == "Block of Flat(s)" ){
    var html = '<p>';
    html += '<label>' + "How many Block of Flats?*" + '</label>';
    html += '<select name="quantity">';
    html += '<option>' + "-select-" + '</option>';
    for(var i = 1; i <= 500; i++){
      html += '<option value="' + i + ' Blocks of Flats" >' + i +  " Blocks of Flats" +'</option>';
    }
    html += '</select>';
    html += '<label>' + "Approximate Size of Livable Space?" + '</label>';
      html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Acre" >' + "Acre" + '</option>';
    html += '<option value="Hecters" >' + "Hecters" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';

    addField.innerHTML = html;
  }

  if(type.value == "Boys Quarter(s)" ){
    var html = '<p>';
    html += '<label>' + "How many Boys Quarter(s)?*" + '</label>';
    html += '<select name="quantity">';
    html += '<option>' + "-select-" + '</option>';
    for(var i = 1; i <= 500; i++){
      html += '<option value="' + i + ' Boys Quarters" >' + i +  " Boys Quarters" +'</option>';
    }
    html += '</select>';
    html += '<label>' + "Approximate Size of Livable Space?" + '</label>';
      html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Acre" >' + "Acre" + '</option>';
    html += '<option value="Hecters" >' + "Hecters" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';

    addField.innerHTML = html;
  }


  if(type.value == "Bungalow(s)" ){
    var html = '<p>';
    html += '<label>' + "How many Bungalow(s)?*" + '</label>';
    html += '<select name="quantity">';
    html += '<option>' + "-select-" + '</option>';
    for(var i = 1; i <= 500; i++){
      html += '<option value="' + i + ' Bungalow(s)" >' + i +  " Bungalow(s)" +'</option>';
    }
    html += '</select>';
    html += '<label>' + "Approximate Size of Livable Space?" + '</label>';
      html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Acre" >' + "Acre" + '</option>';
    html += '<option value="Hecters" >' + "Hecters" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';

    addField.innerHTML = html;
  }


  if(type.value == "Condomium(s)" ){
    var html = '<p>';
    html += '<label>' + "How many Condomium(s)?*" + '</label>';
    html += '<select name="quantity">';
    html += '<option >' + "-select-" + '</option>';
    for(var i = 1; i <= 500; i++){
      html += '<option value="' + i + ' Condomium(s)" >' + i +  " Condomium(s)" +'</option>';
    }
    html += '</select>';
    html += '<label>' + "Approximate Size of Livable Space?" + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Acre" >' + "Acre" + '</option>';
    html += '<option value="Hecters" >' + "Hecters" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';

    addField.innerHTML = html;
  }


  if(type.value == "Car Park Space(s)" ){
    var html = '<p>';
    html += '<label>' + "Types Car Park Space(s)?*" + '</label>';
    html += '<select name="typeOfitem">';
    html += '<option>' + "-select Type-" + '</option>';
    html += '<option value="Open Air Parking SPace" >' + "Open Air Parking SPace" + '</option>';
    html += '<option value="Covered Up Parking Space" >' + "Covered Up Parking Space" + '</option>';
    html += '</select>';


    html += '<label>' + "Car Park Space Capacity?*" + '</label>';
    html += '<select name="capacity">';
    html += '<option>' + "-Select Capacity-" + '</option>';
    html += '<option value="1-5000" >' + "1-5000" + '</option>';
    html += '<option value="5,000 - 10,000" >' + "5,000 - 10,000" + '</option>';
    html += '<option value="10,0000-20,000" >' + "10,0000-20,000" + '</option>';
    html += '<option value="20,000-30,000" >' + "20,000-30,000" + '</option>';
    html += '<option value="30,000-40,000" >' + "30,000-40,000" + '</option>';
    html += '<option value="40,000-50,000" >' + "40,000-50,000" + '</option>';
    html += '</select>';


    html += '<label>' + "How many car Spaces Available?*" + '</label>';
    html += '<select quantity>';
    html += '<option>' + "-Select Car Space-" + '</option>';
    for(var i = 1; i <= 500; i++){
      html += '<option value="' + i + ' Cars" >' + i +  " Cars" +'</option>';
    }
    html += '</select>';

    html += '</p>';

    addField.innerHTML = html;
  }

  if(type.value == "Caravan" ){
    var html = '<p>';

    html += '<label>' + "How many Caravans?*" + '</label>';
    html += '<input name="quantity" type="number">';
    html += '<label>' + "Approximate Size of the Caravan?*" + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';

    addField.innerHTML = html;
  }

  if(type.value == "Car Wash Centre(s)" ){
    var html = '<p>';

    html += '<label>' + "Approximate Size of Car Wash?* " + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';

    addField.innerHTML = html;
  }

  if(type.value == "Cold Room(s)" ){
    var html = '<p>';
    html += '<label>' + "Approximate Size of Cold Room?*" + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';

    addField.innerHTML = html;
  }

  if(type.value == "Commercial Propertie(s)" ){
    var html = '<p>';

    html += '<label>' + "How many floors has the Property?* " + '</label>';
    html += '<select name="quantity">';
    html += '<option>' + "-select Floor-" + '</option>';
    for(var i = 1; i <= 100; i++){
      html += '<option value="' + i + ' Floor" >' + i +  " Floor" +'</option>';
    }
    html += '</select>';

    html += '<label>' + "Which floor is the available Property?* " + '</label>';
    html += '<select name="place">';
    html += '<option>' + "-select Floor-" + '</option>';
    for(var i = 1; i <= 100; i++){
      html += '<option value="' + i + ' Floor" >' + i +  " Floor" +'</option>';
    }
    html += '</select>';
    html += '<label>' + " What is the floor size? " + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';
    addField.innerHTML = html;
  }

  if(type.value == "Conference Centre(s)"){
    var html = '<p>';
    html += '<label>' + "Approximate Space of the Conference Centre?*" + '</label>';
    html += '<input name="Unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';

    html += '<label>' + "How many seats available in Conference Room?" + '</label>';
    html += '<input name="capacity" type="number">';


    html += '</p>';

    addField.innerHTML = html;
  }





  if(type.value == "Duplexe(s)" ){
    var html = '<p>';
    html += '<label>' + " Type of Duplex drop down menu?*" + '</label>';
    html += '<select name="typeOfitem">';
    html += '<option>' + "-select Type-" + '</option>';
    html += '<option value="Detached" >' + "Detached" + '</option>';
    html += '<option value="Semi Detached" >' + "Semi Detached" + '</option>';
    html += '</select>';

    html += '<label>' + "How many Duplexes?" + '</label>';
    html += '<input name="quantity" type="number">';
    html += '<label>' + "Approximate Size of Livable Space?* " + '</label>';
    html += '<select name="measurement" >';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';

    html += '</p>';

    addField.innerHTML = html;
  }


  if(type.value == "Factorie(s)" ){
    var html = '<p>';
    html += '<label>' + "Type of Factory?*" + '</label>';
    html += '<input type="text" name="typeOfitem" placeholder=" E.g. Water, Drugs, Chemical etc ">';
    html += '<label>' + "What is the size of the factory? *" + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Acres" >' + "Acres" + '</option>';
    html += '<option value="Hecters" >' + "Hecters" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';

    addField.innerHTML = html;
  }

  if(type.value == "Flat(s)" ){
    var html = '<p>';
    html += '<label>' + "How many Flats?" + '</label>';
    html += '<input  name="quantity" type="number">';
    html += '<label>' + "Approximate Size of Livable Space?* " + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';

    addField.innerHTML = html;
  }

  if(type.value == "Gas/Petrol Station(s)" ){
    var html = '<p>';
    html += '<label>' + "How many Pumps?* " + '</label>';
    html += '<input name="quantity" type="number">';
    html += '<label>' + "What is the size of the Gas/Filling ? *" + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Acres" >' + "Acres" + '</option>';
    html += '<option value="Hecters" >' + "Hecters" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';

    addField.innerHTML = html;
  }


  if(type.value == "Guest House(s)" ){
    var html = '<p>';
    html += '<label>' + "How many Guest Houses?" + '</label>';
    html += '<input name="quantity" type="number">';
    html += '<label>' + "Approximate Size of Rooms?*" + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';

    html += '<label>' + "How many rooms in the Guest House?" + '</label>';
    html += '<input name="capacity" type="number">';
    html += '</p>';

    addField.innerHTML = html;
  }

  if(type.value == "Homes" ){
    var html = '<p>';
    html += '<label>' + "How many Homes? " + '</label>';
    html += '<input type="number">';
    html += '<label>' + "Approximate Size of Livable Space in the Home?*" + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';

    addField.innerHTML = html;
  }

  if(type.value == "Hospital(s)" ){
    var html = '<p>';
    html += '<label>' + "How many Beds in the Hospital?* " + '</label>';
    html += '<input name="quantiy" type="number">';
    html += '<label>' + "What is the size of the Hospital? * " + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Acres" >' + "Acres" + '</option>';
    html += '<option value="Hecters" >' + "Hecters" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';

    addField.innerHTML = html;
  }


  if(type.value == "Hotel(s)" ){
    var html = '<p>';
    html += '<label>' + "How many Hotels? " + '</label>';
    html += '<input name="quantity" type="number">';
    html += '<label>' + "Approximate Size of Rooms?*" + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '<label>' + "How many rooms in the Hotel? " + '</label>';
    html += '<input name="capacity" type="number" >';
    html += '</p>';

    addField.innerHTML = html;
  }


  if(type.value == "House(s)" ){
    var html = '<p>';
    html += '<label>' + "How many Houses?" + '</label>';
    html += '<input name="quantity" type="number">';
    html += '<label>' + "Approximate Size of Livable Space in the House?* " + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement" >';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';

    html += '</p>';

    addField.innerHTML = html;
  }


  if(type.value == "Industrial Estate(s)" ){
    var html = '<p>';

    html += '<label>' + "What's the size of Industrial Estate?*  " + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Acres" >' + "Acres" + '</option>';
    html += '<option value="Hecters" >' + "Hecters" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';

    html += '</p>';

    addField.innerHTML = html;
  }

  if(type.value == "Maisonette" ){
    var html = '<p>';

    html += '<label>' + "How many Maisonette?*" + '</label>';
    html += '<input name="quantity" type="number">';
    html += '<label>' + "What is the Approximate Size of Livable Space? " + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';

    html += '</p>';

    addField.innerHTML = html;
  }

  if(type.value == "Mansion(s)" ){
    var html = '<p>';

    html += '<label>' + "How many Mansions?*" + '</label>';
    html += '<input name="quantity" type="number">';
    html += '<label>' + "What's the size of Mansion?*  " + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';

    html += '</p>';

    addField.innerHTML = html;
  }


  if(type.value == "Office Space(s)" ){
    var html = '<p>';

    html += '<label>' + "How many office Spaces Available?" + '</label>';
    html += '<input name="quantity" type="number">';
    html += '<label>' + "What is the Size of Available Space? * " + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';

    addField.innerHTML = html;
  }


  if(type.value == "Ranche(s)" ){
    var html = '<p>';

    html += '<label>' + "What is the Size of the Ranch? " + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Acres" >' + "Acres" + '</option>';
    html += '<option value="Hecters" >' + "Hecters" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';

    html += '</p>';

    addField.innerHTML = html;
  }

  if(type.value == "Row Home(s)" ){
    var html = '<p>';

    html += '<label>' + "How many Row Houses? " + '</label>';
    html += '<input name="quantity" type="number">';
    html += '<label>' + "Approximate Size of Livable Space in the Row House?*" + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';

    html += '</p>';

    addField.innerHTML = html;
  }


  if(type.value == "Resorts & Leisure" ){
    var html = '<p>';

    html += '<label>' + "What is the Approximate Size of the Resort?*" + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Acres" >' + "Acres" + '</option>';
    html += '<option value="Hecters" >' + "Hecters" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';
    addField.innerHTML = html;
  }


  if(type.value == "School(s)" ){
    var html = '<p>';

    html += '<label>' + "What is the Type of School? " + '</label>';
    html += '<select name="typeOfitem">';
    html += '<option value="" >' + "-select Type" + '</option>';
    html += '<option value="Cresh" >' + "Cresh" + '</option>';
    html += '<option value="Elementary" >' + "Elementary" + '</option>';
    html += '<option value="Primary School" >' + "Primary School" + '</option>';
    html += '<option value="Secondary" >' + "Secondary" + '</option>';
    html += '<option value="High" >' + "High" + '</option>';
    html += '<option value="Tertiary" >' + "Tertiary" + '</option>';
    html += '</select>';


    html += '<label>' + "What is the Approximate Size of the School? * " + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Acres" >' + "Acres" + '</option>';
    html += '<option value="Hecters" >' + "Hecters" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';
    addField.innerHTML = html;
  }

  if(type.value == "Shop(s)" ){
    var html = '<p>';

    html += '<label>' + "How many Shops? " + '</label>';
    html += '<input name="quantity" type="number">';
    html += '<label>' + "What is the size?*" + '</label>';
      html += '<input name="place" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';
    addField.innerHTML = html;
  }

  if(type.value == "Shopping Malls/Plaza(s)" ){
    var html = '<p>';

    html += '<label>' + "What floor on the Shopping Mall/Plaza?" + '</label>';
    html += '<input name="place" type="number">';
    html += '<label>' + "What is the Floor Space of the Shop?*" + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';
    addField.innerHTML = html;
  }

  if(type.value == "Showroom(s)" ){
    var html = '<p>';

    html += '<label>' + "What is the Floor Space of the Showroom?*" + '</label>';
    html += '<input name="place" type="number">';
    html += '<label>' + "What is the Floor Space of the Showroom?*" + '</label>';
    html += '<input name="place" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';
    addField.innerHTML = html;
  }

  if(type.value == "Single Family Home(s)" ){
    var html = '<p>';

    html += '<label>' + "How many Single Family Homes?" + '</label>';
    html += '<input name="quantity" type="number">';
    html += '<label>' + "What is the Approximate size of livable space?*" + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';
    addField.innerHTML = html;
  }

  if(type.value == "Studio Apartment(s)" ){
    var html = '<p>';

    html += '<label>' + "How many Studio Apartments? " + '</label>';
    html += '<input name="quantity" type="number">';
    html += '<label>' + "What is the Approximate size of livable space?*" + '</label>';
      html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';
    addField.innerHTML = html;
  }

  if(type.value == "Town House(s)" ){
    var html = '<p>';

    html += '<label>' + "How many Town Houses?" + '</label>';
    html += '<input name="quantity" type="number">';
    html += '<label>' + "What is the Approximate size of livable space?*" + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';
    addField.innerHTML = html;
  }

  if(type.value == "Villa(s)" ){
    var html = '<p>';

    html += '<label>' + "How many Villas?" + '</label>';
    html += '<input name="quantiy" type="number">';
    html += '<label>' + "What is the Approximate size of livable space?*" + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';
    addField.innerHTML = html;
  }

  if(type.value == "Virtual Office Space(s)" ){
    var html = '<p>';

    html += '<label>' + "How many Virtual Office Space?" + '</label>';
    html += '<input name="quantity" type="number">';
    html += '<label>' + "What is the Approximate size of livable space?*" + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';
    addField.innerHTML = html;
  }






  if(type.value == "Residential Estate(s)" ){
    var html = '<p>';

    html += '<label>' + "What Type of Residential Estates?" + '</label>';
    html += '<select name="typeOfitem">';
    html += '<option>' + "-select Type-" + '</option>';
    html += '<option value="Flats" >' + "Flats" + '</option>';
    html += '<option value="Duplexes" >' + "Duplexes" + '</option>';
    html += '<option value="TerraceS" >' + "TerraceS" + '</option>';
    html += '<option value="Mixed Options" >' + "Mixed Options" + '</option>';
    html += '<option value="Apartments" >' + "Apartments" + '</option>';
    html += '<option value="Block of flats" >' + "Block of flats" + '</option>';
    html += '<option value="Bungalows" >' + "Bungalows" + '</option>';
    html += '<option value="Condomiums" >' + "Condomiums" + '</option>';
    html += '<option value="Mansions" >' + "Mansions" + '</option>';
    html += '<option value="Town Houses" >' + "Town Houses" + '</option>';
    html += '</select>';

    html += '<label>' + "What is the Approximate size of livable space?*" + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';
    addField.innerHTML = html;
  }


  if(type.value == "Shared Home Space(s)" ){
    var html = '<p>';

    html += '<label>' + "What type of Accommodation Space?*" + '</label>';
    html += '<select name="typeOfitem">';
    html += '<option>' + "-select Type-" + '</option>';
    html += '<option value="Entire Space" >' + "Entire Space" + '</option>';
    html += '<option value="Private Room" >' + "Private Room" + '</option>';
    html += '<option value="Shared Room" >' + "Shared Room" + '</option>';
    html += '</select>';
    html += '<label>' + "Home Space is available for Duration?*" + '</label>';
    html += '<input name="from_duration" type="date"><span>TO</span><input name="to_duration" type="date">';

    html += '<label>' + "How many guests can home space accommodate?*?" + '</label>';
    html += '<select name="sh_accomodation_capacity">';
    html += '<option>' + "-select-" + '</option>';
    for(var i = 1; i <= 50; i++){
      html += '<option value="' + i + ' >' + i + '</option>';
    }
    html += '</select>';


    html += '<label>' + "What type of bed do you offer?" + '</label>';
    html += '<select name="sh_type_of_bedspace">';
    html += '<option>' + "-select-" + '</option>';
    html += '<option value="Hard Mattress" >' + "Hard Mattress" + '</option>';
    html += '<option value="Spring Mattress" >' + "Spring Mattress" + '</option>';
    html += '<option value="Normal Mattress" >' + "Normal Mattress" + '</option>';
    html += '<option value="Couch" >' + "Couch" + '</option>';
    html += '<option value="Detachable" >' + "Detachable" + '</option>';
    html += '</select>';


    html += '<label>' + "How many guests can Bed accommodate?" + '</label>';
    html += '<select name="sh_bedspace_capacity">';
    html += '<option>' + "-select-" + '</option>';
    for(var i = 1; i <= 10; i++){
      html += '<option value="' + i + 'Persons" >' + i + 'Persons</option>';
    }
    html += '</select>';


    html += '<label>' + "Do you offer Complementary Breakfast to Guests?" + '</label>';
    html += '<select name="sh_guest_breakfast">';
    html += '<option>' + "-select-" + '</option>';
    html += '<option value="Yes" >' + "Yes" + '</option>';
    html += '<option value="No" >' + "No" + '</option>';
    html += '</select>';

    html += '<label>' + "‘Do you charge any refundable caution fee for damages?" + '</label>';
    html += '<select id="sgb" name="sh_caution_fee">';
    html += '<option>' + "-select-" + '</option>';
    html += '<option value="Yes" >' + "Yes" + '</option>';
    html += '<option value="No" >' + "No" + '</option>';
    html += '</select>';

    html += '<label>' + "How much is the refundable caution fee for damages? If applicable" + '</label>';
    html += '<input name="sh_caution_fee_amount" type="number">';

    html += '<label>' + "Does your home permit visitor sleep over? " + '</label>';
    html += '<select " name="sh_sleep_over">';
    html += '<option>' + "-select-" + '</option>';
    html += '<option value="Yes" >' + "Yes" + '</option>';
    html += '<option value="No" >' + "No" + '</option>';
    html += '</select>';

    html += '<label>' + "Specify guests come back time into premises anytime?" + '</label>';
    html += '<input name="sh_comeback_time" type="number">Hours Day & Night';


    html += '<label>' + "Available Bathroom*?" + '</label>';
    html += '<select " name="sh_available_bathroom">';
    html += '<option>' + "-select-" + '</option>';
    html += '<option value="Private Bathroom" >' + "Private Bathroom" + '</option>';
    html += '<option value="Shared Bathroom" >' + "Shared Bathroom" + '</option>';

    html += '<option value="None" >' + "None" + '</option>';
    html += '</select>';


    html += '<label>' + "Available Toilet?" + '</label>';
    html += '<select " name="sh_available_toilet">';
    html += '<option>' + "-select-" + '</option>';
    html += '<option value="Private Toilet" >' + "Private Toilet" + '</option>';
    html += '<option value="Shared Toilet" >' + "Shared Toilet" + '</option>';

    html += '<option value="None" >' + "None" + '</option>';
    html += '</select>';


    html += '<label>' + "Available Toilet?" + '</label>';
    html += '<select " name="sh_available_kitchen">';
    html += '<option>' + "-select-" + '</option>';
    html += '<option value="Private Kitchen" >' + "Private Kitchen" + '</option>';
    html += '<option value="Shared Kitchen" >' + "Shared Kitchen" + '</option>';

    html += '<option value="None" >' + "None" + '</option>';
    html += '</select>';

    html += '<label>' + "What is the Approximate size of livable space?*" + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';

    html += '<label>' + "Do you offer referrals Compensation plan?" + '</label>';
    html += '<select id="sgb" name="sh_compensation_plan">';
    html += '<option>' + "-select-" + '</option>';
    html += '<option value="Yes" >' + "Yes" + '</option>';
    html += '<option value="No" >' + "No" + '</option>';
    html += '</select>';

    html += '<label>' + "How much is the referrals Compensation plan? If applicable" + '</label>';
    html += '<input name="sh_compensation_plan_amount" type="number">';
    html += '</p>';
    addField.innerHTML = html;
  }

  if(type.value == "Tank Farm(s)"){
    var html = '<p>';
    html += '<label>' + "How many Tanks in the Tank Farm?*" + '</label>';
    html += '<input name="quantity" type="number" >';
    html += '<label>' + "What is the height of the Tanks (Metres)?" + '</label>';
    html += '<input name="tf_height" type="number" >';

    html += '<label>' + "What is the diameter of the Tanks (Metres)?" + '</label>';
    html += '<input name="tf_diameter" type="number" >';

    html += '<label>' + "How Many Loading Gantry?" + '</label>';
    html += '<input name="tf_loading_gantry" type="number" >';

    html += '<label>' + "How many Litres Storage is each Tank?" + '</label>';
    html += '<input name="tf_liter_storage" type="number" >';

    html += '<label>' + "What is the Approximate size of the Tank Farm Facility?" + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Acres" >' + "Acres" + '</option>';
    html += '<option value="Hecters" >' + "Hecters" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';


    html += '</p>';
    addField.innerHTML = html;
  }


  if(type.value == "Terrace(s)" ){
    var html = '<p>';
    html += '<label>' + "How many Terraces?" + '</label>';
    html += '<input name="quantity" type="number">';
    html += '<label>' + "How many floor Terrace? " + '</label>';
    html += '<input name="capacity" type="number">';
    html += '<label>' + "What is the Approximate livable space?" + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';

    addField.innerHTML = html;
  }


  if(type.value == "Hall/Event Centre(s)" ){
    var html = '<p>';

    html += '<label>' + "All/Event Centre?" + '</label>';
    html += '<select name="typeOfitem">';
    html += '<option>' + "-select type-" + '</option>';
    html += '<option value="Open Space" >' + "Open Space" + '</option>';
    html += '<option value="Closed Space" >' + "Closed Space" + '</option>';

    html += '</select>';
    html += '<label>' + "How many Seats does Event Centre/Hall Accommodate?*" + '</label>';
    html += '<input name="capacity" type="number" >';
    html += '</p>';
    addField.innerHTML = html;
  }


  if(type.value == "Co-working Space(s)" ){
    var html = '<p>';
    html +=  '<p><label>What are the facilities offered by your Co-working Space?</label> <input name="co-working_facilities" type="checkbox" name="facilities_offered" value="Private Offices" >Private Offices<br><input type="checkbox" name="facilities_offered" value="Co-Working Spaces" >Co-Working Spaces<br><input type="checkbox" name="facilities_offered" value=" Mailing Services" > Mailing Services<br><input type="checkbox" name="facilities_offered" value=" Idea Incubation" > Idea Incubation<br><input type="checkbox" name="facilities_offered" value="Funding Window" >Funding Window<br><input type="checkbox" name="facilities_offered" value="Internet Facility" >Internet Facility<br><input type="checkbox" name="facilities_offered" value=" Stand Bye Power Generator" > Stand Bye Power Generator</p>';
    addField.innerHTML = html;
  }


  if(type.value == "Other(s)" ){
    var html = '<p>';
    html += '<label>' + "What is the name of the Type of Property?" + '</label>';
    html += '<input name="typeOfitem" type="text">';
    html += '<label>' + "What is the Approximate size of the property?*" + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Acres" >' + "Acres" + '</option>';
    html += '<option value="Hecters" >' + "Hecters" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';
    addField.innerHTML = html;
  }

  if(type.value == "Warehouse(s)" ){
    var html = '<p>';
    html += '<label>' + "How many Bays in Warehouse?" + '</label>';
    html += '<input name="qauntity" type="number">';
    html += '<label>' + "What is the Approximate size of each bay?" + '</label>';
    html += '<input name="unit_of_measurement" type="number">';
    html += '<select name="measurement">';
    html += '<option>' + "-select measurement-" + '</option>';
    html += '<option value="Acres" >' + "Acres" + '</option>';
    html += '<option value="Hecters" >' + "Hecters" + '</option>';
    html += '<option value="Sq.Meters" >' + "Sq.Meters" + '</option>';
    html += '<option value="Sq.Foot" >' + "Sq.Foot" + '</option>';
    html += '<option value="Sq.Yard" >' + "Sq.Yard" + '</option>';
    html += '</select>';
    html += '</p>';
    addField.innerHTML = html;
  }


  if(type.value !== "Land(s)" ){


    var html = '<option value="">--select</option><option value="For Rent">For Rent</option><option value="For Rent to Own">For Rent to Own</option><option value="For Sale">For Sale</option><option value="For Lease">For Lease</option><option value="For Mortgage">For Mortgage</option><option value="For Foreclosure">For Foreclosure</option><option value="For Property Request">For Property Request</option>';
    contract_type.innerHTML = html;
  }

  if(type.value == "Land(s)" ){
    addField.innerHTML = "";
    var html = '<option value="">--select</option><option value="For Property Development">For Property Development</option>';
    contract_type.innerHTML = html;
  }

}, false);




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// html += '<label>' + "How many rooms in the Hotel? " + '</label>';
// html += '<input type="number">';
//
// html += '<option value="Acres" >' + "Acres" + '</option>';
// html += '<option value="Hecters" >' + "Hecters" + '</option>';


contract_type.addEventListener('change', function(e){
  if(contract_type.value == "For Rent"){

    var amount = document.getElementById('amount');
     var html ='<p><label>Tenor</label><p>Days:<input name="tenor_day"  type="number"></p><p>Months<input name="tenor_month" type="number"></p><p>Years:<input name="tenor_year" type="number"></p>';

    html +=  '<p><label>Amount (country currency)</label> <input id="amount" name="amount"  type="number" placeholder="Amount"></p>';

    html +=  '<p><label>Cost/Unit of Measurement</label> <input type="number" name="cost_per_measurement" placeholder="Cost per Measurement"></p>'

    html += '<select name="cost_measurement"><option value="" > -select Measurement-</option><option value="Acres" > Acres</option><option value="Hecters" >Hecters </option><option value="Sq.Meters" >Sq.Meters</option><option value="Sq.Foot" >Sq.Foot</option><option value="Sq.Yard" >Sq.Yard</option></select>';
    html += '</p>';


    contract_behaviour.innerHTML = html;
  }

  if(contract_type.value == "For Rent to Own"){
    var amount = document.getElementById('amount');
     var html ='<p><label>Required Initial Deposit*’ </label>';

    html +=  '<p><label>Amount (country currency)</label> <input id="amount" name="amount"  type="number" placeholder="Amount"></p>';

    html +=  '<p><label> Development Period*</label>';
    html += '<select name="development_period>';
    html += '<option>' + "-select-" + '</option>';
    for(var i = 1; i <= 10; i++){
      html += '<option value="' + i + ' years" >' + i +  " Years" +'</option>';
    }
    html += '</select>';

    html +=  '<p><label> Payment Tenor*</label>';
    html += '<select name="payment_tenor" >';
    html += '<option>' + "-select-" + '</option>';
    for(var i = 1; i <= 50; i++){
      html += '<option value="' + i + ' years" >' + i +  " Years" +'</option>';
    }
    html += '</select>';


    html +=  '<p><label>Requirement for Application</label> <input type="checkbox" name="proof_of_income" value="Proof of Income(Payment Slip)">Proof of Income(Payment Slip)</p>';

    html +=  '<p><label>Bank Statement: </label>';
    html += '<select name="bank_statement">';
    html += '<option>' + "-select-" + '</option>';
    for(var i = 1; i <= 12; i++){
      html += '<option value="' + i + ' Months" >' + i +  " Months" +'</option>';
    }
    html += '</select>';
    html +=  '<p><label>Acceptable Valid Identification*:</label>';
    html += '<select name="acceptable_valid_identification">';
    html += '<option>' + "-select-" + '</option>';
    html += '<option value=" National Identity Card" >' + " National Identity Card" +'</option>';
    html += '<option value="Driver’s License" >' + "Driver’s License" +'</option>';
    html += '<option value="International Passport" >' + "International Passport" +'</option>';
    html += '</select>';
    contract_behaviour.innerHTML = html;
  }

  if(contract_type.value == "For Sale"){
    var amount = document.getElementById('amount');

    var html = '<p><label>Amount (country currency)</label> <input id="amount" type="number" name="amount"  placeholder="Amount"></p>';
    contract_behaviour.innerHTML = html;
  }



  if(contract_type.value == "For Lease"){
    var amount = document.getElementById('amount');
    var html =  '<p><label>Tenor </label>';
    html += '<select name="tenor">';
    html += '<option>' + "-select-" + '</option>';
    for(var i = 3; i <= 500; i++){
      html += '<option value="' + i + ' Years" >' + i +  " Years" +'</option>';
    }
    html += '</select>';

    html += '<p><label>Amount (country currency)</label> <input id="amount" type="number" name="amount"  placeholder="Amount"></p>';
    contract_behaviour.innerHTML = html;
  }


  if(contract_type.value == "For Mortgage"){
    var html =  '<p><label>Tenor of Mortgage </label>';
    html += '<select name="tenor">';
    html += '<option>' + "-select-" + '</option>';
    for(var i = 6; i <= 50; i++){
      html += '<option value="' + i + ' Months" >' + i +  " Months" +'</option>';
    }
    html += '</select>';
    html += '<p><label>Initial Deposit</label> <input type="number" name="initial_deposit" placeholder="Initial Deposit"></p>';
    html += '<p><label> Monthly Installment Payment</label> <input type="number" name="monthly_installment_payment" placeholder="Amount"></p></p>';
    contract_behaviour.innerHTML = html;
  }

  if(contract_type.value == "For Foreclosure"){
    var amount = document.getElementById('amount');
    var html =  '<p><label>Type of Foreclosure </label>';
    html += '<select name="type_of_foreclosure">';
    html += '<option value=" Foreclosure by Judicial Sale" >' + " Foreclosure by Judicial Sale" +'</option>';
    html += '<option value="Foreclosure by Power of Sale" >' + "Foreclosure by Power of Sale" +'</option></select>';

    html += '<p><label>Amount</label> <input id="amount" type="number" name="amount"  placeholder="Amount"></p>';
    contract_behaviour.innerHTML = html;
  }

  if(contract_type.value == "For Property Development"){
    var html =  '<p><label>Development Contract</label>';

    var html ='<option value="">--select Development Contract</option><option value="Joint Venture (JV) Development Sponsorship Contract"> Joint Venture (JV) Development Sponsorship Contract</option><option value="Clearing & Reclamation Investor Sponsorship Contract">  Clearing & Reclamation Investor Sponsorship Contract</option><option value="Dredging & Sand Filling Investor Sponsorship Contract">Dredging & Sand Filling Investor Sponsorship Contract</option><option value="Perimeter Land Surveying Investor Sponsorship Contract">Perimeter Land Surveying Investor Sponsorship Contract</option></p>'
    //contract_behaviour.innerHTML = html;
    land_contract.innerHTML = html;
  }else{
    land_contract.innerHTML = "";
  }




}, false);
