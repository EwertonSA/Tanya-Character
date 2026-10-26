let isSomersaulting = false;
let angle = 0

export function Somer(tanyaModel, keys) {
const hips = tanyaModel.getObjectByName('mixamorigHips_01') 
if (!hips) return

if (keys && keys.KeyR && !isSomersaulting) {
isSomersaulting = true
angle = 0
}

if (isSomersaulting) {
const speed = 0.3
const max = Math.PI * 2
angle += speed

if (angle >= max) {
angle = 0             
isSomersaulting = false 
}
}
hips.rotation.x = angle 
}