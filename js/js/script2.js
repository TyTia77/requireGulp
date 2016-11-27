define(['lodash','jquery'], function(_, $){
  var d = [
    {name: "ty"},
    {name: "penny"}
  ];

  var a = _.map(d, function(x){
    return x.name;
  });
$('h1').html(a);

});
