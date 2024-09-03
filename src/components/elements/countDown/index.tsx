import React, { useEffect, useState } from "react";

interface CountdownProps {
  expiredAt: string;
}

const Countdown: React.FC<CountdownProps> = ({ expiredAt }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const expirationTime = new Date(expiredAt);
    const timeLeft = expirationTime.getTime() - now.getTime();

    const minutes = Math.floor((timeLeft % (1000 * 3600)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return {
      minutes: minutes >= 0 ? minutes : 0,
      seconds: seconds >= 0 ? seconds : 0,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [expiredAt]);

  return (
    <div className="w-full md:w-4/12 rounded-lg flex items-center justify-center py-3 bg-profile_route-100 bg-opacity-20">
      <p className="text-profile_route-100 text-center">
        {timeLeft.minutes}m {timeLeft.seconds}s
      </p>
    </div>
  );
};

export default Countdown;
