import React, { Component } from "react";
import "./App.css";
import { Login } from "./components/Login";
import Home from "./components/Drawer";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import UserList from "./components/UserList";

class App extends Component {
    constructor(props) {
        super(props);
        const LoginView = () => <Login login={this.handleIsLoggedIn} />;
        const TodoAppView = () => <Home />;
        this.state = {
            userList: [],
            LoginView: LoginView,
            TodoAppView: TodoAppView,
            isLoggedIn: false
        };
        this.handleIsLoggedIn = this.handleIsLoggedIn.bind(this);
    }
    componentDidMount() {
        fetch('https://fierce-dusk-19636.herokuapp.com/Users/usuarios')
            .then(response => response.json())
            .then(data => {
                let usersList = [];
                data.items.forEach(function (user) {
                    this.usersList.push({
                        "name":user.name,
                        "email":user.email,
                        "id":user.id,
                        "password":user.password
                    })
                });
                this.setState({userList: usersList});
            });
    }

    render() {
        let redi = (
            <Redirect
                to={
                    this.state.isLoggedIn === false &&
                    localStorage.getItem("email") === null
                        ? "/"
                        : "/home"
                }
            />
        );

        return (
            <Router>
                <div className="App">
                    <div>
                        {redi}
                        <Route exact path="/" component={this.state.LoginView} />
                        <Route path="/home" component={this.state.TodoAppView} />
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h4>Lista de Usuarios</h4>
                    <div>
                        <UserList usersList={this.state.userList}/>
                    </div>
                </div>
            </Router>
        );
    }

    handleIsLoggedIn() {
        this.setState({
            isLoggedIn: true
        });
    }
}

export default App;