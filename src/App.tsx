import "./App.css";

import {
  Category,
  ChartComponent,
  ColumnSeries,
  Inject,
  AreaSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  StripLine,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import { salesData } from "./assets/data";
export const App = () => {
  return (
    <>
      <h1>Ta bombando isso hein</h1>
      <div>
        <ChartComponent
          width="650"
          height="350"
          primaryXAxis={{
            valueType: "Category",
            title: "Graphic BPM",
            interval: 5,
            minimum: 0,
            maximum: 31,
          }}
          primaryYAxis={{
            interval: 50,
            minimum: 0,
            maximum: 249,
          }}>
          <Inject
            services={[ColumnSeries, Tooltip, AreaSeries, Category, StripLine]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={salesData}
              xName="x"
              yName="y"
              name="BPM"
              fill="#4ba7d987"
              opacity={0.6}
              type="Area"
              width={4}
              border={{ width: 4, color: "#4BA7D9" }}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </>
  );
};
