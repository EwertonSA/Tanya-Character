let rightLegAngle = 0
let rightLegDirection = -1 
let rightUpLegAngle = Math.PI * 2
let rightUpLegDirection = -1
let rightLegState = 'down'
export function rightLegMovements(tanyaModel){
const rightLeg = tanyaModel.getObjectByName('mixamorigRightLeg_045')
const rightFoot = tanyaModel.getObjectByName('mixamorigRightFoot_046')
const rightUpLeg = tanyaModel.getObjectByName('mixamorigRightUpLeg_044')
if (!rightLeg || !rightUpLeg) return
if (rightLegState === 'down') {
rightUpLegAngle += 0.02 * rightUpLegDirection
if (rightUpLegAngle <= Math.PI + 0.5) {
rightUpLegAngle = Math.PI + 0.5
rightUpLegDirection = 1
rightLegState = 'up'
}
rightUpLeg.rotation.x = rightUpLegAngle
} else if (rightLegState === 'up') {
rightUpLegAngle += 0.02 * rightUpLegDirection
if (rightUpLegAngle >= Math.PI * 2) {
rightUpLegAngle = Math.PI * 2
rightUpLegDirection = -1
rightLegState = 'downLeg'
}
rightUpLeg.rotation.x = rightUpLegAngle
} else if (rightLegState === 'downLeg') {
rightLegAngle += 0.02 * rightLegDirection
if (rightLegAngle <= -Math.PI / 2) {
rightLegAngle = -Math.PI / 2
rightLegDirection = 1 
rightLegState = 'upLeg'
}
rightLeg.rotation.x = rightLegAngle
} else if (rightLegState === 'upLeg') {
rightLegAngle += 0.02 * rightLegDirection 
if (rightLegAngle >= 0) {
rightLegAngle = 0
rightLegDirection = -1
rightLegState = 'down'
}
rightLeg.rotation.x = rightLegAngle
}
}