import { IStarNum } from '../../type';

// 存放所有格局
const savePattern = {
  // 紫微独坐
  rzlm: {
    name: '日照雷门格',
    desc: '日为太阳，卯为东方震卦，为雷，日出东方',
    // imgs: [require('/assets/pattern/日照雷门.png')]
  },
  yltm: {
    name: '月朗天门格',
    desc: '容易出帅哥美女的格局，也是富格',
  },
  mzch: {
    name: '明珠出海格',
    desc: '诸葛亮就是这个盘，官财日月都亮，财官双美，天同巨门善于分析',
  },
  jxlm: {
    name: '极向离明格',
    desc: '紫微北极，午宫离卦，此时紫微是入庙的，三方四正无煞星，成格，吉星禄权科越多越好',
  },
  fsth: {
    name: '泛水桃花格',
    desc: '古语所说，贪居亥子，泛水桃花，这里要看有没有遇到擎羊陀罗桃花星同宫，只有一个贪狼不能这么论',
  },
  ylcl: {
    name: '阳梁昌禄格',
    desc: '需要有文昌、禄存、化禄方成格，此格利于学习和科考',
  },
  // 紫府
  yxrm: {
    name: '英星入庙格',
    desc: '子宫比午宫好，一生多变，适合离乡发展，宜武职经商',
  },
  qscd: {
    name: '七杀朝斗格',
    desc: '七杀入子午、寅申，都算，比较敢想敢干，见煞多不吉。寅子为仰斗，申午为朝斗',
  },
  jxdd: {
    name: '将星得地格',
    desc: '',
  },
  tfcy: {
    name: '天府朝垣格',
    desc: '天府为库，居地网，又代表房子财产，见吉多是富贵格局',
  },
  rybm: {
    name: '日月并明格（丹墀chi桂墀）',
    desc: '太阳在辰巳，太阴酉戌坐命，太阳为丹墀，太阴为桂墀。\n此格主少年得志，如考上好大学，继承财产，出国读书或在非常好的公司，年纪轻轻就被重用。还有一种天梁在丑，日月并照也算',
  },
  // 紫破
  ryfb: {
    name: '日月反背格',
    desc: '日月反背，比较奔波、操劳',
  },
  szyy: {
    name: '石中隐玉格',
    desc: '子宫比午宫好，才华特异，脑力惊人，如其名，是前期坎坷需要打磨的格局',
  },
  // 紫相
  ryzb: {
    name: '日月照壁格',
    desc: '日月丑未同宫，坐田宅宫，煞星少的话，主富，田产多',
  },
  flcz: {
    name: '风流彩杖格',
    desc: '这里要注意，必须有擎羊或陀罗同宫才可以这么论，只有一个贪狼不算',
  },
  jjtl: {
    name: '巨机同临格',
    desc: '见吉星多，成格，有一流学问，宜从政。但巨机古代也叫【破荡格】，天机聪明，巨门为暗，心思不往正地方用，女命无论在卯还是在酉，都不是很好',
  },
  xscy: {
    name: '雄宿朝元格',
    desc: '廉贞在寅申，三方四正紫武廉府相',
  },
  // 紫杀
  scge: {
    name: '水澄桂萼（月生沧海）格',
    desc: '古语谓之，水澄桂萼，居轻要之职，天同太阴不见煞也是容易出美女的格局',
  },
  jljh: {
    name: '机梁加会格',
    desc: '机梁善谈兵，需要有六吉、禄权科和禄存等吉星加会，成格，主学有所长，博学多才；无吉见煞为破格，思想邪异，舌辩之辈',
  },
  jrtg: {
    name: '巨日同宫格',
    desc: '会禄存、六吉、禄权科为成格，主大贵，宜从政或知名社会人士。但巨日同宫在寅也叫“无助格”，因为三方四正的财、官、迁都是空宫',
  },
  wttx: {
    name: '武贪同行格',
    desc: '武曲贪狼居四墓地，武贪不发少年郎，30岁后会逐渐变好，具体要看星系组合，属于晚发格，厚积薄发',
  },
  // 紫贪
  rlzt: {
    name: '日丽中天（金灿光辉）格',
    desc: '太阳为官禄主，居旺地，古语谓之日丽中天',
  },
  sxrm: {
    name: '寿星入庙格',
    desc: '主正直无私、学识优秀、性格稳健，健康长寿，一生名大于利',
  },
  lzqb: {
    name: '廉贞清白格',
    desc: '需要廉贞在未宫，且化禄',
  },
  hxfg: {
    name: '化星反贵格',
    desc: '巨门在辰戌，辛年出生巨门化禄的',
  },
  // 通用格
  spl: {
    name: '杀破狼格',
    desc: '三方四正同时见七杀、贪狼、破军，此格多变动',
  },
  sqjh: {
    name: '三奇加会格',
    desc: '三方四正同时有禄权科，入此格志向远大，运气极佳，具体要根据星系组合去看',
  },
  jytl: {
    name: '机月同梁格',
    desc: '古语机月同梁坐吏人，指遇六吉禄权科，容易在公家机构大企业中任职，相对喜欢安稳的工作',
  },
  ryjm: {
    name: '日月夹命格',
    desc: '',
  },
  mtdj: {
    name: '马头带箭格',
    desc: '同阴在午，或贪狼在午，【必须有擎羊同宫，就是丙戊年生人】，早年辛苦，中晚年有意外好运，且宜经商、开拓。女命不宜',
  },
  lmpy: {
    name: '禄马配印格',
    desc: '天相为印，居四马地，与天马禄存同宫，成格',
  },
  cyjy: {
    name: '财荫夹印格',
    desc: '天相为印，天梁为荫',
  },
  xqjy: {
    name: '刑囚夹印格（凶）',
    desc: '廉贞天相在子午，天相为印，廉贞化气为囚，遇到擎羊天刑同宫，成格',
  },
};

// 紫微独坐
export const zw = {
  title: '独坐孤君',
  content:
    '紫微在子午，是独坐的，迁移贪狼，需要外出应酬的皇帝，这里说的孤君只是说紫微是独坐的，是否真正的孤君要看有没有六吉星',
};

// 紫府
export const zf = {
  title: '双帝同宫',
  content:
    '紫微在寅申，必与天府同宫，这盘型特点是没有空宫，紫微天府一个南斗一个北斗',
};

// 紫破
export const zp = {
  title: '无情帝王',
  content: '紫微在丑未，必与破军同宫，最是无情帝王格',
};

// 紫相
export const zx = {
  title: '龙困于水',
  content:
    '紫微在辰戌，必与天相同宫，天相属水，居天罗地网，龙困于水，被困的皇帝',
};

// 紫杀
export const zs = {
  title: '紫杀同宫，御驾亲征',
  content: '紫微在巳亥，必与七杀同宫，皇帝持刀，御驾亲征',
};

// 紫贪
export const zt = {
  title: '桃花犯主',
  content:
    '紫微在卯酉，必与贪狼同宫，卯酉为败地又逢贪狼，谓之桃花犯主，也容易玩物丧志',
};

// 基本格局
export const getData = (num: IStarNum) => {
  switch (num) {
    case 0:
    case 6:
      return zw;
    case 2:
    case 8:
      return zf;
    case 1:
    case 7:
      return zp;
    case 3:
    case 9:
      return zt;
    case 4:
    case 10:
      return zx;
    case 5:
    case 11:
      return zs;
    default:
      return null;
  }
};

// 细分专属格局
const patternObj: any = {
  // 紫微在子
  0: {
    0: [],
    2: [savePattern.spl],
    6: [savePattern.spl, savePattern.mtdj],
    8: [savePattern.lmpy],
    10: [savePattern.spl],
  },
  // 紫微在丑
  1: {
    0: [savePattern.jytl],
    1: [savePattern.spl],
    4: [savePattern.ryfb],
    5: [savePattern.spl],
    6: [savePattern.szyy],
    8: [savePattern.jytl],
    9: [savePattern.spl],
    10: [savePattern.ryfb],
  },
  // 紫微在寅
  2: {
    0: [savePattern.yxrm, savePattern.spl],
    4: [savePattern.spl],
    6: [savePattern.xqjy],
    8: [savePattern.qscd],
    10: [savePattern.jxdd, savePattern.wttx],
  },
  // 紫微在卯
  3: {
    1: [savePattern.ryjm],
    2: [savePattern.jytl],
    3: [savePattern.spl],
    4: [savePattern.hxfg],
    5: [savePattern.lmpy],
    6: [savePattern.sxrm],
    7: [savePattern.lzqb],
    10: [savePattern.jytl],
    11: [savePattern.spl],
  },
  // 紫微在辰
  4: {
    2: [savePattern.flcz],
    3: [savePattern.jjtl],
    6: [savePattern.qscd],
    8: [savePattern.xscy],
    10: [savePattern.ryzb],
  },
  // 紫微在巳
  5: {
    0: [savePattern.scge],
    1: [savePattern.wttx],
    2: [savePattern.jrtg],
    4: [savePattern.jljh, savePattern.jytl],
  },
  // 紫微在午
  6: {
    0: [savePattern.fsth],
    2: [savePattern.lmpy],
    3: [savePattern.rzlm, savePattern.ylcl],
    6: [savePattern.jxlm],
    7: [savePattern.mzch],
    10: [savePattern.tfcy],
    11: [savePattern.yltm],
  },
  // 紫微在未
  7: {
    0: [savePattern.szyy],
    4: [savePattern.rybm],
    10: [savePattern.rybm],
    11: [savePattern.fsth],
  },
  // 紫微在申
  8: {
    0: [savePattern.xqjy],
    1: [savePattern.rybm],
    2: [savePattern.qscd],
    4: [savePattern.wttx],
    5: [savePattern.rybm],
    6: [savePattern.yxrm, savePattern.spl],
    9: [savePattern.rybm],
  },
  // 紫微在酉
  9: {
    6: [savePattern.rlzt],
    10: [savePattern.hxfg],
    11: [savePattern.lmpy],
  },
  // 紫微在戌
  10: {
    0: [savePattern.qscd],
    2: [savePattern.xscy],
    4: [savePattern.ryzb],
  },
  // 紫微在亥
  11: {
    6: [savePattern.mtdj],
    7: [savePattern.wttx],
    10: [savePattern.jljh, savePattern.jytl],
  },
};

export const getPatternList = (num: IStarNum, pNum: IStarNum) => {
  try {
    return patternObj?.[num]?.[pNum] || [];
  } catch {
    return [];
  }
};
