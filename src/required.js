		$(function(){
			$('.inds' + 'a').addClass('hidecont');
			$('.inds' + 'b').addClass('hidecont');
			$('.inds' + 'c').addClass('hidecont');
			$('.inds' + 'd').addClass('hidecont');
			$('.inds' + 'e').addClass('hidecont');
			$('.inds' + 'f').addClass('hidecont');
			$('.ess').addClass('hidecont');
			
			arp = ["解析力学", "電磁気学", "量子力学", "相対性理論", "生物物理", "統計力学", "固体物理学", "流体力学", "量子情報", "場の量子論", "量子光学", "宇宙論", "物理化学"];
			arm = ["数論", "可換代数", "フーリエ解析", "複素解析", "関数解析", "力学系", "位相幾何", "微分幾何", "結び目理論", "グラフ理論", "Lie群論", "論理学"];
			
			ar1 = [0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0 ];//解析力学
			ar2 = [0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 ];//電磁気学
			ar3 = [0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0 ];//量子力学
			ar4 = [0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0 ];//相対性理論
			ar5 = [0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0 ];//生物物理
			ar6 = [0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0 ];//統計力学
			ar7 = [0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0 ];//固体物理学
			ar8 = [0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0 ];//流体力学
			ar9 = [0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0 ];//量子情報
			ar10 = [0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0 ];//場の量子論
			ar11 = [0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0 ];//量子光学
			ar12 = [0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0 ];//宇宙論
			ar13 = [0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0 ];//物理化学
			//ここまで物理
			ar14 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0 ];//数論
			ar15 = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0 ];//可換代数
			ar16 = [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 ];//フーリエ解析
			ar17 = [0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0 ];//複素解析
			ar18 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0 ];//関数解析
			ar19 = [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0 ];//力学系
			ar20 = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0 ];//位相幾何
			ar21 = [0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0 ];//微分幾何
			ar22 = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0 ];//結び目理論
			ar23 = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0 ];//グラフ理論
			ar24 = [0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0 ];//Lie群論
			ar25 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0 ];//論理学

			/*
			
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 ];//集合・位相
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0 ];//群論・環論
			[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0 ];//Galois理論
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0 ];//圏論
			*/


			arall = [ar1, ar2, ar3, ar4, ar5, ar6, ar7, ar8, ar9, ar10, ar11, ar12, ar13, ar14, ar15, ar16, ar17, ar18, ar19, ar20 , ar21, ar22, ar23, ar24, ar25];
			
			arrm1 = 0;arrm2 = 0;arrm3 = 0;arrp1 = 0;arrp2 = 0;arrp3 = 0;
			var appbox = '';
			
			function checkboxcont(arrsm1, arrsm2, arrsm3, arrsp1, arrsp2, arrsp3){
			
				ar00 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		        $('.ess').addClass('hidecont');
		        
		        for(var ii = 0 ; ii < 24 ; ii++){
		        	ar00[ii] = arall[arrsm1 - 1][ii] + arall[arrsm2 - 1][ii] + arall[arrsm3 - 1][ii] + arall[arrsp1 - 1][ii] + arall[arrsp2 - 1][ii] + arall[arrsp3 - 1][ii];
		        	if((!(ar00[ii] == 0)) && (!($('.math1').val() == "")) && (!($('.math2').val() == "")) && (!($('.math3').val() == "")) && (!($('.phys1').val() == "")) && (!($('.phys2').val() == "")) && (!($('.phys3').val() == ""))  ){
		        		appbox = '.ess' + (ii + 1);
		        		$(appbox).removeClass('hidecont');
		        	}
				}
				
		    }
			
			$('.math1').change(function(){
		        $('.inds' + 'a').addClass('hidecont');
		        arrsm1 = $.inArray($('.math1').val(), arm) + 14;
		        arrsm2 = $.inArray($('.math2').val(), arm) + 14;
		        arrsm3 = $.inArray($('.math3').val(), arm) + 14;
		        arrsp1 = $.inArray($('.phys1').val(), arp) + 1;
		        arrsp2 = $.inArray($('.phys2').val(), arp) + 1;
		        arrsp3 = $.inArray($('.phys3').val(), arp) + 1;
				var math1rm = '.ind' + (arrsm1 - 13) + 'a';
		        $(math1rm).removeClass('hidecont');
		        checkboxcont(arrsm1, arrsm2, arrsm3, arrsp1, arrsp2, arrsp3);
		        
		    });
			$('.math2').change(function(){
		        $('.inds' + 'b').addClass('hidecont');
		        arrsm1 = $.inArray($('.math1').val(), arm) + 14;
		        arrsm2 = $.inArray($('.math2').val(), arm) + 14;
		        arrsm3 = $.inArray($('.math3').val(), arm) + 14;
		        arrsp1 = $.inArray($('.phys1').val(), arp) + 1;
		        arrsp2 = $.inArray($('.phys2').val(), arp) + 1;
		        arrsp3 = $.inArray($('.phys3').val(), arp) + 1;
				var math2rm = '.ind' + (arrsm2 - 13) + 'b';
		        $(math2rm).removeClass('hidecont');
		        checkboxcont(arrsm1, arrsm2, arrsm3, arrsp1, arrsp2, arrsp3);
		    });
			$('.math3').change(function(){
		        $('.inds' + 'c').addClass('hidecont');
		        arrsm1 = $.inArray($('.math1').val(), arm) + 14;
		        arrsm2 = $.inArray($('.math2').val(), arm) + 14;
		        arrsm3 = $.inArray($('.math3').val(), arm) + 14;
		        arrsp1 = $.inArray($('.phys1').val(), arp) + 1;
		        arrsp2 = $.inArray($('.phys2').val(), arp) + 1;
		        arrsp3 = $.inArray($('.phys3').val(), arp) + 1;
				var math3rm = '.ind' + (arrsm3 - 13) + 'c';
		        $(math3rm).removeClass('hidecont');
		        checkboxcont(arrsm1, arrsm2, arrsm3, arrsp1, arrsp2, arrsp3);
		    });
			$('.phys1').change(function(){
		        $('.inds' + 'd').addClass('hidecont');
		        arrsm1 = $.inArray($('.math1').val(), arm) + 14;
		        arrsm2 = $.inArray($('.math2').val(), arm) + 14;
		        arrsm3 = $.inArray($('.math3').val(), arm) + 14;
		        arrsp1 = $.inArray($('.phys1').val(), arp) + 1;
		        arrsp2 = $.inArray($('.phys2').val(), arp) + 1;
		        arrsp3 = $.inArray($('.phys3').val(), arp) + 1;
				var phys1rm = '.ind' + arrsp1 + 'd';
		        $(phys1rm).removeClass('hidecont');
		        checkboxcont(arrsm1, arrsm2, arrsm3, arrsp1, arrsp2, arrsp3);
		    });
			$('.phys2').change(function(){
		        $('.inds' + 'e').addClass('hidecont');
		        arrsm1 = $.inArray($('.math1').val(), arm) + 14;
		        arrsm2 = $.inArray($('.math2').val(), arm) + 14;
		        arrsm3 = $.inArray($('.math3').val(), arm) + 14;
		        arrsp1 = $.inArray($('.phys1').val(), arp) + 1;
		        arrsp2 = $.inArray($('.phys2').val(), arp) + 1;
		        arrsp3 = $.inArray($('.phys3').val(), arp) + 1;
				var phys2rm = '.ind' + arrsp2 + 'e';
		        $(phys2rm).removeClass('hidecont');
		        checkboxcont(arrsm1, arrsm2, arrsm3, arrsp1, arrsp2, arrsp3);
		    });
			$('.phys3').change(function(){
		        $('.inds' + 'f').addClass('hidecont');
		        arrsm1 = $.inArray($('.math1').val(), arm) + 14;
		        arrsm2 = $.inArray($('.math2').val(), arm) + 14;
				arrsm3 = $.inArray($('.math3').val(), arm) + 14;
		        arrsp1 = $.inArray($('.phys1').val(), arp) + 1;
		        arrsp2 = $.inArray($('.phys2').val(), arp) + 1;
		        arrsp3 = $.inArray($('.phys3').val(), arp) + 1;
				var phys3rm = '.ind' + arrsp3 + 'f';
		        $(phys3rm).removeClass('hidecont');
		        checkboxcont(arrsm1, arrsm2, arrsm3, arrsp1, arrsp2, arrsp3);
		    });
		})