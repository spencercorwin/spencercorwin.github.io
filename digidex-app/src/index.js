import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import Route from 'react-router';
import Switch from 'react-router';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        'Spencer': ['Great guy. Keep up'],
        'Garrett': ['Ok guy.']
      ],
    }
    this.addContact = this.addContact.bind(this);
  }

  addContact(e) {
    this.setState((prevState) => {
      //Pulls input from the "new contact" input form
      const x = document.getElementById('input');
      //RegEx that currently matches and rejects input if
      //there's a space anywhere in input. This will change
      const re = /\s/;
      if (this.state.contacts.includes(x.value)) {
        //Checks if the input already exists in contacts state
        alert('This contact already exists.');
      } else if (x.value !== '' && x.value !== ' ' && !re.test(x.value)) {
        //If input is not a space or empty it will add it
        return {
          contacts: prevState.contacts.concat(x.value)
        };
      } else {
        //If input is empty it will reject input
        alert('Please enter valid input.');
      };
    });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <header>
          <a href="https://www.spencercorwin.com/rolodex-react-app" id='logo'>My Rolodex</a>
        </header>
        <div className="contactName">
          <form>
            <input id='input' name="newContact" placeholder="Enter name" type="text"></input>
            <button onClick={(e) => this.addContact(e)}>Add Contact</button>
          </form>
        </div>
        <Contacts entries={this.state.contacts}/>
      </div>
    );
  }
}


class Contacts extends React.Component {
  //Function to create each contact with its respective info
  createContact(name, info) {
    return (
      <tr>
        <td>1</td>
        <td>{name}</td>
        <td><button>Edit</button></td>
        <td>Recent Touch</td>
        <td>Orange County</td>
        <td>Tech</td>
        <td>Neo Tracker</td>
        <td>Software Engineer</td>
        <td>High Priority</td>
      </tr>
    );
  }

  render() {
    //Pulls data from props into a variable
    const contactEntries = this.props.entries;
    //Maps data into the list of contacts
    const crmItems = contactEntries.map(this.createContact);
    return (
      <table>
        <tr className="entireTableHeader">
          <th>#</th>
          <th>Contact</th>
          <th>  </th>
          <th>Status</th>
          <th>Location</th>
          <th>Industry</th>
          <th>Company</th>
          <th>Position</th>
          <th>Priority</th>
        </tr>
        {crmItems}
      </table>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
