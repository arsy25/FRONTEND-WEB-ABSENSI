<template>
  <BarChart
    height="300"
    width="400"
    type="bar"
    :options="options"
    :series="series"
  ></BarChart>
</template>
<script>
import BarChart from "vue3-apexcharts";

export default {
  name: "ApexBar",
  components: {
    BarChart,
  },
  data() {
    return {
      options: {
        title: {
          text: "Data Absensi",
          align: "left",
          style: {
            color: "#91c8e4",
          },
        },
        chart: {
          id: "apex-bar",
        },
        colors: ["#91c8e4", "#91c8e4", "#91c8e4"],
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
        plotOptions: {
          bar: {
            horizontal: true,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
};
</script>
