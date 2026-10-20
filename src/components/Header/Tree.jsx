import React from 'react';
import '../../style/treestyle.css';



export const Tree= ({ tree }) => {
  const { x, y, scale, variant, depthZ } = tree;

  return (
    <svg
      viewBox="0 0 80 120"
      className="tree-persistent-node"
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: `${45 * scale}px`,
        height: `${75 * scale}px`,
        zIndex: depthZ,
        transformOrigin: 'bottom center',
        pointerEvents: 'none',
      }}
      fill="none"
      stroke="var(--color-tree-stroke)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Trunk */}
      <path d="M40 120 L40 50" stroke="var(--color-tree-stroke)" strokeWidth="2.2" />

      {/* Variant 0: Modern Rounded Foliage */}
      {variant === 0 && (
        <g>
          <circle cx="40" cy="46" r="28" fill="var(--color-tree-fill)" fillOpacity="0.08" strokeWidth="1.6" />
          <path d="M40 70 L28 58 M40 56 L20 44 M40 42 L25 28" strokeWidth="1.4" />
          <path d="M40 68 L52 56 M40 54 L60 42 M40 40 L55 28" strokeWidth="1.4" />
        </g>
      )}

      {/* Variant 1: Scandinavian Geometric Conifer */}
      {variant === 1 && (
        <g>
          <polygon points="40,16 22,48 58,48" fill="var(--color-tree-fill)" fillOpacity="0.1" strokeWidth="1.6" />
          <polygon points="40,42 18,76 62,76" fill="var(--color-tree-fill)" fillOpacity="0.1" strokeWidth="1.6" />
          <polygon points="40,70 14,106 66,106" fill="var(--color-tree-fill)" fillOpacity="0.1" strokeWidth="1.6" />
          <line x1="40" y1="48" x2="40" y2="106" strokeWidth="1.5" />
        </g>
      )}

      {/* Variant 2: Sculptural Broad Leaf */}
      {variant === 2 && (
        <g>
          <path
            d="M40 38 C20 30 14 54 28 72 C16 82 22 102 40 95 C58 102 64 82 52 72 C66 54 60 30 40 38 Z"
            fill="var(--color-tree-fill)"
            fillOpacity="0.09"
            strokeWidth="1.6"
          />
          <path d="M40 55 L28 68 M40 74 L52 86 M40 66 L52 60" strokeWidth="1.4" />
        </g>
      )}
    </svg>
  );
};