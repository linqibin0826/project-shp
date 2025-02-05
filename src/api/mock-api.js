import request from "@/utils/mock-request";

/**
 * 获取banner——mock
 * @returns {*}
 */
export const reqGetBanner = () => request.get('/banner');