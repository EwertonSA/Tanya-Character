let position='base'
let leftAngle=0
let rightAngle=0
export function Calf(tanyaModel){
const leftCalf=tanyaModel.getObjectByName('mixamorigLeftLeg_040')
const rightCalf=tanyaModel.getObjectByName('mixamorigRightLeg_045')   
if(!rightCalf||!leftCalf)return
const speed=0.5
const min=-0.9
const max=0.2
if(position==='base'){
leftAngle-=speed
if(leftAngle<=min){
leftAngle=min
position='advanced'    
} 
rightAngle+=speed
if(rightAngle>=max){
rightAngle=max
position='advanced'
}   
}
else if(position==='advanced'){
leftAngle+=speed
if(leftAngle>=max){
leftAngle=max
position='base'
}    
rightAngle-=speed
if(rightAngle<=min){
rightAngle=min
position='base'    
}
}
leftCalf.rotation.x=leftAngle
rightCalf.rotation.x=rightAngle
}