import { base, tf, zw, otherIndexByZw, starStatus } from './constant';
import { IMainList, IStarNum, IStarName } from './type';

/** 根据紫微位置获取天府位置 */
export const getTFIndex = (num: number) => {
  switch (num) {
    case 0:
      return 4;
    case 1:
      return 3;
    case 2:
      return 2;
    case 3:
      return 1;
    case 4:
      return 0;
    case 5:
      return 11;
    case 6:
      return 10;
    case 7:
      return 9;
    case 8:
      return 8;
    case 9:
      return 7;
    case 10:
      return 6;
    case 11:
      return 5;
  }
};

export const getMainList = (num: number): IMainList[] => {
  return [
    {
      class: `no-b-r base ${num === 5 ? 'active' : ''}`, // 类名
      mainList: [], // 主星列表
      index: 5, // 所属位置
      title: '巳', // 地支
      baseName: '', // 哪个人事宫
      statusList: [], // 星星亮度
    },
    {
      class: `no-b-r base ${num === 6 ? 'active' : ''}`,
      mainList: [],
      index: 6,
      baseName: '',
      statusList: [],
      title: '午',
    },
    {
      class: `no-b-r base ${num === 7 ? 'active' : ''}`,
      mainList: [],
      index: 7,
      statusList: [],
      baseName: '',
      title: '未',
    },
    {
      class: `no-b base ${num === 8 ? 'active' : ''}`,
      mainList: [],
      statusList: [],
      baseName: '',
      index: 8,
      title: '申',
    },
    {
      class: `no-b base ${num === 4 ? 'active' : ''}`,
      mainList: [],
      statusList: [],
      baseName: '',
      index: 4,
      title: '辰',
    },
    {
      class: 'no-b-l-r',
      mainList: [],
      statusList: [],
      baseName: '',
      index: 20,
      title: '',
    },
    {
      class: 'no-b-l',
      mainList: [],
      statusList: [],
      index: 30,
      baseName: '',
      title: '',
    },
    {
      class: `no-b-l base ${num === 9 ? 'active' : ''}`,
      mainList: [],
      index: 9,
      statusList: [],
      baseName: '',
      title: '酉',
    },
    {
      class: `no-b-r base ${num === 3 ? 'active' : ''}`,
      mainList: [],
      baseName: '',
      statusList: [],
      index: 3,
      title: '卯',
    },
    {
      class: 'no-b-r-t',
      mainList: [],
      baseName: '',
      statusList: [],
      index: 40,
      title: '',
    },
    {
      class: 'no-b-r-t-l',
      mainList: [],
      index: 50,
      statusList: [],
      baseName: '',
      title: '',
    },
    {
      class: `no-b base ${num === 10 ? 'active' : ''}`,
      mainList: [],
      baseName: '',
      index: 10,
      title: '戌',
      statusList: [],
    },
    {
      class: `no-r base ${num === 2 ? 'active' : ''}`,
      mainList: [],
      statusList: [],
      index: 2,
      title: '寅',
      baseName: '',
    },
    {
      class: `no-r base ${num === 1 ? 'active' : ''}`,
      mainList: [],
      index: 1,
      statusList: [],
      title: '丑',
      baseName: '',
    },
    {
      class: `no-r base ${num === 0 ? 'active' : ''}`,
      mainList: [],
      index: 0,
      baseName: '',
      title: '子',
      statusList: [],
    },
    {
      class: `base ${num === 11 ? 'active' : ''}`,
      mainList: [],
      statusList: [],
      index: 11,
      baseName: '',
      title: '亥',
    },
  ];
};

// 安12人事宫
export const setBase = (zwIndex: number, list: IMainList[]) => {
  let count = zwIndex;
  for (let i = 0; i <= 11; i++) {
    // eslint-disable-next-line @typescript-eslint/no-loop-func
    const listIndex = list.findIndex((item) => item.index === count);
    list[listIndex].baseName = base[i];
    if (count > 0) {
      count--;
    } else {
      count = 11;
    }
  }
  return list;
};

// 安紫微星系
export const setZW = (zwIndex: number, list: IMainList[]) => {
  let count = zwIndex;
  for (let i = 0; i <= 11; i++) {
    // eslint-disable-next-line @typescript-eslint/no-loop-func
    const listIndex = list.findIndex((item) => item.index === count);
    list[listIndex].mainList.push(zw[i]);
    if (count > 0) {
      count--;
    } else {
      count = 11;
    }
  }
  return list;
};

// 安天府星系
export const setTF = (zwIndex: number, list: IMainList[]) => {
  const tfIndex = getTFIndex(zwIndex);
  let count = tfIndex;
  for (let i = 0; i <= 11; i++) {
    // eslint-disable-next-line @typescript-eslint/no-loop-func
    const listIndex = list.findIndex((item) => item.index === count);
    list[listIndex].mainList.push(tf[i]);
    if (count !== undefined && count < 11) {
      count++;
    } else {
      count = 0;
    }
  }
  return list;
};

// 获取星星的亮度
export const getStatus = (star: IStarName, otherStar: any) => {
  if (!star) return ''
  const i: IStarNum = otherStar[star]
  const starObj = starStatus[star]
  return starObj[i]
}

// 安星系亮度
export const setStatus = (zwIndex: number, list: IMainList[]) => {
  // 根据当前紫微index获取到其他星星位置，在根据星星所在位置获取到亮度
  const otherIndex = otherIndexByZw(zwIndex);
  const copyList = [...list];
  for (let i = 0; i <= 15; i++) {
    const status = copyList[i].mainList.map((star: any) => {
      return getStatus(star, otherIndex);
    });
    copyList[i].statusList = status.filter(v => v)
  }
  return copyList;
};
