import BaseInit from "../../interface/BaseInit";


export default class AntdBaseAreaInit implements BaseInit {
    getCompName(): string {
        return "基础面积图";
    }

    getCompType(): string {
        return "AntdBaseArea";
    }

    getInitConfig(): Object {
        return {
            baseInfo: {
                name: '基础面积图',
                type: 'AntdBaseArea'
            },
            baseStyle: {
                padding: '5px',
                backgroundColor: 'rgba(23,157,169,0.12)'
            },
            chartProps: {
                data: [
                    {
                        "name": "2006 Q3",
                        "value": 1
                    },
                    {
                        "name": "2006 Q4",
                        "value": 1.08
                    },
                    {
                        "name": "2007 Q1",
                        "value": 0.47
                    },
                    {
                        "name": "2007 Q2",
                        "value": 1.26
                    },
                    {
                        "name": "2007 Q3",
                        "value": 1.00
                    },
                ],
                xField: 'name',
                yField: 'value',
                legend: false,
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
                    line: null,
                    label: {
                        style: {
                            fill: 'rgb(0,255,234)'
                        },
                    },
                },
            }
        };
    }
}
