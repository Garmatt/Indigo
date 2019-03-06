var fs = require('fs');
module.exports = function(path, options, fn){
    var cacheLocation = path + ':html';
    if(typeof module.exports.cache[cacheLocation] === "string"){
        return fn(null, module.exports.cache[cacheLocation]);
    }
    fs.readFile(path, 'utf8', function(err, data){
        if (err) { 
			return fn(err); 
		}
		if (!data || !options) {
			return fn(null, module.exports.cache[cacheLocation] = data)
		}
		var regex = /#[a-zA-Z.]+#/g;
		var rendered = data.toString();
		var tokens = rendered.match(regex);
		var value = options;
		var t = null;
		var splitToken = null;
		if (tokens) {
			for (var i = 0; i < tokens.length; i++) {	
				t = tokens[i].substring(1, tokens[i].length-1);
				splitToken = t.split('.');
				for (var j = 0; j < splitToken.length; j++){
					if (!splitToken[j] || !value) {
						break;
					}
					value = value[splitToken[j].toString()];
				}
				if (value != null) {
					rendered = rendered.replace('#' + t + '#', value.toString());
				}
				value = options;
			}
		}
        return fn(null, module.exports.cache[cacheLocation] = rendered);
    });
}
module.exports.cache = {};