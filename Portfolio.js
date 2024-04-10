// Retrieve serialized form data from local storage
var serializedFormData = localStorage.getItem('formData');

// Deserialize the form data
var formData = JSON.parse(serializedFormData);

// Retrieve base64 image data from local storage
var imageData = localStorage.getItem('imageData');

// Access the form data values
var universityName = formData["Name of the University"];
var graduationPercentage = formData["Graduation Percentage"];
var collegeName = formData["Name of the College"];
var intermediatePercentage = formData["Intermediate Percentage"];
var schoolName = formData["Name of the School"];
var highSchoolPercentage = formData["HighSchool Percentage"];
var Name = formData["Name"];
var Occupation = formData["Occupation"];
var GitHub = formData["Github ID"];
var LinkedIn = formData["LinkedIn ID"];
var ProjectTitle = formData["Project Title"];
var ProjectInfo = formData["Project Info"];
var ExperienceTitle = formData["Title"];
var ExperienceInfo = formData["Experience Info"];
var Achievements = formData["Enter Achievements"];
var email = formData["Email id"];
var mobile = formData["Mobile Number"];
var Techincal = formData["Enter Skills"];
var Soft = formData["Enter Soft Skills"];

// Set the text content of elements
document.getElementById('NameInNavbar').textContent = Name;
document.getElementById('Logo').textContent = Name;
document.getElementById('title').textContent = Name;
document.getElementById('section__text__p2').textContent = Occupation;
document.getElementById('GitHub_icon').textContent = GitHub;
document.getElementById('LinkedIn_icon').textContent = LinkedIn;
document.getElementById('University').textContent = universityName;
document.getElementById('College').textContent = collegeName;
document.getElementById('School').textContent = schoolName;
document.getElementById('Grad_Percentage').textContent = "Percentage: " + graduationPercentage + "%";
document.getElementById('College_Percentage').textContent = "Percentage: " + intermediatePercentage + "%";
document.getElementById('School_Percentage').textContent = "Percentage: " + highSchoolPercentage + "%";
document.getElementById('mail').textContent = email;
document.getElementById('mobile').textContent = mobile;

// Function to display the base64 image in section__pic-container
function displayBase64Image(imageData) {
    // Create an img element
    var img = document.createElement('img');

    // Set its src attribute to the base64 image data
    img.src = imageData;

    // Append the image to the section__pic-container div
    var sectionPicContainer = document.querySelector('.section__pic-container');
    sectionPicContainer.appendChild(img);
}

// Call the function to display the base64 image
displayBase64Image(imageData);

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}
function displayTitlesAndInfo() {
    const projectContainer = document.getElementById('Project-Details');

    // Loop through the arrays and create elements for each project
    for (let i = 0; i < ProjectTitle.length; i++) {
        const Division = document.createElement('div');
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = ProjectTitle[i];

        const projectInfo = document.createElement('p');
        projectInfo.textContent = ProjectInfo[i];

        // Append title and info elements to the container
        Division.appendChild(projectTitle);
        Division.appendChild(projectInfo);
        projectContainer.appendChild(Division);
    }
}
function displayTechnical() {
    const projectContainer = document.getElementById('Technical');

    // Loop through the arrays and create elements for each project
    for (let i = 0; i < Techincal.length; i++) {
        const Division = document.createElement('div');
        const projectTitle = document.createElement('h3');
        const icon = document.createElement('i');
        icon.className = 'fas fa-code';
        Division.appendChild(icon);
        projectTitle.textContent = Techincal[i];
        // Append title and info elements to the container
        Division.appendChild(projectTitle);
        // Division.appendChild(projectInfo);
        projectContainer.appendChild(Division);
    }
}
function displaySoft() {
    const projectContainer = document.getElementById('Soft');

    // Loop through the arrays and create elements for each project
    for (let i = 0; i < Soft.length; i++) {
        const Division = document.createElement('div');
        const projectTitle = document.createElement('h3');
        const icon = document.createElement('i');
        // icon.className = 'fa-solid fa-paperclip';
        icon.className = 'fa-solid fa-lightbulb';
        Division.appendChild(icon);
        projectTitle.textContent = Soft[i];
        // Append title and info elements to the container
        Division.appendChild(projectTitle);
        // Division.appendChild(projectInfo);
        projectContainer.appendChild(Division);
    }
}
function displayExperiences() {
    const projectContainer = document.getElementById('Experience-Details');

    // Loop through the arrays and create elements for each project
    for (let i = 0; i < ExperienceTitle.length; i++) {
        const Division = document.createElement('div');
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = ExperienceTitle[i];

        const projectInfo = document.createElement('p');
        projectInfo.textContent = ExperienceInfo[i];

        // Append title and info elements to the container
        Division.appendChild(projectTitle);
        Division.appendChild(projectInfo);
        projectContainer.appendChild(Division);
    }
}
function displayAchievements() {
    const projectContainer = document.getElementById('Achievement-Details');

    // Loop through the arrays and create elements for each project
    for (let i = 0; i < Achievements.length; i++) {
        const projectTitle = document.createElement('p');
        projectTitle.textContent = Achievements[i];
        projectContainer.appendChild(projectTitle);
    }
}
displayTitlesAndInfo();
displayTechnical();
displaySoft();
displayExperiences();
displayAchievements();

