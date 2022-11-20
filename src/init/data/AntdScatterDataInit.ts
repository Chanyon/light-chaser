import {cloneDeep} from 'lodash';

//散点图初始化数据和配置
export const initAntdScatter = () => {
    return cloneDeep({
        baseInfo: {
            name: '散点图',
            type: 'AntdScatter'
        },
        baseStyle: {
            padding: '5px',
            backgroundColor: 'rgba(23,157,169,0.12)'
        },
        chartProps: {
            data: [
                {x: 1, y: 4.181},
                {x: 2, y: 4.665},
                {x: 3, y: 5.296},
                {x: 4, y: 5.365},
                {x: 5, y: 5.448},
                {x: 6, y: 5.744},
                {x: 7, y: 5.653},
                {x: 8, y: 5.844},
                {x: 9, y: 6.362},
            ],
            xField: 'x',
            yField: 'y',
            sizeField: 'y',
            size: [4, 34],
            seriesField: 'y',
            pointStyle: {
                lineWidth: 0,
                fill: '#ff7e28',
            },
            xAxis: {
                grid: null,
                line: null,
                label: {
                    style: {
                        fill: 'rgb(0,255,234)'
                    },
                },
            },
            yAxis: {
                grid: null,
                label: {
                    style: {
                        fill: 'rgb(0,255,234)'
                    },
                },
            },
        }
    });
};

//气泡图初始化数据和配置
export const initAntdBubbles = () => {
    return cloneDeep({
        baseInfo: {
            name: '气泡图',
            type: 'AntdBubbles'
        },
        baseStyle: {
            padding: '5px',
            backgroundColor: 'rgba(23,157,169,0.12)'
        },
        chartProps: {
            appendPadding: 30,
            data: [
                {
                    "value": -0.7,
                    "name": 3.3000000000000043,
                    "type": "Asia"
                },
                {
                    "value": -8.899999999999999,
                    "name": -10.100000000000001,
                    "type": "Oceania"
                },
                {
                    "value": -14.400000000000002,
                    "name": -23.499999999999996,
                    "type": "Europe"
                },
                {
                    "value": -0.3,
                    "name": -11.200000000000003,
                    "type": "Asia"
                },
                {
                    "value": -5.399999999999999,
                    "name": -12.600000000000001,
                    "type": "Europe"
                },
                {
                    "value": -5.800000000000001,
                    "name": -2.900000000000002,
                    "type": "Africa"
                },
                {
                    "value": -4.1,
                    "name": -9.200000000000003,
                    "type": "Asia"
                },
                {
                    "value": -2.8000000000000007,
                    "name": -17.099999999999994,
                    "type": "Europe"
                },
                {
                    "value": -2.8999999999999986,
                    "name": -8.5,
                    "type": "Europe"
                },
                {
                    "value": -20.800000000000004,
                    "name": -18.800000000000004,
                    "type": "Americas"
                },
                {
                    "value": -0.6999999999999997,
                    "name": -5.899999999999999,
                    "type": "Asia"
                },
                {
                    "value": -15,
                    "name": -2.6999999999999957,
                    "type": "Americas"
                },
            ],
            xField: 'value',
            yField: 'name',
            sizeField: 'name',
            colorField: 'type',
            color: ['#ff0000', '#82cab2', '#193442', '#d18768', '#7e827a'],
            size: [4, 30],
            shape: 'circle',
            pointStyle: {
                fillOpacity: 0.8,
                stroke: '#bbb',
            },
            xAxis: {
                min: -25,
                max: 5,
                grid: null,
                line: null,
                label: {style: {fill: 'rgb(0,255,234)'}}
            },
            yAxis: {
                line: null,
                grid: null,
                label: {style: {fill: 'rgb(0,255,234)'}}
            },
        }
    });
};

