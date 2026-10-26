let angle=null
export function spine(tanyaModel){
const spine= tanyaModel.getObjectByName('mixamorigSpine_02')
if(!spine)return
if(spine){
if(angle===null){
angle=spine.rotation.x
}    
angle-=0.02
if(angle<=-0.4){
angle=-0.4
}
}
//spine.rotation.x=angle
}