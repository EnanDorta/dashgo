import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import SideBar from '../components/Sidebar';
import Header from '../components/Header';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2022-06-13T00:00:00.000Z',
      '2022-06-14T00:00:00.000Z',
      '2022-06-15T00:00:00.000Z',
      '2022-06-16T00:00:00.000Z',
      '2022-06-17T00:00:00.000Z',
      '2022-06-18T00:00:00.000Z',
      '2022-06-19T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.6,
      opacityTo: 0.3,
    },
  },
} as const;

const series = [
  {
    name: 'series',
    data: [31, 25, 40, 60, 45, 33, 88],
  },
];

const seriesTwo = [
  {
    name: 'series',
    data: [40, 60, 25, 60, 45, 43, 50],
  },
];
export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart type="area" options={options} series={series} />
          </Box>
          <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart type="area" options={options} series={seriesTwo} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
