
var configValues = require("./config");

module.exports = {

    getDbConnectionString: function() {
        //mongodb://<dbuser>:<dbpassword>@ds053164.mlab.com:53164/nodetodosample
        return 'mongodb://'+ configValues.uname + ':' + configValues.pwd + '@ds053164.mlab.com:53164/nodetodosample'
    }

}
