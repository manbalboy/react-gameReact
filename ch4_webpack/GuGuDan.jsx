const React = require('react');
const {useState, useRef} = React;

const GuGuDan = () => {
    const inputRef = useRef();
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');


    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (parseInt(value) === first * second) {
            setResult('정답' + value);
            setValue('');
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
        } else {
            setResult('땡');
            setValue('');
        }
        inputRef.current.focus();
    }

    return (
        <>
            <div>{first}곱하기{second}는?</div>
            <form onSubmit={onSubmit}>
                <input type="number"
                       value={value}
                       ref={inputRef}
                       onChange={onChangeInput}/>
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </>
    )

}

module.exports = GuGuDan;