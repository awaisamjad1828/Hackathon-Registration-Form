function functionbtn() {
    // Get the values from the input fields
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const university = document.getElementById('university').value;
    const teamName = document.getElementById('teamname').value;
    const teamMembers = document.getElementById('team-members').value;

    const teamMember1 = document.getElementById('team1').value;
    const teamMember2 = document.getElementById('team2').value;
    const teamMember3 = document.getElementById('team3').value;
    const teamMember4 = document.getElementById('team4').value;
    const teamMember5 = document.getElementById('team5').value;

    const problemStatements = document.querySelectorAll('input[name="problem-statement"]:checked');
    const selectedProblems = Array.from(problemStatements).map(checkbox => checkbox.value).join(', ');

    const fileUpload = document.getElementById('fileupload').value;

    // Display only the first name and last name
    const displayElement = document.querySelector('.display');
    displayElement.innerHTML = `<strong>First Name:</strong> ${firstName}<br>
                                <strong>Last Name:</strong> ${lastName}<br>
                                <strong>Other Information:</strong><br>
                                Email: ${email}<br>
                                Phone: ${phone}<br>
                                University/Organization: ${university}<br>
                                Team Name: ${teamName}<br>
                                Team Members: ${teamMembers}<br>
                                Team Member 1: ${teamMember1}<br>
                                Team Member 2: ${teamMember2}<br>
                                Team Member 3: ${teamMember3}<br>
                                Team Member 4: ${teamMember4}<br>
                                Team Member 5: ${teamMember5}<br>
                                Selected Problem Statements: ${selectedProblems}<br>
                                File Uploaded: ${fileUpload}`;
}