let position= 'stand'
let leftAngle=0
let rightAngle=0
export function ForeArm(tanyaModel ){
const leftForeArm=tanyaModel.getObjectByName('mixamorigLeftForeArm_010')
const rightForeArm=tanyaModel.getObjectByName('mixamorigRightForeArm_025')  
if(!leftForeArm||!rightForeArm)return
const speed=0.1
const max=0
const min=-2
const max2=2
const min2=0
if(leftAngle<=min2)leftAngle=min2
if(rightAngle>=max)rightAngle=max
if(position==='stand'){
leftAngle-=speed
rightAngle+=speed

if(leftAngle<min2&&rightAngle>=max){
position='back'    
}
}
else if(position==='back'){

leftAngle+=speed
rightAngle-=speed
if(leftAngle>=max2)leftAngle=max2
if(rightAngle<=min)rightAngle=min

if(leftAngle>=max&&rightAngle<=min){
position='stand'    
}
}
leftForeArm.rotation.z=leftAngle
rightForeArm.rotation.z=rightAngle
}