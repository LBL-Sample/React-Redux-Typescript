/// <reference path="../interfaces/interfaces.d.ts" />

import * as React from 'react';

import{Todo} from '../models/todos';
import TodoItem from './TodoItem';
import Footer from './Footer';

import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../constants/TodoFilters';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
};

namespace MainSection{
    export interface Props{
        todos:Todo[];
        actions:any;
    }
    
    export interface State{
        filter:string;
    }
}

/**
 * MainSection
 */
class MainSection extends React.Component<MainSection.Props,MainSection.State>{
    constructor(props,context) {
        super(props,context);
        this.state = {filter:SHOW_ALL};
    }
    
    
}