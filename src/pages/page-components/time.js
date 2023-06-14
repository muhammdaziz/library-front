import React from "react";
import Frame from "../../component/frame/frame";
import H1 from "../../component/text/h1";
import H5 from "../../component/text/h5";
import {ColorGrey2, ColorOrange} from "../../utils";

export const Time = ({
    deadline
                     }) => {
    const [days, setDays] = React.useState('0');
    const [hours, setHours] = React.useState('0');
    const [minutes, setMinutes] = React.useState('0');
    const [seconds, setSeconds] = React.useState('0');

    const getTime = () => {
        const time = new Date(deadline) - Date.now();

        let day = Math.floor(time / (1000 * 60 * 60 * 24))
        setDays(getValue(day))

        let hour = Math.floor((time / (1000 * 60 * 60)) % 24)
        setHours(getValue(hour))

        let minute = Math.floor((time / 1000 / 60) % 60)
        setMinutes(getValue(minute));

        let second = Math.floor((time / 1000) % 60)
        setSeconds(getValue(second));
    };

    const getValue = function (time) {
        if (time < 0)
            return '0';
        else if (time < 10)
            return '0' + time;
        else
            return time;
    }

    React.useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Frame
            width={'28%'}
            margin={'20px auto'}
            className={'grid-4'}
            border={'1px solid ' + ColorGrey2}
            padding={'15px 10px'}
            borderRadius={'15px'}
            textAlign={'center'}
        >
            <Frame>
                <H1
                    className={'demi-bold'}
                    color={ColorOrange}
                    text={days}
                />
                <H5
                    className={'light'}
                    fontSize={'10px'}
                    text={'Day'}
                />
            </Frame>
            <Frame>
                <H1
                    className={'demi-bold'}
                    color={ColorOrange}
                    text={hours}
                />
                <H5
                    className={'light'}
                    fontSize={'10px'}
                    text={'Hour'}
                />
            </Frame>
            <Frame>
                <H1
                    className={'demi-bold'}
                    color={ColorOrange}
                    text={minutes}
                />
                <H5
                    className={'light'}
                    fontSize={'10px'}
                    text={'Minute'}
                />
            </Frame>
            <Frame>
                <H1
                    className={'demi-bold'}
                    color={ColorOrange}
                    text={seconds}
                />
                <H5
                    className={'light'}
                    fontSize={'10px'}
                    text={'Second'}
                />
            </Frame>
        </Frame>
    );
};