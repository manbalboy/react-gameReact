const React = require('react');
const {Component} = React;

class WordRelay extends Component {
    state = {
        word: '맨발보이',
        value: '',
        result: '',
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
            this.setState({
                result: '딩동댕11',
                word: this.state.value,
                value: '',
            });
        } else {
            this.setState({
                result: '땡',
                value: '',
            });
        }
        this.input.focus();
    }

    onRefInput = (c) => {
        this.input = c;
    };

    onChageInput = (e) => {
        this.setState({
            value : e.target.value
        })
    }

    input;

    render() {
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChageInput}/>
                    <button> 입력 !</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }
}

module.exports = WordRelay;