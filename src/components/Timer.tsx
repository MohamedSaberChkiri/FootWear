"use client"
import React, { useEffect, useState } from 'react';

interface Time {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const Timer: React.FC<{ durationInDays: number }> = ({ durationInDays }) => {
    const calculateTimeRemaining = (endTime: number): Time => {
        const totalSeconds = Math.floor((endTime - Date.now()) / 1000);

        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(totalSeconds % 60);

        return { days, hours, minutes, seconds };
    };

    const formatTime = (time: number): string => {
        return time < 10 ? `0${time}` : `${time}`;
    };

    const [timeRemaining, setTimeRemaining] = useState<Time>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const endTime = Date.now() + durationInDays * 24 * 60 * 60 * 1000;

        const intervalId = setInterval(() => {
            const newTimeRemaining = calculateTimeRemaining(endTime);
            setTimeRemaining(newTimeRemaining);

            if (newTimeRemaining.days <= 0 && newTimeRemaining.hours <= 0 && newTimeRemaining.minutes <= 0 && newTimeRemaining.seconds <= 0) {
                clearInterval(intervalId);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [durationInDays]);

    return (
        <div className='flex flex-wrap items-center justify-around gap-6'>
            <div className='flex items-center justify-center flex-col text-3xl'>{formatTime(timeRemaining.days)}<div>DAYS</div></div>
            <div className='flex items-center justify-center flex-col text-3xl'>{formatTime(timeRemaining.hours)}<div>HOURS</div> </div>
            <div className='flex items-center justify-center flex-col text-3xl'>{formatTime(timeRemaining.minutes)}<div>MINUTES</div> </div>
            <div className='flex items-center justify-center flex-col text-3xl'> {formatTime(timeRemaining.seconds)}<div>SECONDS</div></div>
        </div>
    );
};

export default Timer;
