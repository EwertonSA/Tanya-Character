
import { ForeArm } from "./Arms";
import { Calf } from "./Calf";
import { guard } from "./Guard";
import { Hands } from "./Hands";
import { Legs } from "./Legs";
import { Movements } from "./Legs/movements";
import { Shoulders } from "./Shoulders";


export function Fight(tanyaModel){
    guard(tanyaModel)
Hands(tanyaModel)
Shoulders(tanyaModel)
Legs(tanyaModel)
Movements(tanyaModel)
ForeArm(tanyaModel)
}