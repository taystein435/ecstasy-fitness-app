const auth=(req,res)=>{
     res.status(200).json({message:'Authenticated'})
  
}

module.exports={
    auth,
}