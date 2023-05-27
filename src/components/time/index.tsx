import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export const Time = () => {
  const [time, setTime] = useState<string>(dayjs().format('hh:mm:ss A'));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs().format('hh:mm:ss A'));
    }, 1000);
    () => {
      clearInterval(timer);
    };
  }, []);

  return <p className="px-2 text-sm font-bold text-black">{time}</p>;
};
