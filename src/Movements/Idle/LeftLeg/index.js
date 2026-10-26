let angle=0
let position='open'
export function leftLegIdle(tanyaModel){
const leftLeg= tanyaModel.getObjectByName('mixamorigLeftUpLeg_039')
if(leftLeg){
const speed=0.8
const max=1
if(position==='open'){
angle+=speed
if(angle>=max) {angle =max
position='close'
}
}
}   
}