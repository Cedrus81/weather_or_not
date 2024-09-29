import Image from "next/image";
import React from "react";
import directionIcon from "../../../public/static/assets/icons/wind-direction.svg";
import { getDirection } from "@/utils";
type WindDirectionProps = {
  angle: number;
};

function WindDirection({ angle }: WindDirectionProps) {
  const direction = getDirection(angle);
  return (
    <div className="wind-direction-container">
      <div className="wind-direction-bg">
        <Image
          src={directionIcon}
          alt="wind-arrow"
          width={20}
          height={20}
          style={{ transform: `rotate(${angle}deg)` }}
        />
      </div>
      <span>{direction}</span>
    </div>
  );
}

export default WindDirection;
