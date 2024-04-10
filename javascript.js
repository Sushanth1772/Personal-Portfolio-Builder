var details = {};
function storeDetails(imageInput) {
    // Get the input fields
    var textInputs = document.querySelectorAll('.inputs input[type="text"]');
    var telInputs = document.querySelectorAll('.inputs input[type="tel"]');
    var numberInputs = document.querySelectorAll('.inputs input[type="number"]');
    var emailInputs = document.querySelectorAll('.inputs input[type="email"]');

    // Iterate over the input fields and store their values
    textInputs.forEach(function (input) {
        var fieldName = input.getAttribute('placeholder');
        var fieldValue = input.value;
        if (!details[fieldName]) {
            details[fieldName] = [fieldValue];
        } else {
            details[fieldName].push(fieldValue);
        }
    });

    telInputs.forEach(function (input) {
        var fieldName = input.getAttribute('placeholder');
        var fieldValue = input.value;
        if (!details[fieldName]) {
            details[fieldName] = [fieldValue];
        } else {
            details[fieldName].push(fieldValue);
        }
    });

    numberInputs.forEach(function (input) {
        var fieldName = input.getAttribute('placeholder');
        var fieldValue = input.value;
        if (!details[fieldName]) {
            details[fieldName] = [fieldValue];
        } else {
            details[fieldName].push(fieldValue);
        }
    });

    emailInputs.forEach(function (input) {
        var fieldName = input.getAttribute('placeholder');
        var fieldValue = input.value;
        if (!details[fieldName]) {
            details[fieldName] = [fieldValue];
        } else {
            details[fieldName].push(fieldValue);
        }
    });

    // Check if an image is selected
    if (imageInput && imageInput.files && imageInput.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            // Store the base64 representation of the image in local storage
            localStorage.removeItem('imageData');
            localStorage.setItem('imageData', e.target.result);
            console.log('Image data stored successfully.');
        }

        // Read the selected image file as a data URL
        reader.readAsDataURL(imageInput.files[0]);
    }

    // Handle image input
    if (imageInput) {
        var fieldName = imageInput.getAttribute('placeholder');
        var fieldValue = imageInput.value;
        if (!details[fieldName]) {
            details[fieldName] = [fieldValue];
        } else {
            details[fieldName].push(fieldValue);
        }
    }
}
// Function to handle submission
function handleSubmit() {
    // Call the storeDetails function to update details object
    storeDetails();

    // Serialize details object to JSON
    var serializedData = JSON.stringify(details);
    console.log('Serialized data:', serializedData);

    // Store serialized data in local storage
    localStorage.setItem('formData', serializedData);
}

// Other functions remain the same...

function handleNextPage0() {
    var imageInput = document.querySelectorAll('.inputs input[type="file"]')[0];
    storeDetails(imageInput);
    NextPage();
}

function handleNextPage(imageInput) {
    storeDetails(imageInput);
    NextPage1();
}

function handleNextPage1() {
    storeDetails();
    NextPage2();
}
function handleNextPage2() {
    storeDetails();
    NextPage4();
}


function handleNextPage4() {
    storeDetails();
    NextPage5();
}


function handleNextPage3() {
    storeDetails();
    NextPage3();
}
function NextPage() {
    event.preventDefault();
    var inputs = document.getElementsByClassName('inputs');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].innerHTML = `
            <h1>Academics</h1>
            <div class="labels">
                <i class="fa-solid fa-pencil"></i>
                <input type="text" placeholder="Name of the University">
            </div>
            <div class="labels">
                <i class="fa-solid fa-graduation-cap"></i>
                <input type="number" placeholder="Graduation Percentage" min="0" max="100" step="0.1">
            </div>
            <div class="labels">
                    <i class="fa-solid fa-pencil"></i>
                    <input type="text" placeholder="Name of the College">
            </div>
            <div class="labels">
                <i class="fa-solid fa-building-columns"></i>
                <input type="number" placeholder="Intermediate Percentage" min="0" max="100" step="0.1">
            </div>
            <div class="labels">
                    <i class="fa-solid fa-pencil"></i>
                    <input type="text" placeholder="Name of the School">
            </div>
            <div class="labels">
                <i class="fa-solid fa-school"></i>
                <input type="number" placeholder="HighSchool Percentage" min="0" max="100" step="0.1">
            </div>
            <button type="button" onclick="handleNextPage()"><b>Next</b></button>
        `;
    }
}

function AddB0() {
    event.preventDefault();
    var newInput = document.createElement('div');
    newInput.className = 'labels';
    var newInputIcon = document.createElement('i');
    newInputIcon.className = 'fa-solid fa-certificate';
    var newInputField = document.createElement('input');
    newInputField.type = 'text';
    newInputField.placeholder = 'Enter Skills';
    newInput.appendChild(newInputIcon);
    newInput.appendChild(newInputField);

    // Get the container for new inputs
    var container = document.querySelector('.inputs');

    // Get the element before which new inputs should be inserted
    var addButtonContainer = container.querySelector('.add').parentNode;

    // Insert the new input before the "Add" button container
    container.insertBefore(newInput, addButtonContainer);
}
function AddB00() {
    event.preventDefault();
    var newInput = document.createElement('div');
    newInput.className = 'labels';
    var newInputIcon = document.createElement('i');
    newInputIcon.className = 'fa-solid fa-certificate';
    var newInputField = document.createElement('input');
    newInputField.type = 'text';
    newInputField.placeholder = 'Enter Soft Skills';
    newInput.appendChild(newInputIcon);
    newInput.appendChild(newInputField);

    // Get the container for new inputs
    var container = document.querySelector('.inputs');

    // Get the element before which new inputs should be inserted
    var addButtonContainer = container.querySelector('.add').parentNode;

    // Insert the new input before the "Add" button container
    container.insertBefore(newInput, addButtonContainer);
}

function AddB() {
    event.preventDefault();
    // Create new input element
    var newInput = document.createElement('div');
    newInput.className = 'labels';
    var newInputIcon = document.createElement('i');
    newInputIcon.className = 'fa-solid fa-trophy';
    var newInputField = document.createElement('input');
    newInputField.type = 'text';
    newInputField.placeholder = 'Enter Achievements';
    newInput.appendChild(newInputIcon);
    newInput.appendChild(newInputField);

    // Get the container for new inputs
    var container = document.querySelector('.inputs');

    // Get the element before which new inputs should be inserted
    var addButtonContainer = container.querySelector('.add').parentNode;

    // Insert the new input before the "Add" button container
    container.insertBefore(newInput, addButtonContainer);
}
function AddB1() {
    event.preventDefault();
    // Create new input element
    var newInput = document.createElement('div');
    var newInput1 = document.createElement('div');
    var newInput2 = document.createElement('div');
    var newInput3 = document.createElement('div');
    newInput.className = 'labels';
    var newInputIcon = document.createElement('i');
    newInputIcon.className = 'fas fa-lightbulb';
    var newInputField = document.createElement('input');
    newInputField.type = 'text';
    newInputField.placeholder = 'Project Title';
    var newInputIcon1 = document.createElement('i');
    newInputIcon1.className = 'fa-solid fa-pencil';
    var newInputField1 = document.createElement('input');
    newInputField1.type = 'text';
    newInputField1.placeholder = 'Project Info';
    newInput3.appendChild(newInputIcon1);
    newInput3.appendChild(newInputField1);
    newInput1.appendChild(newInputIcon);
    newInput1.appendChild(newInputField);
    newInput2.appendChild(newInput3);
    newInput2.style.paddingTop = '1em';
    newInput.appendChild(newInput1);
    newInput.appendChild(newInput2);

    // Get the container for new inputs
    var container = document.querySelector('.inputs');

    // Get the element before which new inputs should be inserted
    var addButtonContainer = container.querySelector('.add').parentNode;

    // Insert the new input before the "Add" button container
    container.insertBefore(newInput, addButtonContainer);
}
function AddB2() {
    event.preventDefault();
    // Create new input element
    var newInput = document.createElement('div');
    var newInput1 = document.createElement('div');
    var newInput2 = document.createElement('div');
    var newInput3 = document.createElement('div');
    newInput.className = 'labels';
    var newInputIcon = document.createElement('i');
    newInputIcon.className = 'fas fa-briefcase';
    var newInputField = document.createElement('input');
    newInputField.type = 'text';
    newInputField.placeholder = 'Title';
    var newInputIcon1 = document.createElement('i');
    newInputIcon1.className = 'fa-solid fa-pencil';
    var newInputField1 = document.createElement('input');
    newInputField1.type = 'text';
    newInputField1.placeholder = 'Experience Info';
    newInput3.appendChild(newInputIcon1);
    newInput3.appendChild(newInputField1);
    newInput1.appendChild(newInputIcon);
    newInput1.appendChild(newInputField);
    newInput2.appendChild(newInput3);
    newInput2.style.paddingTop = '1em';
    newInput.appendChild(newInput1);
    newInput.appendChild(newInput2);

    // Get the container for new inputs
    var container = document.querySelector('.inputs');

    // Get the element before which new inputs should be inserted
    var addButtonContainer = container.querySelector('.add').parentNode;

    // Insert the new input before the "Add" button container
    container.insertBefore(newInput, addButtonContainer);
}
function NextPage1() {
    var inputs = document.getElementsByClassName('inputs');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].innerHTML = `
        <h1>Projects</h1>
        <div class="labels">
            <i class="fas fa-lightbulb"></i>
            <input type="text" placeholder="Project Title">
        </div>
        <div class="labels">
            <i class="fa-solid fa-pencil"></i>
            <input type="text" placeholder="Project Info">
        </div>
        <div class="labels">
            <button class="add" onclick ="AddB1()"><i class="fa-solid fa-plus"></i></button>
        </div>
        <button onclick="handleNextPage1()"><b>Next</b></button>
        `;
    }
}

function NextPage2() {
    var inputs = document.getElementsByClassName('inputs');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].innerHTML = `
        <h1>Experiences</h1>
        <div class="labels">
            <i class="fas fa-briefcase"></i>
            <input type="text" placeholder="Title">
        </div>
        <div class="labels">
            <i class="fa-solid fa-pencil"></i>
            <input type="text" placeholder="Experience Info">
        </div>
        <div class="labels">
            <button class="add" onclick ="AddB2()"><i class="fa-solid fa-plus"></i></button>
        </div>
        <button onclick="handleNextPage2()"><b>Next</b></button>
        `;
    }
}
function NextPage4() {
    var inputs = document.getElementsByClassName('inputs');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].innerHTML = `
        <h1>Techincal Skills</h1>
        <div class="labels">
            <i class="fa-solid fa-certificate"></i>
            <input type="text" placeholder="Enter Skills">
        </div>
        <div class="labels">
            <button class="add" onclick ="AddB0()"><i class="fa-solid fa-plus"></i></button>
        </div>
        <button onclick="handleNextPage4()"><b>Next</b></button>
        `;
    }
}
function NextPage5() {
    var inputs = document.getElementsByClassName('inputs');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].innerHTML = `
        <h1>Soft Skills</h1>
        <div class="labels">
            <i class="fa-solid fa-certificate"></i>
            <input type="text" placeholder="Enter Soft Skills">
        </div>
        <div class="labels">
            <button class="add" onclick ="AddB00()"><i class="fa-solid fa-plus"></i></button>
        </div>
        <button onclick="handleNextPage3()"><b>Next</b></button>
        `;
    }
}
function NextPage3() {
    var inputs = document.getElementsByClassName('inputs');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].innerHTML = `
        <h1>Achievements</h1>
        <div class="labels">
            <i class="fa-solid fa-trophy"></i>
            <input type="text" placeholder="Enter Achievements">
        </div>
        <div class="labels">
            <button class="add" onclick ="AddB()"><i class="fa-solid fa-plus"></i></button>
        </div>
        <button type="button"  onclick="handleSubmit()"><b>Submit</b></button>
        `;
    }
}