define(['lodash','jquery'], function(_, $){
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        let d;
            if (this.readyState == 4 && this.status == 200) {
                d = JSON.parse(this.responseText);
                let a = _.map(d, x => x.first_name +'\n');
                $('p').html(a);
           }

    };

    xhttp.open("GET", "../../data/users.json", true);
    xhttp.send();
});
