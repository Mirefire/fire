import db from '@/assets/js/DataStore';
import axios from 'axios'

const search = {
  state:{
    result:{
      img:[],
      doc:[],
      vf:[]
    },
    type:"",
    currentDetail:{

    }
  },

  mutations:{
    CHANGE_SEARCH_TYPE:(state, item) => {
      state.type = item;
    },
    REMOVE_HISTORY_KEY:(state, item) => {
      state.historyKey.length = 0;
    },
    ADD_RESULT:(state,result) => {
      state.result = result;
    },
    SET_CURRENT_DETAIL:(state, item) => {
      state.currentDetail = item;
    }
  },

  actions:{
    search(context, searchParam){
      // axios.get("/military/search?context="+searchParam.context+"&type="+searchParam.type)
      //   .then(function(response){
      //     context.commit('ADD_RESULT', response.data);
      //   }).catch(function(){
      //
      //   });

      let doc = [
        "{\"Keyword\":\"中国,<span style=\\\\\\\"color:red\\\\\\\">军队</span>,军事合作,十九大\",\"Summary\":\"国际在线消息（记者 杨琼、李晋）：中国军队近年来的发展备受瞩目，改革力度空前，“国际能见度”越来越高。在十九大新闻中心22日组织的集体采访中，与中外记者见面的四位来自军队的十九大代表认为，全方位的国际军事合作新格局已经逐渐建立起来。作为军人，他们表示，将不断提高打赢的本领，为世界提供更多的公共安全产品。\",\"updateTime\":\"2017-10-23T16:20:50.845\",\"tag\":[\"发展\",\"改革\"],\"source\":\"十九大新闻中心10月22日晚举行主题为“中国特色强军之路迈出坚定步伐”的党代表集体采访。李晋摄\\n国际在线消息（记者 杨琼、李晋）：中国军队近年来的发展备受瞩目，改革力度空前，“国际能见度”越来越高。在十九大新闻中心22日组织的集体采访中，与中外记者见面的四位来自军队的十九大代表认为，全方位的国际军事合作新格局已经逐渐建立起来。作为军人，他们表示，将不断提高打赢的本领，为世界提供更多的公共安全产品。\\n“感谢中国，感谢中国海军，孩子长大后我一定告诉他是中国人带他来到了这个世界。”\\n这是一位名叫拉玛图的塞拉利昂母亲的感言。今年9月，临产的拉玛图腹中胎儿有生命危险，被紧急转移到正在塞拉利昂提供医疗服务的中国海军和平方舟医院船上，经过中国军医的救治，孩子得以顺利降生，父母给他取名为“和平”。\\n中国军队“朋友圈”越来越大 全方位国际军事合作新格局已建立\\n中央军委国际军事合作办公室的十九大代表刘芳 李晋摄\\n这仅仅是中国军队“感动世界”的一个小小片段。过去五年来，中国军队的“朋友圈”越来越大，为国际社会提供了更多的公共安全产品。十九大代表、中央军委国际军事合作办公室参谋刘芳认为，一个全方位的国际军事合作新格局已经逐渐建立起来。在回答中国国际广播电台记者提问时，她说：“我们认真地履行大国义务，承担大国责任，始终是联合国维和事业的积极支持者和参与者。另外一方面，我们致力于参加海外的灾难救援，在菲律宾台风灾害、马航飞机失联之后的搜救行动，以及尼泊尔地震等等这些国际救援行动当中，都能发现中国军人的身影。还有海外护航行动，为6300多艘中外船只提供了国际护航保障。”\\n实际上，中国军队能够展现大国担当，要得益于自身实力的强大。过去五年，中国国防和军队改革取得了历史性突破，中国军队加强练兵备战，有效遂行海上维权、反恐维稳、抢险救灾、国际维和、亚丁湾护航、人道主义救援等重大任务，武器装备加快发展，军事斗争准备取得重大进展。军队在中国特色强军之路上迈出坚定步伐。\\n中国军队“朋友圈”越来越大 全方位国际军事合作新格局已建立\\n十九大代表、空军航空兵某团团长刘锐 李晋摄\\n十九大代表、空军航空兵某团团长刘锐感受到了五年来多方面的变化。这位曾多次驾驶战机参加远海远洋训练的轰炸机特级飞行员说：“从训练的频次来看，从最初的一年四次，到现在一个月多次。从机型来看，从最初的单一机型，到现在我们和其他机型进行体系训练，像战斗机、空中加油机、预警机、侦察机等等。从训练方向上来看，从最初的飞越巴士海峡、飞越宫古海峡到现在一次性飞越两个海峡。可以说，现在我们的远海远洋训练已经常态化、体系化和实战化，目的就是提高我们的打赢本领，让我们更好地履行军人的使命和责任。”\",\"id\":\"AV9WRWyOKyQjnElrV-d2\",\"r_type\":\"doc\",\"url\":\"http://news.163.com/17/1023/02/D1D9TOL100018AOQ.html\",\"desc\":\"中国军队“朋友圈”越来越大 全方位国际军事合作新格局已建立\"}",
        "{\"Keyword\":\"<span style=\\\\\\\"color:red\\\\\\\">军队</span>\",\"Summary\":\"国际在线消息（记者 杨琼、李晋）：中国军队近年来的发展备受瞩目，改革力度空前，“国际能见度”越来越高。在十九大新闻中心22日组织的集体采访中，与中外记者见面的四位来自军队的十九大代表认为，全方位的国际军事合作新格局已经逐渐建立起来。作为军人，他们表示，将不断提高打赢的本领，为世界提供更多的公共安全产品。\",\"updateTime\":\"2017-10-23T16:20:50.845\",\"tag\":[\"发展\",\"改革\"],\"source\":\"十九大新闻中心10月22日晚举行主题为“中国特色强军之路迈出坚定步伐”的党代表集体采访。李晋摄\\n国际在线消息（记者 杨琼、李晋）：中国军队近年来的发展备受瞩目，改革力度空前，“国际能见度”越来越高。在十九大新闻中心22日组织的集体采访中，与中外记者见面的四位来自军队的十九大代表认为，全方位的国际军事合作新格局已经逐渐建立起来。作为军人，他们表示，将不断提高打赢的本领，为世界提供更多的公共安全产品。\\n“感谢中国，感谢中国海军，孩子长大后我一定告诉他是中国人带他来到了这个世界。”\\n这是一位名叫拉玛图的塞拉利昂母亲的感言。今年9月，临产的拉玛图腹中胎儿有生命危险，被紧急转移到正在塞拉利昂提供医疗服务的中国海军和平方舟医院船上，经过中国军医的救治，孩子得以顺利降生，父母给他取名为“和平”。\\n中国军队“朋友圈”越来越大 全方位国际军事合作新格局已建立\\n中央军委国际军事合作办公室的十九大代表刘芳 李晋摄\\n这仅仅是中国军队“感动世界”的一个小小片段。过去五年来，中国军队的“朋友圈”越来越大，为国际社会提供了更多的公共安全产品。十九大代表、中央军委国际军事合作办公室参谋刘芳认为，一个全方位的国际军事合作新格局已经逐渐建立起来。在回答中国国际广播电台记者提问时，她说：“我们认真地履行大国义务，承担大国责任，始终是联合国维和事业的积极支持者和参与者。另外一方面，我们致力于参加海外的灾难救援，在菲律宾台风灾害、马航飞机失联之后的搜救行动，以及尼泊尔地震等等这些国际救援行动当中，都能发现中国军人的身影。还有海外护航行动，为6300多艘中外船只提供了国际护航保障。”\\n实际上，中国军队能够展现大国担当，要得益于自身实力的强大。过去五年，中国国防和军队改革取得了历史性突破，中国军队加强练兵备战，有效遂行海上维权、反恐维稳、抢险救灾、国际维和、亚丁湾护航、人道主义救援等重大任务，武器装备加快发展，军事斗争准备取得重大进展。军队在中国特色强军之路上迈出坚定步伐。\\n中国军队“朋友圈”越来越大 全方位国际军事合作新格局已建立\\n十九大代表、空军航空兵某团团长刘锐 李晋摄\\n十九大代表、空军航空兵某团团长刘锐感受到了五年来多方面的变化。这位曾多次驾驶战机参加远海远洋训练的轰炸机特级飞行员说：“从训练的频次来看，从最初的一年四次，到现在一个月多次。从机型来看，从最初的单一机型，到现在我们和其他机型进行体系训练，像战斗机、空中加油机、预警机、侦察机等等。从训练方向上来看，从最初的飞越巴士海峡、飞越宫古海峡到现在一次性飞越两个海峡。可以说，现在我们的远海远洋训练已经常态化、体系化和实战化，目的就是提高我们的打赢本领，让我们更好地履行军人的使命和责任。”\",\"id\":\"AV9S2hSlKyQjnElrV-dw\",\"r_type\":\"doc\",\"url\":\"http://news.163.com/17/1023/02/D1D9TOL100018AOQ.html\",\"desc\":\"中国军队“朋友圈”越来越大 全方位国际军事合作新格局已建立\"}"
      ];
      let vf = [
        "{\"summary\":\"99A已经开到天安门前遛弯了，训练场上，官兵们可着劲儿“折腾”老版99。正面射击、侧向射击、倒向射击，在时速20公里以上的行进状态下，车组成员反复锤炼技能、培养默契，以复杂的实战环境为标准，时刻准备着！\",\"duration\":151,\"updateTime\":\"2017-10-23T16:10:05.869\",\"id\":\"AV9S2hTkKyQjnElrV-dy\",\"title\":\"沈阳军区：主战坦克多种射姿秀绝技<span style=\\\\\\\"color:red\\\\\\\">军队</span>\",\"url\":\"http://vv.chinamil.com.cn/asset/category3/2015/09/16/asset_203882.mp4\",\"r_type\":\"vf\"}",
        "{\"summary\":\"99A已经开到天安门前遛弯了，训练场上，官兵们可着劲儿“折腾”老版99。正面射击、侧向射击、倒向射击，在时速20公里以上的行进状态下，车组成员反复锤炼技能、培养默契，以复杂的实战环境为标准，时刻准备着！\",\"duration\":151,\"updateTime\":\"2017-10-23T16:10:05.869\",\"id\":\"AV9S2hTkKyQjnElrV-dy\",\"title\":\"沈阳军区：主战坦克多种射姿秀绝技<span style=\\\\\\\"color:red\\\\\\\">军队</span>\",\"url\":\"http://vv.chinamil.com.cn/asset/category3/2015/09/16/asset_203882.mp4\",\"r_type\":\"vf\"}",
        "{\"summary\":\"99A已经开到天安门前遛弯了，训练场上，官兵们可着劲儿“折腾”老版99。正面射击、侧向射击、倒向射击，在时速20公里以上的行进状态下，车组成员反复锤炼技能、培养默契，以复杂的实战环境为标准，时刻准备着！\",\"duration\":151,\"updateTime\":\"2017-10-23T16:10:05.869\",\"id\":\"AV9S2hTkKyQjnElrV-dy\",\"title\":\"沈阳军区：主战坦克多种射姿秀绝技<span style=\\\\\\\"color:red\\\\\\\">军队</span>\",\"url\":\"http://vv.chinamil.com.cn/asset/category3/2015/09/16/asset_203882.mp4\",\"r_type\":\"vf\"}",
        "{\"summary\":\"99A已经开到天安门前遛弯了，训练场上，官兵们可着劲儿“折腾”老版99。正面射击、侧向射击、倒向射击，在时速20公里以上的行进状态下，车组成员反复锤炼技能、培养默契，以复杂的实战环境为标准，时刻准备着！\",\"duration\":151,\"updateTime\":\"2017-10-23T16:10:05.869\",\"id\":\"AV9S2hTkKyQjnElrV-dy\",\"title\":\"沈阳军区：主战坦克多种射姿秀绝技<span style=\\\\\\\"color:red\\\\\\\">军队</span>\",\"url\":\"http://vv.chinamil.com.cn/asset/category3/2015/09/16/asset_203882.mp4\",\"r_type\":\"vf\"}",
        "{\"summary\":\"99A已经开到天安门前遛弯了，训练场上，官兵们可着劲儿“折腾”老版99。正面射击、侧向射击、倒向射击，在时速20公里以上的行进状态下，车组成员反复锤炼技能、培养默契，以复杂的实战环境为标准，时刻准备着！\",\"duration\":151,\"updateTime\":\"2017-10-23T16:10:05.869\",\"id\":\"AV9S2hTkKyQjnElrV-dy\",\"title\":\"沈阳军区：主战坦克多种射姿秀绝技<span style=\\\\\\\"color:red\\\\\\\">军队</span>\",\"url\":\"http://vv.chinamil.com.cn/asset/category3/2015/09/16/asset_203882.mp4\",\"r_type\":\"vf\"}"
      ];
      let img = [
        "{\"updateTime\":\"2017-10-23T16:19:38.816\",\"id\":\"AV9S2hTKKyQjnElrV-dx\",\"title\":\"99式主战坦克<span style=\\\\\\\"color:red\\\\\\\">军队</span>\",\"r_type\":\"img\",\"url\":\"http://news.sznews.com/images/attachement/jpg/site3/20140731/4437e641f08815445f2543.jpg\"}",
        "{\"updateTime\":\"2017-10-23T16:19:38.816\",\"id\":\"AV9S2hTKKyQjnElrV-dx\",\"title\":\"99式主战坦克<span style=\\\\\\\"color:red\\\\\\\">军队</span>\",\"r_type\":\"img\",\"url\":\"http://news.sznews.com/images/attachement/jpg/site3/20140731/4437e641f08815445f2543.jpg\"}",
        "{\"updateTime\":\"2017-10-23T16:19:38.816\",\"id\":\"AV9S2hTKKyQjnElrV-dx\",\"title\":\"99式主战坦克<span style=\\\\\\\"color:red\\\\\\\">军队</span>\",\"r_type\":\"img\",\"url\":\"http://news.sznews.com/images/attachement/jpg/site3/20140731/4437e641f08815445f2543.jpg\"}",
        "{\"updateTime\":\"2017-10-23T16:19:38.816\",\"id\":\"AV9S2hTKKyQjnElrV-dx\",\"title\":\"99式主战坦克<span style=\\\\\\\"color:red\\\\\\\">军队</span>\",\"r_type\":\"img\",\"url\":\"http://news.sznews.com/images/attachement/jpg/site3/20140731/4437e641f08815445f2543.jpg\"}",
        "{\"updateTime\":\"2017-10-23T16:19:38.816\",\"id\":\"AV9S2hTKKyQjnElrV-dx\",\"title\":\"99式主战坦克<span style=\\\\\\\"color:red\\\\\\\">军队</span>\",\"r_type\":\"img\",\"url\":\"http://news.sznews.com/images/attachement/jpg/site3/20140731/4437e641f08815445f2543.jpg\"}",
        "{\"updateTime\":\"2017-10-23T16:19:38.816\",\"id\":\"AV9S2hTKKyQjnElrV-dx\",\"title\":\"99式主战坦克<span style=\\\\\\\"color:red\\\\\\\">军队</span>\",\"r_type\":\"img\",\"url\":\"http://news.sznews.com/images/attachement/jpg/site3/20140731/4437e641f08815445f2543.jpg\"}",
        "{\"updateTime\":\"2017-10-23T16:19:38.816\",\"id\":\"AV9S2hTKKyQjnElrV-dx\",\"title\":\"99式主战坦克<span style=\\\\\\\"color:red\\\\\\\">军队</span>\",\"r_type\":\"img\",\"url\":\"http://news.sznews.com/images/attachement/jpg/site3/20140731/4437e641f08815445f2543.jpg\"}",
        "{\"updateTime\":\"2017-10-23T16:19:38.816\",\"id\":\"AV9S2hTKKyQjnElrV-dx\",\"title\":\"99式主战坦克<span style=\\\\\\\"color:red\\\\\\\">军队</span>\",\"r_type\":\"img\",\"url\":\"http://news.sznews.com/images/attachement/jpg/site3/20140731/4437e641f08815445f2543.jpg\"}",
        "{\"updateTime\":\"2017-10-23T16:19:38.816\",\"id\":\"AV9S2hTKKyQjnElrV-dx\",\"title\":\"99式主战坦克<span style=\\\\\\\"color:red\\\\\\\">军队</span>\",\"r_type\":\"img\",\"url\":\"http://news.sznews.com/images/attachement/jpg/site3/20140731/4437e641f08815445f2543.jpg\"}",
        "{\"updateTime\":\"2017-10-23T16:19:38.816\",\"id\":\"AV9S2hTKKyQjnElrV-dx\",\"title\":\"99式主战坦克<span style=\\\\\\\"color:red\\\\\\\">军队</span>\",\"r_type\":\"img\",\"url\":\"http://news.sznews.com/images/attachement/jpg/site3/20140731/4437e641f08815445f2543.jpg\"}",
        "{\"updateTime\":\"2017-10-23T16:19:38.816\",\"id\":\"AV9S2hTKKyQjnElrV-dx\",\"title\":\"99式主战坦克<span style=\\\\\\\"color:red\\\\\\\">军队</span>\",\"r_type\":\"img\",\"url\":\"http://news.sznews.com/images/attachement/jpg/site3/20140731/4437e641f08815445f2543.jpg\"}"
      ];
      let data = {
        doc:[],
        img:[],
        vf:[]
      };
      doc.forEach((item, index) =>{
        data.doc.push(JSON.parse(item));
      });
      img.forEach((item, index) =>{
        data.img.push(JSON.parse(item));
      });
      vf.forEach((item, index) =>{
        data.vf.push(JSON.parse(item));
      });
      context.commit('ADD_RESULT', data);
    },
  }
};

export default search;