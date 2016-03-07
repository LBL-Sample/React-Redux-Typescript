/// <reference path="../interfaces/interfaces.d.ts" />

import * as React from 'react';
import * as CommentList from './CommentList';
import * as CommentForm from './CommentForm';
import * as $ from 'jquery';

/**
 * CommentBox
 */
class CommentBox extends React.Component<CommentBox.Props, CommentBox.State> {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    loadCommentsFromServer = () => {
        let jqxhr = $.get(this.props.url)
            .done((data) => this.setState({ data: data }))
            .fail((jqXHR, status, err) => { console.error(this.props.url, status, err.toString()) });

    };

    handleCommentSubmit = (comment) => {
        let comments = this.state.data;
        let jqxhr = $.post(this.props.url, comment);
        jqxhr.done((commentWithId) => {
            let newComments = comments.concat([commentWithId]);
            this.setState({ data: newComments });
        });
    };

    componentDidMount() {
        this.loadCommentsFromServer();
        setInterval(
            this.loadCommentsFromServer,
            this.props.pollInterval
        );
    }

    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
}

namespace CommentBox {
    export interface Props {
        url: string;
        pollInterval: number;
    }

    export interface State {
        data: { id: number, author: string, text: string }[];
    }
}

export = CommentBox
