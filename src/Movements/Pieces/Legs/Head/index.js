let headAngle=0
    let headDirection=1
export function HeadMovents(tanyaModel){
    if(!tanyaModel)return
    
    const head= tanyaModel.getObjectByName('mixamorigHead_06')
if(head){
headAngle+=0.02*headDirection
if(headAngle>=Math.PI/2-0.4){
    headAngle=Math.PI/2-0.4
    headDirection=-1
}  if(headAngle<=-Math.PI/2+0.4){
    headAngle=-Math.PI/2+0.4
    headDirection=1
}
head.rotation.y=headAngle
}

}