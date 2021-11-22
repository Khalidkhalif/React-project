const imgMyimageexample = require('../assets/imageexample.jpg');
const divStyle = {
    width: '88%',
    height: '800px',
    backgroundImage: `url(${imgMyimageexample})`,
    backgroundSize: 'cover'
};

export default class MyComponent extends React.Component {
    render() {
        return (
            <div className="cComponent" style={divStyle} >
                <h1 align="center">Some header example</h1>
            </div>
        );
    }
}