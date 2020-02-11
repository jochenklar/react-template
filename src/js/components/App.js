import React, { Component} from 'react'

import ItemApi from '../api/ItemApi'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    const { items } = this.state

    ItemApi.fetchItems().then(items => {
      this.setState({ items })
    })
  }

  render() {
    const { items } = this.state

    return(
      <main>
        <div className="container">
          <ul>
            {items.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </main>
    )
  }
}

export default App
