import React from 'react';
import PurpleWaveTop from './PurpleWave/PurpleWaveTop.js';
import BlueWaveTop from './BlueWave/BlueWaveTop.js';
import BlueWaveBottom from './BlueWave/BlueWaveBottom.js';
import PurpleWaveBottom from './PurpleWave/PurpleWaveBottom.js';

const Waves = (props) => {
  return (
    <div>
      <PurpleWaveTop/>
      <BlueWaveTop/>
      <BlueWaveBottom/>
      <PurpleWaveBottom/>
    </div>
  );
};

export default Waves;

