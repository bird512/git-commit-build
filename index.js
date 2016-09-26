var exec = require('child_process').exec;
var base = process.cwd();

function auto(opts){
	var addCmd = 'git add ';
	opts.args.forEach(function(arg){
		addCmd = addCmd+" "+arg;
	})
	console.log('addCmd = ',addCmd);
	exec(addCmd,status);
}


function status(){
	var cmd = 'git status -s';
	
	var ret = {};

	exec(cmd, { cwd: base }, function(err, output){
		var matched = [];
		lines(output, function(line){
			var files = line.trim().split(/\s{2}/);
			if(files[1]){
				matched.push(files[i])
			}
		});
		if(matched.length > 0){
			exec("git commit -m 'git-bommit-build'",function(){
				console.log('commit finish for: ',matched);
			});		
		}else{
			console.log('no files need to commit');
		}
		return ret;
	});	
	
}


      
/**
 * Pass each output line into a callback.
 *
 * @param {String} output
 * @param {Function} cb
 */

function lines(output, cb){
  output.trim().split('\n').forEach(function(line){
    cb(line);
  });
}

module.exports = auto;