let position='stand'
let leftAngle=0
let rightAngle=0
export function Legs(tanyaModel){
const rightLeg=tanyaModel.getObjectByName("mixamorigRightUpLeg_044")
const leftLeg=tanyaModel.getObjectByName("mixamorigLeftUpLeg_039")
if(!leftLeg||!rightLeg)return
const speed=0.1
const max=0.2
const min=-0.7
if(position==='stand'){
leftAngle-=speed
rightAngle+=speed
if(leftAngle<=min||rightAngle>=max){
leftAngle=min
rightAngle=max
position='guard'    
}
}
leftLeg.rotation.x=leftAngle
rightLeg.rotation.x=rightAngle
}