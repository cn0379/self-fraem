/**
 * 命名规范
 * 添加前缀: ADD_XXX
 * 删除前缀: DEL_XXX
 * 修改前缀: UPDATE_XXX
 * 设置前缀: SET_XXX
 * 其他个性前缀尽量简洁易懂
 */
// app
export const ADD_VISITED_VIEW = 'add_visited_view' // 新增访问页面记录tag
export const DEL_VISITED_VIEW = 'del_visited_view' // 删除访问页面记录tag
export const CLEAR_VISITED_VIEW = 'clear_visited_view' // 清空访问页面记录tag
export const SET_COLLAPSED = 'set_collapsed' // 设置菜单伸缩

// user
export const SET_NAME = 'set_name' // 设置用户名
export const SET_AVATAR = 'set_avatar' // 设置用户头像
export const SET_ROLES = 'set_roles' // 设置用户角色权限
export const SET_TOKEN = 'set_token' // 设置token

// permission
export const SET_ROUTES = 'set_routes' // 设置可访问路由

// page
export const SET_ACTION_ROW = 'set_action_row' // 设置操作行数据
export const SET_FORM_DATA = 'set_form_data' // 设置表单数据
export const SET_FORM_RULES = 'set_form_rules' // 设置表单校验规则
export const SET_MODAL_VISIBLE = 'set_modal_visible' // 设置模态框显示状态
export const SET_MODAL_TYPE = 'set_modal_type' // 设置模态框类型
export const SET_MODAL_DATA = 'set_modal_data' // 设置模态框数据
export const SET_MODAL_LOADING = 'set_modal_loading' // 设置模态框loading
export const SET_RULE_STATE = 'set_rule_state' // 设置表单校验状态
