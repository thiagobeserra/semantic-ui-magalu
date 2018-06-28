import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './semantic/dist/semantic.min.css';

import { Button, Menu, Dropdown, ButtonContent } from 'semantic-ui-react';
import { Router, Link } from 'react-router-dom';

class App extends Component {

  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state

    return (
      <div className="App">

        <div>
          <Menu secondary simple pointing>

            <Menu.Item
              name='messages'
              active={activeItem === 'messages'}
              onClick={this.handleItemClick} />

            <Menu.Item
              name='friends'
              active={activeItem === 'friends'}
              onClick={this.handleItemClick} />

            <Dropdown simple text='Shopping' name='shopping' className="link item" active={activeItem === 'shopping'} onClick={this.handleItemClick}>
              <Dropdown.Menu>
                <Dropdown.Header>Categories</Dropdown.Header>
                <Dropdown.Item>Teste</Dropdown.Item>
                <Dropdown.Item>
                  <Dropdown simple text='Clothing'>
                    <Dropdown.Menu>
                      <Dropdown.Header>Mens</Dropdown.Header>
                      <Dropdown.Item>Shirts</Dropdown.Item>
                      <Dropdown.Item>Pants</Dropdown.Item>
                      <Dropdown.Item>Jeans</Dropdown.Item>
                      <Dropdown.Item>Shoes</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Header>Womens</Dropdown.Header>
                      <Dropdown.Item>Dresses</Dropdown.Item>
                      <Dropdown.Item>Shoes</Dropdown.Item>
                      <Dropdown.Item>Bags</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Menu>

        </div>

        <Button primary>Botão Primário Semantic UI Magalu</Button>

        <Button positive>Botão Positive Semantic UI Magalu</Button>

        <Button negative>Botão Negative Semantic UI Magalu</Button>

        <Button secondary>Botão Secundario Semantic UI Magalu</Button>

        <Button disabled>Botão Desabilitado Semantic UI Magalu</Button>

        <div>
          <hr />
          <p>Basic Button</p>
          <Button basic color="blue">Default basic button</Button>
          <Button basic color="green">Persistence basic button</Button>
          <Button basic color="red">Destroy basic button</Button>
          <Button basic color="yellow">Warning basic button</Button>
          <Button basic disabled>Disabled basic button</Button>
        </div>

        <div>
          <a href="#">Link Semantic UI Magalu</a>
        </div>



      </div>
    );
  }
}

export default App;
