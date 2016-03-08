/// <reference path="../interfaces/interfaces.d.ts" />

import * as React from 'react';

import TodoTextInput from './TodoTextInput';

namespace Header {
    export interface Props {
        addTodo: Function;
    }
}

/**
 * Header
 */
class Header extends React.Component<Header.Props, void> {
    handleSave(text) {
        if (text.length !== 0) {
            this.props.addTodo(text);
        }
    }

    render() {
        return (
            <header className='header'>
                <h1>todos </h1>
                <TodoTextInput
                    newTodo
                    onSave = { this.handleSave.bind(this) }
                    placeholder = 'What needs to be done' />
            </header>
        );
    }
}

export default Header;