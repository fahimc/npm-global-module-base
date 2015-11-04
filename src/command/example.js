var RegisterCommand = {
	Logger: require('../logger.js'),
	argsLength: 3,
	init: function (args) {
		this.getTask(args);
	},
	getTask: function (args) {
		if (args.length - 1 == this.argsLength) {
			var arg = args[this.argsLength - 1];
			console.log('argument:',arg);
		}
	}
}

module.exports = RegisterCommand.init.bind(RegisterCommand);

