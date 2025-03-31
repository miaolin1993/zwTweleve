# @miaolin777/react-zw-twelve

用于展示紫微斗数十二基础盘的 React 组件

- 可通过紫微星所在位置不同，了解其基础布局
- 可锁定紫微星位置，来查看命宫在不同地支宫位时，其他宫位主星分布
- 可以看到不同主星在十二地支宫位的亮度情况

## 安装

```bash
npm install @miaolin777/react-zw-twelve
# 或
yarn add @miaolin777/react-zw-twelve
# 或
pnpm add @miaolin777/react-zw-twelve
```

## 使用方法

```tsx
import { Twelve } from 'react-zw-twelve';

function App() {
  return (
    <Twelve watermark="" />
  );
}
```

```bash
pnpm install

pnpm run dev

pnpm build
```

## 许可证
MIT License
