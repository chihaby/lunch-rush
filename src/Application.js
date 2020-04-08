import React, { Component } from "react";
import { auth, database } from "./firebase";
import CurrentUser from "./CurrentUser";
import SignIn from "./SignIn";
import NewRestaurant from "./NewRestaurant";
import Restaurants from "./Restaurants";
import "./Application.css";

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CurrentUser: null,
            restaurants: null
        };

        this.restaurantRef = database.ref("/restaurants");
    }

    componentDidMount() {
        // currentUser (lower case c ) is just a random name. It can be any name
        auth.onAuthStateChanged(currentUser => {
            this.setState({ currentUser });

            this.restaurantRef.on("value", snapshot => {
                this.setState({ restaurants: snapshot.val() });
            });
        });
    }

    render() {
        const { currentUser, restaurants } = this.state;
        return (
            <div className="Application">
                <header className="Application--header">
                    <h1>Lunch Rush</h1>
                </header>
                <div>
                    {!currentUser && <SignIn />}
                    {currentUser && (
                        <div>
                            <NewRestaurant />
                            <Restaurants
                                restaurants={restaurants}
                                user={currentUser}
                            />
                            <CurrentUser user={currentUser} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Application;
