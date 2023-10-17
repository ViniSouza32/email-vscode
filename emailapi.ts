import express from 'express';
import { Router, Request, Response } from 'express';
import * as nodemailer from 'nodemailer';


const app = express();
const route = Router();
app.use(express.json());


route.get('/email', (req: Request, res: Response) => {
    
    let emailConfig = {
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        tls: {
            rejecUnauthorized: false,
            ciphers: 'SSLv3'
        },
        auth: {
            user: '',
            pass: ''
        }
    };
    
    let mailOptions = {
        from:'',
        to: '',
        subject: 'To usando a api',
        html: 'To usando a <b>api</b>'
    };

    let transporter = nodemailer.createTransport(emailConfig);

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log('Erro ao enviar email: ' + error)
        } else {
            console.log('Email enviado com sucesso: ' + info.accepted)
        }
    });

});

app.use(route);
app.listen(3333, () => console.log('server running'));