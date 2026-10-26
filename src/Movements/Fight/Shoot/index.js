import { Legs } from "../Legs";
import { Hips } from "./Hips";
import { RightLeg } from "./RightLeg";

export function Shoot(tanyaModel,keys){
    Hips(tanyaModel)
    Legs(tanyaModel)
return RightLeg(tanyaModel, keys)
}