let position = 'stand'
let globalAngleLeft = null
let globalAngleRight = null

export function updateCalf(tanyaModel){
    const rightCalf = tanyaModel.getObjectByName('mixamorigRightLeg_045')
    const leftCalf = tanyaModel.getObjectByName('mixamorigLeftLeg_040')
    
    if (!leftCalf || !rightCalf) return;

    // CORREÇÃO: Em vez de pegar o rotation.x atual do modelo (que tem offset),
    // definimos os valores iniciais exatos para casar perfeitamente com o estado 'stand'.
    if (globalAngleLeft === null) {
        globalAngleLeft = 0;       
        globalAngleRight = -1.8;   
    }

    if (position === 'stand') {
        globalAngleLeft -= 0.4;
        globalAngleRight += 0.4;

        if (globalAngleLeft <= -1.8) {
            globalAngleLeft = -1.8;
            globalAngleRight = 0; 
            position = 'back';
        }    
    }
    else if (position === 'back') {
        globalAngleLeft += 0.4;
        globalAngleRight -= 0.4;

        if (globalAngleLeft >= 0) {
            globalAngleLeft = 0;
            globalAngleRight = -1.8; 
            position = 'stand';
        }
    }

    leftCalf.rotation.x = globalAngleLeft;
    rightCalf.rotation.x = globalAngleRight;
}