import Mailgen from "mailgen";

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