let armAngle = 0;
let armDirection = -1;
export function leftArmMovements(tanyaModel){
const leftShoulder = tanyaModel.getObjectByName('mixamorigLeftShoulder_08');
const leftArm = tanyaModel.getObjectByName('mixamorigLeftArm_09');
const leftForeArm = tanyaModel.getObjectByName('mixamorigLeftForeArm_010');
    if (leftArm) {
armAngle += 0.12 * armDirection;
if (armAngle <= -Math.PI / 2) {
armAngle = -Math.PI / 2;
armDirection = 1;
}
if (armAngle >= Math.PI/2-0.4) {
armAngle = Math.PI/2-0.4
armDirection = -1;
}
leftArm.rotation.x = armAngle;
leftArm.rotation.y=armAngle-0.6
}
}