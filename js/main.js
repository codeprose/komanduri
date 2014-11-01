var Application = Application || {};
Application.selectedCategory = ko.observable({});
Application.selectedProcedure = ko.observable({});

function init() {
	$('.content').find('li').off('click').on('click', function(event) {
		event.preventDefault();
		
		var element = this;
		$(element).css({ 'z-index' : $(this).parent().children().length });
		
		var order_by = [];
		var elements_total = $(this).parent().find('li');
		var current_element = element;
		
		order_by.push({ item: $(element), position: $(element).position().top });
		
		for(var i=1; i < elements_total.length; i++) {
			current_element = $(current_element).next();
			
			if(current_element.length == 0) {
				current_element = elements_total.first();
				order_by.push({ item: current_element, position: current_element.position().top });
			} else {
				order_by.push({ item: current_element, position: $(current_element).position().top });
			}
		}
		
		$.each(order_by, function(key, value) {
			if(value.item[0] == $(element)[0]) {
				//console.log('el elemento selectionado es: ' + element);
				$(element).velocity({
					top: - (value.position),
					zIndex: 2
				}, {
					duration: 500,
					ease: 'easeinout',
					queue: "",
					begin: function() {
						console.log($(this).attr('content-id'));
						$($(this).attr('content-id')).addClass('active');
					},
					progress: null,
					complete: null,
					loop: false,
					delay: false,
					display: false,
					mobileHA: true
				});
			} else {
				$(value.item).velocity({
					top: - (value.position)
				}, {
					duration: 500,
					ease: 'easeinout',
					queue: "",
					begin: null,
					progress: null,
					complete: function() {
						$(this).css({ 'opacity' : 0 });
					},
					loop: false,
					delay: false,
					display: false,
					mobileHA: true
				}).css({'z-index' : '1'});
			}
		});
    });

    
}

$(document).on('ready', init());