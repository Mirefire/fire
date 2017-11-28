<template>
  <div class="main-comtent">
  
    <div class="comtent-main relation-s">
      <svg  width="900" height="600"></svg >
    </div>
  
    <div class=""></div>
  
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  methods: {},

  mounted: function() {
    var img_w = 54; //设置图片宽度
    var img_h = 54; //设置图片高度
    var text_dx = -20; //设置字体位子
    var text_dy = 20;
    var svg = d3.select("svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height");

    var simulation = d3
      .forceSimulation()
      .force(
        "link",
        d3
          .forceLink()
          .distance(function() {
            return 140;
          })
         
          .id(function(d) {
            return d.id;
          })
        // d3.distance(function () {
        //   return 140;
        // })
      )
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2));

    d3.json("/src/renderer/assets/js/relation1.json", function(error, graph) {
      if (error) throw error;
       var nodesd = graph.nodes; //第一数组(主要数据)
      var edgesd = graph.links; //第二数组(关系数据)
      var surog = []; //装第一个数组的index（标）
      var anrsde = []; //计算第一圈的的target数据（target等于index）
      var arr3 = [];//不显示的下标
      // var reslut = [];//装第一圈外联的target的值和个数
    
     let le = 0;
      //计算index个数
      for (let x = 0; x < nodesd.length; x++) {
        surog[x] = nodesd[x].id;
      }
      
      //计算第一圈的的target个数
      for (let i = 0; i < edgesd.length; i++) {
        anrsde[le] = edgesd[i].target;
        le++;
      }
    
  //  // 装第一圈外联的target的值和个数
  //    for (let i = 0; i < edgesd.length; i++) {
  //      if(edgesd[i].source==0){
  //         reslut[i] = edgesd[i].target;
  //      }    
  //    }

      //两个数组的差集
      function test(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
          var flag = true;
          for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) flag = false;
          }
          if (flag) {
            if (arr1[i] != 1) {
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
      console.log(surog);
      console.log(anrsde);
      console.log(arr3);

      console.log(nodesd);
      var link = svg
        .append("g")
        .style("stroke-width", 1)
        .style("stroke", "#ccc")
        .selectAll("line")
        .data(graph.links)
        .enter()
        .append("line");
       
      var nodes_text = svg
        .selectAll(".nodetext")
        .data(graph.nodes)
        .enter()
        .append("text")
        .attr("class", "nodetext")
        .attr("dx", text_dx)
        .attr("dy", text_dy)
        .text(function(d) {
          return d.name;
        });
         var edges_text = svg
        .selectAll(".linetext")
        .data(graph.links)
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
        .data(graph.nodes)
        .enter()
        .append("image")
        .attr("display", "block")
        .attr("width", img_w)
        .attr("height", img_h)
        .attr("xlink:href", function(d) {
          return d.image;
        })
        .on("mouseover", function(d, i) {
             edges_text.style("fill-opacity", function(edge) {
            if (edge.source === d || edge.target === d) {
              return 1.0;
            }
             })
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
           edges_text.style("fill-opacity", function(edge) {
            if (edge.source === d || edge.target === d) {
              return 0.0;
            }
           })
        })
        .call(
          d3
            .drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
        );
      // simulation.stop();
      simulation.nodes(graph.nodes).on("tick", ticked);

      simulation.force("link").links(graph.links);

      function ticked() {
        
        link.attr("x1", function(d) {
          return d.source.x;
        });

        link.attr("y1", function(d) {
          return d.source.y;
        });

        link.attr("x2", function(d) {
          return d.target.x;
        });

        link.attr("y2", function(d) {
          return d.target.y;
        });


        edges_text.attr("x", function(d) {
          return (d.source.x + d.target.x) / 2;
          });

        edges_text.attr("y", function(d) {
          return (d.source.y + d.target.y) / 2;
        });
        //图片出现的位子
        nodes_img.attr("x", function(d) {
          return d.x - img_w / 2;
        });

        nodes_img.attr("y", function(d) {
          return d.y - img_h / 2;
        });

        //名字出现的位置
        nodes_text.attr("x", function(d) {
          return d.x;
        });

        nodes_text.attr("y", function(d) {
          return d.y + img_w / 2;
        });
      }
    });

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    function distance() {
      return 140;
    }
    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }
};
</script>
<style scoped>
.relation-s {
  width: 900px;

  height: 600px;

  margin: 0 auto;
}
.relation-img {
  width: 100%;
  text-align: center;
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

  fill-opacity: 0;

  fill-rule: evenodd;
}
.links line {
  stroke: #aaa;
}

</style>
