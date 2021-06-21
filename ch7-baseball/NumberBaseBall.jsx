import React, {Component} from 'react';
import Try from './Try.jsx';

const getNumbers = () => {
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const array = [];

    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }

    return array;
}

class NumberBaseBall extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: []
    }
    onChangeinput = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.value === this.state.answer.join('')) {
            this.setState({
                result: '홈런',
                tries: [...this.state.tries, {try: this.state.value, result: '홈런!'}]
            })
        } else {
            const answerArray = this.state.value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (this.state.tries.length >= 9) {
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(',')} 였습니다.`
                })
                alert('게임을 다시 시작합니다.');

                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: []
                })
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === this.state.answer[i]) {
                        strike += 1;
                    } else if (this.state.answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                    this.setState({
                        tries: [...this.state.tries, {try: this.state.value, result: `${strike} 스트라이크 ${ball} 볼`}],
                        value: '',
                    })
                }
            }
        }

    }


    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input type="text" maxLength={4} value={this.state.value} onChange={this.onChangeinput}/>
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    {this.state.tries.map((v, i) => {
                        return (
                            <Try key={`${i + 1}차시도 : `} tryInfo={v} index={i}/>
                        );
                    })}

                </ul>
            </>
        )
    }
}

export default NumberBaseBall;