let globalPosition = 'advanced'
let globalAngleLeft = null
let globalAngleRight = null

export function updateLegsSync(tanyaModel) {
  const leftLeg = tanyaModel.getObjectByName('mixamorigLeftUpLeg_039');
  const rightLeg = tanyaModel.getObjectByName('mixamorigRightUpLeg_044');

  if (!leftLeg || !rightLeg) return;
  if (globalAngleLeft === null) globalAngleLeft = leftLeg.rotation.x;
  if (globalAngleRight === null) globalAngleRight = rightLeg.rotation.x;

  if (globalPosition === 'advanced') {
    globalAngleLeft += 0.2;
    globalAngleRight -= 0.2;

    if (globalAngleLeft >= 0.4) {
      globalAngleLeft = 0.4;
      globalAngleRight = -0.6;
      globalPosition = 'back';
    }
  } else if (globalPosition === 'back') {
    globalAngleLeft -= 0.2;
    globalAngleRight += 0.2;

    if (globalAngleLeft <= -0.6) {
      globalAngleLeft = -0.6;
      globalAngleRight = 0.4;
      globalPosition = 'advanced';
    }
  }

  // Aplica os rotações de forma síncrona
  leftLeg.rotation.x = globalAngleLeft;
  rightLeg.rotation.x = globalAngleRight;
}