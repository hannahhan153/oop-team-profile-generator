const Manager = require("../lib/Manager");

module.exports = profile => {
    return `
    <!DOCTYPE html>
    <html lang="en">    

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <div class="row">
        <h1>Team Profile</h1>
    </div>
</body>
</html>
`
};

const teamProfile = profile => {

    const managerProfile = manager => {
        return `
        <div class="column">
            <div class="card">
                <img src="https://i.pinimg.com/736x/5b/71/ab/5b71ab4ea082c3c11e77312a64bba835.jpg" alt="Avatar"
                    style="width:100%">
                <div class="container">
                    <h4><b>${manager.name}</b></h4>
                    <h5>${manager.getRole()}</h5>
                    <p>ID:${manager.id}<p>
                    <p>Email: <a href="mailto:${manager.email}>${manager.email}</a>
                    <p>Office Number:${manager.getOfficenumber()}</p>
                </div>
            </div>
        </div>
        `
    }

    const engineerProfile = engineer => {
        return `
        <div class="column">
        <div class="card">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/fd44d538650505.598fa11957245.jpg"
                alt="Avatar" style="width:100%">
            <div class="container">
                <h4><b>${engineer.name}</b></h4>
                <h5>${engineer.getRole()}</h5>
                <p>ID:${engineer.id}</p>
                <p>Email: <a href="mailto:${engineer.email}>${engineer.email}</a></p>
                <p>GitHub: <a href="https://github.com/${engineer.getGitHub()}">${engineer.github}</p>
            </div>
        </div>
    </div>
        `
    }

    const internProfile = intern => {
        return ` 
        <div class="column">
            <div class="card">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/88c1e338650505.598fa119bc679.jpg"
                    alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>${intern.name}</b></h4>
                    <h5>${intern.getRole()}</h5>
                    <p>ID:${intern.id}</p>
                    <p>Email: <a href="mailto:${intern.email}>${intern.email}</a></p>
                    <p>School:${intern.getSchool()}</p>
                </div>
            </div>
        </div>
        `
    }

    const html = [];

    html.push(profile
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => managerProfile(manager))
        )
    
    html.push(profile
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => engineerProfile(engineer)))

    html.push(profile
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => internProfile(intern))
        )

    return html.join("");
}

