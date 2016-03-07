/// <reference path="../interfaces/interfaces.d.ts" />

import * as React from 'react';
import * as Comment from './Comment';

/**
 * CommentList extends React.
 */
class CommentList extends React.Component<CommentList.Props, CommentList.State> {
    render() {
        let commentNode = this.props.data.map((comment) => {
            return (
                <Comment key={comment.id} author={comment.author}>
                    {comment.text}
                    </Comment>
            );
        });

        return (
            <div className="commenList">
                {commentNode}
                </div>
        )
    }

}

namespace CommentList {
    export interface Props {
        data: { id: number, author: string, text: string }[];
    }

    export interface State {
    }
}

export = CommentList