const path = require("path");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

exports.validerRDV = (rdv) => {
    var transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "bffefa9ab7701d",
          pass: "0b1a80352b802d"
        }
      });

    const handlebarOptions = {
        viewEngine: {
            extName: ".hbs",
            partialsDir: path.resolve("./mails/emails"),
            defaultLayout: false,
        },
        viewPath: path.resolve("./mails/emails"),
        extName: ".hbs",
    };

    transporter.use("compile", hbs(handlebarOptions));

    const mailOptions = {
        from: "pfe@email.com",
        to: rdv.email,
        subject: "Rendez-vous validé",
        template: "validation",
        context: {
            name: rdv.nom,
            date: rdv.date,
        }
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log("email send");
        }
    });
}

exports.accepterCompte = (name, email) => {
    var transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "5ee50794ee39ae",
            pass: "d59e80875a3616"
        }
    });

    const handlebarOptions = {
        viewEngine: {
            extName: ".hbs",
            partialsDir: path.resolve("./mails/emails"),
            defaultLayout: false,
        },
        viewPath: path.resolve("./mails/emails"),
        extName: ".hbs",
    };

    transporter.use("compile", hbs(handlebarOptions));

    const mailOptions = {
        from: "pfe@email.com",
        to: email,
        subject: "Compte Accepter",
        template: "compteAccepter",
        context: {
            name: name
        }
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log("email send");
        }
    });
}

exports.refuserCompte = (name, email) => {
    var transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "5ee50794ee39ae",
            pass: "d59e80875a3616"
        }
    });

    const handlebarOptions = {
        viewEngine: {
            extName: ".hbs",
            partialsDir: path.resolve("./mails/emails"),
            defaultLayout: false,
        },
        viewPath: path.resolve("./mails/emails"),
        extName: ".hbs",
    };

    transporter.use("compile", hbs(handlebarOptions));

    const mailOptions = {
        from: "pfe@email.com",
        to: email,
        subject: "Compte Refuser",
        template: "compteRefuser",
        context: {
            name: name
        }
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log("email send");
        }
    });
}

exports.envoyerDevis = (name, email, file) => {
    var transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "5ee50794ee39ae",
            pass: "d59e80875a3616"
        }
    });

    const handlebarOptions = {
        viewEngine: {
            extName: ".hbs",
            partialsDir: path.resolve("./mails/emails"),
            defaultLayout: false,
        },
        viewPath: path.resolve("./mails/emails"),
        extName: ".hbs",
    };

    transporter.use("compile", hbs(handlebarOptions));

    const mailOptions = {
        from: "pfe@email.com",
        to: email,
        subject: "Devis",
        template: "devis",
        context: {
            name: name,
            file: file
        }
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log("email send");
        }
    });

}