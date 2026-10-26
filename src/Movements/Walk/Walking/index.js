import {  updateArms} from "./Arms"
import { updateCalf } from "./Calf"
import { foreArms } from "./ForeAmrs"
import { head } from "./Head"
import { hips } from "./Hips"
import {updateLegsSync } from "./Legs"
import { spine } from "./Spine"

export function Walking(tanyaModel){
head(tanyaModel)
updateLegsSync(tanyaModel)
hips(tanyaModel)
updateCalf(tanyaModel)
spine(tanyaModel)
updateArms(tanyaModel)
foreArms(tanyaModel)

}