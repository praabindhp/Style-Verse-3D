import React, { memo } from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store';

const ColorPicker = memo(() => {
  const snap = useSnapshot(state);

  const DEFAULT_COLORS = [
    '#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF',
    '#FFFF00', '#00FFFF', '#FF00FF', '#C0C0C0', '#808080'
  ];

  const pickerStyles = {
    default: {
      picker: {
        width: '170px',
        background: 'rgba(255, 255, 255, 0.25)',
        boxShadow: '0 2px 30px 0 rgba(31, 38, 135, 0.07)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        borderRadius: '6px'
      }
    }
  };

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker 
        color={snap.color}
        disableAlpha
        presetColors={DEFAULT_COLORS}
        styles={pickerStyles}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
});

ColorPicker.displayName = 'ColorPicker';

export default ColorPicker