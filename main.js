module.exports = {

  get: function () {

    var that = this;

    that.hash = {};

    var argsString = process.argv.splice(2)[0];

    if (argsString) {

      var args = argsString.split(",");

      for (var i = 0, max = args.length; i < max; i++) {

        var split = args[i].split("=");
        var key = split[0];
        var value = split[1];

        that.hash[key] = value;

      }

    }

    return that.hash;

  }

};