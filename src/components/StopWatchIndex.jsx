import React, { useState } from 'react';

const StopwatchIndex = () => {
    const [time, setTime] = useState({ hr: 0, min: 0, sec: 0, milli: 0 });
    const [status, setStatus] = useState();

    const start = () => {
        myFun();
        setStatus(setInterval(myFun, 10));
    };

    const stop = () => {
        clearInterval(status);
    };

    const reset = () => {
        clearInterval(status);
        setTime({ hr: 0, min: 0, sec: 0, milli: 0 });
    };

    const myFun = () => {
        setTime(prevTime => {
            let { hr, min, sec, milli } = prevTime;
            milli += 1;

            if (milli === 100) {
                milli = 0;
                sec += 1;
            }
            if (sec === 60) {
                sec = 0;
                min += 1;
            }
            if (min === 60) {
                min = 0;
                hr += 1;
            }

            return { hr, min, sec, milli };
        });
    };

    const formatTime = (num) => {
        return num < 10 ? `0${num}` : num;
    };

    return (
        <>
            <div className='container'>
                    <h2 className='py-3 text-info'>Stop Watch</h2>
                    <h1>{`${formatTime(time.hr)} : ${formatTime(time.min)} : ${formatTime(time.sec)} : ${formatTime(Math.floor(time.milli / 10))}`}</h1>
                <div className='buttons'>
                    <button className='start' onClick={start}>Start</button>
                    <button className='stop' onClick={stop}>Stop</button>
                    <button className='reset' onClick={reset}>Reset</button>
                </div>
            </div>
        </>
    );
};

export default StopwatchIndex;
