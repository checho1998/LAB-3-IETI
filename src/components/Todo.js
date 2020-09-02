import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Todo.css";

export class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className="root">
                <CardContent>
                    <Typography>{this.props.text}</Typography>
                    <Typography>{this.props.priority}</Typography>
                    <Typography>{this.props.dueDate.toDateString()}</Typography>
                </CardContent>
            </Card>
        );
    }
}