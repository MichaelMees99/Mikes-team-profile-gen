function render(teamMembers) {
    const employeeHtml = teamMembers.map(employee => {
        const role = employee.getRole();

        let extraInfo = '';
        switch (role) {
            case 'Manager':
                extraInfo = `Office number: ${employee.officeNumber}`;
                break;
            case 'Engineer':
                extraInfo = `GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`;
                break;
            case 'Intern':
                extraInfo = `School: ${employee.getSchool()}`;
                break;
        }

        return `
            <div class="employee-card">
                <h2 class="employee-name">${employee.getName()} (${role})</h2>
                <p class="employee-id">ID: ${employee.getId()}</p>
                <p class="employee-email">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                <p class="employee-extra">${extraInfo}</p>
            </div>
        `;
    });

    const allEmployeeHtml = employeeHtml.join('\n');
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <link rel="stylesheet" href="./style.css">
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
        </head>
        <body>
            <header>
                <h1 class="team-header">My Team</h1>
            </header>
            <div class="card-container">
                ${allEmployeeHtml}
            </div>
        </body>
        </html>
    `;
}

module.exports = render;