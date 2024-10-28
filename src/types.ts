type SeriesSize = 'sm' | 'md' | 'lg';
type CircleColor = 'red' | 'green' | 'blue';


export interface SimpleOptions {
  text: string;
  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
  color: CircleColor;
  showSeriesColor: boolean;
}



export interface PanelOptions {

  centerNameText: string;
  productionStdText: string;
  jphStdText: string;
}


