/// <reference path="../interfaces/interfaces.d.ts" />

import * as React from 'react';
import * as classNames from 'classnames';


namespace TodoTextInput {
    export interface Props {
        onSave: Function;
        text?: string;
        placeholder?: string;
        editing?: boolean;
        newTodo?: boolean;
    }

    export interface State {
        text: string;
    }
}

/**
 * TodoTextInput
 */
class TodoTextInput extends React.Component<TodoTextInput.Props, TodoTextInput.State> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            text: this.props.text || ''
        };
    }

    handleSubmit(e) {
        const text = e.target.value.trim();
        if (e.which === 13) {
            this.props.onSave(text);
            if (this.props.newTodo) {
                this.setState({ text: '' });
            }
        }
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleBlur(e) {
        if (!this.props.newTodo) {
            this.props.onSave(e.target.value);
        }
    }

    render() {
        return (
            <input className={
                classNames({
                    edit: this.props.editing,
                    'new-todo': this.props.newTodo
                }) }
                type='text'
                placeholder={this.props.placeholder}
                autoFocus={true}
                value={this.state.text}
                onBlur={this.handleBlur.bind(this) }
                onChange={this.handleChange.bind(this) }
                onKeyDown = {this.handleSubmit.bind(this) } />
        );
    }
}


export default TodoTextInput;