export type IStarName = '紫微' | '天机' | '太阳' | '武曲' | '天同' | '廉贞' | '天府' | '太阴' | '贪狼' | '巨门' | '天相' | '天梁' | '七杀' | '破军'

export interface IMainList {
  class: string
  mainList: string[],
  index: number
  title: string
  baseName: string
  statusList: string[]
}

export type IStarNum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11