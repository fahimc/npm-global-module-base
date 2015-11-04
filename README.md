# npm-global-module-base
A blank npm global module to create npm modules

##Setup
1. 
```
npm install
```

2. Run the grunt `init` task with the following options:

Option | Description
---|---  
`--name=` | this is the name of the module  
`--repo=` | this is the git repository (optional)     
`--author=` | this is the author's name (optional)  

###Example
```
grunt init --name=exampleModule --repo=https://github.com/fahimc/npm-global-module-base.git --author=Fahim Chowdhury
```

##Writing Commands

The structure of the module is modularised and modules are called commands.   
The Main file is the index.js which contains an object called command and here is where you will place the name of the command and the value will be the exported object using require.

###command
This is the argument provided by the user to excute a task. In the example below I will call `myCommand` which is an argument passed into my module.

####example
```
exampleModule myCommand
```

In index.js the command object will contain the name of the commands which need to match what the user will type in as an argument.

##Command Scripts

Take a look into the src folder where there is an example command script. This will be executed when the command associated with this file is called.
