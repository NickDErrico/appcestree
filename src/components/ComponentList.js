import React from 'react';
import Component from './Component';

const ComponentList = (props) => {

  return (
    <div style={{
      alignItems: 'center',
      backgroundColor: 'purple',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateRows: 'auto',
      gridRowGap: '1em',
      textAlign: 'center'
    }}>
      <Component
        gridRow={1}
        rowSpan={2}
        gridCol={5}
        colSpan={4}
      />
      <Component
        gridRow={3}
        rowSpan={2}
        gridCol={2}
        colSpan={4}
      />
      <Component
        gridRow={3}
        rowSpan={2}
        gridCol={8}
        colSpan={4}
      />
    </div>
  )
}

export default ComponentList;
