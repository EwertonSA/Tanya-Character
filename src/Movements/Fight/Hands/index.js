let position = 'open'
let angle = 0

export function Hands(tanyaModel) {
const rightThumb1 = tanyaModel.getObjectByName('mixamorigRightHandThumb2_028')
const rightIndex1 = tanyaModel.getObjectByName('mixamorigRightHandIndex1_031')
const rightIndex2 = tanyaModel.getObjectByName('mixamorigRightHandIndex2_032')
const rightMid1 = tanyaModel.getObjectByName('mixamorigRightHandMiddle1_035')
const rightMid2 = tanyaModel.getObjectByName('mixamorigRightHandMiddle2_036')
const leftThumb1 = tanyaModel.getObjectByName('mixamorigLeftHandThumb1_00')
const leftIndex1 = tanyaModel.getObjectByName('mixamorigLeftHandIndex1_015')
const leftIndex2 = tanyaModel.getObjectByName('mixamorigLeftHandIndex2_016')
const leftMid1 = tanyaModel.getObjectByName('mixamorigLeftHandMiddle1_019')
const leftMid2 = tanyaModel.getObjectByName('mixamorigLeftHandMiddle2_020')

 if (!rightThumb1||!rightIndex1 || !rightIndex2 || !rightMid1 || !rightMid2) return;
    if (!leftThumb1||!leftIndex1 || !leftIndex2 || !leftMid1 || !leftMid2) return;

const speed = 0.9
const max = 1.6

if (position === 'open') {
angle += speed
if (angle >= max) {
angle = max
}
}

rightIndex1.rotation.x = angle
rightIndex2.rotation.x = angle
rightMid1.rotation.x = angle
rightMid2.rotation.x = angle
leftIndex1.rotation.x = angle
leftIndex2.rotation.x = angle
leftMid1.rotation.x = angle
leftMid2.rotation.x = angle

}