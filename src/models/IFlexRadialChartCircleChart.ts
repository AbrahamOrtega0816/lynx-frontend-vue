import { useThemeColors } from '/@src/composable/useThemeColors'

export function useFlexRadialChartCircle() {
  const themeColors = useThemeColors()

  const flexRadialChartCircleOptions = ref({
    series: [0],
    chart: {
      height: 90,
      type: 'radialBar',
      toolbar: {
        show: false,
      },
    },
    colors: [themeColors.success],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '45%',
        },
        dataLabels: {
          show: true,
          name: {
            show: false,
            fontSize: '10px',
            fontWeight: 400,
            offsetY: 5,
            color: themeColors.success,
          },
          value: {
            show: true,
            fontWeight: 600,
            fontFamily: 'Roboto, sans-serif',
            color: themeColors.success,
            fontSize: '13px',
            offsetY: 5,
          },
        },
      },
    },
    labels: ['Progress'],
  })

  return {
    flexRadialChartCircleOptions,
  }
}
