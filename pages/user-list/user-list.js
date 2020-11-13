(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user-list/user-list"],{

/***/ 90:
/*!************************************************************************************!*\
  !*** D:/HBuilderProjects/Combine/main.js?{"page":"pages%2Fuser-list%2Fuser-list"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _userList = _interopRequireDefault(__webpack_require__(/*! ./pages/user-list/user-list.vue */ 91));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_userList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 91:
/*!*****************************************************************!*\
  !*** D:/HBuilderProjects/Combine/pages/user-list/user-list.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_list_vue_vue_type_template_id_187c9808___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list.vue?vue&type=template&id=187c9808& */ 92);
/* harmony import */ var _user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list.vue?vue&type=script&lang=js& */ 94);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _user_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-list.vue?vue&type=style&index=0&lang=css& */ 96);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_list_vue_vue_type_template_id_187c9808___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_list_vue_vue_type_template_id_187c9808___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _user_list_vue_vue_type_template_id_187c9808___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/user-list/user-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 92:
/*!************************************************************************************************!*\
  !*** D:/HBuilderProjects/Combine/pages/user-list/user-list.vue?vue&type=template&id=187c9808& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_template_id_187c9808___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-list.vue?vue&type=template&id=187c9808& */ 93);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_template_id_187c9808___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_template_id_187c9808___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_template_id_187c9808___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_template_id_187c9808___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 93:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HBuilderProjects/Combine/pages/user-list/user-list.vue?vue&type=template&id=187c9808& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  userList: function() {
    return __webpack_require__.e(/*! import() | components/user-list/user-list */ "components/user-list/user-list").then(__webpack_require__.bind(null, /*! @/components/user-list/user-list.vue */ 321))
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 94:
/*!******************************************************************************************!*\
  !*** D:/HBuilderProjects/Combine/pages/user-list/user-list.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-list.vue?vue&type=script&lang=js& */ 95);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 95:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HBuilderProjects/Combine/pages/user-list/user-list.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var swiperTabHead = function swiperTabHead() {__webpack_require__.e(/*! require.ensure | components/news/swiper-tab-head */ "components/news/swiper-tab-head").then((function () {return resolve(__webpack_require__(/*! ../../components/news/swiper-tab-head.vue */ 258));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var userList = function userList() {__webpack_require__.e(/*! require.ensure | components/user-list/user-list */ "components/user-list/user-list").then((function () {return resolve(__webpack_require__(/*! ../../components/user-list/user-list.vue */ 321));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var loadMore = function loadMore() {__webpack_require__.e(/*! require.ensure | components/common/load-more */ "components/common/load-more").then((function () {return resolve(__webpack_require__(/*! ../../components/common/load-more.vue */ 216));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var noThing = function noThing() {__webpack_require__.e(/*! require.ensure | components/common/no-thing */ "components/common/no-thing").then((function () {return resolve(__webpack_require__(/*! ../../components/common/no-thing.vue */ 195));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =



















































{
  components: {
    swiperTabHead: swiperTabHead,
    userList: userList,
    loadMore: loadMore,
    noThing: noThing },

  onLoad: function onLoad() {var _this = this;
    uni.getSystemInfo({
      success: function success(res) {
        var height = res.windowHeight - uni.upx2px(100); //uni.upx2px(100)是tabbar
        _this.swiperHeight = height;
      } });

  },
  data: function data() {
    return {
      swiperHeight: 600,
      tabIndex: 0,
      tabBars: [
      {
        name: '互关',
        id: 'eachOther',
        num: 10 },

      {
        name: '关注',
        id: 'uerFollow',
        num: 20 },

      {
        name: '粉丝',
        id: 'fans',
        num: 12 }],


      newsList: [
      {
        loadText: "上拉加载更多",
        list: [
        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 20,
          sex: 0,
          isFollow: false },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 21,
          sex: 1,
          isFollow: true },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 15,
          sex: 0,
          isFollow: false },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 26,
          sex: 0,
          isFollow: true },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 32,
          sex: 1,
          isFollow: false },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 42,
          sex: 1,
          isFollow: false },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 21,
          sex: 1,
          isFollow: true },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 15,
          sex: 0,
          isFollow: false },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 26,
          sex: 0,
          isFollow: true },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 32,
          sex: 1,
          isFollow: false }] },



      {
        loadText: "上拉加载更多",
        list: [
        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 20,
          sex: 0,
          isFollow: false },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 21,
          sex: 1,
          isFollow: true },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 15,
          sex: 0,
          isFollow: false },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 26,
          sex: 0,
          isFollow: true },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 32,
          sex: 1,
          isFollow: false },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 21,
          sex: 1,
          isFollow: true },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 15,
          sex: 0,
          isFollow: false },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 26,
          sex: 0,
          isFollow: true },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 32,
          sex: 1,
          isFollow: false },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 42,
          sex: 1,
          isFollow: false }] },



      {
        loadText: "上拉加载更多",
        list: [
        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 20,
          sex: 0,
          isFollow: false },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 21,
          sex: 1,
          isFollow: true },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 15,
          sex: 0,
          isFollow: false },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 26,
          sex: 0,
          isFollow: true },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 21,
          sex: 1,
          isFollow: true },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 15,
          sex: 0,
          isFollow: false },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 26,
          sex: 0,
          isFollow: true },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 32,
          sex: 1,
          isFollow: false },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 32,
          sex: 1,
          isFollow: false },

        {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 42,
          sex: 1,
          isFollow: false }] }] };





  },
  onNavigationBarButtonTap: function onNavigationBarButtonTap(e) {
    if (e.index == 0) {
      uni.navigateBack({
        delta: 1 });

    }
  },
  methods: {
    //点击事件
    tabtap: function tabtap(index) {
      this.tabIndex = index;
    },
    //滑动事件
    tabChange: function tabChange(e) {
      this.tabIndex = e.detail.current;
    },
    loadMore: function loadMore(index) {var _this2 = this;
      if (this.newsList[index].loadText != '上拉加载更多') {
        return;
      }
      //修改状态
      this.newsList[index].loadText = '加载中...';

      //获取数据
      setTimeout(function () {
        //获取完成
        var obj = {
          userPicture: 'https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/userPicture/tx12.jpeg',
          userName: '昵称',
          age: 20,
          sex: 0,
          isFollow: false };

        _this2.newsList[index].list.push(obj); //追加数据
        _this2.newsList[index].loadText = '上拉加载更多';
      }, 1000);
      //获取完成，没有数据了
      // this.newsList[index].loadText = '没有更多数据了';
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 96:
/*!**************************************************************************************************!*\
  !*** D:/HBuilderProjects/Combine/pages/user-list/user-list.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-list.vue?vue&type=style&index=0&lang=css& */ 97);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 97:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HBuilderProjects/Combine/pages/user-list/user-list.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[90,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user-list/user-list.js.map