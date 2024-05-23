import { useEffect, useState } from "react";

const DigitalAnalog = () => {
  const [time, setTime] = useState("");
  const [period, setPeriod] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const currentTime = new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });
      const [time, period] = currentTime.split(" ");
      setTime(time);
      setPeriod(period);
      requestAnimationFrame(updateClock);
    };

    const animationFrameId = requestAnimationFrame(updateClock);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full pl-28 mt-5 m-auto mb-12 flex justify-start">
      <span className="font-bold text-2xl  border-2 border-black rounded-xl px-5 py-2">
        {time} {period}
      </span>
    </div>
  );
};

export default DigitalAnalog;
