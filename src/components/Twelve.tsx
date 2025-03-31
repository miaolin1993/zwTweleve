import { Watermark } from 'antd';
import React, { useMemo, useState, type FC } from 'react';
import './index.scss';
import Pattern from './pattern';
import { IMainList, IStarNum } from '../type';
import { getMainList, setBase, setStatus, setTF, setZW } from '../utils';

export interface TwelveProps {
  watermark?: string;
}

export const Twelve: FC<TwelveProps> = ({ watermark = "东派紫微-林学风 制作" }) => {
  const [num, setNum] = useState<IStarNum>(0);
  const [saveList, setSaveList] = useState<IMainList[]>([]);
  const [saveNum, setSaveNum] = useState<IStarNum>(num);
  const [isLock, setIsLock] = useState(0);

  const list = useMemo(() => {
    if (num < 0 || num > 12) {
      return saveList;
    }
    const b = getMainList(num);
    if (!isLock) {
      const z = setZW(num, b);
      const t = setTF(num, z);
      const s = setStatus(num, t);
      const f = setBase(num, s);
      if (!isLock) {
        setSaveList(f);
        setSaveNum(num);
      }
      return f;
    } else {
      return setBase(num, saveList);
    }
  }, [num, isLock]);

  return (
    <Watermark content={watermark}>
      <div className="lock">
        <span className="title">锁定紫微位置</span>
        <input
          type="checkbox"
          id="myCheckbox"
          name="锁定紫微位置"
          onChange={(v) => setIsLock(v.target.checked ? 1 : 0)}
          value={isLock}
        />
      </div>
      <div className="main">
        {list &&
          list.map((v) => {
            return (
              <div
                className={v.class}
                data-index={v.index}
                key={`${v.index + v.class + v.title}`}
                onClick={() => setNum((v as any).index)}
              >
                {v.mainList.length ? (
                  <div className="star-box">
                    {v.mainList.map((l, index) => (
                      <span className="main-star" key={l + index}>
                        {l}
                      </span>
                    ))}
                    <div className="status-box">
                      {v.statusList.map((l, index) => (
                        <span className="status-name" key={l + index}>
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
                <span className="dz">{v.title}</span>
                <div className="baseName">
                  <span>{v.baseName}</span>
                </div>
              </div>
            );
          })}
      </div>
      <Pattern num={num} saveNum={saveNum} isLock={isLock} />
    </Watermark>
  );
};

export default Twelve; 