let angle=0
let position='stand'
export function Shoulders(tanyaModel){
const hips=tanyaModel.getObjectByName('mixamorigSpine2_04')    
if(!hips)return
const speed=0.02
const min=-0.2
const max=0.2

if(position==='stand'){
angle-=speed
if(angle<=min){
    angle=min
    position='guard'
}
}else if(position==='guard'){
angle+=speed
if(angle>=max){
angle=max
position='stand'    
}
}
hips.rotation.y=angle
}