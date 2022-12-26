
interface Axispointer {
    animation: boolean;
}

interface lineChart {
    tooltip: Tooltip;
    xAxis: Xaxis;
    yAxis: Yaxis;
    series: Series[];
    dataZoom: any[];
}

interface Series {
    type: string;
    showSymbol: boolean;
    data: string;
}

interface Splitline {
    show: boolean;
}

interface Tooltip {
    trigger: string;
    axisPointer: Axispointer;
}

interface Xaxis {
    type: string;
    splitLine: Splitline;
}

interface Yaxis {
    type: string;
    boundaryGap: any[];
    splitLine: Splitline;
    scale: boolean;
}



export class GenerateLineChartModule implements lineChart {

    public tooltip: Tooltip;
    public xAxis: Xaxis;
    public yAxis: Yaxis;
    public series: Series[];
    public dataZoom: any[];
    public options: lineChart;
    constructor(item: any, marketsIndex: any) {
        this.tooltip = item.tooltip
        this.xAxis = item.xAxis
        this.yAxis = item.yAxis
        this.series = item.series
        this.dataZoom = item.dataZoom

        this.options = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    animation: true
                }
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                },
                scale: true,
            },
            series: [{
                type: 'line',
                showSymbol: false,
                data: marketsIndex
            }],
            dataZoom: [
                {
                    id: 'dataZoomX',
                    type: 'slider',
                    xAxisIndex: [0],
                    filterMode: 'filter',
                    start: 3,
                    end: 100,
                    brushSelect: true,
                    realtime: true
                },
                {
                    id: 'dataZoomY',
                    type: 'slider',
                    yAxisIndex: [0],
                    filterMode: 'empty',
                    start: 0,
                    end: 100
                }
            ],
        }
    }

}