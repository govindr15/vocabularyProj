const express=require('express');
const router=express.Router();


router.get('/', async(req,res)=>{
    try{
        res.render('mcq/mcqTest');
    }catch(e){
        res.status(500).json({error:e});
    }
});

module.exports = router;