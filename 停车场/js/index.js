//左边饼状图部分
leftCentont();

function leftCentont() {
    let myChart = echarts.init(document.querySelector(".car-left-content-img"));


    console.log(myChart)
        //初始化 以后需要给这个图标设置配置项，包括图例，提示框，显示的数据内容等
    let option = {
            tooltip: [{
                formatter: "时长:{b}</br>总计:{c}</br>占比:{d}%"
            }],
            series: [{
                name: "车辆类型",
                type: "pie",
                radius: ['55%', '75%'],
                data: [{
                    value: 14.3,
                    name: '红旗'
                }, {
                    value: 25.5,
                    name: '奥迪'
                }, {
                    value: 30.21,
                    name: '大众'
                }, {
                    value: 23.18,
                    name: '奔驰'
                }, {
                    value: 11.77,
                    name: '法拉利'
                }, ],
                color: ['#fbff86', '#7dff89', '#1dd7ff', '#ab6eff', '#ff6f6f'],

            }],
        }
        //配置项设置完成后将配置项应用于我们的
    myChart.setOption(option);

}

//右边收费部分
rightContent()

function rightContent() {
    let myChart1 = echarts.init(document.querySelector(".right-content-l"));
    console.log(myChart1);
    let option = {
            legend: {
                data: [
                    "现金缴费",
                    "电子缴费",
                ],
                itemWidth: 6,
                bottom: 15,
                textStyle: {
                    color: "#ff6f6f"
                },
            },
            tooltip: [{
                formatter: "缴费类型:</br>{b}:{c}({d}%)"
            }],
            series: [{
                type: "pie",
                center: ['50%', '40%'],
                radius: ['40%', '60%'],
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontWeight: "bold",
                        },
                    },
                },

                data: [{
                    name: "现金缴费",
                    value: 35,
                    selected: true, //默认的选中状态
                }, {
                    value: 310,
                    name: "电子缴费",
                }, ],
                color: ['#fffbbe', '#ffbd3d'],


                labelLine: {
                    normal: {
                        show: false,
                    }
                }
            }],
        }
        // ----------------------------------------------------//
    let myChart2 = echarts.init(document.querySelector(".right-content-r"));
    console.log(myChart1);
    let options = {
        legend: {
            data: [
                "提前缴费",
                "出口缴费",
            ],
            itemWidth: 6,
            bottom: 15,
            textStyle: {
                color: "#ff6f6f"
            },
        },
        tooltip: [{
            formatter: "缴费情况:</br>{b}:{c}({d}%)"
        }],
        series: [{
            type: "pie",
            center: ['50%', '40%'],
            radius: ['40%', '60%'],
            label: {
                normal: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontWeight: "bold",
                    },
                },
            },

            data: [{
                name: "提前缴费",
                value: 120,
                selected: true,
            }, {
                value: 310,
                name: "出口缴费",
            }, ],
            color: ['#b8e3ff', '#009cff'],


            labelLine: {
                normal: {
                    show: false,
                }
            }
        }],

    }
    myChart2.setOption(options);

    myChart1.setOption(option);

}

// 中间地图部分
let posArr = {
    "北京": [116.46, 39.92],
    "天津": [117.2, 39.13],
    "上海": [121.48, 31.22],
    "重庆": [106.54, 29.59],
    "太原": [112.53, 37.87],
    "黑龙江": [126.63, 45.75],
    "沈阳": [123.38, 41.8],
    "长春": [125.35, 43.88],
    "石家庄": [114.48, 38.03],
    "呼和浩特": [111.65, 40.82],
    "济南": [117, 36.65],
    "郑州": [113.65, 34.76],
    "西安": [108.95, 34.27],
    "兰州": [103.73, 36.03],
    "乌鲁木齐": [87.68, 43.77],
    "拉萨": [91.11, 29.97],
    "西宁": [101.74, 36.56],
    "银川": [106.27, 38.47],
    "成都": [104.06, 30.67],
    "贵阳": [106.71, 26.57],
    "长沙": [113, 28.21],
    "武汉": [114.31, 30.52],
    "合肥": [117.27, 31.86],
    "南京": [118.78, 32.04],
    '南昌': [115.89, 28.68],
    '杭州': [120.19, 30.26],
    '南宁': [108.33, 22.84],
    '海口': [110.35, 20.02],
    '昆明': [102.73, 25.04],
    "临汾": [111.5, 36.08],
};
let saleNum = {
    "北京": 2000,
    "天津": 1800,
    "上海": 3000,
    "重庆": 1000,
    "太原": 2500,
    "黑龙江": 1700,
    "沈阳": 1300,
    "长春": 1700,
    "石家庄": 2200,
    "呼和浩特": 2300,
    "济南": 1600,
    "郑州": 2000,
    "西安": 2100,
    "兰州": 1700,
    "乌鲁木齐": 1100,
    "拉萨": 900,
    "西宁": 1000,
    "银川": 1000,
    "成都": 2600,
    "贵阳": 2200,
    "长沙": 1700,
    "武汉": 1100,
    "合肥": 400,
    "南京": 5000,
    '南昌': 3000,
    '杭州': 7000,
    '南宁': 1700,
    '海口': 3400,
    '昆明': 2000,
    '临汾': 2500,
}

contentMap();

function contentMap() {
    let myChart3 = echarts.init(document.querySelector(".car-content-top"));

    console.log(myChart3)
        //初始化 以后需要给这个图标设置配置项，包括图例，提示框，显示的数据内容等
    let option = {
            tooltip: {
                formatter: function() {
                    return `
                    <div class="map-name">
                        <h2>世纪广场</h2>
                        <p>今日收入</p>
                        <div class="map-money">12004.23</div>
                        <div class="map-car">
                            <div class="map-car-left">
                                <div>总车位</div>
                                <div>520</div>
                            </div>
                            <div class="map-car-right">
                                <div>空余</div>
                                <div>120</div>
                            </div>
                        </div>
                        <div class="map-car-bottom"><span>本日进场</span><span>123456</span><span>本日出场</span><span>32145</span>
                        </div>
                    </div>
                    `
                },
            },
            geo: {
                map: "china",
                itemStyle: {
                    normal: { //正常状态下的样式
                        areaColor: "#194e7c", //地图区域的颜色。
                        bordeColor: "#111",
                    },
                    emphasis: { //高亮状态下的多边形和标签样式
                        areaColor: "#52a8e6",
                    },
                },
            },
            series: [{
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: dataUpdata(posArr, saleNum),
                    itemStyle: {
                        color: "#ec3f3f"
                    },
                    symbolSize: 12,

                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                },

                {
                    type: "effectScatter",
                    coordinateSystem: "geo",
                    data: dataUpdata(posArr, saleNum).slice(0, 8),
                    itemStyle: {
                        color: "#4affd2"
                    },
                    symbolSize: 21,
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true,
                            shadowBlur: 10,
                            shadowColor: '#333'
                        },

                    },
                    zlevel: 1,
                }

            ],

        }
        //配置项设置完成后将配置项应用于我们的
    myChart3.setOption(option);

}


// let res = dataUpdata(posArr, saleNum);

function dataUpdata(posArr, saleNum) {
    let arr = [];
    //对对象进行遍历
    for (let i in posArr) {
        let obj = {};
        obj.name = i;
        obj.value = [...posArr[i], saleNum[i], ]
        arr.push(obj);
        console.log(posArr[i])
        console.log(saleNum[i])
    }
    return arr
}

// let Arr= [{
//     name:"北京",value:[经度,纬度,销量]
// },{

// }]



//左下角动效
let left = document.querySelector(".per-list-box");
let str = "";
let n = 8;
var timer1 = null;


for (i = 0; i < n; i++) {
    str += ` 
        <li class="per-item error">
            <div class="per-item-top">
                <div class="item-top-ren">
                    <span>未处理</span>
                    <span>巡逻人员：张三</span>
                </div>
                <div class="item-top-time">
                    19:00
                </div>
            </div>
            <div class="per-item-bottom">
                <div class="span-left">幸福水岸</div>
                <div class="span-right">出口门坏了</div>
            </div>
        </li>
        <li class="per-item success">
            <div class="per-item-top">
                <div class="item-top-ren">
                    <span>未处理</span>
                    <span>巡逻人员：张三</span>
                </div>
                <div class="item-top-time">
                    19:00
                </div>
            </div>
            <div class="per-item-bottom">
                <div class="span-left">幸福水岸</div>
                <div class="span-right">出口门坏了</div>
            </div>
        </li>
`
}
left.innerHTML = str;
move();

function move() {
    timer1 = setInterval(() => {
        let tp = left.offsetTop
        let speed = -1;
        left.style.top = tp + speed + "px";
        if (tp < -85) {
            left.style.top = 0;
        }
    }, 50)
}


let left1 = document.querySelector(".per-list-big-box");
console.log(left1)
    // left1.onmouseover = function() {
    //     clearInterval(timer1)

// }
left1.onmouseout = function() {
    move();
}
left1.addEventListener("mouseover", qw, false)
left1.removeEventListener("mouseout", qw, false)

function qw() {
    clearInterval(timer1)
}
let str1 = "";

let timer = null;

//右下角动画

let right = document.querySelector(".bottom-inner-list")
for (let k = 0; k < n; k++) {
    str1 += `
    <li class="inner-list-li">
       <h3>太原市-世纪广场</h3>
       <div class="li-l-r">
        <span class="left">进出车辆</span>
        <soan class="right">￥515345.00</soan>
        </div>
        </li>
    `
}
right.innerHTML = str1;

function rt() {
    timer = setInterval(() => {
        let tap = right.offsetTop;
        let speed = -1;
        right.style.top = tap + speed + "px";
        if (tap <= -300) {
            right.style.top = 0
        }
    }, 50)
}
rt();
// right1.onmouseoust = function() {
//     rt();
// }
let right1 = document.querySelector(".right-bottom-inner")
right1.onmouseout = function() {
    rt();
}
right1.addEventListener("mouseover", Ri, false);
right1.removeEventListener("mouseout", Ri, false)


function Ri() {
    clearInterval(timer)
}



//中间下动画
let down = document.querySelector(".content-bottom-ul");
console.log(down)
let str2 = "";
let q = 8;


for (let j = 0; j < q; j++) {
    str2 += `
    <div class="content-bottom-li">
                        <div class="li-time">
                            2018-5-4 18:00
                        </div>
                        <div class="li-img">

                        </div>
                        <div class="li-car-name">太原市-世纪广场</div>
                        <div class="li-car-number">车牌 晋A88888</div>
                    </div>

`
}
down.innerHTML = str2;

let timer3 = null;
Do();

function Do() {
    timer3 = setInterval(() => {
        let all = down.offsetLeft;
        let speed = -1;
        down.style.left = all + speed + "px";
        if (all <= -200) {
            down.style.left = 0;
        }

    }, 50)
}

let down1 = document.querySelector(".car-content-bottom")
down1.onmouseout = function() {
    Do();
}

down1.addEventListener("mouseover", MO, false)
down1.removeEventListener("mouseout", MO, false)

function MO() {
    clearInterval(timer3)
}