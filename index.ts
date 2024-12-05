import { createDonut } from "./requests/create"
import { getAllDonuts, getDonutById } from "./requests/get"
import { updateDonut } from "./requests/update"
import { deleteDonut } from "./requests/delete"


const express = require('express')
const app = express()
const port = 3000

let dataBaseDonut: Array<Donut> = []

type Donut = {
    id: number,
    name: string,
    price: number
}




// Get all donuts
app.get('/donuts', (req, res) => {
    res.send(getAllDonuts());
})

// Get donut by ID
app.get('/donuts/:id', (req, res) => {
    
    res.send(getDonutById(req.params.id));
    console.log('Donut by id');
})

// Create a donut
app.post('/donuts', (req, res) => {
    res.send(createDonut(req.body.id, req.body.name, req.body.price));
    console.log('Donut created');
})

// Delete a donut
app.delete('/donuts/:id', (req, res) =>{
    res.send(deleteDonut(req.params.id));
    console.log('Donut deleted');
})

// Update a donut
app.put('/donuts/:id', (req, res) => {
    res.send(updateDonut(req.params.id, req.body.name, req.body.price));
    console.log('donut updated');
})

app.listen(port)

export type { Donut }
export { dataBaseDonut };