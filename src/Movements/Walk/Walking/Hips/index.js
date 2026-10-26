let angle = null;        // Começa como null para sabermos quando inicializar
let position = 'back';

export function hips(tanyaModel) {
    const hips = tanyaModel.getObjectByName('mixamorigHips_01');
    
    if (hips) {
        if (angle === null) {
            angle = hips.rotation.x;
        }

        if (position === 'back') {
            angle += 0.009; // Incrementa gradualmente rumo a 1.2
            
            if (angle >= 1.5) {
                angle = 1.5;
                position = 'advanced';
            }
        }
        
        //hips.rotation.x = angle;
    }
}