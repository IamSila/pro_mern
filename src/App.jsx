{/**issue filter component */}
class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the IssueFilter</div>
        );
    }
}

{/**issue table row component */}
class IssueRow extends React.Component {
    render() {
        const style = this.props.rowStyle;
        return (
            <tr>
                <td style = {style}>{ this.props.issue_id }</td>
                <td style = {style}>{ this.props.issue_title }</td>
            </tr>
        );
    }
}


{/**issue table component */}
class IssueTable extends React.Component {
    render() {
        const rowStyle = { border: "1px solid silver", padding: 4 };
        return (
            <table style={{ borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={rowStyle}>ID</th>
                        <th style={rowStyle}>Title</th>
                    </tr>
                </thead>
                <tbody>
                    <IssueRow rowStyle={rowStyle} issue_id={1} issue_title="Error in 
                    console when clicking Add"/>
                    <IssueRow rowStyle = {rowStyle} issue_id={2} issue_title="Title of second issue"/>
                </tbody>
            </table>
        );
    }
}


{/**issueAdd component */}
class IssueAdd extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the IssueAdd</div>
        );
    }
}






{/**Main component IssueList */}
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
