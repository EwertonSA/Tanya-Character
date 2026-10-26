import * as THREE from 'three'
let angle = 0
let position='base'
export function guard(tanyaModel) {
    const rightArm = tanyaModel.getObjectByName('mixamorigRightArm_024')
    const leftArm = tanyaModel.getObjectByName('mixamorigLeftArm_09')

    if (!rightArm || !leftArm) return

const speed = 0.1
    const max = 0
    const min = -1.5

    if (position === 'base') {
        angle -= speed
        if (angle <= min) position = 'guard'
    } 
   const axisLeft = new THREE.Vector3(0, 0, 1).normalize()
    const axisRight = new THREE.Vector3(0, 0, -1).normalize()

    leftArm.quaternion.setFromAxisAngle(axisLeft, -angle)
    rightArm.quaternion.setFromAxisAngle(axisRight, -angle)
}