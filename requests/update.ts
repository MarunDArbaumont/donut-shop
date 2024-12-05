import type { Donut } from "./../index"
import { dataBaseDonut } from './../index'

export function updateDonut(id, name, price): Array<Donut>{
    const updatedDonut = {
        id,
        name,
        price
    }
    let oldDatabase = dataBaseDonut;
    oldDatabase.push(updatedDonut);

    return oldDatabase;
}