(function() {
  var Linter, Pep8Linter, linterPath,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  linterPath = atom.packages.getLoadedPackage("linter").path;

  console.log(linterPath);

  Linter = require("" + linterPath + "/lib/linter");

  Pep8Linter = (function(_super) {
    __extends(Pep8Linter, _super);

    Pep8Linter.syntax = ['source.python'];

    Pep8Linter.prototype.cmd = 'pep8';

    Pep8Linter.prototype.executablePath = null;

    Pep8Linter.prototype.linterName = 'pep8';

    Pep8Linter.prototype.regex = ':(?<line>\\d+):(?<col>\\d+): ((?<error>E\\d+)|(?<warning>W\\d+)) (?<message>.*?)\n';

    function Pep8Linter(editor) {
      var errorCodes;
      Pep8Linter.__super__.constructor.call(this, editor);
      errorCodes = atom.config.get('linter-python-pep8.ignoreErrorCodes');
      if (errorCodes) {
        this.cmd += " --ignore=" + (errorCodes.toString());
      }
      atom.config.observe('linter-python-pep8.pep8DirToExecutable', (function(_this) {
        return function() {
          return _this.executablePath = atom.config.get('linter-python-pep8.pep8DirToExecutable');
        };
      })(this));
    }

    Pep8Linter.prototype.destroy = function() {
      return atom.config.unobserve('linter-python-pep8.pep8DirToExecutable');
    };

    return Pep8Linter;

  })(Linter);

  module.exports = Pep8Linter;

}).call(this);
