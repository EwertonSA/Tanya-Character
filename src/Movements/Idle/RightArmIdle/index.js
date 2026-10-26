let angle=0
let position='open'
export function rightArmIdle(tanyaModel){

const rightArm=tanyaModel.getObjectByName('mixamorigRightArm_024')

if(!rightArm)return
const speed=0.8
const max=1
if(position==='open'){
angle+=speed
if(angle>=max){
angle=max
position='close'
}
}
rightArm.rotation.x=angle
}


