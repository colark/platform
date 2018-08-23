import React from 'react';
import './BackgroundWave.css';

const BackgroundWave = (props) => {
  return (
    <div className="wave-container">
      <div className="purple-wave">
        <svg width="1440" height="3357" viewBox="0 0 1440 3357" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-1.99997 169.468C-1.99997 169.468 235.919 -150.738 716.756 89.149C1197.59 329.036 1101.13 96.7581 1442.51 190.181L1443 3334C1443 3334 1059.19 3054.5 994 3129C556.5 3629 529.5 2975.5 353 3241.5C176.5 3507.5 0.500031 3227 0.500031 3227L-1.99997 169.468Z" fill="#E3E5FC" />
        </svg>
      </div>
      <div className="blue-wave">
        <svg width="1440" height="3193" viewBox="0 0 1440 3193" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.01958 142.544C1.01958 142.544 236.285 -145.868 652.116 97.8031C1067.95 341.474 1129.4 101.692 1460 223.983L1434.5 2962C973.5 2809.5 1149.5 2796.5 905 3044C660.5 3291.5 387 2930.5 341 3083C295 3235.5 -4.5 3281 -4.00002 2872C-3.50003 2463 1.01958 142.544 1.01958 142.544Z" fill="#0111FC" />
        </svg>
      </div>
    </div>
  )
};

export default BackgroundWave;