const React = require('react');
const {useState, useRef} = React;

const WordRelay = () => {
    const [word, setWord] = useState('맨발보이');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null)


    const onSubmitForm = (e) => {
        e.preventDefault();
        if (word[word.length - 1] === value[0]) {
            setResult('딩동댕11');
            setWord(value);
            setValue('');
        } else {
            setResult('땡!');
            setValue('');
        }
        inputRef.current.focus();
    }

    const onChageInput = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="wordInput">글자를 입력하세요.</label>
                <input id="wordInput" ref={inputRef} value={value} onChange={onChageInput}/>
                <button> 입력 !</button>
            </form>
            <div>{result}</div>
        </>
    );

}

module.exports = WordRelay;