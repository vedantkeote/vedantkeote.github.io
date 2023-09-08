class Box extends React.Component{
    state={color:'black'}
    changeColor(color){
        this.setState({color:color});
    }
    render(){
        return(
            <div className='box'>
                <h1 className={this.state.color}>{this.props.heading}</h1>
                <p>GIHDRXLDIFKJSMLCDKFSDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD</p>
                <button onClick={()=>this.changeColor("red")}>Red</button>
                <button onClick={()=>this.changeColor("yellow")}>Yellow</button>
                <button onClick={()=>this.changeColor("blue")}>Blue</button>
                <button onClick={()=>this.changeColor("green")}>Green</button>
            </div>
        );
    }
};
class App extends React.Component{
    state={
        boxes:[
            {
                heading:'first heading',
                color:'black'
            },
            {
                heading:'second heading',
                color:'black'
            },
            {
                heading:'third heading',
                color:'black'
            },
            {
                heading:'fourth heading',
                color:'black'
            },
            {
                heading:'fifth heading',
                color:'black'
            },
            {
                heading:'sixth heading',
                color:'black'
            },
            {
                heading:'seventh heading',
                color:'black'
            }
        ]
    }
    render(){
        return(
        <div className='row'>
            {this.state.boxes.map(box =>
                <div className='col'>
                    <Box heading={box.heading} color={box.color}/>
                </div>
            )}
        </div>
        );
    }
}
ReactDOM.render(<App />,document.getElementById('react-container'));