import * as actions from '../../models/actions'
import { SingerInfo, SingerClasses, SingerClassSingerInfo } from '../../models/state';
import { SingerInfoExample } from '../../models/constants';


export function getSingerClasses(singerClasses: SingerClasses[] = [], update: boolean = false): actions.GetSingerClasses {
  return {
    type: 'GET_SINGER_CLASSES',
    singerClasses,
    update
  }
}

export function getSingerClassSingerList(classid: number, singerClassSingerList: SingerClassSingerInfo[] = [], update: boolean = false): actions.GetSingerClassSingerList {
  return {
    type: 'GET_SINGER_CLASS_SINGER_LIST',
    singerClassSingerList,
    classid,
    update
  }
}

export function getSingerInfo(singerid: number, singerInfo: SingerInfo = SingerInfoExample,  update: boolean = false): actions.GetSingerInfo {
  return {
    type: 'GET_SINGER_INFO',
    singerInfo,
    singerid,
    update
  }
}