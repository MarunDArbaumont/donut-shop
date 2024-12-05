import type { Donut } from "./../index"
import {dataBaseDonut} from "./../index"

export function getAllDonuts(): Array<Donut>{
    return dataBaseDonut;
}

export function getDonutById(id): Donut{
    return dataBaseDonut[id];
}