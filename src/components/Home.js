import React from "react";
import { PropsAndState } from './PropsAndState'

export const Home = () => (
    <>
        <h2>Java Dalia Task Manager</h2>
        <small>Getting stuff done.</small>

        <address>
            <div>Lets make a plan.</div>
            <div>ESSKEETIT!!!!!</div>
        </address>
        <PropsAndState yourName={"Bro"} />
    </>
)