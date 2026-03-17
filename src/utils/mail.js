import Mailgen from "mailgen";
import nodemailer from "nodemailer";




const sendEmail=async(options)=>{
  const mailGenerator=  new Mailgen({
        theme: "default",
        product: {
            name:"Task manager",
            link:"https://taskmanagelink.com"
        }
    })
    
   const mailTextual=mailGenerator.generatePlaintext(options.mailgenContent)
  const emailHtml=mailGenerator.generate(options.mailgenContent)

   
  const transport=nodemailer.createTransport({
    host:process.env.MAILTRAP_SMTP_HOST,
    port:process.env.MAILTRAP_SMTP_PORT,
    auth:{
        user:env.MAILTRAP_SMTP_USER,
        pass:process.env.MAILTRAP_SMTP_PASS
    }
  })




  const mail={
    from: "mail.taskmanager@example.com",
    to:options.email,
    subject:options.subject,
    text:emailTextual,
    html:emailHtml
  }

  try{
    await transporter.sendMail(mail)
  }catch(error){
       console.error("email service failed silently. make sure that you have provide your MAILTRAP credentials in the .env file")
       console.error("Error:",error)
  }


}






const emailVerificationMailgenContent=(username,vericationUrl)=>{
    return{

        body:{
            name:username,
            intro:" welcome to our app! we are excited to have you on board",


            action:{
                instruction:
                "to verify your email please clilck on the following button",
                button:{
                    color:"#0dbd59",
                    text:"verify your email",
                    link: verficationUrl,
                },
            },
            outro:
                "Need help, or havee question? just reply to this email, we'd love to help",
        },
    }
}


const forgotPasswordMailgenContent=(username,passwordResetUrl)=>{
    return{

        body:{
            name:username,
            intro:" we got a request to reset the password of your account",


            action:{
                instruction:
                "to reset your password click on the following button or link",
                button:{
                    color:"#08451d",
                    text:"Reset Password",
                    link: passwordResetUrl,
                },
            },
            outro:
                "Need help, or havee question? just reply to this email, we'd love to help",
        },
    }
}



export{
    emailVerificationMailgenContent,
    forgotPasswordMailgenContent
};