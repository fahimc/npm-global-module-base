#!/usr/bin/env node
var Main = {
	commandIndex:2,
	command:{
		example:require('./src/command/example.js')
	},
	init: function () {
		this.checkCommand();
	},
	checkCommand:function(){
		if (process.argv.length > this.commandIndex) {
			var cmd = process.argv[this.commandIndex];
			if(this.command[cmd]){
				this.command[cmd](process.argv);
			}
		}
	}
};
Main.init();

