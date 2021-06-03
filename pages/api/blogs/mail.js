import nc from 'next-connect'
import cors from 'cros'
import milgun from 'mailgun-js'


const mail = mailgun({
    apiKey:process.env.milKey,
    domain: process.env.mailDomain,
})
const handler = nc().use(cros()).post(async(req,res)=>{
    const data = {
        from :`${req.body.name}
           <${process.env.mailFrom}>`,
         to : process.env.mailTo ,
             subject: req.body.subject,
         text: req.body.message,
         "h:Reply-To": req.body.email,
       };
   
       mail
       .messages()
       .send(data, (error, body) => {
         res.json(body);
       });
     });
   export default handler;