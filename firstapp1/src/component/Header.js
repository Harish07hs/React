import React,{Component} from 'react';

class Header extends Component{

    constructor(){
        super()

        this.state={
            title:'My React App',
            details: 'skjfb bfue jeb jbcejb jebiu jiebi uiebv',
            keyword:'User text here'
        }
    }
    
     //Event Binding
     inputChange(event){
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
        this.props.userText(event.target.value)
    }
    
    render(){
       // const mydata = this.state;
        return(
            <header>
                <p className="logo">{this.state.title}</p>

                <p className="logo">{this.state.details}</p>
                <center>
                    <input onChange={this.inputChange.bind(this)} />
                     <select onChange={this.inputChange.bind(this)}>
                        <option value="This">This</option>
                        <option value="New">New</option>
                        <option value="React">React</option>
                        <option value="Importance">Importance</option>
                     </select>
                    <p>{this.state.keyword}</p>
                </center>
            </header>
        )
    }

}


// const Header = () => {
//     return(
//         <header>
//             <p>React App</p>
//             <input/>
//         </header>
//     )
// }

export default Header;
