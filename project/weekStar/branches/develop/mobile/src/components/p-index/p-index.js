require(['jQuery', 'artTemplate','swiper','jsonp','reportPhoneEvent2'], function($, template, swiper){        
    /**
     *   全局获取uid
     */
    var anchorUid = window.YYApiCore.invokeClientMethod('data', 'getChannelTopMicUid');
    //var anchorUid = 1611061186;  //联调时这个号有数据
     
    //入口
    renderAnchorStartRankDetail();
    renderAnchorsMedalList();

    /**
     * [renderAnchorStartRankDetail 主播个人信息和TA的周星礼物榜单]
     * @return {[type]} [description]
     */
    function renderAnchorStartRankDetail(){
            var reqUrl = 'http://api.ys.m.yy.com/api/public/weekStar/queryAnchorStartRankDetail.json?data={anchor_id:$anchorId}&callback=ranklist';    
            $.jsonp({
                type: 'GET',
                url: reqUrl.replace('$anchorId', anchorUid),
                dataType:'jsonp',
                callback: 'ranklist',
                cache: true,
                error: function(err){
                    console.log(err);
                },
                success: function(rs){
                    if(!rs || rs.result == 1){
                        return;
                    }
                    var
                        topGiftMap = rs.top_gift_map,
                        rankDetailVec = rs.rank_detail_vec,
                        anchorWrapper = $('.anchor-wrapper'),
                        startList = $('.start-list');

                    //处理分割
                    for(var i = 0; i < rankDetailVec.length; i++){
                        if(rankDetailVec[i].numb.length > 3){
                            rankDetailVec[i].numb = strSplit(rankDetailVec[i].numb);
                        }
                    }

                    if(topGiftMap.deviation_backward.length > 3){
                        topGiftMap.deviation_backward = strSplit(topGiftMap.deviation_backward);
                    }
                    if(topGiftMap.deviation_forward.length > 3){
                        topGiftMap.deviation_forward =strSplit(topGiftMap.deviation_forward);
                    }
                    if(topGiftMap.numb.length > 3){
                        topGiftMap.numb = strSplit(topGiftMap.numb);
                    }
                    if(topGiftMap.rank.length > 3){
                        topGiftMap.rank = strSplit(topGiftMap.rank);
                    }
                    
                    function strSplit(num){
                        return num.toString().split('').reverse().join('').replace(/(\w{3})/g, '$1,').split('').reverse().join('').replace(/^,/, "");
                    }
                    var anchorHtml = template('anchorInfo',topGiftMap),
                        weekHtml = template('startInfo',{data:rankDetailVec});
                    anchorWrapper.html(anchorHtml);
                    startList.html(weekHtml);

                    //处理文字滚动
                    var 
                        boxWidth = $('.anchor-left').width()-10,
                        nickWidth = $('.anchor-left .nick').width(),
                        round = Math.round(nickWidth/boxWidth);
                    if(nickWidth > boxWidth){
                        if(round >=1 && round <2){
                            $('.anchor-left .nick').addClass('slide1');
                        }else if(round >=2 && round <3){
                            $('.anchor-left .nick').addClass('slide2');
                        }else{
                            $('.anchor-left .nick').addClass('slide3');
                        }
                    }
                }
            });
    }

    /**
     * [renderAnchorsMedalList 主播勋章列表]
     * @return {[type]} [description]
     */
    function renderAnchorsMedalList(){
        var reqUrl = 'http://api.ys.m.yy.com/api/public/weekStar/PQueryAnchorsMedalListReq.json?data={anchor_id:$anchorId,extData:{}}&callback=medallist';
            $.jsonp({
                type: 'GET',
                url: reqUrl.replace('$anchorId', anchorUid),
                dataType:'jsonp',
                callback: 'medallist',
                cache: true,
                error: function(err){
                    console.log(err);
                },
                success: function(rs){
                    if(!rs || rs.result == 1){
                        return;
                    }
                    var mScroll = $('#m-scroll');
                    var medalData = {
                           medal_vec: rs.medal_vec || [],
                           newList:[]
                    };
                    var pos = 4;

                    for(var i=0; i<medalData.medal_vec.length; i+=pos){
                         medalData.newList.push(medalData.medal_vec.slice(i,i+pos))
                    }
                    mScroll.html(template('honorWrapper',medalData));
                    
                    //滑动
                    var swiper = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                        slidesPerView: 1,
                        paginationClickable: true,
                        spaceBetween: 30
                    });                                       
                }
            });

    }    
    

});