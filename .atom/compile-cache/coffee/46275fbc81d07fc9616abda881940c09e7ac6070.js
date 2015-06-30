(function() {
  module.exports = {
    configDefaults: {
      pep8DirToExecutable: null
    },
    activate: function() {
      return console.log('activate linter-python-pep8');
    }
  };

}).call(this);
