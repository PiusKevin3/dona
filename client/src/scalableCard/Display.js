const showContent = function () {  //DISPLAY FUNCTION


    //CSS SECTION
    var style = document.createElement('style');
    style.innerHTML = `
    #Card {
    background-color: #F0F8FF; /*lightblue*/;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 370px;
    text-align: center;
    border-radius: 8px;
    margin-left: auto;
    margin-right: auto;
    padding: 5px 9px;
    }    
    #card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
    #cardTitle {
    color: #000033;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size: 50px; /*xx-large*/;
    }

    #cardSubTitle{
    color: #000033;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size: small;
    }

    input[type=text], select, textarea {
        width: 95%;
        /*padding: 4px;*/
        border: 1px solid #ccc;
        border-radius: 4px;
        resize: vertical;
        padding: 13px 10px;
        margin: 9px 0;
      }

      input[type=text]:focus {
        outline: none;
        border: 0.09px dotted #444;
      }
      /* Updated */
      form {
        background-color: #fff;
        border-radius: 3px;
        padding: 7px;
      }

      input[type=submit] {
        background-color: #fff ;/*#4CAF50*/;  /* Updated */
        color: #444;  /* Updated */
        padding: 10px 16px;
        border: 2px solid lightblue;  /* Updated */
        /*border-top: 2px;*/
        border-radius: 1px;
        cursor: pointer;
        /*float: center;*/
        width: 98%;  /* Updated */
      
      }
      /* Updated */
      input[type=submit]:hover {
        color: #FFF;
        background-color: lightblue;
      }

      .accordion {
        background-color: #eee;
        color: #444;
        cursor: pointer;
        padding: 18px;
        text-align: left;
        width: 100%;
        outline: none;
        transition: 0.4s;
        border: 0;
        height: 50px;
        margin-top: 4px;
      }

      .active, .accordion:hover {
        background-color: #ddd;
      }

      .accordion:after {
        content: '\\002B'; /*002B*/
        color: white;
        font-weight: bold;
        font-size: 25px;
        margin-left: 5px;
        float: right;
        color: #444;
      }

      .active:after {
        content: "\\2212"
      }

      .panel {
        padding: 0 18px;
        background-color: #F0F8FF;
        display: none;
        overflow: hidden;
      
      }

      #btnContainer {
        margin-top: 15px;
        width: 100%;
        /*
        display: flex;
        justify-content: space-around;
        */
      }

     
    
        #btnSignup, #btnLogin {
          /*background-color: #F0F8FF;*/
          border: none;
          padding: 16px 20px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 12.5px;
          margin: 4px 2px;
          transition-duration: 0.4s;
          cursor: pointer;
          border-radius: 4px;
         
      }
      #btnSignup {
        
        background-color: #b3ecff;
      }

      #btnSignup:hover {
        background-color: #99e6ff; /*#4CAF50*/;
        /*color: white*/;
      }
     
      #btnLogin:hover {
        background-color: #b3b3b3; /*#4CAF50*/;

      }

      #btnSignup, #btnLogin:focus {
        outline: none;
      }

      #signup_with_google {
        width: 100%px;
        height: 50px;
      }

     #signup_with_google:hover {
        cursor: pointer;
      }
      
      
      
      
    `;
    document.head.appendChild(style);
    //END CSS SECTION



    const rootDisplay = document.getElementById('main');

    rootDisplay.setAttribute("id", "Card");

    //TITLE SECTION
    const h1 = createElement('h1');
    h1.innerHTML = "Dona";
    rootDisplay.appendChild(h1);

    document.getElementsByTagName("H1")[0].setAttribute("id", "cardTitle");

    //END TITLE SECTION

    //SUB-TITLE SECTION
    const h3 = createElement('h3');
    h3.innerHTML = "Global Collaboration, Global Donation";
    rootDisplay.appendChild(h3);

    document.getElementsByTagName("H3")[0].setAttribute("id", "cardSubTitle");

    //END SUB-TITLE SECTION


    //MAPPING DATA SECTION

    let btnAccordionOne, 
        btnAccordionTwo, 
        divAccordionOne, 
        divAccordionTwo,
        contentAccordionOne,
        contentAccordionTwo;

    btnAccordionOne = createElement("button");
    btnAccordionOne.innerHTML = "Section 1";
    btnAccordionOne.setAttribute("class", "accordion");

    btnAccordionTwo = createElement("button");
    btnAccordionTwo.innerHTML = "Section 2";
    btnAccordionTwo.setAttribute("class", "accordion");

    divAccordionOne = createElement("div");
    divAccordionOne.setAttribute("class", "panel");
    contentAccordionOne = createElement("p");

    divAccordionTwo = createElement("div");
    divAccordionTwo.setAttribute("class", "panel");
    contentAccordionTwo = createElement("p");

    contentAccordionOne.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia atque impedit sed minus nemo suscipit, totam, expedita eum corrupti, porro repellat. Eaque at nobis nulla, aut veniam totam similique est.";
    contentAccordionTwo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia atque impedit sed minus nemo suscipit, totam, expedita eum corrupti, porro repellat. Eaque at nobis nulla, aut veniam totam similique est.";

    divAccordionOne.appendChild(contentAccordionOne);
    divAccordionTwo.appendChild(contentAccordionTwo);

    rootDisplay.appendChild(btnAccordionOne);
    rootDisplay.appendChild(divAccordionOne);
    
    rootDisplay.appendChild(btnAccordionTwo);
    rootDisplay.appendChild(divAccordionTwo);

    let accordionItems = document.getElementsByClassName("accordion");

    let i;

    for(i = 0; i < accordionItems.length; i++) {

        accordionItems[i].addEventListener("click", function() {

          this.classList.toggle("active");

          let pannel = this.nextElementSibling;

          if(pannel.style.display == "block") {
              pannel.style.display = "none";
          }
          else {
            pannel.style.display = "block";
          }

          console.log("clicked");
        });
    }
    //END MAPPING DATA SECTION
    //END ACCORDION SECTION

    //SIGN UP AND LOGIN BUTTONS
    let btnSignUp, btnLogin, buttonsContainer, img;
    img = createElement("img");
    img.src = "./signup_with_google.jpg";
    img.setAttribute('id', 'signup_with_google');

    btnSignUp = createElement("button");
    btnLogin = createElement("button");
    buttonsContainer = createElement("div");

    btnSignUp.setAttribute("class", "btn_signin_login");
    btnSignUp.setAttribute("id", "btnSignup");
    btnLogin.setAttribute("id", "btnLogin");
    buttonsContainer.setAttribute("id", "btnContainer");
    btnLogin.setAttribute("class", "btn_signin_login");

    btnSignUp.innerHTML = "SIGN UP";
    btnLogin.innerHTML  = "LOGIN IN";

    // buttonsContainer.appendChild(btnSignUp);
    // buttonsContainer.appendChild(btnLogin);
    buttonsContainer.appendChild(img);
    rootDisplay.appendChild(buttonsContainer);


    //FORM SECTION
    const form = createElement('form');

    form.setAttribute("method", "post");
    form.style.marginTop = "15px";

    const fullName = createElement("input");
    fullName.setAttribute("type", "text");
    fullName.setAttribute("name", "FullName");
    fullName.setAttribute("placeholder", "Full Name");


    const lastName = createElement("input");
    lastName.setAttribute("type", "text");
    lastName.setAttribute("name", "dob");
    lastName.setAttribute("placeholder", "Last Name");

    const streetAddress = createElement("input")
    streetAddress.setAttribute("type", "text");
    streetAddress.setAttribute("name", "streetAddr");
    streetAddress.setAttribute("placeholder", "Street Address");

    const zip = createElement("input")
    zip.setAttribute("type", "text");
    zip.setAttribute("name", "zip");
    zip.setAttribute("placeholder", "zip");

    const phone = createElement("input")
    phone.setAttribute("type", "text");
    phone.setAttribute("name", "phone");
    phone.setAttribute("placeholder", "Telephone");

    const email = createElement("input")
    email.setAttribute("type", "text");
    email.setAttribute("name", "email");
    email.setAttribute("placeholder", "Email");



    const btnSubmit = createElement("input");
    btnSubmit.setAttribute("type", "submit");
    btnSubmit.setAttribute("value", "Submit");




    form.appendChild(fullName);

    const br = createElement('br');


    form.appendChild(br.cloneNode());


    form.appendChild(lastName);
    form.appendChild(br.cloneNode());

    form.appendChild(streetAddress)
    form.appendChild(br.cloneNode());

    form.appendChild(zip)
    form.appendChild(br.cloneNode());

    form.appendChild(phone)
    form.appendChild(br.cloneNode());

    form.appendChild(email)
    form.appendChild(br.cloneNode());

    form.appendChild(btnSubmit);

    //rootDisplay.appendChild(form);

    //FORM SECTION END

    btnSignUp.addEventListener("click", function(){
      rootDisplay.appendChild(form);
      btnAccordionOne.style.display = "none";
      btnAccordionTwo.style.display = "none";
      buttonsContainer.style.display = "none";
    });


}

const createElement = function (element) {

    return document.createElement(element);
}

showContent();

//export { createElement };

