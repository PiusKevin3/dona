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

    #cardSubTitle {
      color: #000033;
      font-family:Verdana, Geneva, Tahoma, sans-serif;
      font-size: small;

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
      margin-top: 10px;
    }

    .active, .accordion:hover {
      background-color: #ddd;
    }

    .accordion:after {
      content: "\\002B";
      font-weight: bold;
      font-size: 25px;
      margin-left: 5px;
      float: right;
      color: grey; 
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
    //END ACCORDION SECTION

    //SIGN UP AND LOGIN BUTTONS
    let btnSignUp, btnLogin, buttonsContainer, img;
    img = createElement("img");
    img.src = "./signup_with_google.jpg";
    img.setAttribute('id', 'signup_with_google');

    buttonsContainer = createElement("div");
    buttonsContainer.setAttribute("id", "btnContainer");

    buttonsContainer.appendChild(img);
    rootDisplay.appendChild(buttonsContainer);

}

const createElement = function (element) {

    return document.createElement(element);
}

showContent();

