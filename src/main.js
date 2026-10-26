import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js'
import { Walk } from './Movements/Walk';
import { If } from 'three/tsl';
import { idle } from './Movements/Idle';
import { Jump } from './Movements/Jump';
import { Somer } from './Movements/Jump/Somer';
import { guard } from './Movements/Fight/Guard';
import { Fight } from './Movements/Fight';
import { Punch } from './Movements/Fight/Punch';
import { Shoot } from './Movements/Fight/Shoot';


/****SCENE */
const newScene= document.getElementById('app')
const renderer= new THREE.WebGLRenderer({antialias:true, powerPreference:'high-performance'})
renderer.setPixelRatio(Math.min(devicePixelRatio,2))
renderer.setSize(innerWidth,innerHeight)
renderer.shadowMap.enabled=true
renderer.shadowMap.type= THREE.PCFShadowMap
renderer.toneMappingExposure=0.4
renderer.domElement.id = 'gl'
newScene.appendChild(renderer.domElement)
const canvas=renderer.domElement
const scene= new THREE.Scene()
scene.background= new THREE.Color(0xf1f1f1)
/***CAMERA */
const camera= new THREE.PerspectiveCamera(90,innerWidth/innerHeight,0.1,2000)
camera.position.set(570,540,800)
const prrem= new THREE.PMREMGenerator(renderer)
scene.environment = prrem.fromScene(new RoomEnvironment(), 0.04).texture
/***LIGHTS */
scene.add(new THREE.HemisphereLight(0xf40,0x283,0.8))
const key= new THREE.DirectionalLight(0xf1f1f1,1.8)
key.position.set(10,8,12)
key.castShadow=false
key.shadow.mapSize.set(128,128)
key.shadow.camera.left=-11; key.shadow.camera.right=11
key.shadow.camera.top=13; key.shadow.camera.bottom=-6
key.shadow.camera.near=4; key.shadow.camera.far=45
key.shadow.bias=0.0006
scene.add(key)
/*****CONTROLS */
const controls= new OrbitControls(camera,canvas)
controls.target.set(0,4.4,0)
controls.enableDamping=true
controls.dampingFactor=0.06
controls.enablePan=false
controls.minDistance=9
controls.maxDistance=60
controls.maxPolarAngle=1.45
controls.rotateSpeed=0.6
/****GROUND */
/*
const ground= new THREE.Mesh(
new THREE.CircleGeometry(500,120),
new THREE.MeshBasicMaterial({
color:0x666666,
}))
ground.rotation.x=-Math.PI/2
ground.receiveShadow=false
//scene.add(ground)
/*****WALL */
const groundSize = 500
const wallHeight = 40       

const wallTexture = await new THREE.TextureLoader().loadAsync(
    './assets/marble_rock_03_diff_1k.jpg'
)
wallTexture.colorSpace = THREE.SRGBColorSpace
wallTexture.wrapS = THREE.RepeatWrapping
wallTexture.wrapT = THREE.RepeatWrapping

// Repetição da textura com base no tamanho do lado (500) e na altura (40)
const repeatX = groundSize / 100 
const repeatY = wallHeight / 100
wallTexture.repeat.set(repeatX, repeatY)

// Material compartilhado para as 4 paredes (com DoubleSide caso queira ver por dentro também)
const wallMaterial = new THREE.MeshBasicMaterial({ 
    map: wallTexture, 
    side: THREE.DoubleSide 
})

// Geometria de um lado da parede (largura 500, altura 40)
const wallGeometry = new THREE.PlaneGeometry(groundSize, wallHeight)

// Criamos as 4 paredes e posicionamos nas bordas (metade de 500 é 250)
const halfSize = groundSize / 2
const wallY = wallHeight / 2 // Para a base ficar alinhada no chão (y = 0)

// 1. Parede da Frente (Z positivo)
const wallFront = new THREE.Mesh(wallGeometry, wallMaterial)
wallFront.position.set(0, wallY, halfSize)
scene.add(wallFront)

// 2. Parede de Trás (Z negativo)
const wallBack = new THREE.Mesh(wallGeometry, wallMaterial)
wallBack.position.set(0, wallY, -halfSize)
wallBack.rotation.y = Math.PI // Vira para dentro
scene.add(wallBack)

// 3. Parede da Esquerda (X negativo)
const wallLeft = new THREE.Mesh(wallGeometry, wallMaterial)
wallLeft.position.set(-halfSize, wallY, 0)
wallLeft.rotation.y = Math.PI / 2 // Gira 90 graus
scene.add(wallLeft)

// 4. Parede da Direita (X positivo)
const wallRight = new THREE.Mesh(wallGeometry, wallMaterial)
wallRight.position.set(halfSize, wallY, 0)
wallRight.rotation.y = -Math.PI / 2 // Gira -90 graus
scene.add(wallRight)

const dracoLoader=new DRACOLoader()
dracoLoader.setDecoderPath('/assets/draco/')
const gltfLoader= new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

const texture=await new THREE.TextureLoader().loadAsync(
'./assets/aerial_beach_01_diff_1k.jpg'
)
texture.colorSpace=THREE.SRGBColorSpace
const ground=new THREE.Mesh(
new THREE.PlaneGeometry(500,500),
new THREE.MeshBasicMaterial({
map:texture
}    
))
ground.rotation.x=-Math.PI/2
scene.add(ground)

gltfLoader.load('./assets/coco.glb', (gltf) => {
const originalModel = gltf.scene
const box = new THREE.Box3().setFromObject(originalModel)
const size = box.getSize(new THREE.Vector3())
const maxDim = Math.max(size.x, size.y, size.z)
const targetSize = 60
const scaleFactor = targetSize / maxDim

const linhas = 2     
const colunas = 2     
const espacamentoX = 100
const espacamentoZ = 100


for (let x = 0; x < colunas; x++) {
for (let z = 0; z < linhas; z++) {
const coconutInstance = originalModel.clone()
coconutInstance.scale.setScalar(scaleFactor)
const posX = (x - colunas / 2) * espacamentoX
const posZ = (z - linhas / 2) * espacamentoZ
coconutInstance.position.set(posX, 0, posZ)
coconutInstance.rotation.y = Math.random() * Math.PI * 2
scene.add(coconutInstance)
}
}
})
let tanyaModel=null
gltfLoader.load(
'./assets/tanya.glb',(gltf)=>{
tanyaModel=gltf.scene
const box= new THREE.Box3().setFromObject(tanyaModel)
const size=box.getSize(new THREE.Vector3())
const maxDim= Math.max(size.x,size.y,size.z)
const targetSize=26
const scaleFactor= targetSize/maxDim
tanyaModel.scale.setScalar(scaleFactor)
tanyaModel.position.set(0,0,0)
scene.add(tanyaModel)
if(gltf.animations.length>0){
const mix= new THREE.AnimationMixer(tanyaModel)
const action=mix.clipAction(gltf.animations[0])
action.setLoop(THREE.LoopRepeat, Infinity)
action.play()
//mixers.push(mix)

}
}
)
/*
console.log('animations:',gltf.animations)
console.log('quantity:',gltf.animations.length)
console.log(renderer.info.render);
console.log(renderer.info.memory); 
console.log(renderer.info.render.calls);
console.log(renderer.info.render.triangles);
gltf.scene.traverse((obj) => {
console.log(obj.type,obj.name,obj.isBone ? '← BONE' : '')})
gltf.scene.traverse((obj) => {if (obj.isMesh) {const randomColor = Math.random() * 0xffffff;
if (!obj.userData.originalMaterial) {obj.userData.originalMaterial = obj.material}
obj.material = new THREE.MeshBasicMaterial({ color: randomColor })
console.log(`%c Mesh: ${obj.name} `, `background: #${Math.floor(randomColor).toString(16)}; color: #fff; padding: 2px 5px; border-radius: 3px;`)}})})*/
let troopState = 'stand';
let troopTimer = 0;
let troopSwitchDuration = 13;
const clock = new THREE.Clock();

const keys = {
    KeyW: false,
    KeyS: false,
    KeyA: false,
    KeyD: false,
    Space:false,
    KeyR:false,
    KeyF:false,
    KeyI:false,
    KeyG:false,
    KeyT:false
}
window.addEventListener('keydown', (event) => {
    if (keys.hasOwnProperty(event.code)) {
        keys[event.code] = true;
    }
});
window.addEventListener('keyup', (event) => {
    if (keys.hasOwnProperty(event.code)) {
        keys[event.code] = false;
    }
})
let isShooting = false
const manualSpeed = 3.9
let upSpeed=0
const strength=55
const gravity=111
let atFloor=true
const floor=0
function animate() {
requestAnimationFrame(animate);
const delta = clock.getDelta();

/********Procedual Girl */
let moving = false
let moveDirZ = 0
let moveDirX = 0
if (keys.KeyW) {
moveDirZ += 1
moving = true}
if (keys.KeyS) {
moveDirZ -= 1
moving = true}
if (keys.KeyD) {
moveDirX -= 1
moving = true}
if (keys.KeyA) {
moveDirX += 1
moving = true}
if(keys.KeyR){
Somer(tanyaModel,keys)   
upSpeed=strength/10
atFloor=false
keys.KeyR=false 
}
if(keys.KeyG){
Punch(tanyaModel)    
}
if(keys.KeyF){
Fight(tanyaModel)   
}
if(keys.KeyI){
idle(tanyaModel)    
}

if(keys.KeyT){

    isShooting = true
    keys.KeyT = false

}

if(isShooting){

    const finished = Shoot(tanyaModel, keys)

    if(finished){
        isShooting = false
    }

}
if(keys.Space&&atFloor){
Jump(tanyaModel)    
upSpeed=strength
atFloor=false
keys.Space = false
}
if(!atFloor){
tanyaModel.position.y+=upSpeed*delta
upSpeed-=gravity*delta
if(tanyaModel.position.y<=floor){
tanyaModel.position.y=floor
upSpeed=0
atFloor=true    
}    
}
if (moving){
const vector = new THREE.Vector3(moveDirX, 0, moveDirZ).normalize()
tanyaModel.position.x += vector.x * manualSpeed
tanyaModel.position.z += vector.z * manualSpeed
if (moveDirZ !== 0 || moveDirX !== 0) {
tanyaModel.rotation.y = Math.atan2(vector.x, vector.z)}
Walk(tanyaModel)}else{
    idle(tanyaModel)
}

if (tanyaModel) {
const distanciaTraseira = 30.5
const alturaCamera = 30.0  
const offset = new THREE.Vector3(0, alturaCamera, -distanciaTraseira)
camera.position.copy(tanyaModel.position).add(offset)
const pontoFoco = tanyaModel.position.clone()
pontoFoco.y += 1.5
camera.lookAt(pontoFoco)
}
//controls.update()
renderer.render(scene, camera)}
animate()

