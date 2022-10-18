export interface BlockState {
  // 坐标
  x: number
  y: number
  // 是否翻开
  revealed: boolean
  // 是否是炸弹
  mine?: boolean
  // 是否标记
  flagged?: boolean
  // 计算炸弹数字
  adjacentMines: number
}
