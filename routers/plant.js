const express = require("express");
const Plant = require("../models/plant");
const  auth = require("../middlewares/auth");

const router = new express.Router();


//add plant route
router.post('/plants', auth, async (req, res)=>{
    
    const plant = new Plant(req.body)
  
    if(req.user.privilege !== 'admin'){
        res.status(400).send({Error: 'Unauthorized action'})
    }
  
    try {
        await plant.save()
        res.status(201).send({plant})
    } catch (error) {
        res.status(400).send()
    }
  })

  //get single plant with id
router.get("/plants/:id", async (req, res) => {
    const plantID = req.params.id;
  
    try {
      const plant = await Plant.findById(plantID).exec();
      res.status(200).send(plant);
    } catch (error) {
      res.status(404).send();
    }
  });