
(function($){
	
	$(function(){
		$("#menu").on("click.code",function(){
			
			var el=$(".nav-collapse.collapse");
			var h;
			el.on("shown",function(){
				h=el.outerHeight();
				if(!$(".side-bar").hasClass("in"))
				{
				$(".side-bar").css({top:("+="+h)}).addClass("in");
				
				}
				console.log(h);
			});
			
			el.on("hide",function(){
				if($(".side-bar").hasClass("in"))
				{
				$(".side-bar").css({top:("-="+h)}).removeClass("in");
				}
				console.log(h);
			});
			
			
		});
		
		
		
		$(Size);
		$(window).resize(Size);
		
		function Size()
		{
			if($(window).width()>980){
				var wa=400;
				
				var w=$(".page-container-f").outerWidth();
				console.log(w);
				var x=w/wa;
				console.log(x);
				if(x<=2)
				{
					$(".accordion").addClass("full-w");
				}
				else{
					
					
					$(".accordion").removeClass("full-w");
					
						var marg=(w-parseInt(x)*wa)/(parseInt(x)*2);
						marg-=parseInt(x)*2;
						$(".accordion").css({"margin-left":marg,
											"margin-right":marg})			
					var ewrap=[];
					if($(".accordion").parent().hasClass("clearfix"))
						$(".accordion").unwrap();
					$(".accordion").each(function(i,o){
						
						if(i!=0 && i%2==0)
						{
							$(ewrap).wrapAll("<div class='clearfix'>");
							
							ewrap=[];
						}
						ewrap.push(o);
						
						
					});
					$(ewrap).wrapAll("<div class='clearfix'>");
					
					
				}
			}
		}
		
		
		
	});
	
})(jQuery);
