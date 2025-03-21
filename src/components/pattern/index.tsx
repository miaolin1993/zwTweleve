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
          {/* <Paragraph>
            <pre>
              蚂蚁的企业级产品是<Text mark>『确定』和『自然』</Text>
              一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
            </pre>
          </Paragraph> */}
        </div>
      ) : null}
    </>
  );
};

export default Pattern;
