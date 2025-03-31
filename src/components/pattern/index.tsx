import { Typography } from 'antd';
import React, { type FC } from 'react';
import { IStarNum } from '../../type';
import { getData, getPatternList } from './constant';
import './index.scss';

const { Paragraph } = Typography;
const Pattern: FC<{ num: IStarNum; saveNum: IStarNum; isLock: number }> = ({
  num,
  saveNum,
  isLock,
}) => {
  const curNum = isLock ? saveNum : num;
  // saveNum对应紫微位置，num对应命宫位置
  console.log(saveNum, num);
  const obj: any = getData(curNum);
  const patternList = getPatternList(isLock ? saveNum : num, num);

  return (
    <>
      {obj ? (
        <div>
          <Typography>
            <h4>{obj.title}</h4>
          </Typography>
          <Paragraph>{obj.content}</Paragraph>
          {patternList?.length ? (
            <Paragraph>
              {patternList.map((v: any) => {
                return (
                  <div key={v.name}>
                    <h5>{v.name}</h5>
                    {v.desc && <span>{v.desc}</span>}
                  </div>
                );
              })}
            </Paragraph>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default Pattern;
