import { useState } from "react";
import "./objects.css"

export default function ButtonTest() {
    return <h1 className="dropdownHolder" textcolor="red" title="TestingTitle">
        Hello
        <div className="dropdownContent">
            Hello
        </div>
        {/*<div className="dropdownContent">
            Hello My world!
        </div>*/}
    </h1>
}