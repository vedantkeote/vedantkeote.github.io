const Box = props => {
    return(
        <div className='box'>
           <h1 className={props.color}>{props.heading}</h1>
            <p>GIHDRXLDIFKJSMLCDKFSDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
            <strong>aaaaaaaaaaaaaaaaaghjkm</strong>
            </p>
            <button onClick={()=>props.changeColor(props.id,"red")}>Red</button>
            <button onClick={()=>props.changeColor(props.id,"yellow")}>Yellow</button>
            <button onClick={()=>props.changeColor(props.id,"blue")}>Blue</button>
            <button onClick={()=>props.changeColor(props.id,"green")}>Green</button>
        </div>
    );
}
const Stats = (props) => {
        let boxes=props.boxes;
        let red=0,yellow=0,blue=0,green=0,black=0;
        boxes.forEach(box => {
        if(box.color=='red'){
            red++;
        }
        else if(box.color=='yellow'){
            yellow++;
        }
        else if(box.color=='blue'){
            blue++;
        }
        else if(box.color=='green'){
            green++;
        }
        else{
            black++;
        }
    });
    return(
        <div className='stats'>
            Total heading color counts:
            <div>Black:{black}</div>
            <div>Red:{red}</div>
            <div>Yellow:{yellow}</div>
            <div>Blue:{blue}</div>
            <div>Green:{green}</div>
        </div>
    );
};
class App extends React.Component{
    state={
        boxes:[
            {
                id:1,
                heading:'first heading',
                color:'black'
            },
            {
                id:2,
                heading:'second heading',
                color:'black'
            },
            {
                id:3,
                heading:'third heading',
                color:'black'
            },
            {
                id:4,
                heading:'fourth heading',
                color:'black'
            },
            {
                id:5,
                heading:'fifth heading',
                color:'black'
            },
            {
                id:6,
                heading:'sixth heading',
                color:'black'
            }
        ]
    }
    changeColor(id,color){
        let boxes=this.state.boxes;
        boxes[id-1].color=color;
        this.setState({
            boxes:boxes
        });
    }
    render(){
        return(
        <div>
        <div className='row'>
            {this.state.boxes.map(box =>
                <div className='col'>
                    <Box id={box.id} heading={box.heading} color={box.color} changeColor={this.changeColor.bind(this)}/>
                </div>
            )}
        </div>
        <div className='row'>
            <Stats boxes={this.state.boxes}/>
        </div>
        </div>
        );
    }
}
ReactDOM.render(<App />,document.getElementById('react-container'));