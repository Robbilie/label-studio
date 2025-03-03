const FEATURE_FLAGS = window.APP_SETTINGS?.feature_flags || {};

// Fix displaying of created_at in the review mode
export const FF_DEV_1480 = "ff_front_dev_1480_created_on_in_review_180122_short";
// Fix avatar blinking and stuck on organization page
export const FF_DEV_1495 = "ff_front_dev_1495_avatar_mess_210122_short";
// Notifications
export const FF_DEV_1658 = "ff_front_dev_1658_notification_center_170222_short";
// Add rejected icon on the cards
export const FF_DEV_1614 = "ff_back_1614_rejected_queue_17022022_short";
// Model version selector per model backend
export const FF_DEV_1682 = "ff_front_dev_1682_model_version_dropdown_070622_short";
// Project list performance improvements
export const FF_DEV_2575 = "ff_front_dev_2575_projects_list_performance_280622_short";
// Fixes how presigned urls are generated and accessed to remove possibility of CORS errors.
export const FF_LSDV_4711 = "fflag_fix_all_lsdv_4711_cors_errors_accessing_task_data_short";
// Enables "Enterprise Awareness" features
export const FF_LSDV_E_297 = "fflag_feat_front_lsdv_e_297_increase_oss_to_enterprise_adoption_short";

export function isFF(id) {
  if ( id === FF_LSDV_E_297 ) return true;

  if (id in FEATURE_FLAGS) {
    return FEATURE_FLAGS[id] === true;
  }
  else {
    return window.APP_SETTINGS?.feature_flags_default_value === true;
  }
}

