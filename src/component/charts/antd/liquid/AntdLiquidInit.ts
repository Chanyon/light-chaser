import BaseInit from "../../interface/BaseInit";

export default class AntdLiquidInit implements BaseInit {
    getCompName(): string {
        return "堆叠面积图";
    }

    getCompType(): string {
        return "AntdLiquid";
    }

    getInitConfig(): Object {
        return {
            baseInfo: {
                name: '堆叠面积图',
                type: 'AntdLiquid'
            },
            baseStyle: {
                padding: '5px',
                backgroundColor: 'rgba(23,157,169,0.12)'
            },
            chartProps: {
                percent: 0.67,
                color: 'rgb(0,255,234)',
                outline: {
                    border: 4,
                    style: {
                        stroke: 'rgb(0,255,234)'
                    }
                },
                wave: {
                    length: 128,
                },
                statistic: {
                    title: {
                        style: {
                            fill: '#00fce1',
                            fontSize: 14,
                        }
                    },
                    content: {
                        style: {
                            fill: '#00fce1',
                            fontSize: 14,
                            lineHeight: '44px'
                        }
                    }
                }
            }
        };
    }

}

