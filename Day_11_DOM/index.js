function onButtonClickHandler(event) {
  //console.log(event);

  // getting object of html element to access/set data
  let txtUserName = document.getElementById("username");
  let txtMobile = document.getElementById("mobile");
  let txtEmail = document.getElementById("emailaddress");

    // check if we successfully got the html element as an object
  if (txtUserName == null || txtMobile == null || txtEmail == null) {
    console.log("typo");
    return;
  }

  // access data
  console.log(txtUserName.value);
  console.log(txtMobile.value);
  console.log(txtEmail.value);

  // set data
  txtEmail.value = "";
  txtMobile.value = "";
  txtUserName.value = "";
}

function validateForm() {
  let txtUserName = document.getElementById("username");
  let txtMobile = document.getElementById("mobile");
  let txtEmail = document.getElementById("emailaddress");
  let errorMobile = document.getElementById("mobileerror");

  if (txtUserName == null || txtMobile == null || txtEmail == null) {
    console.log("typo");
    return false;
  }

  if (txtUserName.value.toString().length === 0) {
    txtUserName.style.backgroundColor = 'red';
    //alert("Enter Username.");
    return false;
  }
  txtUserName.style.backgroundColor = 'white';

  if (txtMobile.value.toString().length !== 10) {
    //alert("Enter Mobile.");
    txtMobile.style.backgroundColor = 'red';
    errorMobile.style.visibility = 'visible';
    return false;
  }
  txtMobile.style.backgroundColor = 'white';
  errorMobile.style.visibility = 'hidden';

  if (txtEmail.value.toString().length === 0) {
    //alert("Enter Email.");
    txtEmail.style.backgroundColor = 'red';
    return false;
  }
  txtEmail.style.backgroundColor = 'white';

  return true;
}

function onTextChangeHandler() {
  console.log("You Pressed Key.");
}

function onKeyPressHandler(eventData) {
  //console.log(eventData);
  if (eventData.srcElement.id === "username") {
    console.log(
      "User Pressed A Key : ",
      eventData.key,
      ", In : ",
      eventData.srcElement.id
    );
    return;
  }
  console.log(
    "Mobile / Email Key : ",
    eventData.key,
    ", In : ",
    eventData.srcElement.id
  );
}
