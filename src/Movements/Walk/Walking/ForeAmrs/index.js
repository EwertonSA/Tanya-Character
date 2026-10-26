let leftAngle=2
let rightAngle=-2
let position='base'
export function foreArms(tanyaModel){
const leftForeArm=tanyaModel.getObjectByName('mixamorigLeftForeArm_010')
const rightForeArm=tanyaModel.getObjectByName('mixamorigRightForeArm_025')
if(!leftForeArm||!rightForeArm)return
if(leftForeArm||rightForeArm){
const speed=0.1

const max=1
const min=0
if(position==='base'){

leftAngle+=speed
rightAngle-=speed
if(leftAngle>=max) position='advanced'

}
else if(position==='advanced'){
leftAngle-=speed
rightAngle+=speed
if(leftAngle<=min) position='base'
}
}
leftForeArm.rotation.z=leftAngle
rightForeArm.rotation.z=rightAngle
}