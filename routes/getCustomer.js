const express = require('express')
const Customer = require('../models/customer')
const router = express.Router()


// getting all customers
router.get('/',  async(req, res) => {
    try{
        const customers = await Customer.find()
        res.json(customers)
    }
    catch(err){
        res.status(500).json({message : err.message})
    }
})
// getting one
router.get('/:id', Middleware, (req, res) => {
    res.json(res.customer)
  })
//creating one
router.post('/', async (req, res) => {
    try{
        console.log("Body", req.body);
        
        const customer = new Customer({
            name : req.body.name,
            surname : req.body.surname
        })
    
        const surname = await customer.save()
        const name = await customer.save()
        res.status(201).json(surname)
    }catch{
        res.status(400).json({message: err.message})
    }
})
//updating one
router.put('/:id', Middleware, async (req, res) => {
    try{
    if(req.body.name != null){
        res.customer.name = req.body.name
    }
    if(req.body.Middleware != null){
        res.Middleware.name = req.body.Middleware
    }
    
        const updatedcustomer = await res.customer.save()
        res.json(updatedcustomer)
    } catch(err){
        res.status(400).json({message: err.message})
    }
})
//deleting one
router.delete('/:id', Middleware, async (req, res) => {
    try{
        await res.customer.remove()
        res.json({message: 'Deleted customer'})
    }catch(err){
        return res.status(500).json({message: err.message}) 
    }
})

async function Middleware(req, res, next){
    let customer
    try{
        customer = await Customer.findById(req.params.id)
        if(customer == null){
            return res.status(404).json({message: "cannot find customer"})
        }
    }catch(err){
        return res.status(500).json({message: err.message})
    }
    res.customer = customer
    next()
}

module.exports = router