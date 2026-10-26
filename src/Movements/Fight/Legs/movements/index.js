let leftAngle = 0
let rightAngle = 0
let position = 'stand'
let calfPositition='back'
export function Movements(tanyaModel) {
const rightLeg = tanyaModel.getObjectByName("mixamorigRightUpLeg_044")
const leftLeg = tanyaModel.getObjectByName("mixamorigLeftUpLeg_039")
const leftCalf=tanyaModel.getObjectByName('mixamorigLeftLeg_040')
const rightCalf=tanyaModel.getObjectByName('mixamorigRightLeg_045')   

if (!leftLeg || !rightLeg||!rightCalf||!leftCalf) return
const speed = 0.05
const rightMax = 0.3
const rightMin = -0.3
const leftMin = -0.5
const leftMax = -0.3
if (position === 'stand') {
if(calfPositition==='back'){
rightAngle += speed
leftAngle -= speed
if (rightAngle >= rightMax) {
rightAngle = rightMax
}
if (leftAngle <= leftMin) {
leftAngle = leftMin
}
if (rightAngle >= rightMax && leftAngle <= leftMin) {
position = 'guard'
calfPositition='stand'}} }
else if (position === 'guard') {
if(calfPositition==='stand'){    
rightAngle -= speed
leftAngle += speed
if (rightAngle <= rightMin) {
rightAngle = rightMin
}
if (leftAngle >= leftMax) {
leftAngle = leftMax
}
if (rightAngle <= rightMin && leftAngle >= leftMax) {
position = 'stand'
calfPositition='back'
}
}}

leftLeg.rotation.x = leftAngle
rightLeg.rotation.x = rightAngle
leftCalf.rotation.x=leftAngle
rightCalf.rotation.x=rightAngle
}