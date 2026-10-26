import * as THREE from 'three'
let angle=0
let position='base'
let foreAngle=0
let forePosition='base'
export function Arms(tanyaModel){
const rightArm=tanyaModel.getObjectByName('mixamorigRightArm_024')
const rightForeArm=tanyaModel.getObjectByName("mixamorigRightForeArm_025")
if(!rightArm||!rightForeArm)return

const speed=0.4
const max=-1
const min=-2
const max2=0
const min2=-2
if(position==='base'){
angle+=speed
foreAngle+=speed
if(angle>=max)angle=max
if(foreAngle>=max2)foreAngle=max2
if(angle>=max&&foreAngle>=max2){
position='attack'  
forePosition='attack' 

}    
}
else if(position==='attack'){
angle-=speed
foreAngle-=speed
if(angle<=min)angle=min
if(foreAngle<=min2)foreAngle=min2
if(angle<=min&&foreAngle<=min2){
position='base'    
forePosition='base'
}    
}
const axisRight = new THREE.Vector3(0, 0.2, -1).normalize()
rightArm.quaternion.setFromAxisAngle(axisRight, -angle)
rightForeArm.rotation.z=foreAngle
}