/// <reference path="../interfaces/interfaces.d.ts" />

import * as React from 'react';
import * as classNames from 'classnames';

import {Todo} from '../models/todos';
import TodoTextInput from './TodoTextInput';

namespace TodoItem {
    export interface Props {
        todo: Todo;
        editTodo: Function;
        deleteTodo: Function;
        completeTodo: Function;
        key?: any
    }

    export interface State {
        editing: boolean;
    }
}

/**
 * name
 */
class TodoItem extends React.Component<TodoItem.Props, TodoItem.State> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            editing: false
        }
    }

    handleDoubleClick() {
        this.setState({ editing: true });
    }

    handleSave(todo, text) {
        if (text.lenght === 0) {
            this.props.deleteTodo(todo);
        } else {
            this.props.editTodo(todo, text);
        }
        this.setState({ editing: false });
    }

    render() {
        const {todo, completeTodo, deleteTodo} = this.props;

        let element;
        if (this.state.editing) {
            element = (
                <TodoTextInput text = {todo.text}
                    editing={this.state.editing}
                    onSave={(text) => this.handleSave(todo, text) } />
            );
        } else {
            element = (
                <div className='view'>
                    <input className='toggle'
                        type='checkbox'
                        checked={todo.completed}
                        onChange={() => completeTodo(todo) } />
                    <label onDoubleClick={this.handleDoubleClick.bind(this) } >
                        {todo.text}
                    </label>
                    <button className='destroy'
                        onClick={() => deleteTodo(todo) } />
                </div>
            );
        }

        return (
            <li className={classNames({
                completed: todo.completed,
                editing: this.state.editing
            }) }>
                {element}
            </li>
        )
    }
}

export default TodoItem;

