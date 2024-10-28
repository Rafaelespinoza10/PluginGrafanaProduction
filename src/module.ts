import { PanelPlugin } from '@grafana/data';
import {  PanelOptions } from './types';
import { CardFormPanel } from 'components/CardForm';


export const plugin = new PanelPlugin<PanelOptions>(CardFormPanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'centerNameText',
      name: 'Centro de trabajo',
      description: 'Descripcion de centro de trabajo',
      defaultValue: '',
    })

    .addTextInput({
      path:'productionStdText',
      name:'Produccion estandar',
      description: 'Descripcion del estandar de produccion',
      defaultValue: ''
    })


    .addTextInput({
      path:'jphStdText',
      name:'Jph estandar',
      description: 'Descripcion del estandar jph',
      defaultValue: ''
    })

  });
