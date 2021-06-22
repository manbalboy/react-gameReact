import React, {useState, useRef} from 'react';


const ResponseCheck = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요');
    const [result, setResult] = useState([]);
    const timeOut = useRef(null);
    const startTime = useRef(null);
    const endTime = useRef(null);

    const onClickScreen = () => {

        if (state === 'waiting') {
            setState('ready');
            setMessage('초록색이 되면 클릭하세요')


            timeOut.current = setTimeout(() => {
                setState('now');
                setMessage('지금클릭')
            }, Math.floor(Math.random() * 1000) + 2000);
            startTime.current = new Date();

        } else if (state === 'ready') {
            clearTimeout(timeOut.current);

            setState('waiting');
            setMessage('너무 성급하시군요 ! 초록색이 된 후에 클릭하세요.')


        } else if (state === 'now') {
            endTime.current = new Date();
            setState('waiting');
            setMessage('클릭해서 시작하세요')
            setResult((prevResult) => [...prevResult, endTime.current - startTime.current])

        }
    }

    const onReset = () => {
        setResult([]);
    }

    return (
        <>
            <div
                id={"screen"}
                className={state}
                onClick={onClickScreen}
            >
                {message}
            </div>
            {result.length === 0
                ? null
                : (
                    <div>
                        평균시간 : {result.reduce((a, c) => a + c) / result.length}ms
                    </div>
                )
            }

            <button onClick={onReset}>리셋</button>

        </>
    )
}



export default ResponseCheck;
