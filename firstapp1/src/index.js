import React from 'react';
import ReactDOM from 'react-dom';


var App1 =(a,b) => {
    return(
        <div>
        <h1> Hi {a} </h1>
        <h1> How are you {a} ? </h1>
        </div>
    )
}

var App =() => {
    return(
        <div>
            <h1>Hi Harish</h1>
            <h1>This is my React App</h1>
            <h2>This is heading</h2>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));
ReactDOM.render(App1('R','R'),document.getElementById('root'));
