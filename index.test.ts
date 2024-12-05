import { expect, test } from 'vitest'
import { createDonut } from "./requests/create"
import { getAllDonuts, getDonutById } from "./requests/get"
import { updateDonut } from "./requests/update"
import { deleteDonut } from "./requests/delete"
import { dataBaseDonut } from './index'

// Test get all donuts
test('Get all donuts', () => {
    expect(getAllDonuts().toBe(dataBaseDonut))
})
// Test get a donut by id
test('Get donut by id', () => {
    expect(getDonutById(1).toBe(dataBaseDonut.[1]))
})
// Test create a donut
test.only('Create a donut', () => {
    expect(createDonut(1, "chocolate", 12).toBe(dataBaseDonut.length < oldDatabase.length))
})
// Test update a donut
test('update a donut', () => {
    expect(updateDonut().toBe(dataBaseDonut.[id]))
})
// Test delete a donut 
test('Delete a donut', () => {
    expect(deleteDonut().toBe(dataBaseDonut.length))
})