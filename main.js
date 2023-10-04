const lastName = document.getElementById('last-name');
const name = document.getElementById('name');
const middleName = document.getElementById('middle-name');
const nameResult = document.querySelector('.name-result');

[ lastName, name, middleName ].forEach(function(element) {
    element.addEventListener('input', function() {
        nameResult.textContent = `${lastName.value} ${name.value} ${middleName.value}`;
    });
 });

const height = document.getElementById('height');
const heightResult = document.querySelector('.height-result');

height.addEventListener('input', function () {
    const value = this.value;
    heightResult.textContent = `${value} см`;
});

const weight = document.getElementById('weight');
const weightResult = document.querySelector('.weight-result');

weight.addEventListener('input', function () {
    const value = this.value;
    weightResult.textContent = `${value} кг`;
});

function validate(evt) {
    let theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    let regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

const dateOfBirth = document.getElementById('date-of-birth');
const dateOfBirthResult = document.querySelector('.date-of-birth-result');


dateOfBirth.addEventListener('input', function () {
    dateOfBirthResult.textContent = `${dateOfBirth.value.charAt(8)}${dateOfBirth.value.charAt(9)}/${dateOfBirth.value.charAt(5)}${dateOfBirth.value.charAt(6)}/${dateOfBirth.value.charAt(0)}${dateOfBirth.value.charAt(1)}${dateOfBirth.value.charAt(2)}${dateOfBirth.value.charAt(3)}`;
});

let genderButtons = document.querySelectorAll("input[name='gender']");
let genderResult = document.querySelector('.gender-result');
let findSelectedGender = () => {
    let genderSelected = document.querySelector("input[name='gender']:checked").value;
    genderResult.textContent = genderSelected;
}

genderButtons.forEach(genderButton => {
    genderButton.addEventListener("change", findSelectedGender);
});

let colorOfEyes = document.querySelector('#color-of-eyes');

colorOfEyes.addEventListener('input', () =>{
    document.querySelector('.color-of-eyes-figure').style.backgroundColor = colorOfEyes.value;
});

let rightHandTrue = document.getElementById('right-hand-true');
let rightHandFalse = document.getElementById('right-hand-false');
let rightHandFigure = document.querySelector('.right-hand');

rightHandTrue.addEventListener('change', function() {
    if (rightHandTrue.checked) {
        rightHandFigure.classList.add('body-active');
    }
})

rightHandFalse.addEventListener('change', function() {
    if (rightHandFalse.checked) {
        rightHandFigure.classList.remove('body-active');
    }
})

let leftHandTrue = document.getElementById('left-hand-true');
let leftHandFalse = document.getElementById('left-hand-false');
let leftHandFigure = document.querySelector('.left-hand');

leftHandTrue.addEventListener('change', function() {
    if (leftHandTrue.checked) {
        leftHandFigure.classList.add('body-active');
    }
})

leftHandFalse.addEventListener('change', function() {
    if (leftHandFalse.checked) {
        leftHandFigure.classList.remove('body-active');
    }
})

let rightLegTrue = document.getElementById('right-leg-true');
let rightLegFalse = document.getElementById('right-leg-false');
let rightLegFigure = document.querySelector('.right-leg');

rightLegTrue.addEventListener('change', function() {
    if (rightLegTrue.checked) {
        rightLegFigure.classList.add('body-active');
    }
})

rightLegFalse.addEventListener('change', function() {
    if (rightLegFalse.checked) {
        rightLegFigure.classList.remove('body-active');
    }
})

let leftLegTrue = document.getElementById('left-leg-true');
let leftLegFalse = document.getElementById('left-leg-false');
let leftLegFigure = document.querySelector('.left-leg');

leftLegTrue.addEventListener('change', function() {
    if (leftLegTrue.checked) {
        leftLegFigure.classList.add('body-active');
    }
})

leftLegFalse.addEventListener('change', function() {
    if (leftLegFalse.checked) {
        leftLegFigure.classList.remove('body-active');
    }
})

let headTrue = document.getElementById('head-true');
let headFalse = document.getElementById('head-false');
let headFigure = document.querySelector('.head');

headTrue.addEventListener('change', function() {
    if (headTrue.checked) {
        headFigure.classList.add('body-active');
    }
})

headFalse.addEventListener('change', function() {
    if (headFalse.checked) {
        headFigure.classList.remove('body-active');
    }
})

let bodyFigure = document.querySelector('.body');
let fullBodyMessage = document.querySelector('.full-body');

[ rightHandTrue, rightHandFalse, leftHandTrue, leftHandFalse, rightLegTrue, rightLegFalse, leftLegTrue, leftLegFalse, headTrue, headFalse ].forEach(function(bodyParts) {
    bodyParts.addEventListener('change', function() {
        if (rightHandTrue.checked && leftHandTrue.checked && rightLegTrue.checked && leftLegTrue.checked && headTrue.checked) {
            bodyFigure.classList.add('body-active');
            fullBodyMessage.classList.add('full-body-show');
        } else {
            bodyFigure.classList.remove('body-active'); 
            fullBodyMessage.classList.remove('full-body-show');
        }
    });
 });
