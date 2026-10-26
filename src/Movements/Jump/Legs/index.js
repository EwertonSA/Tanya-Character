let position = 'advanced';
let rightAngle = 0; // Correção: Inicializado com 0 em vez de null
let leftAngle = 0;  // Correção: Inicializado com 0 em vez de null

export function legs(tanyaModel) {
  const rightleg = tanyaModel.getObjectByName('mixamorigRightUpLeg_044');
  const leftLeg = tanyaModel.getObjectByName('mixamorigLeftUpLeg_039');
  
  if (!rightleg || !leftLeg) return;

  const speed = 0.5; // Velocidade reduzida para um movimento suave
  const maxLimit = 1; // Limite máximo para frente (em radianos)
  const minLimit = -1; // Limite mínimo para trás (em radianos)

  if (position === 'advanced') {
    leftAngle -= speed;
    rightAngle += speed;
    
    // Se atingir o limite máximo, muda para 'back'
    if (rightAngle >= maxLimit) {
      position = 'back';
    }
  } 
  else if (position === 'back') {
    leftAngle += speed;
    rightAngle -= speed;
    
    // Se atingir o limite mínimo, volta para 'advanced'
    if (rightAngle <= minLimit) {
      position = 'advanced';
    }
  }

  // Aplica as rotações calculadas
  rightleg.rotation.x = rightAngle;
  leftLeg.rotation.x = leftAngle;
}