import React from 'react';

import { defineComponent } from 'reactivue';

// import { Icon } from '@iconify/react-with-api';
import { Colors } from '@/data/constant';
import { filter, setFilter } from '@/utils/store';

export const FloatControl = defineComponent(
  () => ({ filter }),
  // eslint-disable-next-line @typescript-eslint/no-shadow, unused-imports/no-unused-vars, no-empty-pattern
  ({}) => {
    return (
      <div className="fixed bottom-0 left-0 mx-3 mb-10">
        <div className="flex flex-col rounded bg-white p-2 shadow">
          {Colors.map((color) => (
            <button
              key={color}
              // className={`py-2 px-1 outline-none transition-all duration-300 focus:outline-none ${
              //   filter === color || filter === 'all' ? '' : 'opacity-25'
              // }`}
              style={{ color }}
              onClick={() => setFilter(color)}
            >
              {/* <Icon className="pointer-events-none" icon={ColorToIcon[color]} /> */}
            </button>
          ))}
        </div>
      </div>
    );
  }
);
