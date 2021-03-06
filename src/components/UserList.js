import React,{Component} from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

export class UserList extends Component {

    constructor(props) {

        super(props);
    }

    render() {
        const userList = this.props.usersList.map((user, i) => {
            return (
                <Card className="root">
                    <CardContent>
                        <Typography className="title" component="h2">
                            Full Name: {user.name}
                        </Typography>

                        <Typography className="title" component="h2">
                            Email: {user.email}
                        </Typography>

                        <Typography className="title" component="h2">
                            Id: {user.id}
                        </Typography>

                        <Typography className="title" component="h2">
                            Password: {user.password}
                        </Typography>

                    </CardContent>
                </Card>
            );
        });
        return (
            <div>
                {userList}
            </div>
        );
    }
}
export default UserList;