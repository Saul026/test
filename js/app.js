import { updateStagesView } from './updateStagesView.js';
import { updateSupportView } from './updateSupportView.js';
function resize() {
    updateSupportView();
    updateStagesView();
}

window.addEventListener('resize', resize);
window.addEventListener('load', resize);
