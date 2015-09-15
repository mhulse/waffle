
/*
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
 */
this.demo = (function(document) {
  'use strict';
  var helper;
  return helper = function(attr) {
    i;
    l;
    var $els;
    return $els = document.querySelectorAll('[' + attr + ']');
  };
})(document);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQSxJQUFDLENBQUEsSUFBRCxHQUFXLENBQUEsU0FBQyxRQUFEO0VBQ1Y7QUFBQSxNQUFBO1NBQ0EsTUFBQSxHQUFTLFNBQUMsSUFBRDtJQUNSO0lBQ0E7QUFEQSxRQUFBO1dBRUEsSUFBQSxHQUFPLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixHQUFBLEdBQU0sSUFBTixHQUFhLEdBQXZDO0VBSEM7QUFGQyxDQUFBLENBQUgsQ0FBSSxRQUFKIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIjIyNcbihmdW5jdGlvbihkb2N1bWVudCkge1xuXHRcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIGhlbHBlciA9IGZ1bmN0aW9uKGF0dHIpIHtcblx0XHRcblx0XHR2YXIgaTtcblx0XHR2YXIgbDtcblx0XHR2YXIgJGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1snICsgYXR0ciArICddJyk7XG5cdFx0XG5cdFx0Zm9yIChpID0gMCwgbCA9ICRlbHMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG5cdFx0XHRcblx0XHRcdCRlbHNbaV0uc3R5bGUub3JkZXIgPSAkZWxzW2ldLmdldEF0dHJpYnV0ZShhdHRyKTtcblx0XHRcdFxuXHRcdH1cblx0XHRcblx0fTtcblx0XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigkZXZlbnQpIHtcblx0XHRcblx0XHRoZWxwZXIoJ2ZsZXgtZmxvdycpO1xuXHRcdGhlbHBlcignb3JkZXInKTtcblx0XHRcblx0fSk7XG5cdFxufShkb2N1bWVudCkpO1xuIyMjXG5cbkBkZW1vID0gZG8gKGRvY3VtZW50KSAtPlxuXHQndXNlIHN0cmljdCdcblx0aGVscGVyID0gKGF0dHIpIC0+XG5cdFx0aVxuXHRcdGxcblx0XHQkZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnWycgKyBhdHRyICsgJ10nKVxuIl19