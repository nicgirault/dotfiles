(function() {
  var Linter, LinterFlake8, findFile, linterPath,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  linterPath = atom.packages.getLoadedPackage("linter").path;

  Linter = require("" + linterPath + "/lib/linter");

  findFile = require("" + linterPath + "/lib/utils").findFile;

  LinterFlake8 = (function(_super) {
    __extends(LinterFlake8, _super);

    LinterFlake8.syntax = ['source.python'];

    LinterFlake8.prototype.executablePath = null;

    LinterFlake8.prototype.cmd = ['flake8'];

    LinterFlake8.prototype.linterName = 'flake8';

    LinterFlake8.prototype.regex = '(.*?):(?<line>\\d+):(?<col>\\d+): ' + '(?<message>((?<error>E11|E9)|' + '(?<warning>W|E|F4|F84|N*|C|D|Q)|F)\\d+ .*?)\r?\n';

    function LinterFlake8(editor) {
      LinterFlake8.__super__.constructor.call(this, editor);
      this.configFile = findFile(this.cwd, ['setup.cfg', 'tox.ini', '.pep8']);
      this.executableDirListener = atom.config.observe('linter-flake8.executableDir', (function(_this) {
        return function() {
          var executableDir;
          executableDir = atom.config.get('linter-flake8.executableDir');
          if (executableDir) {
            return _this.executablePath = executableDir.length > 0 ? executableDir : null;
          }
        };
      })(this));
      this.binaryNameListener = atom.config.observe('linter-flake8.binaryName', (function(_this) {
        return function() {
          return _this.updateCommand();
        };
      })(this));
      this.maxLineLengthListener = atom.config.observe('linter-flake8.maxLineLength', (function(_this) {
        return function() {
          return _this.updateCommand();
        };
      })(this));
      this.ignoreErrorCodesListener = atom.config.observe('linter-flake8.ignoreErrorCodes', (function(_this) {
        return function() {
          return _this.updateCommand();
        };
      })(this));
      this.maxComplexityListener = atom.config.observe('linter-flake8.maxComplexity', (function(_this) {
        return function() {
          return _this.updateCommand();
        };
      })(this));
      this.selectErrorsListener = atom.config.observe('linter-flake8.selectErrors', (function(_this) {
        return function() {
          return _this.updateCommand();
        };
      })(this));
      this.hangClosingListener = atom.config.observe('linter-flake8.hangClosing', (function(_this) {
        return function() {
          return _this.updateCommand();
        };
      })(this));
    }

    LinterFlake8.prototype.destroy = function() {
      this.executableDirListener.dispose();
      this.binaryNameListener.dispose();
      this.maxLineLengthListener.dispose();
      this.ignoreErrorCodesListener.dispose();
      this.maxComplexityListener.dispose();
      this.selectErrorsListener.dispose();
      return this.hangClosingListener.dispose();
    };

    LinterFlake8.prototype.updateCommand = function() {
      var binary_name, cmd, errorCodes, hangClosing, maxComplexity, maxLineLength, selectErrors;
      binary_name = atom.config.get('linter-flake8.binaryName');
      maxLineLength = atom.config.get('linter-flake8.maxLineLength');
      errorCodes = atom.config.get('linter-flake8.ignoreErrorCodes');
      maxComplexity = atom.config.get('linter-flake8.maxComplexity');
      selectErrors = atom.config.get('linter-flake8.selectErrors');
      hangClosing = atom.config.get('linter-flake8.hangClosing');
      cmd = [binary_name];
      if (this.configFile) {
        cmd.push('--config', this.configFile);
      } else {
        if (maxLineLength) {
          cmd.push('--max-line-length', maxLineLength);
        }
        if (errorCodes && errorCodes.length > 0) {
          cmd.push('--ignore', errorCodes.toString());
        }
        if (maxComplexity) {
          cmd.push('--max-complexity', maxComplexity);
        }
        if (selectErrors) {
          cmd.push('--select', selectErrors.toString());
        }
        if (hangClosing) {
          cmd.push('--hang-closing');
        }
      }
      return this.cmd = cmd;
    };

    return LinterFlake8;

  })(Linter);

  module.exports = LinterFlake8;

}).call(this);
