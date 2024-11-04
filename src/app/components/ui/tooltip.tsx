// src/components/ui/tooltip.tsx

import React, { ReactNode, useState } from 'react';

type TooltipProps = {
  title: string;
  children: ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({ title, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className='relative inline-block'
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className='absolute bottom-full mb-2 w-max bg-gray-700 text-white text-xs rounded py-1 px-2'>
          {title}
        </div>
      )}
    </div>
  );
};

export { Tooltip };
