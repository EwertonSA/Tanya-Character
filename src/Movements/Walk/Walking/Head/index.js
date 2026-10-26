let angle=null
export function head(tanyaModel){
const head=tanyaModel.getObjectByName('mixamorigHead_06')
if(!head)return
if(head){
if(angle === null){
angle=head.rotation.x
}
angle-=0.02
if(angle<=-1.9){
    angle=-1.9
} 

}   
//head.rotation.x=angle     
}