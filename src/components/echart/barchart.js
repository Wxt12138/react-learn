import React, { Component, createRef } from 'react'
// / 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent
} from 'echarts/components';
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    BarChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
]);

export default class barChart extends Component {
    chart = createRef()
    render() {
        return (
            <div style={{
                "height": "300px",
                "width": "95%"
            }} id="barchart" ref={this.chart}></div>
        )
    }
    componentDidMount() {
        let mychart = echarts.init(this.chart.current);
        mychart.setOption({
            title: {
                show: true,
                text: '2022年02月编程语言排行榜 TOP 10 榜单'
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (parmas) {
                    let tip = parmas[0].marker + parmas[0].name + `:<br/>` + parmas[0].value + '%';
                    return tip
                }
            },
            xAxis: {
                type: 'category',
                data: ['Python', 'C', 'Java', 'C++', 'C#', 'Visual Basic', 'JavaScrit', 'PHP', 'Assembly language', 'SQL'],
                axisLabel: {
                    rotate: -35
                }
            },
            yAxis: {
                type: 'value',
                show: false
            },
            series: [
                {
                    data: [15.33, 14.08, 12.13, 8.01, 5.37, 5.23, 1.83, 1.79, 1.60, 1.55],
                    type: 'bar',
                    barWidth: '15',
                }
            ]
        })
    }
}
