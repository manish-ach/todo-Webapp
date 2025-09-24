import express from 'express'
import db from '../db.js'

const router = express.Router()

// get all todo for logged in user
router.get('/', (req, res) => {

})


// add new todos
router.post('/', (req, res) => {

})

// update todos
router.put('/:id', (req, res) => { })

// delete a todo
router.delete('/:id', (req, res) => { })


export default router
