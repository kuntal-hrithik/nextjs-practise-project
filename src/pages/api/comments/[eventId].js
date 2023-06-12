function handler (req,res){

const eventId = req.query.eventId;


    if(req.method === "POST"){
        const {email,name,text} = req.body;
        if(!email.includes('@'|| !name || name.trim() === '' || !text || text.trim() ==='')){
            res.status(422).json({message:"invalid input"})
             return;
        }
        console.log(email,name,text);
        const newComment = {
            id: new Date().toISOString(),
            email,
            name,
            text,
        }
        console.log(newComment);
        res.status(201).json({message:'added comment'})
    }
     if(req.method === "GET"){
        const dummyList = [
            {id:"c1",name:"ritik",text:"A first comment"},
            {id:"c2",name:"hrithik",text:"A second comment"},
        ];

        res.status(200).json({comments: dummyList});
    }

}

export default handler; 