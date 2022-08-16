import { Box, Card, CardContent, Typography } from "@mui/material";
import { ApexOptions } from "apexcharts";
import ReactApexcharts from "../ReactApexcharts";

const CrmTotalGrowth = () => {
  const options: ApexOptions = {
    legend: { show: false },
    stroke: { width: 5, colors: ["var(--white)"] },
    colors: ["var(--blue-500)", "var(--green-500)", "var(--gray-700)"],
    labels: [
      `${new Date().getFullYear()}`,
      `${new Date().getFullYear() - 1}`,
      `${new Date().getFullYear() - 2}`,
    ],
    tooltip: {
      y: { formatter: (val: number) => `${val}%` },
    },
    dataLabels: {
      enabled: false,
    },
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            name: { show: false },
            total: {
              label: "",
              show: true,
              formatter(val) {
                return typeof val === "string" ? `${val}%` : "12%";
              },
            },
            value: {
              offsetY: 6,
              formatter(val) {
                return `${val}%`;
              },
            },
          },
        },
      },
    },
  };

  return (
    <Card>
      <CardContent
        sx={{
          "& .apexcharts-canvas .apexcharts-datalabel-value": {
            fontWeight: 600,
            fontSize: "1rem !important",
            fill: "var(--gray-400)",
          },
        }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
          <Typography variant="h6" sx={{ mr: 1.5, color: "var(--gray-500)" }}>
            $27.9k
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "var(--green-400)" }}>
            +16%
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: "var(--gray-400)" }}>
          Total Growth
        </Typography>
        <ReactApexcharts
          type="donut"
          height={135}
          options={options}
          series={[35, 30, 23]}
        />
      </CardContent>
    </Card>
  );
};

export { CrmTotalGrowth };
