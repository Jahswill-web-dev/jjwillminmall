// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const pass = process.env.PASS;
const email = process.env.EMAIL;
let nodemailer = require('nodemailer');
export default async function handler(req, res){
  
  const transport = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: email,
      pass,
    },
    secure: true,
  });

 const mailData = {
    from: email,
    to:email,
    replyTo:`${req.body.email}`,
    subject: `Message From ${req.body.name}`,
   }

    try{
      await transport.sendMail({
        ...mailData,
        html:`
        <p>Name: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        <p>phone: ${req.body.phone}</p>
        <p>mode of payment: ${req.body.payment_mode}</p>  
        <p>unit type: ${req.body.unit_type}</p>  
        <p>quantity: ${req.body.quantity}</p>
        <p>Floor level: ${req.body.floor_level}</p>
        `,
      });
      console.log("Email sent successfully");
    return res.status(200).json({ message: "success"});
    } catch(error){
      console.log(error)
      return res.status(400).json({message: error.message})
    }

  //  transport.sendMail(mailData, function (err, info) {
  //   if(err)
  //     console.log(err)
  //   else
  //     console.log(info)
  // })

}



// export default function handler(req, res) {
//   if(req.method === "POST"){
//     // console.log(req.body);
//     res.status(200).json({ message: 'success' });
//   }else{
//     console.log("method not accepted");

//   }
// }
