const React = require('react')
class Show extends React.Component {
render () {
    const fruit = this.props.fruit
    return (
            <div>
                <link rel="stylesheet" href="/css/app.css"/>     
                <h1> Show Page </h1>
                The {fruit.name} is {fruit.color} <br></br>
                {fruit.readyToEat? 'It is ready to eat' : 'It is not ready to eat... Cant touch this' }
            </div>
        );
    }
}
module.exports  = Show;