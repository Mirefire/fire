<template>
    <div class="main-comtent">
       <div class="comtent-main">     
            <div class="runbank">
              <div class="bakcik" @click="Reback">
              <img src="/src/renderer/assets/iamges/back.png" alt=""><span>返回</span>
              </div>
            </div>
            <div class="mod18Box">
                <div class="mod18"> 
                    <span id="prevTop" class="btn prev"></span>
    
                    <span id="nextTop" class="btn next"></span>
 
                    <div id="picBox" class="picBox">

                        <ul class="cf">
                          <li>
                               <div class="relation-s">
                                </div>
    
                            </li>
    
                            <li>
    
                                <div class="relation-s">
    
                                </div>
    
                                <div class="bostmo">
    
                                    <span class="name-title">坦克时间大宋的红啊是的啊是的啦是</span> <span class="date-ime">上传日期:2015-10-20</span>
    
                                </div>
       
                            </li>
    
                            <li>   
                                <div class="relation-s">
    
                                </div>
    
                                <div class="bostmo">
    
                                    <span class="name-title">坦克时间大宋的红啊是的啊是的啦是</span> <span class="date-ime">上传日期:2015-10-20</span>
    
                                </div>
      
                            </li>
                            <li>
                           <div class="relation-s">
   
                                </div>
  
                            </li>
                            <li>
                                <div class="relation-s">
       
                                </div>
    
                            </li>
      
                            <li>
                             <div class="relation-s">
    
                                </div>
   
                            </li>
                     </ul>
  
                    </div>
                    <div class="listbox-input">
                       <div class="input-claso">
                    <input type="text"><button>搜索</button>
                  </div> 
                  
                   <div class="manin-tenet">
                      <span id="prev" class=" prev"></span>
                    <div id="listBox" class="listBox">
                    
                        <ul class="cf">
                         <li class="on"><i class="arr2"></i><img src="/src/renderer/assets/iamges/pic508348px.png" alt="心壁纸" /></li>
    
                            <li><i class="arr2"></i><img src="/src/renderer/assets/images/02.jpg" alt="logo设计" /></li>
    
                            <li><i class="arr2"></i><img src="/src/renderer/assets/images/03.jpg" alt="猎豹logo" /></li>
    
                            <li><i class="arr2"></i><img src="/src/renderer/assets/images/04.jpg" alt="CSS3按钮" /></li>
  
                            <li><i class="arr2"></i><img src="/src/renderer/assets/images/05.jpg" alt="CSS3相册" /></li>
 
                            <li><i class="arr2"></i><img src="/src/renderer/assets/images/02.jpg" alt="logo设计" /></li>
    
                            <li><i class="arr2"></i><img src="/src/renderer/assets/images/03.jpg" alt="猎豹logo" /></li>
                     </ul>
                    
                    </div>
                     <span id="next" class=" next"></span>
                    </div>
                     
                    </div>
                </div>
            </div>
          </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  methods: {
    Reback: function() {
      window.history.back();
    }
  },

  mounted: function() {
    function G(s) {
      return document.getElementById(s);
    }

    function getStyle(obj, attr) {
      if (obj.currentStyle) {
        return obj.currentStyle[attr];
      } else {
        return getComputedStyle(obj, false)[attr];
      }
    }

    function Animate(obj, json) {
      if (obj.timer) {
        clearInterval(obj.timer);
      }

      obj.timer = setInterval(function() {
        for (var attr in json) {
          var iCur = parseInt(getStyle(obj, attr));

          iCur = iCur || 0;

          var iSpeed = (json[attr] - iCur) / 5;

          iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

          obj.style[attr] = iCur + iSpeed + "px";

          if (iCur == json[attr]) {
            clearInterval(obj.timer);
          }
        }
      }, 30);
    }

    var oPic = G("picBox");

    var oList = G("listBox");

    var oPrev = G("prev");

    var oNext = G("next");

    var oPrevTop = G("prevTop");

    var oNextTop = G("nextTop");

    var oPicLi = oPic.getElementsByTagName("li");

    var oListLi = oList.getElementsByTagName("li");

    var len1 = oPicLi.length;

    var len2 = oListLi.length;

    var oPicUl = oPic.getElementsByTagName("ul")[0];

    var oListUl = oList.getElementsByTagName("ul")[0];

    var w1 = oPicLi[0].offsetWidth;

    var w2 = oListLi[0].offsetWidth;

    oPicUl.style.width = w1 * len1 + "px";

    oListUl.style.width = w2 * len2 + "px";

    var index = 0;

    var num = 5;

    var num2 = Math.ceil(num / 2);

    function Change() {
      Animate(oPicUl, {
        left: -index * w1
      });

      if (index < num2) {
        Animate(oListUl, {
          left: 0
        });
      } else if (index + num2 <= len2) {
        Animate(oListUl, {
          left: -(index - num2 + 1) * w2
        });
      } else {
        Animate(oListUl, {
          left: -(len2 - num) * w2
        });
      }

      for (var i = 0; i < len2; i++) {
        oListLi[i].className = "";

        if (i == index) {
          oListLi[i].className = "on";
        }
      }
    }

    oNextTop.onclick = oNext.onclick = function() {
      index++;

      index = index == len2 ? 0 : index;

      Change();
    };

    oPrevTop.onclick = oPrev.onclick = function() {
      index--;

      index = index == -1 ? len2 - 1 : index;

      Change();
    };

    for (var i = 0; i < len2; i++) {
      oListLi[i].index = i;

      oListLi[i].onclick = function() {
        index = this.index;

        Change();
      };
    }

    // 关系图逻辑

    var width = 900;

    var height = 500;

    var img_w = 54;

    var img_h = 54;

    var svg = d3
      .select(".relation-s")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    d3.json("/src/renderer/assets/js/relation.json", function(error, root) {
      if (error) {
        return console.log(error);
      }

      var nodesd = root.nodes; //第一数组(主要数据)
      var edgesd = root.edges; //第二数组(关系数据)
      var surog = []; //装第一个数组的index（标）
      var anrsde = []; //计算第一圈的的target数据（target等于index）
      var arr3 = [];//不显示的下标
      // var reslut = [];//装第一圈外联的target的值和个数
    
      var j = 0 ;
      //计算index个数
      for (let x = 0; x < nodesd.length; x++) {
        surog[x] = nodesd[x].id - 1;
      }
      
      //计算第一圈的的target个数
      for (let i = 0; i < edgesd.length; i++) {
        anrsde[i] = edgesd[i].target;
      }
    
  //  // 装第一圈外联的target的值和个数
  //    for (let i = 0; i < edgesd.length; i++) {
  //      if(edgesd[i].source==0){
  //         reslut[i] = edgesd[i].target;
  //      }    
  //    }

      //两个数组的差集
      function test(arr1, arr2) {
        for (var i = 0; i < arr1.length; i++) {
          var flag = true;
          for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) flag = false;
          }
          if (flag) {
            if (arr1[i] != 0) {
              arr3.push(arr1[i]);
            }
          }
        }
      }
      var lo = arr3.length;
      //求两个数组的差集
      test(surog, anrsde);
      //总数据中去掉除第一圈显示以外的数据，过滤不显示的数据
      nodesd.splice(arr3[0], arr3[lo]);
      // console.log(sourn);
      // console.log(arr3);
      // console.log(nodesd);

      var force = d3.layout
        .force()
        .nodes(root.nodes)
        .links(root.edges)
        .size([width, height])
        .linkDistance(140)
        .charge(-900)
        .start();

      var edges_line = svg
        .selectAll("line")
        .data(root.edges)
        .enter()
        .append("line")
        .style("stroke", "#ccc")
        .style("stroke-width", '0.0');

      var edges_text = svg
        .selectAll(".linetext")
        .data(root.edges)
        .enter()
        .append("text")
        .attr("class", "linetext")
        .attr("fill-opacity", "0.0")
        // .attr('stroke','#1895ff')
        .text(function(d) {
          return d.relation;  
        });

      var nodes_img = svg
        .selectAll("image")
        .data(root.nodes)
        .enter()
        .append("image")
        .attr('display','block')
        .attr("width", img_w)
        .attr("height", img_h)
        .attr("xlink:href", function(d) {
          return d.image;
        })
        
        .on("mouseover", function(d, i) {
          // 判断当前是否是中心
          if (d.index != 0 && i != 0) {
            // 获取当前下标
               edges_line.style("stroke-width",function (edge) {
                  if (edge.source === d || edge.target === d.index) {
                      return 1.0;
                    }
               }); 
            //  console.log(d);
          }
          // 显示连接线上的文字

          // if (d.source ==d.index) {
          //   var ds = edge.target;
          // }
          console.log(d.index);
          edges_text.style("fill-opacity", function(edge) {
            if (edge.source === d || edge.target === d) {
              return 1.0;
            }
          });
        })
        .on("click", function(d, i) {
          layer.open({
            type: 1,
            title: false,
            offset: "100px", // 具体配置参考：offset参数项
            area: ["554px", "560px"],
            content:
              '<div style="padding: 20px 80px;">' +
              '<div class="relation-img" style=" width: 100%;text-align: center;margin-top: 80px;margin-bottom:30px;">' +
              '<img src="' +
              d.image +
              '" height="120px" width="120px" style="border-radius: 50%;">' +
              "</div>" +
              '<div style="width:80%;margin:0 auto;color:#00001c;">' +
              '<span style="display: block;width:100%;line-height:25px;font-size:16px;">中午名:88坦克</span>' +
              '<span style="display: block;width:100%;line-height:25px;font-size:12px;">' +
              d.comtent +
              "</span>" +
              '<span style="display: block;width:100%;line-height:25px;font-size:12px;">前型:xxxx444444444444</span>' +
              '<span style="display: block;width:100%;line-height:25px;font-size:12px;">服务:19984444444</span>' +
              '<span style="display: block;width:100%;line-height:25px;font-size:12px;">类型:第三代44444444444</span>' +
              '<span style="display: block;width:100%;line-height:25px;font-size:12px;">研制单位：中国兵工厂4444</span>' +
              '<span style="display: block;width:100%;line-height:25px;font-size:12px;">制造单位：中国兵工厂44444444444</span>' +
              '<span style="display: block;width:100%;line-height:25px;font-size:12px;">装备部署：中国兵工厂44444444444444444444</span>' +
              "</div>" +
              "</div>",
            btn: false, // 按钮居中
            shade: 0, // 不显示遮罩
            yes: function() {
              layer.closeAll();
            }
          });
        })
        .on("mouseout", function(d, i) {
           edges_line.style("stroke-width",function (edge) {
                  if (edge.source === d || edge.target === d) {
                      return 0.0;
                    }
               }) ;
          // 隐去连接线上的文字

          edges_text.style("fill-opacity", function(edge) {
            if (edge.source === d || edge.target === d) {
              return 0.0;
            }
          });
        })
        .call(force.drag);

      var text_dx = -20;

      var text_dy = 20;

      var nodes_text = svg
        .selectAll(".nodetext")
        .data(root.nodes)
        .enter()
        .append("text")
        .attr("class", "nodetext")
        .attr("dx", text_dx)
        .attr("dy", text_dy)
        .text(function(d) {
          return d.name;
        });

      force.on("tick", function() {
        // 限制结点的边界

        root.nodes.forEach(function(d, i) {
          d.x = d.x - img_w / 2 < 0 ? img_w / 2 : d.x;

          d.x = d.x + img_w / 2 > width ? width - img_w / 2 : d.x;

          d.y = d.y - img_h / 2 < 0 ? img_h / 2 : d.y;

          d.y =
            d.y + img_h / 2 + text_dy > height
              ? height - img_h / 2 - text_dy
              : d.y;
        });

        // 更新连接线的位置

        edges_line.attr("x1", function(d) {
          return d.source.x;
        });

        edges_line.attr("y1", function(d) {
          return d.source.y;
        });

        edges_line.attr("x2", function(d) {
          return d.target.x;
        });

        edges_line.attr("y2", function(d) {
          return d.target.y;
        });

        // 更新连接线上文字的位置

        edges_text.attr("x", function(d) {
          return (d.source.x + d.target.x) / 2;
        });

        edges_text.attr("y", function(d) {
          return (d.source.y + d.target.y) / 2;
        });

        // 更新结点图片和文字

        nodes_img.attr("x", function(d) {
          return d.x - img_w / 2;
        });

        nodes_img.attr("y", function(d) {
          return d.y - img_h / 2;
        });

        nodes_text.attr("x", function(d) {
          return d.x;
        });

        nodes_text.attr("y", function(d) {
          return d.y + img_w / 2;
        });
      });
    });
  }
};
</script>
<style scoped>
.runbank {
  width: 100%;
  line-height: 20px;
}
.bakcik {
  margin-left: 100px;
  overflow: hidden;
  width: 60px;
}
.runbank img {
  vertical-align: top;
  float: left;
}
.runbank span {
  float: left;
  margin-left: 5px;
}
.img-detall-main {
}
.mod18Box {
  /* padding: 10px; */

  /* border: 1px solid #ccc; */

  background: #fff;

  /* box-shadow: 0px 1px 5px #cccccc; */
}

.mod18 {
  width: 100%;
  position: relative;
}

.mod18 .btn {
  /* position: absolute; */

  width: 15px;

  height: 10px;

  /* top: 630px; */

  cursor: pointer;

  z-index: 99;

  font-size: 50px;

  text-align: center;

  font-weight: bold;
}

.mod18 #prev {
  background: url("/src/renderer/assets/iamges/left-02.png") no-repeat;
  float: left;
  position: relative;
  /* left:0; */
  background-position: center;
  /* margin-right: 36px; */
  height: 60px;
  display: block;
  width: 15%;
  bottom: 0;
  cursor: pointer;
}

.mod18 #prevTop,
.mod18 #nextTop {
  top: 140px;

  width: 46px;

  height: 40px;

  text-align: center;
}

.mod18 #prevTop {
  /* background: url('/static/iamges/left-02.png')no-repeat; */

  background-position: center;

  background-size: 10px 18px;
}

.mod18 #nextTop {
  /* background: url('/static/iamges/right-02.png')no-repeat;

  background-position: center;

  background-size: 10px 18px; */
}

.mod18 #next {
  background: url("/src/renderer/assets/iamges/right-02.png") no-repeat;
  float: left;
  position: relative;
  /* right: 0px; */
  background-position: center;
  height: 60px;
  width: 15%;
  bottom: 0;
  display: block;
  cursor: pointer;
  /* margin-left: 36px; */
}

.mod18 li {
  float: left;
}

.mod18 .cf li {
  position: relative;

  color: #fff;
}

.mod18 .cf a {
  display: block;

  width: 800px;

  height: 500px;

  position: absolute;

  color: #fff;
}

.relation-s {
  width: 800px;
  padding: 10px;
  height: 500px;
}

.mod18 .cf li .bostmo {
  width: 100%;

  position: absolute;

  left: 0;

  bottom: 0;

  padding: 10px 10px;

  line-height: 22px;

  font-size: 12px;

  text-align: left;

  background: rgba(0, 0, 0, 0.6);

  filter: progid:DXImageTransform.Microsoft.gradient(
      GradientType=0,
      startColorstr="#60000000",
      endColorstr="#60000000"
    );
}

.mod18 .cf li .bostmo .name-title {
  float: left;
}

.mod18 .cf li .bostmo .date-ime {
  /* padding-right: 10px; */

  float: right;
}

.mod18 .picBox {
  width: 800px;

  height: 500px;

  margin: 0 auto;

  position: relative;

  overflow: hidden;
}

.mod18 .picBox ul {
  height: 400px;

  position: absolute;
}

.mod18 .picBox li {
  width: 800px;

  height: 400px;
}
.listbox-input {
  width: 100%;
  position: relative;
  line-height: 60px;
  margin-top: 50px;
  bottom: 20px;
  /* overflow: hidden; */
}
.input-claso {
  /* float: left; */
  position: absolute;
  /* left: 38px; */
  width: 25%;
  padding: 15px 0;
}
.input-claso input {
  /* margin-left: 36px; */
  width: 60%;
  height: 30px;
  border: 1px solid #1895ff;
  margin-left: 18%;
  float: left;
}
.input-claso button {
  width: 22%;
  height: 30px;
  line-height: 30px;
  border: 0;
  background: #1895ff;
  color: #fff;
  float: left;
}
.manin-tenet {
  position: absolute;
  left: 25%;
  width: 60%;
  height: 60px;
  line-height: 60px;
}
.mod18 .listBox {
  /* margin-top: 30px; */
  height: 60px;
  position: relative;
  bottom: 0;
  /* left: 15%; */
  float: left;

  /* left: 100px; */
  width: 70%;
  margin: 0 auto;
  overflow: hidden;
}

.mod18 .listBox ul {
  /* width: 900px !important; */

  height: 50px;

  line-height: 50px;

  position: absolute;
}

.mod18 .listBox li {
  width: 54px;

  padding-right: 2px;

  height: 52px;

  cursor: pointer;

  position: relative;
}

.mod18 .listBox li i {
  display: none;
}

.mod18 .listBox li a {
  display: block;

  width: 50px;

  height: 50px;
}

.mod18 .listBox li img {
  width: 50px;
  border-radius: 50%;
  height: 50px;
}

.mod18 .listBox .on img {
  width: 50px;

  height: 50px;

  border: 2px solid #ff6600;
}

.mod18 .listBox .on i {
  display: block;
}

.nodetext {
  font-size: 12px;

  font-family: SimSun;

  fill: #000000;
}

.linetext {
  font-size: 12px;

  font-family: SimSun;

  fill: #72b5ff;
}
</style>
