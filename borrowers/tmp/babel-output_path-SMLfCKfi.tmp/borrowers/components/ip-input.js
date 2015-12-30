define('borrowers/components/ip-input', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		"key-up": '',
		actions: {
			/*		validvalue: function(params){
   			console.log(params);
   			return (/[\d.]/.test(params.fromCharCode(event.keyCode)));
   		},*/
			updateValue: function updateValue(params) {
				console.log(params);

				if (params.length == 3) {
					console.log("--------达到最大字符----------");
				}

				/*var next=params.tabIndex;
    if (this_value.length==params.maxLength)
    {
    	console.log("--------达到最大字符----------");
    	if (next<params.length)
    	{
    		console.log("--------应该跳转了----------");
    		params[next].focus();
    		params[next].select();
    	}
    }*/
				//onKeypress="return (/[\d.]/.test(String.fromCharCode(event.keyCode)))"
			},
			clear_text: function clear_text() {
				_ember['default'].$(".ip-input input");
			}

		}
	});
});