document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm');
    const resumeDisplay = document.getElementById('Resume-Display');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the default form submission

        // Collect form data
        const fullName = document.getElementById('fullName');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const education = document.getElementById('education');
        const experience = document.getElementById('Experience');
        const skills = document.getElementById('skills');

        // Generate resume content dynamically
        const resumeHTML = `
            <h2><b>Editable Resume</b></h2>
            <h3>Persnoal Information</h3>
            <p><b>Name:</b><span conteneditable="true"> ${fullName}</span></p>
            <p><b>Email:</b><span conteneditable="true">  ${email}</span></p>
            <p><b>Phone:</b><span conteneditable="true">  ${phone}</span></p>

            <h3>Education</h3>
            <p><span conteneditable="true">${education}</span></p>

            <h3>Experience</h3>
            <p><span conteneditable="true">${experience}</span></p>

            <h3>Skills</h3>
            <p><span conteneditable="true">${skills}</span></p>

            
        `;
    

        // Display resume
        resumeDisplay.innerHTML = resumeHTML;
    });
});
