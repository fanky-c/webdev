require(['jQuery', 'artTemplate','fastclick','lazyload','jsonp','reportPhoneEvent2'],function ($,template,attachFastClick,lazyload) {
    //fackclick
    $(function(){
    	attachFastClick.attach(document.body);   
    });

     
     app();

      /**
       * [render 页面入口]
       * @return {[type]} [description]
       */
      function app(){
           hotNewRender();
           listRender();
      }


	  /**
	   * [hotNewRender 最热战报]
	   * @return {[type]} [description]
	   */
	  function hotNewRender(){
	  	  var url = 'http://yue.yy.com/yyue/topicMsg/queryWithCount?topicId=99&count=1&from=SYzhouxing';
	  	  $.ajax({
		        type: 'GET',
		        url: url,
		        dataType:'jsonp',
		        callback: 'jsonp1',
		        error: function(err){
		            console.log(err);
		        },
		        success: function(json){
		        	    var data = json || {};
		        	    $('#hotNewsTxt').attr('href',data.list[0]['messageUrl']).text(data.list[0]['msgTitle'])
                        
		        }	  	  	  
	  	  })
	  }


    //千分位 
    template.helper('milliFormat',function(num){
            if(!num){
                  return "0";
            }
            return num.toString().replace(/(?=(?!^)(\d{3})+$)/g, ',');
    });

      /**
       * [listRender 榜单]
       * @return {[type]} [description]
       */
	  function listRender(){
           var obj = $('.ui-toggeBtn');
           
           renderWeekList();

           obj.on('click','li',function(){
           	      var idx = ($(this).index() == 0 ? 0 : -1);
           	      //if($(this).hasClass('active')) return;
           	      $(this).addClass('active').siblings('li').removeClass('active');
                  renderWeekList({
                     week: idx   
                  });

           });
           

          //渲染模板 
    		  function renderWeekList(opts){
    		  	  var opt = $.extend({
    	                   week: 0 	  
    	                },opts || {});
    	          var week = opt.week;
    	          var requrl = 'http://api.ys.m.yy.com/api/public/weekStar/PQueryWeekStartRankReq.json?data={week_flag:'+ week +',extData:{}}&callback=weekstart';
    	                       
                $.jsonp({
    	                type: 'GET',
    	                url: requrl,
    	                dataType:'jsonp',
    	                callback: 'weekstart',
                      cache: true,
    	                error: function(err){
    	                    console.log(err);
    	                },
    	                success: function(rs){
    	                    if(!rs || rs.result == 1){
    	                        return;
    	                    }
    	                    var gRankMod = $('#g-rank-mod');
    	                    var rankData = {
    	                          rank_info_vec:  rs.rank_info_vec || [],
    	                          defaults:{
                                       img :'http://act.m.yystatic.com/act/images/default_grey_yy.png'
    	                          }
    	                    };
  
                            /*
                                下面全部是容错处理，写那么多循环代码影响性能，
                                其实我也不愿意容错，但是和服务器那边合作那么久，
                                他们给的数据不能绝对相信。
                             */
                            var _data = rs.rank_info_vec; //json下发列表数据
                            var max_list_len = 7;  //默认显示天数据
                            var max_rank_len = 3;  //默认显示前三名

                      
                            if(_data.length < max_list_len){
                            	  var lenNum = _data.length;
                                  for(var i=0; i<(max_list_len - lenNum); ++i){
                                       rankData.rank_info_vec.push({});   
                                  } 
                            };

                            for(var i=0; i<rankData.rank_info_vec.length; ++i){
                                if(!rankData.rank_info_vec[i]['top_fan_vec']){
                                     rankData.rank_info_vec[i]['top_fan_vec'] = [];
                                }   
                            }

                            for(var i=0; i<rankData.rank_info_vec.length; ++i){
                                if(!rankData.rank_info_vec[i]['top_anchor_vec']){
                                     rankData.rank_info_vec[i]['top_anchor_vec'] = [];
                                }   
                            }

                            for(var i=0; i<rankData.rank_info_vec.length; ++i){
                                if(!rankData.rank_info_vec[i]['gift_info_map']){
                                     rankData.rank_info_vec[i]['gift_info_map'] = [];
                                }   
                            }                        

                            
                            for(var i=0; i<rankData.rank_info_vec.length; ++i){
                                 if(rankData.rank_info_vec[i]['top_fan_vec'].length < max_rank_len){
                                    var lenNum = rankData.rank_info_vec[i]['top_fan_vec'].length;
                                    for(var j=0; j<(max_rank_len - lenNum); ++j){
                                           rankData.rank_info_vec[i]['top_fan_vec'].push({});
                                    }        
                                 }
                            }

                            for(var i=0; i<rankData.rank_info_vec.length; ++i){
                                 if(rankData.rank_info_vec[i]['top_anchor_vec'].length < max_rank_len){
                                    var lenNum = rankData.rank_info_vec[i]['top_anchor_vec'].length;
                                    for(var j=0; j<(max_rank_len - lenNum); ++j){
                                           rankData.rank_info_vec[i]['top_anchor_vec'].push({});
                                    }        
                                 }
                            }                                                

                          //填充模板
    	                    gRankMod.html(template('rankWrap',rankData));
                          $("img.lazy").lazyload();

                          //点击头像跳转
                          $('#g-rank-mod').on('click','dl.u-rankList > dd',function(){
                                var uid = $(this).attr('data-uid') || 0,
                                    live = $(this).attr('data-live') || 0,
                                    topcid = $(this).attr('data-topcid') || 0,
                                    subcid = $(this).attr('data-subcid') || 0;
                                    gotoLivingRoom(live, topcid, subcid, uid);
                                    
                                    //统计点击主播头像埋点
                                    reportPhoneEvent2("10010853", "4", "0", 0);
                          })                 
    	                }
    	          });          
    		  }           
	  };
     


    /**
     * [gotoLivingRoom 跳转直播间、个人页面]
     * @param  {[type]} live   [description]
     * @param  {[type]} topCid [description]
     * @param  {[type]} subCid [description]
     * @param  {[type]} uid    [description]
     * @return {[type]}        [description]
     */
    function gotoLivingRoom(live,topCid,subCid,uid){
          if(parseInt(live) == 1){
                 if(parseInt(topCid)!=0 && parseInt(subCid)!=0){
                      YYMobile.joinLive(topCid,subCid);
                 }else if(uid && parseInt(uid) != 0){
                      YYMobile.gotoPersonalCenter(uid);
                 }
          }else{
            if(uid && parseInt(uid) != 0){
               YYMobile.gotoPersonalCenter(uid);
            }
          }
      
    };

})