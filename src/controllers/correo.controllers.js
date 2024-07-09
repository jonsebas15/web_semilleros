const Correo = async (req, res) => {
    const {asunto, mensaje} = req.body
    const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
        host: "email-smtp.us-east-2.amazonaws.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: "AKIAVRUVRK7RLAIAKGFC",
            pass: "BK7KLsY7tZL2m9M+I0LcojKoZvZjJ9nHLPmRPnMi3llb",
        },
    });

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: 'danielvidaldanividal@hotmail.com', // sender address
            to: "johan_1115@hotmail.com", // list of receivers
            subject: asunto, // Subject line
            text: "buenas", // plain text body
            html: mensaje, // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    }

    main().catch(console.error);
    res.status(200).json({
        ok:true,
        message:"Se envio el mensaje",
    })

}

module.exports = {
    Correo
}
