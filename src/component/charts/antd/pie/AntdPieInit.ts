import BaseInit from "../../interface/BaseInit";

export default class AntdPieInit implements BaseInit {
    getCompName(): string {
        return "基础柱状图";
    }

    getCompType(): string {
        return "AntdPie";
    }

    getInitConfig(): Object {
        return {
            baseInfo: {
                name: '基础柱状图',
                type: 'AntdPie'
            },
            baseStyle: {
                padding: '5px',
                backgroundColor: 'rgba(23,157,169,0.12)'
            },
            chartProps: {
                data: [
                    {
                        name: '分类一',
                        value: 27,
                    },
                    {
                        name: '分类二',
                        value: 25,
                    },
                    {
                        name: '分类三',
                        value: 18,
                    },
                ],
                appendPadding: 10,
                angleField: 'value',
                colorField: 'name',
                color: ['#ff1616', '#ffc360', '#f8a5ff', '#2aff81', '#00ff48', '#ffc360'],
                radius: 0.75,
                statistic: {title: null, content: null},
                pieStyle: {stroke: null},
                label: {
                    type: 'spider',
                    labelHeight: 28,
                    content: '{name}\n{percentage}',
                    style: {fill: 'rgb(0,255,234)'},
                },
                interactions: [{
                    type: 'element-selected',
                }, {
                    type: 'element-active',
                }],
            }
        };
    }

}