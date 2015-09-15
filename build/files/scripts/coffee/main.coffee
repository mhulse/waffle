###
(function(document) {
	
	'use strict';
	
	var helper = function(attr) {
		
		var i;
		var l;
		var $els = document.querySelectorAll('[' + attr + ']');
		
		for (i = 0, l = $els.length; i < l; ++i) {
			
			$els[i].style.order = $els[i].getAttribute(attr);
			
		}
		
	};
	
	document.addEventListener('DOMContentLoaded', function($event) {
		
		helper('flex-flow');
		helper('order');
		
	});
	
}(document));
###

@demo = do (document) ->
	'use strict'
	helper = (attr) ->
		i
		l
		$els = document.querySelectorAll('[' + attr + ']')
