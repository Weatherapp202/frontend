import React, { useEffect, useState } from "react";
import { callTemperature } from "../services/Weather";
import { ConditionResponse } from "../interfaces/Weather/Weather";

interface Props {
  currentLngLat: { lat: number; lng: number };
  change: boolean;
  setChange: React.Dispatch<React.SetStateAction<boolean>>;
}

function Condition({ currentLngLat, change }: Props) {
  const [dataPlace, setDataPlace] = useState<ConditionResponse>();

  useEffect(() => {
    callTemperature({
      lat: currentLngLat.lat,
      lng: currentLngLat.lng,
    }).then((response) => {
      setDataPlace(response.data);
    });
  }, [change]);

  return (
    <div className="p-4 border w-[90%] m-auto mt-6">
      {dataPlace && (
        <>
          <section className="flex gap-4 items-center flex-col justify-center">
            <div>
              El Clima en <span className="font-bold">{dataPlace.location.name}</span> es :{" "}
              <span className="font-bold">{dataPlace.current.condition.text}</span>
            </div>
            <img src={dataPlace.current.condition.icon} alt="img" />
          </section>
          <section className="flex justify-center items-center">
            La temperatura es de <span className="font-bold">{dataPlace.current.temp_c}°C</span>
          </section>
        </>
      )}
    </div>
  );
}

export default Condition;
