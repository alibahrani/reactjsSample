import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "Hello Ali",
      products: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState({
          products: users,
        })
      );
  }

  handleChange = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };
  render() {
    const { products, searchField } = this.state;
    const fitleredProduct = products.filter((product) =>
      product.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Product List</h1>
        <SearchBox
          placeholder="Search products"
          handleChange={this.handleChange}
        />
        <CardList products={fitleredProduct} />
      </div>
    );
  }
}

export default App;
