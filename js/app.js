class Box extends React.Component{
    render(){
        return(
            <div className="box">
                <h1 id='abc'>{this.props.heading}</h1>
                <p>GIHDRXLDIFKJSMLCDKFSDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD</p>
            </div>
        );
    }
};
const App=() => (
    <div className='row'>
        <div className='col'>
            <Box heading='Heading 1'/>
        </div>
        <div className='col'>
            <Box heading='Heading 2'/>
        </div>
        <div className='col'>
            <Box heading='Heading 3'/>
        </div>
        <div className='col'>
            <Box heading='Heading 4'/>
        </div>
    </div>
);
ReactDOM.render(<App />,document.getElementById('react-container'));