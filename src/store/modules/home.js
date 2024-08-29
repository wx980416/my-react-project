import { getHomeGoodPriceData } from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// 定义异步操作，用于获取首页商品价格信息
export const fetchHomeDataAction = createAsyncThunk('fetchdata', async (payload) => {
  const res = await getHomeGoodPriceData()
  return res
})

// 创建 Redux slice，管理首页相关的状态
const homeSlice = createSlice({
  name: 'home',
  // 定义初始状态，包含商品价格信息
  initialState: {
    goodPriceInfo: {},
  },
  // reducers 里面包裹的是同步的方法
  reducers: {
    // 定义 reducer，用于更新商品价格信息
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
  },
  // 处理异步操作结果，更新状态
  // 我们在extraReducers中放入的是异步的方法，我们在action中声明的方法可以在此处使用
  // 在此处我们可以监听创建好的异步action，此处有三个取值是比较常用的
  // 1、fulfilled 成功之后需要做的操作
  // 2、pending 加载时需要做的操作
  // 3、rejected失败后需要做什么处理
  extraReducers: (builder) => {
    builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
      state.goodPriceInfo = payload
    })
  },
})

// 导出 reducer，供 Redux store 使用
export const { changeGoodPriceInfoAction } = homeSlice.actions
export default homeSlice.reducer
