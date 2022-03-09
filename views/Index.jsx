const React = require('react')

class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>Fruits index page</h1>
                <ul>
                {this.props.fruits.map((fruit,i) => {
                  return (
                  <li key={i}>
                      <a href={`/fruits/${fruit.id}`}>{fruit.name}</a>
                      
                      is { fruit.readyToEat? <span>It is ready to eat</span>: <span> It is not ready to eat </span>}
                      {/* Your Delete Form Goes Here  It's incomplete we will fix below*/}
                        <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
                          <input type="submit" value="DELETE"/>
                      </form>
                      <a href={`/fruits/${fruit._id}/edit`}>Edit This Fruit</a>
                  </li>
                  )
                })}
                </ul>
                <nav>
                <a href='/fruits/new'>Create a new fruit</a>
                </nav>
            </div>
            )
    }
}
module.exports = Index