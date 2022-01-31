 // Defining a function to display error message
 function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form
function validateForm() {
    // Retrieving the values of form elements
    var fname = document.contactForm.fname.value;
    var lname = document.contactForm.lname.value;
    var email = document.contactForm.email.value;
    var psw = document.contactForm.psw.value;
    var cpsw = document.contactForm.cpsw.value;
    var mobile = document.contactForm.mobile.value;
    var gender = document.contactForm.gender.value;
    var country = document.contactForm.country.value;
    var birth = document.contactForm.birth.value;
    var address = document.contactForm.address.value;
    var interviewdate = document.contactForm.interviewdate.value;
    var myfile = document.contactForm.myfile.value;
    var year = document.contactForm.year.value;
    var project = document.contactForm.project.value;
   
    var LinkedIN = document.contactForm.LinkedIN.value;
	// Defining error variables with a default value
    var fnameErr =  lnameErr = emailErr =  pswErr =  cpswErr =  mobileErr = countryErr = genderErr = birthErr = addressErr = interviewdateErr = myfileErr = yearErr = projectErr=  LinkedINErr = true;

    if(fname == "") {
        printError("fnameErr", "Please Enter Your First Name");
    } else {
        printError("fnameErr", "");
        fnameErr = false;
    }
    // Validate name

    if(lname == "") {
        printError("lnameErr", "Please Enter Your Last Name");
    } else {
        printError("lnameErr", "");
        lnameErr = false;
    }


    // Validate email address
      if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate password
    if(psw == "") {
        printError("pswErr", "Please Enter password");
      } else {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
        if(regex.test(psw) === false){
          printError("pswErr", "Must contain Minimum 8 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character");
        } else {
        printError("pswErr", "");
        pswErr = false;
    }
  }
  // Validate confirmpassword

  if(cpsw == "") {
        printError("cpswErr", "Please Enter Your Confirm Password");
      } else {
        if(psw !=cpsw){
          printError("cpswErr", "Passwords Don't Match");
    } else {
        printError("cpswErr", "");
        cpswErr = false;
    }
  }


    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }


    // Validate gender
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
// Validate dob
    if(birth == "") {
        printError("birthErr", "Please select your DOB");
    } else {
        printError("birthErr", "");
        birthErr = false;
    }
// Validate address
if(address == "") {
        printError("addressErr", "Please Enter your address");
    } else {
        printError("addressErr", "");
        addressErr = false;
    }
  // Validate country
  if(country == "Select") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }



    if(interviewdate == "") {
      printError("interviewdateErr", "Please Enter availability for the interview");
    } else {
      printError("interviewdateErr", "");
      interviewdateErr = false;
    }

    if(myfile == "") {
      printError("myfileErr", "Upload File");
    } else {
      printError("myfileErr", "");
      myfileErr = false;
    }
    
    if(year == "") {
      printError("yearErr", "Enter the college Completion Year");
    } else {
      printError("yearErr", "");
      yearErr = false;
    }
   
    if(project== "") {
      printError("projectErr", "Internship Duration");
    } else {
      printError("projectErr", "");
      projectErr = false;
    }
    if(LinkedIN== "") {
      printError("LinkedINErr", "Enter the LinkedIN URL");
    } else {
      printError("LinkedINErr", "");
      LinkedINErr = false;
    }

    // Prevent the form from being submitted if there are any errors
    if((fnameErr ||lnameErr || emailErr || pswErr || cpswErr || mobileErr || countryErr || genderErr  ||addressErr || interviewdateErr || yearErr || LinkedINErr) == true) {
       return false;
    } else {
        
        alert("Submitted Successfuly");
    }
};


     