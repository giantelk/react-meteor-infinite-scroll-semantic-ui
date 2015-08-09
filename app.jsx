//
// Infinite Scroll with Meteor & Semantic UI visibility and ReactJS
//

var App = React.createClass({

    componentDidMount: function() {
        $('.myfeed').visibility({
            once: false,
        
            // update size when new content loads
            observeChanges: true,
        
            // load content on bottom edge visible
            onBottomVisible: function() {
                console.log("infiniateScroll ... called.");
                alert('inifiniateScroll ... called.');
            }
        });
    },

    render: function() {
    
        var showFeedHTML = [];
        for (var i=0; i < 100; i++) {
            showFeedHTML[i] = (
                <li key={ i }>
                    { i }: stuff
                </li>
            );
        }
    
        return (
            <div className="myfeed">
                <h3>Semantic UI & ReactJS: Infinite Scroll Example</h3>
                { showFeedHTML }
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