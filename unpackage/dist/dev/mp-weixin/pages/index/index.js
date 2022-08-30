"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_request = require("../../utils/request.js");
require("../../utils/requestObj.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    let handleUrl = () => {
      var paraString = location.href;
      console.log(paraString, "---");
      if (paraString.indexOf("?") !== -1) {
        var str = paraString.substr(paraString.indexOf("?"), paraString.length);
        return str;
      }
    };
    common_vendor.onLoad(async (options) => {
      let url = handleUrl();
      let obj = {
        env_version: "trial",
        path: "/pages/index/index",
        query: url
      };
      let res = await utils_request.$request("generateuUrlink", obj);
      if (res.data.code === 0) {
        location.href = `${res.data.data}${url}`;
      }
      console.log(res);
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/\u6211\u7684\u6587\u6863/HBuilderProjects/linkWeb/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
