let position='stand'
let angle=3
let calfAngle=0
let calfPosition='back'
export function RightLeg(tanyaModel){
const rightLeg=tanyaModel.getObjectByName('mixamorigRightUpLeg_044')
const rightcalf=tanyaModel.getObjectByName('mixamorigRightLeg_045')
if(!rightLeg)return
const speed=0.2
const speed2=0.2
const max=3.2
const min=1
const max2=0
const min2=-2
if(position==='stand'){
if(calfPosition==='back'){    
angle-=speed
calfAngle-=speed2
if(angle<=min)angle=min
if(calfAngle<=min2)calfAngle=max2
if(angle<=min&&calfAngle>=min2){
position="attack"
calfPosition='attack'}}
}else if(position==='attack'){
if(calfPosition==='attack'){
angle+=speed
calfAngle+=speed2
if(angle>=max)angle=max
if(calfAngle>=max2)calfAngle=max2
if(angle>=max&&calfAngle<=max2){
position='stand'
calfPosition='back'
return true
}}}
rightLeg.rotation.z=angle
rightcalf.rotation.x=calfAngle
return false
}