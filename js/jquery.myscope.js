/* variable: menu
 * List menu items. */
var menu = [
	{
        id: 1,
		key: 'Esophagus',
		text: "ESOPHAGUS",
		src: "img/icons/menu-esoph"
	}, {
        id: 2,
		key: 'Stomach',
		text: "STOMACH",
		src: "img/icons/menu-stomach"
	}, {
        id: 3,
		key: 'Intestine',
		text: "INTESTINE",
		src: "img/icons/menu-intestine"
	}, {
        id: 4,
		key: 'Colon',
		text: "COLON",
		src: "img/icons/menu-colon"
	}, {
        id: 5,
		key: 'Biliary',
		text: "BILIARY",
		src: "img/icons/menu-biliary"
	}, {
        id: 6,
		key: 'Pancreas',
		text: "PANCREAS",
		src: "img/icons/menu-pancreas"
	}
];

/* variable: content
 * Content for with item. */
var content = [
	{
		id: 1, // ESOPHAGUS
		items: [
			{
				id: 1,
				title: "EET for Barrett's Esophagus",
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 2,
				title: 'Esophageal Stenting',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 3,
				title: 'Esophageal Stricture Dilation',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 4,
				title: 'Other Big Procedure Name',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 5,
				title: 'Other Big Procedure Name',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}
		],
		css_style: '#00b0ea',
		color_icons: '#002e55'
	},
	{
		id: 2, // STOMACH
		items: [
			{
				id: 1,
				title: 'GI Bleed',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 2,
				title: 'Managment of GAVE',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 3,
				title: 'Other Big Procedure Name',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 4,
				title: 'Other Big Procedure Name',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}
		],
		css_style: '#f3edd8',
		color_icons: '#9b9182'
	},
	{
		id: 3, // INTESTINE
		items: [
			{
				id: 1,
				title: 'EMR Duodenal Adenoma',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 2,
				title: 'Techniques for Enteral Stent Placement',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 3,
				title: 'Other Big Procedure Name',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 4,
				title: 'Other Big Procedure Name',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 5,
				title: 'Other Big Procedure Name',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 6,
				title: 'Other Big Procedure Name',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 7,
				title: 'Other Big Procedure Name',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}
		],
		css_style: '#f2f1c8',
		color_icons: '#8a833a '
	},
	{
		id: 4, // COLON
		items: [
			{
				id: 1,
				title: 'Colon EMR',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 2,
				title: 'Colon EMR Complications',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 3,
				title: 'Other Big Procedure Name',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}
		],
		css_style: '#e00109',
		color_icons: '#6b0003 '
	},
	{
		id: 5, // BILIARY
		items: [
			{
				id: 1,
				title: 'ERCP Cholangioscopy',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 2,
				title: 'ERCP Difficult Cannulation',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 3,
				title: 'ERCP Stenting',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 4,
				title: 'Other Big Procedure Name',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 5,
				title: 'Other Big Procedure Name',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 6,
				title: 'Other Big Procedure Name',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}
		],
		css_style: '#c08daa',
		color_icons: '#281f24'
	},
	{
		id: 6, // PANCREAS
		items: [
			{
				id: 1,
				title: 'ERCP Pancreatic Endotherapy',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 2,
				title: 'EUS  Pancreatic Cysts',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 3,
				title: 'EUS Tissue Acquistion',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 4,
				title: 'Other Big Procedure Name',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 5,
				title: 'Other Big Procedure Name',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 6,
				title: 'Other Big Procedure Name',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}, {
				id: 7,
				title: 'Other Big Procedure Name',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vel sem volutpat lacinia non quis lorem.',
			}
		],
		css_style: '#a86258',
		color_icons: '#79443e'
	}
];

/* function: myScope
*/
var app, myScope = {
    // settings default elements.
	settings: {
		menu: menu,
		content_menu: $('.content-main'),
		content_menu_right: $('.menu-right'),
		content_main: $('.content-main-info').find('div.content'),
		menu_item_click: null,
		content_ui_prev: {
			top: -169
		}
	},
    /* function: init
        Init app.
        
        parameter:
            void.
            
        return:
            void.
    */
	init: function() {
		app = this;
		this.create_menu();

		//hiden loader
		$(".ui-loader").hide();
		
		//menu right
		app.active_menu_right();
		//overhidden
		$('body > div').css({ 'overflow': 'hidden' });
		
		//
		$(window).on('orientationchange', function(event) {
			if(app.isLandscape()) {
				window.location.reload();
			}
		});
	},
	/* function: reaload
		Reload to change landscape, this is for javascript reload auto.
		
		parameter:
			void.
		
		return:
			orientation - Integer.
	*/
	isLandscape: function() {
    	return (window.orientation === 90 || window.orientation === -90);
	},
    /* function: create_menu
        Create menu, html and listener link.
        
        parameter:
            void.
        
        return:
            void.
    */
	create_menu: function() {
		$('#menu').removeClass('min');
		
		//create item menu
		$.each(this.settings.menu, function(key, value) {
			var item = '<li id="' + value.id + '" class="col-xs-12 init">' +
				'<div class="col-xs-3 img">' +
					'<img class="min-image" src="' + value.src + '-min.png" alt="' + value.text + '">' +
					'<img src="' + value.src + '.png" alt="' + value.text + '">' +
				'</div>' +
				'<div class="col-xs-9 desc">' +
					'<h2>' + value.text + '</h2>' +
				'</div>' +
			'</li>';

			$('#menu').append(item);			

			//element animation and event listener click
			app.menu_link($('#' + value.id));
		});
		
		//animation in
		app.animate_in_menu();
	},
    /* function: menu_link
        Create link off menu, order by selection and order list by animation.
        
        parameter:
            element - Array HTML DOM.
        
        return:
            void.
    */
	menu_link: function(element) {
		element.off('click').on('click', function(event) {
			event.preventDefault();

			//variables temp
			var array_elements = [];
			var current_element = element;
			var elements_total = $('#menu').find('li');
			var array_elements_last = elements_total;
			$('#menu').find('li').removeClass('active');

			//z-index elemento state top
			current_element.css({ 'z-index' : elements_total.length });
			current_element.addClass('active');
			
			//path elements animations
			for(var i=1; i < elements_total.length; i++) {
				current_element = $(current_element).next();
				
				if(current_element.length == 0) {
					$.each(elements_total, function(key, value) {
						var item_current = $(value);
						
						if(item_current[0] == element[0]) {
							array_elements_last.splice(key+1);
						}
					});
				} else {
					array_elements.push({ item: current_element, position: $(current_element).position().top, index: (i) });
				}
			}

			//menu element click item
			app.settings.menu_item_click = element;
			//animation menu
			app.animation_content(array_elements, array_elements_last, 1, this);
		});
	},
    /* function: load_content
        Loaded content and listener btn home.
        
        parameter:
            element - 
        
        return:
            void.
    */
	load_content: function(element) {
		//event listener btn home - init
		$('#menu-home').off('click').on('click', function() {
			//remove elements list
			app.settings.content_main.find('> ul.content-items').empty();
			
			app.animation_content($('#menu').find('li'), null, 2, null);
			app.animation_content(null, null, 4);
            
            var animation_out = ['.content-ui-prev', '.content-procedure'];
            
            for(var i=0; i < animation_out.length; i++) {
                $(animation_out[i]).css('display','block').removeClass('active');
            }
		});
		
		//animate content view
		app.animation_content(null, null, 3, element);
	},
	/* function: content_items_listener
		Event listener content list item.

		parameter:
			void.

		return:
			void.
	*/
	content_items_listener: function(element) {
		$.each($(".content-items").find('li'), function(key, value) {
			//event left swipe
			$(value).off('swipeleft').on("swipeleft", app.swipe_left_handler);
			
			//change to hamburguer button
			$(value).find('> div:first-child').off('mouseup').on('mouseup', function() {
				app.settings.menu_item_click.find('.btn-menu-hamburguer').remove();
				
				var menu_hamburguer = '<div class="col-xs-3 btn-menu-hamburguer">' +
	                '<button>' +
	                    '<span></span><span></span><span></span>' +
	                '</button>' +
	            '</div>';
				
				//appen hamburguer menu and animate
				app.settings.menu_item_click.append(menu_hamburguer);
				app.animation_content(null, null, 5);
			});
			
			
			//
			$.each(app.settings.content_main.find('.controller-options').find('li > button'), function(key, value) {
				$(value).off('click').on('click', function() {
					var current_element = $(value).attr('data-target');
					
					$('#accordion-procedure').find('.panel-collapse').removeClass('in');
					$(current_element).addClass('in');
					
					var menu_hamburguer = '<div class="col-xs-3 btn-menu-hamburguer">' +
						'<button>' +
							'<span></span><span></span><span></span>' +
						'</button>' +
					'</div>';
					
					app.settings.menu_item_click.append(menu_hamburguer);
					app.animation_content(null, null, 6);
				});
			});
		});
	},
    /* function: swipe_left_handler
        Create event swipe and animation open for bar items in procedures list.
        
        parameters:
            event - Object event jQuery mobile.
        
        return:
            void.
    */
	swipe_left_handler: function(event) {
		var element = $(event.currentTarget).parent().find('#' + $(event.currentTarget).attr('id'));
		var content_animate = element.find('#controller-options-' + $(event.currentTarget).attr('id'));
		
 		content_animate.animate({ 'left' : '15%', 'margin-left' : 15 }, 500, function() {
			$(event.currentTarget).on('swiperight', app.swipe_right_handler);
		});
	},
    /* function: swipe_right_handler
        Create event swipe and animation close for bar items in procedures list.
        
        parameters:
            event - Object event jQuery mobile.
        
        return:
            void.
    */
	swipe_right_handler: function(event) {
		$(event.currentTarget).find('.controller-options').animate({ 'left' : '100%', 'margin-left' : -12 }, 500, function() {});
	},
    /* function: procedure_method
        Create HTML and inject for content main in form list.
    
        parameters:
            id_element - String id element.
            item_element - Array JSON info element - title, desc.
            css_style - String color hexadecimal background.
            color_icons - String color hexadecimal color text by icons svg.
        
        return:
            void.
    */
	procedure_method: function(id_element, item_element, css_style, color_icons) {
		var html_insert = '<li id="' + id_element + '" style="top:0; opacity:1;">' +
            '<div class="col-xs-12">' + 
                '<h2 style="color:' + css_style + ';">' +
                    item_element.title +
                '</h2>' +
                '<p>' +
                    item_element.desc +
                '</p>' +
            '</div>' +
            '<div id="controller-options-' + id_element + '" class="controller-options col-xs-10" style="background:' + css_style + ';">' +
                '<span class="triangle" style="border-color: transparent ' + css_style + ' transparent transparent;"></span>' +
                '<ul class="col-xs-12">' +
                    '<li class="col-xs-4 text-center">' +
                        '<button data-target="#content-procedure-videos"><span class="icon-bar icon-icon-record" style="color:' + color_icons + ';"></span></button>' +
                    '</li>' +
                    '<li class="col-xs-4 text-center">' +
                        '<button data-target="#content-procedure-guidelines"><span class="icon-bar icon-icon-graph" style="color:' + color_icons + ';"></span></button>' +
                    '</li>' +
                    '<li class="col-xs-4 text-center">' +
                        '<button data-target="#content-procedure-references"><span class="icon-bar icon-icon-list" style="color:' + color_icons + ';"></span></button>' +
                    '</li>' + 
                '</ul>' +
            '</div>' +
        '</li>';

        app.settings.content_main.find('> ul').append(html_insert);
	},
    /* function: ui_prev
        Load colors for text, icons and background.
		
		parameters:
			color - String color hexadecimal.
			color_sec - String color hexadecimal.
			element - String id element.
			
		return:
			void.
    */
	ui_prev: function(color, color_sec, element) {
		$('.content-ui-prev').find('.title').css({ 'background': color });
		$('.content-ui-prev').find('.title').find('h2').css({ 'color' : color_sec });

		//activate tab
		$.each($('.content-ui-prev').find('.content-list-menu > ul').find('li'), function(key, value) {
			$(value).off('click').on('click', function() {
				app.settings.content_main.parent().parent().removeClass('prev-ui');
				app.settings.content_main.parent().parent().addClass('procedure');
                
                $($(this).find('button').attr('data-target')).collapse('show');
				
				$('.content-ui-prev').removeClass('active');
				
				$('.content-procedure').addClass('active');
				$('.content-procedure').parent().parent().addClass('procedure');
			});
		});
		
		app.back_list(element);
	},
	/* function: back_list
		Return list items.
		
		parameter:
			element - String id element.
			
		return:
			void.
	*/
	back_list: function(element) {
		$('#accordion-procedure').on('show.bs.collapse', function () {
			$('#accordion-procedure .in').collapse('hide');
		});
		
		$(element).off('click').on('click', function() {
			$('header').addClass('in');
			
			$('.dummy').removeClass('active');
			$('.content-procedure').removeClass('active');
			$('.content-ui-prev').removeClass('active');
			
			$('.content-procedure').parent().parent().removeClass('procedure');
			$('.content-ui-prev').parent().parent().removeClass('prev-ui');
			
			console.log('contentmain');
			
			app.settings.content_menu_right.removeClass('active');
			app.settings.content_main.parent().parent().removeClass('active');
			
			app.settings.content_main.addClass('active');
			app.settings.content_main.parent().parent().removeAttr('style');

			app.settings.content_main.removeAttr('style');
			app.settings.menu_item_click.removeClass('active-alternative');

			app.settings.content_menu.removeClass('menu-alternative');
			app.settings.content_main.parent().parent().css({ 'z-index' : 1 });
		});
	},
	/* function: active_menu_right
		Active menu right css active class add.
		
		parameter:
			void.
		
		return:
			void.
	*/
	active_menu_right: function() {
		//load menu right
		$('.btn-dummy').off('click').on('click', function() {
			if(!app.settings.content_main.parent().parent().hasClass('active')) {
				app.settings.content_main.parent().parent().addClass('active');
				app.settings.content_menu_right.addClass('active');
			} else {
				app.settings.content_main.parent().parent().removeClass('active');
				app.settings.content_menu_right.removeClass('active');
			}
		});
	},
	/* function: load_bar
		Bar info loading.
		
		parameter:
			void.
		
		return:
			void.
	*/
	load_bar: function() {
	},
	/* function: animate_in_menu
	*/
	animate_in_menu: function() {
		setTimeout(function() {
			$.each($('#menu').find('li'), function(key, value) {
				setTimeout(function() {
					$(value).removeClass('init');
				}, key * 100);
			});
		}, 200);
	},
    /* function: animation_content
		Animations basic.
		
		parameters:
			array_elements - 
			array_elements_sec - 
			type_animation - 
			element - 
		
		return:
			void.
    */
	animation_content: function(array_elements, array_elements_sec, type_animation, element) {
		switch(type_animation) {
            /* loading animations items list listeners.
             * Event callback menu animation and animation array up. */
			case 1:
				var element_heigth = $('div.content-menu ul > li').height();
				
				if(array_elements[0] != null) {
					$.each(array_elements, function(key, value) {
						value.item.delay(50 * key).css({ 'top' : -(element_heigth * (key + 1)), 'opacity':0 });
						
						if(key == (array_elements.length-1)) {
							$.each(array_elements_sec, function(key_sec, value_sec) {
								$('#menu').on('transitionend webkitTransitionEnd oTransitionEnd otransitionend', function() {
									if(key_sec == (array_elements_sec.length - 1)) {
										$(value_sec).delay(50 * key_sec).css({ 'top': -(element_heigth * (key_sec))});
									} else {
										if($(value_sec).attr('id') != 1) {
											$(value_sec).delay(50 * key_sec).css({ 'top': -(element_heigth * (key_sec + 1)) });
										}
									}
									
									$('#menu').off('transitionend webkitTransitionEnd oTransitionEnd otransitionend');
								});
							});
						}
					});
				} else {
					$.each(array_elements_sec, function(key, value) {
						if(key == (array_elements_sec.length - 1)) {
							$(value).delay(20 * key).css({ 'top': -(element_heigth * (key)) });
						} else {
							$(value).delay(20 * key).css({ 'top': -(element_heigth * (key + 1)) });
						}
					});
				}

				//load content
				app.load_content(element);
				
				console.log('animation 1');
			break;
			/* return menu items list.
			 * Event return to menu main. */
			case 2:
				//remove height
				$('#menu').removeClass('min');
				$('#menu').find('li').removeClass('active');
				
				app.settings.content_main.parent().parent().removeClass('content');
				app.settings.content_main.parent().parent().removeClass('procedure');
				
				$.each(array_elements.get(), function(key, value) {
					$(value).delay(50 * key).removeAttr('style');
					
					// create event listener menu item
					app.menu_link($(value));
				});
				
				console.log('animation 2');
			break;
			/* created and animate items and listener event.
			 * */
			case 3:
				var color_main = '', color_sec = '';

				app.settings.content_main.find('ul').empty();
				app.settings.content_main.removeAttr('style');
				app.settings.content_main.addClass('active');
				
				app.settings.content_main.parent().parent().addClass('content');
				
			    var categoryContent = EndoscopyNow.categories[$(element).attr('id')];
                if (categoryContent) {
					$.each(categoryContent.procedures, function(key_item, key_value) {
						app.procedure_method(key_item, key_value, categoryContent.css_style, categoryContent.color_icons);

						if(key_value.order == Object.keys(categoryContent.procedures).length-1) {
							setTimeout(function() {
								$('#menu').addClass('min');
							}, 1000);
						}
					});
						
					$('.content.active').scrollTop = 0;
						
					//color icons
					color_main = categoryContent.css_style; color_sec = categoryContent.color_icons;
						
					//apply event listener click
					app.content_items_listener(element);                    
                }

				
				//apply color UI and event listener back
				app.ui_prev(color_main, color_sec, element);
				app.settings.content_menu.addClass('min');
				
				console.log('animation 3');
			break;
			case 4:
				app.settings.content_main.parent().parent().css({ 'z-index' : 0 });
				
				console.log('animation 4');
			break;
			case 5:
				$('header').removeClass('in');
				
				//carga de content
				app.settings.content_main.removeClass('active');
				app.settings.content_main.parent().parent().css({ 'top':101,'z-index':2 });
				
				$('.dummy').addClass('active');
				$('.content-main').addClass('menu-alternative');
				app.settings.menu_item_click.addClass('active-alternative');
				
				app.settings.content_main.parent().parent().removeClass('content');
				app.settings.content_main.parent().parent().removeClass('procedure');
				
				$('.content-ui-prev').addClass('active');
				$('.content-ui-prev').parent().parent().addClass('prev-ui');
				
				app.scroll_thumbs();
				
				console.log('animation 5');
			break;
            case 6:
            	$('header').removeClass('in');
				app.scroll_thumbs();
				
				//carga de content
				
				app.settings.content_main.removeClass('active');
				$('.content-ui-prev').removeClass('active');
				
				app.settings.content_main.parent().parent().removeClass('content');
				app.settings.content_main.parent().parent().removeClass('prev-ui');
				
				$('.content-procedure').addClass('active');
				$('.content-procedure').parent().parent().addClass('procedure');
				
				app.settings.content_main.parent().parent().css({ 'top':101,'z-index':2 });
				
				$('.dummy').addClass('active');
				$('.content-main').addClass('menu-alternative');
				app.settings.menu_item_click.addClass('active-alternative');
				
				
				console.log('animation 6');
            break;
		}
	},
	/* function: scroll_thumbs
		Scroll container.
		
		parameter:
			void.
		
		return:
			void.
	*/
	scroll_thumbs: function() {
		//videos
        var elements_totals = $('.thumbnails-videos > ul').find('li');
		
        var width_content = app.remove_caracters($('body').css('width'), 'px') / 3;
		$.each(elements_totals, function(key, value) {
			$(value).css({ 'width': width_content });
		});
		
        $('.thumbnails-videos > ul').css('width', width_content * elements_totals.length);
		
		//guidelines
		var elements_totals = $('.thumbnails-guidelines > ul').find('li');
		
        var width_content = app.remove_caracters($('body').css('width'), 'px') / 3;
		$.each(elements_totals, function(key, value) {
			$(value).css({ 'width': width_content });
		});
		
        $('.thumbnails-guidelines > ul').css('width', width_content * elements_totals.length);
    },
    /* function: remove_caracters
        Remove caracters for string.
        
        parameters:
            string_remove - String for remove.
            caracters - String caracters for delete.
        
        return:
            string_remove - function replace return.
    */
    remove_caracters: function(string_remove, caracters) {
        return string_remove.replace(caracters, '');
    }
};


// Instance app
$(function() {
	myScope.init();
});