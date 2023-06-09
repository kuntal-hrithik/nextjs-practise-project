// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if(req.method === 'POST'){
    const userEmail = req.body.email;

    if(!userEmail || !userEmail.includes('@')){
      res.status(422).json({message:"invalid email address"});
      return;
    }
    console.log(userEmail);
    res.status(201).json({message:"signed up"});
  }

}
