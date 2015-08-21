import React from 'react/addons';

import Banner from 'babel!./banner.jsx';
import Content from 'babel!./content.jsx';

/*



*/

let Home = React.createClass({

  loadData() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/api', true);
    xhr.onload = function() {
      let data = JSON.parse(xhr.responseText);
      this.setState({
        data: data
      });
    }.bind(this);
    xhr.send();
  },

  addNodes() {
    let published = [];
    
  },

  componentDidMount() {
    // load data...
    this.loadData();
    this.addNodes();
  },

  getInitialState() {
    return {
      data: []
    };
  },

  render() {

    let msg = [
      ["h3", "My name is Kevin Bielawski. This is my blog."],
      ["p", "The snippet found below is from ", ["a", "http://qz.com", "Quartz"], ". At this time it is being using as 'dummy' text."]
    ];

    let test = [
      ["h1", "The Netherlands could become the first country with streets made of recycled plastic"],
      ["p.large", "Think of it as a real-life LEGO set. Dutch-based construction company VolkerWessels announced plans to develop a recycled plastic surfacing material that is more durable than asphalt, which the city of Rotterdam is considering testing out on its streets. The project is a part of a larger initiative to rid the seas of “plastic soup.”"],
      ["p", "Asphalt, according to VolkerWessels, contributes 1.6 million tons of CO2 to the atmosphere each year, which constitutes 2% of all road transport emissions, reports the Guardian."],
      ["p img", "http://d1xkznn4xi27rh.cloudfront.net/vw.jpg"],
      ["p", "The material is still but a concept on ", ["a", "#", "paper"], " but the company told the Guardian its aim is to lay its ", ["a", "#", "first"], " fully plastic road within the next three years. As illustrated by the rendering below, the designed material would be hollow, making it a lighter and cheaper material than asphalt to haul and install (partly because the plastic segments would be pre-fabricated in a factory before laying them on the road)."],
      ["p", "The plastic road material, ", ["i", "according to VolkerWessels"], ", would require less maintenance and last three times longer than conventional asphalt. And it would also be able to withstand more extreme temperatures, between -40 to 176 degrees Farenheit (-40 to 80 degrees Celsius)."],
      ["p", "An anonymous network. The service aligns like-minded ", ["a", "#", "individuals together"], " to share ideas or help each other with problems. One lists his/her skill sets and is matched with people who need help or advice or simply a person with which to talk."]
    ];

    return (
      <div className="content">
        <Banner data={msg} />
        <Content data={test} />
      </div>
    );
  }
});

module.exports = Home;