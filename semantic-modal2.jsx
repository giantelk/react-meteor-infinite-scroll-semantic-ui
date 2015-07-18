// App component - represents the whole app
App = React.createClass({
 
  showModalOne() {
    $('.ui.modal.my-dialog-one')
      .modal('show');
  },

  showModalTwo() {
    $('ui.modal.my-dialog-two')
      .modal('show');
  },

  render() {
    return (
      <div>

        <MyModalDlgOne />
        <MyModalDlgTwo />

        <button onClick={this.showModalOne} className="ui button">Test MyModalDlgOne</button>

        <button onClick={this.showModalTwo} className="ui button">Test MyModalDlgTwo</button>

        <p />
        React App.
      </div>
    );
  }
});


MyModalDlgOne = React.createClass({

  render() {
    return (
        <div className="ui modal my-dialog-one">

        <div className="description">
            <div className="ui header">Modal #1</div>
            <p>TEST</p>
          </div>
      </div>
    );
  }
});  


MyModalDlgTwo = React.createClass({

  render() {
    return (
        <div className="ui modal my-dialog-two">

        <div className="description">
            <div className="ui header">Modal #2</div>
            <p>TEST</p>
          </div>
      </div>
    );
  }
});  


if (Meteor.isClient) {
  // This code is executed on the client only
 
  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    React.render(<App />, document.getElementById("render-target"));
  });
}