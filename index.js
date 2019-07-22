const express  = require('express');
const bodyParser  = require('body-parser');
const nodemailer  = require('nodemailer');
const app  = express();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
    console.log("not prod");
}



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/form', (req, res) => {
    console.log(req.body);
    nodemailer.createTestAccount((err, account) => {
        if (err) {
            console.log(err);
        }
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <p>Message: ${req.body.message}</p>
        `;
        console.log(process.env.GMAIL, process.env.PASS)
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL,
                pass: process.env.PASS
            }
        })

        let mailOptions = {
            from: req.body.email,
            to: 'mkelley1412@gmail.com',
            replyTo: req.body.email,
            subject: 'Contact Form Submission',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err);
            }
        })
    })
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port${PORT}`);
});