const nodemailer = require('nodemailer')

class mailService {

   constructor(){
    this.transporter = nodemailer.createTransport({
        host:'smtp.mail.ru',
        port:465,
        secure:true,
        auth:{
             user:'zsindika@bk.ru',
             pass:'t22qn4NxX88pZi65yKJq'
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