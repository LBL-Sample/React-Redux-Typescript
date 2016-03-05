/// <reference path="../interfaces/interfaces.d.ts" />

import * as React from 'react';

/**
 * name
 */
class Counter extends React.Component<any, any> {
    public render() {
        const {increment, incrementIfOdd, incrementAsync, decrement, counter} = this.props;

        return (
            <p>
                Clicked: {counter}
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={incrementIfOdd}>Increment if Odd</button>
                <button onClick={() => incrementAsync() }>Increment async</button>
            </p>
        );
    }
}

export default Counter;

