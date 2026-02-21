$(document).ready(function() {
	
	$('.product_carousel').slick({
	  dots: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 5,
	  slidesToScroll: 5,
	  responsive: [
		//{
//		  breakpoint: 940,
//		  settings: {
//			slidesToShow: 3,
//			slidesToScroll: 3,
//			infinite: true,
//			dots: true
//		  }
		//},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
	});
	
	
});

// Tab js 

$(document).ready(function() {
	
    $("a[id ^='tab']").click(function() {
       var idselect = $(this).attr("id");
		var openn = idselect + "Detail";
		if( $("div[id*='Detail']").css("display","none"))
		{
		$("#"+openn).toggle();
		}
			
    });
	
	$(".list li").click(function(){
		$(".list li").removeClass('active');
		$(this).addClass('active')
		});
	
});

// custom dropdown
			function DropDown(el) {
				this.dd = el;
				this.placeholder = this.dd.children('span');
				this.opts = this.dd.find('ul.dropdown > li');
				this.val = '';
				this.index = -1;
				this.initEvents();
			}
			DropDown.prototype = {
				initEvents : function() {
					var obj = this;

					obj.dd.on('click', function(event){
						$(this).toggleClass('active');
						return false;
					});

					obj.opts.on('click',function(){
						var opt = $(this);
						obj.val = opt.text();
						obj.index = opt.index();
						obj.placeholder.text('' + obj.val);
					});
				},
				getValue : function() {
					return this.val;
				},
				getIndex : function() {
					return this.index;
				}
			}

			$(function() {

				var dd = new DropDown( $('#dd') );

				$(document).click(function() {
					// all dropdowns
					$('.customDropdown').removeClass('active');
				});

			});
	