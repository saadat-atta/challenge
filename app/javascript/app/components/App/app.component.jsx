
import React from 'react'
import Notifications from 'react-notify-toast';
import Images from "../Images/images.component";

export default function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Notifications/>
                    <Images/>
                </div>
            </div>
        </div>
    )
}
