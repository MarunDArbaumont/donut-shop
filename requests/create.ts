import type { Donut } from "./../index"
import { dataBaseDonut } from './../index'
export function createDonut(id, name, price): Array<Donut>{
    const newDonut = {
        id,
        name,
        price
    }
    let oldDatabase = dataBaseDonut;
    oldDatabase.push(newDonut);

    return oldDatabase;
}