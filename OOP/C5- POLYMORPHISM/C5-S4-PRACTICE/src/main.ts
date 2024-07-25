import { tuctuc } from "./tuctuc";
import { minivan } from "./miniVan";
import { batmobile } from "./batmobile";


const myTuctuc = new tuctuc(3, "ABC123", 500);
const tuctucSpeed = myTuctuc.getSpeed();
console.log(`The tuctucSpeed of the tuctuc is ${tuctucSpeed} km/h.`);

const myMinivan = new minivan(4, 2, "XYZ456", 1500);
const minivanSpeed = myMinivan.getSpeed();
console.log(`The minivanSpeed of the minivan is ${minivanSpeed} km/h.`);

const myBatmobile = new batmobile(false, "BAT001", 2000);
const batmobileSpeed = myBatmobile.getSpeed();
console.log(`The batmobileSpeed of the batmobile is ${batmobileSpeed} km/h.`);