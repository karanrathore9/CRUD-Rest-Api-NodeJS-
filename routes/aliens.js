const { response } = require('express');
const express = require('express');
const router = express.Router();
const Alien = require('../models/alien');

const ctrAliens = require('../controllers/aliens.controller.js');

module.exports = router;

router.route('/').get(ctrAliens.Get);

router.route('/:id').get(ctrAliens.GetId);

router.route('/').post(ctrAliens.Post);

router.route('/:id').patch(ctrAliens.Patch);

router.route('/:id').delete(ctrAliens.Delete);
  


//----!!   This Code is when we do not use seperate file for Controller and routers !!----//
/*
router.get('/', async(req,res)=>{
    try{
        const aliens = await Alien.find()
        res.json(aliens);


    }catch(err){
        res.send('Error'+err)
    }
    
})

router.get('/:id', async(req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien);


    }catch(err){
        res.send('Error'+err)
    }
    
})


router.post('/', async(req,res)=>
{
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 = await alien.save()
        res.json(a1)

    }catch(err){
        res.send('Error');
    }

})



router.patch('/:id',async(req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub=req.body.sub
        const a1= await alien.save()
        res.json(a1)

    }catch(err){
        res.send('Error');
    }
})



router.delete('/:id',async(req,res)=>{
    try{
        const alien = await Alien.findByIdAndDelete(req.params.id)
        //const a1= await alien.remove()
        res.send('Deleted');
        //res.json(a1)

    }catch(err){
        res.send('Error');
    }
})
*/