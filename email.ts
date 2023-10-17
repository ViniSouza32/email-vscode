import * as nodemailer from 'nodemailer';

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
    subject: 'Estou enviando um email pelo node ts',
    html: 'Só estou enviando um <b>simples</b> email por api'
};

let transporter = nodemailer.createTransport(emailConfig);

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log('Erro ao enviar email: ' + error)
    } else {
        console.log('Email enviado com sucesso: ' + info.response)
    }
});