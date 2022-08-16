import { Box, Card, CardContent, Typography } from "@mui/material";
import { ApexOptions } from "apexcharts";
import ReactApexcharts from "../ReactApexcharts";

const series = [{ data: [0, 20, 5, 30, 15, 45] }];

const AnalyticsSessions = () => {
  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    tooltip: { enabled: false },
    grid: {
      strokeDashArray: 6,
      xaxis: {
        lines: { show: true },
      },
      yaxis: {
        lines: { show: false },
      },
      padding: {
        top: -15,
        left: -7,
        right: 7,
        bottom: -15,
      },
    },
    stroke: { width: 3 },
    colors: ["var(--blue-s-300)"],
    // colors: [hexToRGBA('#00FF00', 1)],
    markers: {
      size: 6,
      offsetY: 2,
      offsetX: -1,
      strokeWidth: 3,
      colors: ["transparent"],
      strokeColors: "transparent",
      discrete: [
        {
          size: 6,
          seriesIndex: 0,
          strokeColor: "var(--blue-s-300)",
          fillColor: "var(--white)",
          dataPointIndex: series[0].data.length - 1,
        },
      ],
      hover: { size: 7 },
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      labels: { show: false },
    },
  };

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
          <Typography variant="h6" sx={{ mr: 1.5, color: "var(--gray-500)" }}>
            $38.5k
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "var(--green-s-400)" }}>
            +62%
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: "var(--gray-400)" }}>
          Sessions
        </Typography>
        <ReactApexcharts
          type="line"
          height={108}
          options={options}
          series={series}
        />
      </CardContent>
    </Card>
  );
};

export { AnalyticsSessions };
