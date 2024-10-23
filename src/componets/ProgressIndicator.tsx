import React from 'react';

interface ProgressIndicatorProps {
  percentage: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ percentage }) => {
  return (
    <div className="progress-indicator">
      <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      <span>{percentage}%</span>
    </div>
  );
};

export default ProgressIndicator;
