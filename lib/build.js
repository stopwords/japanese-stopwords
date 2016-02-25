'use strict';

var fs = require('fs');
var path = require('path');

var words = fs.readFileSync(path.join(__dirname, './japanese-stopwords.txt'), 'utf8');

var data = words.split('\n').map(function(word) {
        return (word || '').trim();
}).filter(function(word) {
        return word !== false && word.length > 0;
})


for (var i in data) {
	console.log("'"+ data[i] +"',");
}
