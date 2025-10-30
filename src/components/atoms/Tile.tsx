import React from 'react';

interface TileProps {
  children?: React.ReactNode;
}

export const Tile: React.FC<TileProps> = ({ children }) => {
  return (
    <div className="rounded-2xl bg-pink-400/30 aspect-square w-full shadow-inner ring-1 ring-white/10" aria-hidden={!children}>
      {children}
    </div>
  );
}
