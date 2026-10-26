import * as THREE from 'three';
let globalAngleSwing = 0
let position = 'advanced'
let initialLeftRotation = null
let initialRightRotation = null
let globalAngleLeft = null
let globalAngleRight = null
let descidaConcluida = false
let final = 0.5
export function updateArms(tanyaModel) {
const leftArm = tanyaModel.getObjectByName('mixamorigLeftArm_09')
const rightArm = tanyaModel.getObjectByName('mixamorigRightArm_024')
if (!leftArm || !rightArm) return
if (initialLeftRotation === null) {
initialLeftRotation = leftArm.quaternion.clone()
initialRightRotation = rightArm.quaternion.clone()
}


const velocidade = 0.05
const limiteMax = 0.4
const limiteMin = -0.4

if (position === 'advanced') {
globalAngleSwing += velocidade
if (globalAngleSwing >= limiteMax) position = 'back'
} else if (position === 'back') {
globalAngleSwing -= velocidade
if (globalAngleSwing <= limiteMin) position = 'advanced'
}
const descidaLeft = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), globalAngleLeft)
const descidaRight = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), globalAngleRight)

const axisLeft = new THREE.Vector3(0, 0, 1).normalize()
const axisRight = new THREE.Vector3(0, 0, -1).normalize()
const swingLeft = new THREE.Quaternion().setFromAxisAngle(axisLeft, globalAngleSwing)
const swingRight = new THREE.Quaternion().setFromAxisAngle(axisRight, -globalAngleSwing)

leftArm.quaternion.copy(initialLeftRotation).multiply(descidaLeft).multiply(swingLeft)
rightArm.quaternion.copy(initialRightRotation).multiply(descidaRight).multiply(swingRight)
}