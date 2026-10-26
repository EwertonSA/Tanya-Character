    let rightArmAngle=0
let rightArmDirecion=1
let rightForeArmAngle=0
let rightForeArmDirection=1

export function moveRightForeArm(tanyaModel){
if (!tanyaModel) return;
const rightForeArm=tanyaModel.getObjectByName('mixamorigRightForeArm_025')
const rightArm=tanyaModel.getObjectByName('mixamorigRightArm_024')

if(rightArm){
rightArmAngle+=0.08*rightArmDirecion
if(rightArmAngle>=Math.PI/2-0.5){
rightArmAngle = Math.PI/2-0.5
rightArmDirecion=1
}

rightArm.rotation.x=rightArmAngle
}
if(rightForeArm){
rightForeArmAngle+=0.1*rightForeArmDirection
if(rightForeArmAngle>=-Math.PI/8){
    rightForeArmAngle=-Math.PI/8
    rightForeArmDirection=-1
}if(rightForeArmAngle<=-Math.PI+0.4){
    rightForeArmAngle=-Math.PI+0.4
    rightForeArmDirection=1
}

rightForeArm.rotation.z=rightForeArmAngle

}
}