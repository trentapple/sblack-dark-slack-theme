// ==UserScript==
// @name          Sblack v0.7.0
// @namespace     http://userstyles.org
// @description	  Sblack is a black version of team messenger Slack.
// @author        pp.amorim (enhanced by t.apple)
// @homepage      http://userstyles.org/styles/100139
// @include       http://slack.com/*
// @include       https://slack.com/*
// @include       http://*.slack.com/*
// @include       https://*.slack.com/*
// @run-at        document-start
// ==/UserScript==
(function() {
    var css = "#team_menu, #col_channels, .channels_list_holder h2,\n #current_user_name, #active_channel_name, #active_channel_name .name,\n  .light_theme .message, .light_theme .message_sender, .light_theme .message .timestamp,\n  #menu, .menu_example, #emoji_menu,\n  .light_theme h1, .light_theme h2, .light_theme h3, .light_theme h4, .day_divider_label,\n  #channel_members_toggle, ul.member_list li, .activity_item, .file_name, h1, .large_bottom_margin,\n  #message-input, .color_U025CNWU6, textarea, input[type=\"text\"], input[type=\"password\"], input[type=\"datetime\"], input[type=\"datetime-local\"], input[type=\"date\"], input[type=\"month\"], input[type=\"time\"], input[type=\"week\"], input[type=\"number\"], input[type=\"email\"], input[type=\"url\"], input[type=\"search\"], input[type=\"tel\"], input[type=\"color\"], .uneditable-input, #loading_indicator, #loading_welcome_msg {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    color: #999 !important;\n  }\n  \n	.mention {\n	color: #FFFFFF !important;\n	background-color: #296aab !important;\n }\n  \n    html, .padded {\n        \n        background: #333 !important;\n        border-color: #333 !important;\n    \n    }\n    \n  #channel_members_toggle {\n  background: transparent !important;\n  }\n    \n    .overflow-ellipsis:hover {\n        background: transparent !important; \n    }\n    \n  #file_list_button {\nbackground: transparent !important;        \n    }\n    \n    p.alert-notice {\n        color: #999 !important;\n    }\n    \n    .alert-error {\n        background: #BF542D !important;      \n        border-color: #333 !important;\n    }\n    \n    p.alert-error {\n        color: #FFF !important;\n        text-shadow: 0px 2px #222;\n    }\n    \n    a.bold {\n         text-shadow: 0px 1px #333;\n    }\n    \n     .file_list_toggle, input, .alert-notice {\n        background: #444 !important;\n        border-color: #333 !important;\n    }\n    \n    .snippet_preview  {\n        background: #000 !important;\n        border-color: #333 !important;\n    }\n    \n  #help_icon, #flex_menu, #flex_toggle, .btn-outline {\n        background: #333 !important;\n        border-color: #222 !important;\n    }\n  \n  #team_menu, .CodeMirror-linenumbers, #menu {\n  background: #333 !important;\n  }\n  \n  .light_theme, #loading_welcome {\n  background: #333;\n  }\n    \n  #banner {\n  background: #000;\n  }\n    \n  .monkey_scroll_handle_inner  {\n  background: #444 !important;\n  border-color: #222  !important;\n  }\n    \n  #message-input {\n  background: #292929 !important;\n  border-color: #313131 !important;\n  }\n  \n  .day_divider, .day_divider_label {\n  background-color: #191919 !important;\n  }\n  \n  hr, .attachment_bar {\n  /*background: #000 !important;*/\n  border-color: #3A3A3A !important;\n  }\n  \n  .monkey_scroller, .monkey_scroll_wrapper, .msg_actions {\n  background: #191919 !important;\n  }\n  \n  .file_upload_btn {\n  background: #292929 !important;\n  border-color: #313131 !important;\n  }\n  \n  #messages-input-container, #user_menu, #menu_items_scroller {\n  background: #444 !important;\n  border-color: #444 !important;\n  }\n    \n    #menu_items, #team_activity {\n        background: transparent !important;\n    }\n  \n  .search_input {\n  background: #444 !important;\n  border-color: #222 !important;\n  }\n  \n  \n  #header {\n  background: #333 !important;\n  }\n  \n  #footer {\n  background: transparent !important;\n  }\n  \n  #msgs_unread_divider.unread_divider .divider_label {\n  background: #000 !important;\n  color: #FFF !important;\n  padding: 4px !important;\n  }\n  \n  .sssh-property {\n  color: #FFF !important;\n  }\n  \n  .monkey_scroll_bar {\n  background: #333 !important;\n  }\n  \n  #file_preview_container {\n  background: #000;\n  }\n  \n  .heading , .toolbar, .menu_heading{\n  background: #222 !important;\n  }\n  \n  .CodeMirror {\n  background-color:#fff !important;\n  }\n  \n  ts-message.active:not(.standalone):not(.multi_delete_mode), ts-message:hover:not(.standalone):not(.multi_delete_mode) {\n  background-color: #1D1D1D !important;\n  }\n  ts-message .action_hover_container a {\n  background-color: #232323 !important;\n  }\n  .menu ul li a:not(:hover) {\n  background-color: #555555 !important; color: #fff !important;\n  }\n  #omnibox {\n  color: #ddd; background-color: #7F7F83 !important;\n  }\n  #omnibox #omnibox_help {\n  color: #fff !important;\n  }\n  .light_theme ts-message .message_content .message_sender {\n  color: #999999 !important;\n  }\n  #msgs_div .unread_divider.adjacent_to_date {\n  background: none !important;\n }\n  #fs_modal #fs_modal_sidebar a {\n  color: #FFFFFF !important;\n  }\n  #member_preview_scroller .member_data_table.team_profile_fields tr, #member_preview_web_container .member_data_table.team_profile_fields tr, #team_list .member_data_table.team_profile_fields tr, .menu_member_header .member_data_table.team_profile_fields tr {\n  color: #C2C2C2 !important;\n }\n  #member_preview_scroller .member_data_table.team_profile_fields a, #member_preview_web_container .member_data_table.team_profile_fields a, #team_list .member_data_table.team_profile_fields a, .menu_member_header .member_data_table.team_profile_fields a {\n  color: #C2C2C2 !important;\n }\n  #member_preview_scroller .member_details.feature_custom_fields .member_name_and_presence .member_name, #member_preview_web_container .member_details.feature_custom_fields .member_name_and_presence .member_name, .menu_member_header .member_details.feature_custom_fields .member_name_and_presence .member_name {\n  color: #AAAAAA !important;\n }\n  #member_preview_scroller .member_details.feature_custom_fields .member_title, #member_preview_web_container .member_details.feature_custom_fields .member_title, .menu_member_header .member_details.feature_custom_fields .member_title {\n  color: #C2C2C2 !important;\n }\n  #member_preview_scroller .member_data_table.team_profile_fields a:hover, #member_preview_web_container .member_data_table.team_profile_fields a:hover, #team_list .member_data_table.team_profile_fields a:hover, .menu_member_header .member_data_table.team_profile_fields a:hover {\n  color: #439fe0 !important;\n }\n  #col_flex {\n  background: none !important;\n }\n  .menu_member_footer {\n  background: transparent !important;\n  border-top: 1px solid #333 !important;\n }\n  #flex_contents .heading a, #flex_contents .heading {\n  color: #888 !important;\n }\n  #flex_contents .heading a:hover {\n  color: #2a80b9 !important;\n  text-decoration: none !important;\n }\n  .flex_menu ul li.highlighted a, .flex_menu:not(.keyboard_active) ul li:hover:not(.disabled) a {\n  background-color: #2a80b9 !important;\n  color: #FFFFFF !important;\n }\n  #emoji_menu h3 {\n  background: none !important;\n }\n  .menu .section_header .header_label, #autocomplete_menu .section_header .header_label {\n  background-color: #444 !important;\n  color: #bcbcbc !important;\n }\n  .menu #menu_footer .menu_footer, .mini {\n  background: none !important;\n  color: #AAA !important;\n }\n  .menu {\n  background-color: #444 !important;\n }\n  #active_channel_name.active .prefix, #active_channel_name:hover .prefix {\n  color: #CCC !important;\n }\n  #channel_members_toggle:hover .channel_members_toggle_icon { color: #AAAAAA !important;\n }\n  #header_search_form.search_form .icon_search {\n  color: #CCC !important;\n }\n  #client-ui #header_search_form.search_form .icon_close {\n  opacity: 0.9;\n }\n  #autocomplete_menu {\n  color: #CCC !important;\n }\n  #autocomplete_menu ol li:hover {\n  background-color: #333 !important\n }\n";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();

function overrideSblackAuthorCSS() {
    // override author css
    var css = ".light_theme ts-message .message_content .member {\n  color: #999999 !important;\n  }\n  a.message_sender {\n  color: #999999 !important;\n  }";
    
    if (typeof GM_addStyle != "undefined") {
        GM_addStyle(css);
    } else if (typeof PRO_addStyle != "undefined") {
        PRO_addStyle(css);
    } else if (typeof addStyle != "undefined") {
        addStyle(css);
    } else {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        var heads = document.getElementsByTagName("head");
        if (heads.length > 0) {
            heads[0].appendChild(node); 
        } else {
            // no head yet, stick it whereever
            document.documentElement.appendChild(node);
        }
    }
    }

window.onload = function() {
    // change title of favorites
    document.getElementById('starred_section_header').innerHTML = '<i class="ts_icon ts_icon_user" style="font-size: 14px;"></i> Frequent</h2>';
    
    setTimeout(overrideSblackAuthorCSS, 3000);
    
    setTimeout(overrideSblackAuthorCSS, 5000);
}

setTimeout(overrideSblackAuthorCSS, 5000);
setTimeout(overrideSblackAuthorCSS, 8000);
