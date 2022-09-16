const nodemailer = require('nodemailer')

class mailService {

   constructor(){
    this.transporter = nodemailer.createTransport({
        host:process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
        secure:true,
        auth:{
             user:process.env.SMTP_USER,
             pass:process.env.SMTP_PASSWORD
        }
    })
   }

  async sendActivationMail(to, link){
          await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Тема письма',
            text:'',
            html:
                  `
                  <div>
                  <h1>Тестовое окно1</h1>
                  <p>${link}</p>
                  </div>
                  `
          })
  }
}
module.exports =new mailService()