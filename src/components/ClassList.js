import React, { Component } from 'react';

class ClassList extends Component {
    constructor() {
        super();

        this.state = {
            listNames: [],
            newListName: ''
        };
    }

    newClassList = (event) => {
        event.preventDefault();
        const namesList = this.state.listNames;
        namesList.push(this.state.newListName);
        this.setState({
            newListName: '',
            names: namesList
        });
    };

    handleNewName = (event) => {
        this.setState({ newListName: event.target.value });
    };

    render() {
        return (
            <div>
                {this.state.listNames.map(name => <div>{name}</div>)}
                <form onSubmit={this.newClassList}>
                    <input type='text' onChange={this.handleNewName} placeholder="Add a new item" value={this.state.newListName} />
                </form>
            </div>
        );
    }
}

export default ClassList;