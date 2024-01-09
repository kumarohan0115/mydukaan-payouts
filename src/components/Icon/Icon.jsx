/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { iconMap } from '../../assets/icon.constant';

const Icon= ({name, className=""}) => {

  const svgRefrence = useRef(null);

  useEffect(() => {
    svgRefrence.current.innerHTML = iconMap[name];
  }, [name]);

  return (
    <div ref={svgRefrence} className={className}>
    </div>
  );
};

export default Icon;
