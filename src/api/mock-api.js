import request from "@/utils/mock-request";

/**
 * 获取banner——mock
 * @returns {*}
 */
export const reqGetBanner = () => request.get('/banner');

/**
 * 获取楼层
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const reqGetFloorList = () => request.get('/floor');