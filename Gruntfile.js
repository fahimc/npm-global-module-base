module.exports = function (grunt) {

  function getName() {
    var name = grunt.option('name');
    var repo = grunt.option('repo');
    var author = grunt.option('author');
    if (!name) {
      grunt.fail.fatal('Name not specified. please type --name=ModuleName');
    }else{
      var content = grunt.file.readJSON('package.json');
      content['name'] = name;
      content['bin'] = {};
      content['bin'][name] =  "./index.js";
      if(repo){
        content.repository.url = repo;
        content.bugs.url = repo.replace('.git','/issues');
        content.homepage = repo.replace('.git','');
      }
      if(author){
        content.author = author;
      }
      grunt.file.write('package.json',JSON.stringify(content,null,2));
    }
  }
  grunt.registerTask('init', getName);

};

