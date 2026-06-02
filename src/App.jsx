import React from "react";

// class issueFilter
class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the IssueFilter</div>
        );
    }
}


class IssueRow extends React.Component {
    render() {
        return (
            
        );
    }
}


// class issueTable
class IssueTable extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    <IssueRow title="Title of first issue"/>
                    <IssueRow title="Title of first issue"/>
                </tbody>
            </table>
        );
    }
}


// class issueAdd
class IssueAdd extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the IssueAdd</div>
        );
    }
}


class IssueList extends React.Component{
    render() {
        return (
            <React.Fragment>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable />
                <hr />
                <IssueAdd />
                <hr />
            </React.Fragment>
        );
    }
}


const element = <IssueList />

ReactDOM.render(element, document.getElementById('contents'));
