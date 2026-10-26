let angle=0
let position='guard'
export function Hips(tanyaModel){
const hips=tanyaModel.getObjectByName('mixamorigHips_01')
if(!hips)return
const speed=0.1
const max=0.4
const min=0
if(position==='guard'){
angle+=speed
if(angle>=max){
angle=max
position='attack'
}}
else if(position==='attack'){
angle-=speed
if(angle<=min){
angle=min  
position='guard'  
}}
hips.rotation.y=angle
}