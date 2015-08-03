var React = require('react/addons');

var Anchor = require('babel!../components/anchor.jsx');

module.exports = function(item) {
  // returns JSX for each possible item type in data array

  var key = item[0];
  var val = item[1];

  switch(key) {
    case "h1":
      return (<h1>{val}</h1>);
      break;

    case "h3":
      return (<h3>{val}</h3>);
      break;

    case "p":
      if (item.length > 2) {    // is it a p with nested elements?
        var nodes = [];         // add them to this array
        for (var i = 1; i < item.length; i++) {
          var h = item[i][1];
          var s = item[i][2];

          // is it an array? is it an anchor tag? ...first element in array is tag
          if (Object.prototype.toString.call( item[i] ) === '[object Array]' && item[i][0] == "a")
            nodes.push(<Anchor href={h} value={s} />);
          //nodes.push(<a href={h}>{s}</a>);
          else
            nodes.push(item[i]);
        }
        return (<p>{nodes}</p>);
      }
      else    // else just a regular p
        return (<p>{val}</p>);
      break;

    case "p.large":
      return (<p className="large">{val}</p>);
      break;

    case "p img":
      return (<p><img src={val} /></p>);
      break;
  }
}