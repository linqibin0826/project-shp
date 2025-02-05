// 引入 Mock.js
import Mock from 'mockjs';
import banner from '@/mock/banner.json'
import floor from "@/mock/floor.json";

// 设置模拟数据的响应时间
Mock.setup({
    timeout: '200-600' // 表示响应时间介于 200ms 到 600ms 之间
})

// 使用 Mock.js 模拟数据
Mock.mock('/mock/banner', {code: 200, data: banner});
Mock.mock('/mock/floor', {code: 200, data: floor})