import ApexCharts from 'react-apexcharts';

export default function chart(props){

    const options = {
        xaxis: {
            type: 'datetime'
        },
        yaxis:{
            tooltip: {
                enable: true
            }
        }
    }

    const series =[{
        data: props.data
    
    }]

    return(
        <ApexCharts options={options}
                    series={series}
                    type="candlestick"
                    width={800}
                    heigth={600}/>
    )
}