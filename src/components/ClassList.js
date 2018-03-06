import React, { Component } from 'react';

class ClassList extends Component {
    constructor() {
        super();

        this.state = {
            listNames: [],
            newListNames: ''
        };
    }

    newClassList = (event) => {
        event.preventDefault();
        const namesList = this.state.listNames;
        namesList.push(this.state.newListNames);
        this.setState({
            newListNames: '',
            names: namesList
        });
    };

    handleNewName = (event) => {
        this.setState({ newList: event.target.value });
    };

    render() {
        return (
            <div>
                {this.state.names.map(name => <div>{name}</div>)}
                <form onSubmit={this.newClassList}>
                    <input type='text' onChange={this.handleNewName} placeholder="Add a new item" value={this.state.newListName} />
                </form>
            </div>
        );
    }
}

export default ClassList;