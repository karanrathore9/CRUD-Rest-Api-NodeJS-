const express = require('express');
const router = express.Router()

const Alien = require('../models/alien');


module.exports.Get =  async function(req,res){
    try{
        const aliens = await Alien.find()
        res.json(aliens);


    }catch(err){
        res.send('Error'+err)
    }
    
}



module.exports.GetId = async function(req,res){
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien);


    }catch(err){
        res.send('Error'+err)
    }
    
}



module.exports.Post= async function(req,res)
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

}


module.exports.Patch=async function(req,res){
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub=req.body.sub
        const a1= await alien.save()
        res.json(a1)

    }catch(err){
        res.send('Error');
    }
}


module.exports.Delete = async function(req,res){
    try{
        const alien = await Alien.findByIdAndDelete(req.params.id)
        //const a1= await alien.remove()
        res.send('Deleted');
        //res.json(a1)

    }catch(err){
        res.send('Error');
    }
}
