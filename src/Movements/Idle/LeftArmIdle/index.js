let angle=0
let position='open'
export function leftArmIdle(tanyaModel){
const leftArm = tanyaModel.getObjectByName('mixamorigLeftArm_09')
if(leftArm){
const speed=0.8
const max=1
if(position==='open'){
angle+=speed
if(angle>=max){
angle=max
position='close'    
}
}
}
leftArm.rotation.x=angle
}