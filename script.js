function name(){
  alert("Button is working");
  var year =document.getElementaryById("year").value;
  var MM = parseInt(document.getElementaryById("month").value);
  var DD = parseInt(document.getElementaryById("date").value);
  var CC = parseInt( year.slice(0,2));
  var YY = parseInt(year.slice(2,4));


  var myDays=["Sunday","Monday","Tuesday","Wednesday","Thursday,Friday","Saturday"];
  var Malenames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var Females=["Kwasi","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  var gender =document.getElementaryById("gender").value;
  console.log(gender);



  var calculateDate = (((CC/4) -2*CC-1)+((5*YY/4)) +((226*(MM+1)/10)) +DD)%7;
  calculateDate= Math.floor(calculateDate);
  if (MM <1||MM>12){
    alert("please fill in the correct month");
  }
  if (DD>31 || DD<1){
    alert("please fill in the correct date");
  }

  if (gender ==="male"){
    sex = Malenames;
  }
  else{
    sex = Female;
  }

  var output = sex[calculateDate];
  document.getElementaryById("answer").innerHTML = "congratulations your Akan name is " +output+".";
}