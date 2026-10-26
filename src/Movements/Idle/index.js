import { leftArmIdle } from "./LeftArmIdle";
import { leftLegIdle } from "./LeftLeg";
import { rightArmIdle } from "./RightArmIdle";

export function idle(tanyaModel){
rightArmIdle(tanyaModel)
leftArmIdle(tanyaModel)
//leftLegIdle(tanyaModel)    
}