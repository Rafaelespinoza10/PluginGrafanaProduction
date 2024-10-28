import {  PanelProps } from '@grafana/data';
import { PanelOptions } from 'types';
import { css } from '@emotion/css';
import { useStyles2 } from '@grafana/ui';
import { PanelDataErrorView } from '@grafana/runtime';
import React from 'react';


interface Props extends PanelProps<PanelOptions> {}

const getStyles = ( width: number, height: number, backGroundColor: string, textColor: string) => {
  return {
    card: css`
    height: ${ height }px;
    width: ${ width }px;
    padding: 10px;
    margin: 10px auto;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    background-image: ${backGroundColor};
  
  `,
  title: css`
    text-align: center;
    color: #f9fafb;
    margin-bottom: 10px;
    margin-top: 20px;
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 2.75rem;
  `,
  containerLine: css`
    margin-top: 10px;
    padding: 4px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  container: css`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 16px;
    height: auto;
    height: calc(${height}px - 300px);
    width: 100%;
  `,
  containerBox1: css`
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    grid-column: 1 / 4;
  `,
  containerBox2: css`
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    grid-column: 4 / 7;
  `,
  titleTags: css`
    font-size: 1.5rem;
    margin-top: 6px;
    font-weight: bold;
  `,
  flexContainer: css`
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 4px;
    justify-content: center;
    align-items: center;
  `,
  percentage: css`
    font-weight: bold;
    font-size: 2rem;
    line-height: 2.25rem;
    color: ${textColor}
  `,
  std: css`
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.75rem;
  `,
  count: css`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.75rem;
  color: ${textColor}
`,
       
  };
};

export const CardFormPanel: React.FC<Props> = ({ options, data, width, height, fieldConfig, id }) => {
  
  let backgroundColor = '';
  let textColor = '';
  
    const series = data.series[0];       // Series data para produccion 
    const seriesJph = data.series[1];    // Series data para jph

    const values = series.fields[1].values;
    const valuesJph = seriesJph.fields[1].values;
  //   const time = series.fields[0].values;
    let percentageProduction = 0;
    let percentageJph = 0;

    //obtencion del procentaje production
    if(options.productionStdText){
         percentageProduction = Math.round((Math.round(values[values.length -1 ]) / parseInt(options.productionStdText, 10)) * 100);
    }

    if(options.jphStdText){
      percentageJph = Math.round((Math.round(valuesJph[valuesJph.length - 1]) / parseInt(options.jphStdText, 10)) * 100);
    }


    if(percentageJph >= 90){
      backgroundColor = 'linear-gradient(145deg, rgb(16, 185, 129), rgb(28, 33, 43))'; // Verde
      textColor = '#abebc6'; 
    }else if(percentageJph === 0){
       backgroundColor = 'linear-gradient(120deg, rgb(150, 150, 150), rgb(40, 40, 50))'; // Gris con opacidad del 50%
       textColor = '#f0efef'
    }else{
      backgroundColor = 'linear-gradient(130deg, rgb(255, 100, 100), rgb(28, 33, 43))'; // Rojo
      textColor = '#fe9a9a';
    }
  

    // const theme = useTheme2();
    const styles = useStyles2(()=> getStyles(width, height, backgroundColor, textColor));  // obtengo los estilos.

  if (data.series.length === 0) {
    return <PanelDataErrorView fieldConfig={fieldConfig} panelId={id} data={data} needsStringField />;
  }


  return (
        <div className={ styles.card }>
     
            <p 
            className={ styles.title }>
                { options.centerNameText }
            </p>
            <div className={ styles.container}>
                <div className={ styles.containerBox1 }>
                    <p className={styles.titleTags}> Pzas </p>
                    <div className={ styles.flexContainer }>
                        <p className={ styles.count }>{ Math.round(values[values.length -1 ]) }</p>
                        <p className={ styles.std }> {`/ ${options.productionStdText}`}</p>
                    </div>
                    <div className={ styles.percentage }> { `${percentageProduction}%` }    </div> 
                </div>

                <div className={ styles.containerBox2 }>
                    <p className={ styles.titleTags }> JPH </p>
                    <div className={ styles.flexContainer }>
                        <p className={ styles.count }> { Math.round(valuesJph[valuesJph.length -1 ])} </p>
                        <p className={styles.std}> {`/ ${options.jphStdText}`} </p>
                    </div>
                    <div className={styles.percentage}>{ `${percentageJph}%` }</div>  
                </div>
            </div>
        </div>
  );
};
