# @miaolin777/react-zw-twelve

一个用于展示紫微斗数命盘的 React 组件库。

## 安装

```bash
npm install @miaolin777/react-zw-twelve
# 或
yarn add @miaolin777/react-zw-twelve
# 或
pnpm add @miaolin777/react-zw-twelve
```

## 使用

```jsx
import { Twelve } from '@miaolin777/react-zw-twelve';
import '@miaolin777/react-zw-twelve/dist/index.css'; // 导入样式

function App() {
  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <Twelve watermark="自定义水印" />
    </div>
  );
}
```

## 属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| watermark | string | "东派紫微-林学风 制作" | 水印文字 |

## 特性

- 响应式布局，自适应不同屏幕尺寸
- 支持锁定紫微位置
- 展示格局说明
- 支持自定义水印
- 使用 TypeScript 开发，提供完整类型定义

## 开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建
pnpm build

# 预览
pnpm preview
```

## 许可证

MIT License