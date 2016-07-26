// conf.js
exports.config = {
	framework: 'jasmine',
	specs: ['spec.js'],
	directConnect: true,
  	multiCapabilities: [{
	  'browserName': 'firefox'
	}, {
	  'browserName': 'chrome'
	}]
}