import React, { Component } from "react";
import "./App.css";
import { Login } from "./components/Login";
import Home from "./components/Drawer";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        const LoginView = () => <Login login={this.handleIsLoggedIn} />;
        const TodoAppView = () => <Home />;
        this.state = {
            LoginView: LoginView,
            TodoAppView: TodoAppView,
            isLoggedIn: false
        };
        this.handleIsLoggedIn = this.handleIsLoggedIn.bind(this);
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