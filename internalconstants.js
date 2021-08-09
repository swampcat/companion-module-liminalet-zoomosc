var ZOSC = require('./zoscconstants.js');
/** Struct for actions
 @param <TYPE>_ACTION The OSC message part to be matched (case insensitive
 @param title The title of the message (human readable
 @param isPro An action that requires a pro license to function
 @param isNDI An Action that only functions with zoomNDI
 @param requireCoHost The hostMode required for the action to be run
 @param mustForward Whether the action must be forwarded (by chat or similar  to act on a remote user
 @param preferForward Whether the action prefers to forward to a remote user (but can act locally if required
 @param maxGroupSize The maximum group size that the action can act on (or -1 for infinite
 @param description The (human readable  description of the message
 */

var enums = {};

var keywords = {

 ZOSC_MSG_TARGET_PART_SELECTION  :  "selection",
 ZOSC_MSG_TARGET_PART_LISTINDEX : "listIndex",
 ZOSC_MSG_TARGET_PART_FAVORITES_INDEX : "favoritesIndex",

};

var actions = {

//user action address parts
//in the form /zoom[/galIndex | /zoomID]/{msg_part// {int INDEX | int galIndex | int zoomID | string userName//

SELECTION_GROUP : { TITLE:"Selection Actions", ARGS: "", DESCRIPTION: "Select users for batch actions", MESSAGES: {

 ZOSC_MSG_PART_LIST_ADD_SELECTION : {INTERNAL_ACTION:"addSelection", TITLE:"Add to Selection", ISPRO: false, ISNDI: false, REQUIRE_HOST: enums.Host_Mode_None, MUST_FORWARD: true, PREFER_FORWARD: false, GROUP_SIZE: -1, ARG_COUNT: 0, DESCRIPTION: "Add user(s to selection group" },

 ZOSC_MSG_PART_LIST_REMOVE_SELECTION : {INTERNAL_ACTION:"removeSelection", TITLE:"Remove from Selection", ISPRO: false, ISNDI: false, REQUIRE_HOST: enums.Host_Mode_None, MUST_FORWARD: true, PREFER_FORWARD: false, GROUP_SIZE: -1, ARG_COUNT: 0, DESCRIPTION: "Remove user(s from selection group" },

 ZOSC_MSG_PART_LIST_TOGGLE_SELECTION : {INTERNAL_ACTION:"toggleSelection", TITLE:"Toggle Selection", ISPRO: false, ISNDI: false, REQUIRE_HOST: enums.Host_Mode_None, MUST_FORWARD: true, PREFER_FORWARD: false, GROUP_SIZE: -1, ARG_COUNT: 0, DESCRIPTION: "Adds user if not present, removes user if already present" },

 ZOSC_MSG_PART_LIST_SINGLE_SELECTION : {INTERNAL_ACTION:"singleSelection", TITLE:"Single Selection", ISPRO: false, ISNDI: false, REQUIRE_HOST: enums.Host_Mode_None, MUST_FORWARD: true, PREFER_FORWARD: false, GROUP_SIZE: -1, ARG_COUNT: 0, DESCRIPTION: "Adds user and toggles all other users off" },

 ZOSC_MSG_PART_LIST_CLEAR_SELECTION : {INTERNAL_ACTION:"clearSelection", TITLE:"Clear Selection", ISPRO: false, ISNDI: false, REQUIRE_HOST: enums.Host_Mode_None, MUST_FORWARD: true, PREFER_FORWARD: false, GROUP_SIZE: -1, ARG_COUNT: 0, DESCRIPTION: "Clear all users in selection group" },

 ZOSC_MSG_PART_SELECT_AUDIO_STATUS : {INTERNAL_ACTION:"addUnmutedToSelection", TITLE:"Add unmuted users to selection", ISPRO: false, ISNDI: false, REQUIRE_HOST: enums.Host_Mode_None, MUST_FORWARD: true, PREFER_FORWARD: false, GROUP_SIZE: -1, ARG_COUNT: 0, DESCRIPTION: "Add all unmuted users to selection group" },

 ZOSC_MSG_PART_SELECT_VIDEO_STATUS : {INTERNAL_ACTION:"addVideoOnToSelection", TITLE:"Add video on users to selection", ISPRO: false, ISNDI: false, REQUIRE_HOST: enums.Host_Mode_None, MUST_FORWARD: true, PREFER_FORWARD: false, GROUP_SIZE: -1, ARG_COUNT: 0, DESCRIPTION: "Add all users with video on to selection group" },

 ZOSC_MSG_PART_SELECT_SPOTLIGHT_STATUS : {INTERNAL_ACTION:"addSpotlitToSelection", TITLE:"Add spotlit users to selection", ISPRO: false, ISNDI: false, REQUIRE_HOST: enums.Host_Mode_None, MUST_FORWARD: true, PREFER_FORWARD: false, GROUP_SIZE: -1, ARG_COUNT: 0, DESCRIPTION: "Add all currently spotlit users to selection group" },

 ZOSC_MSG_PART_SELECT_PIN1_STATUS : {INTERNAL_ACTION:"addPin1ToSelection", TITLE:"Add users pinned to screen 1 to selection", ISPRO: false, ISNDI: false, REQUIRE_HOST: enums.Host_Mode_None, MUST_FORWARD: true, PREFER_FORWARD: false, GROUP_SIZE: -1, ARG_COUNT: 0, DESCRIPTION: "Add all users pinned to screen 1 to selection group" },

 ZOSC_MSG_PART_SELECT_HAND_STATUS : {INTERNAL_ACTION:"addRaisedHandToSelection", TITLE:"Add users with raised hand to selection", ISPRO: false, ISNDI: false, REQUIRE_HOST: enums.Host_Mode_None, MUST_FORWARD: true, PREFER_FORWARD: false, GROUP_SIZE: -1, ARG_COUNT: 0, DESCRIPTION: "Add all users with raised hands to selection group" },

 ZOSC_MSG_PART_SELECT_HOSTS : {INTERNAL_ACTION:"addHostsToSelection", TITLE:"Add host and cohost users to selection", ISPRO: false, ISNDI: false, REQUIRE_HOST: enums.Host_Mode_None, MUST_FORWARD: true, PREFER_FORWARD: false, GROUP_SIZE: -1, ARG_COUNT: 0, DESCRIPTION: "Add all host and cohost users to selection group" },
 
 ZOSC_MSG_PART_SELECT_FAVORITES : {INTERNAL_ACTION:"addFavoritesToSelection", TITLE:"Add favorite users to selection", ISPRO: false, ISNDI: false, REQUIRE_HOST: enums.Host_Mode_None, MUST_FORWARD: true, PREFER_FORWARD: false, GROUP_SIZE: -1, ARG_COUNT: 0, DESCRIPTION: "Add all favorite users to selection group" },

 ZOSC_MSG_PART_SELECT_ATTENDEES : {INTERNAL_ACTION:"addAttendeesToSelection", TITLE:"Add attendee users to selection", ISPRO: false, ISNDI: false, REQUIRE_HOST: enums.Host_Mode_None, MUST_FORWARD: true, PREFER_FORWARD: false, GROUP_SIZE: -1, ARG_COUNT: 0, DESCRIPTION: "Add all attendee users to selection group" },

 ZOSC_MSG_PART_SELECT_PARTICIPANTS : {INTERNAL_ACTION:"addParticipantsToSelection", TITLE:"Add participant or panalist users to selection", ISPRO: false, ISNDI: false, REQUIRE_HOST: enums.Host_Mode_None, MUST_FORWARD: true, PREFER_FORWARD: false, GROUP_SIZE: -1, ARG_COUNT: 0, DESCRIPTION: "Add all participant or panalist users to selection group" },
}},

FAVORITES_GROUP : { TITLE:"Favorites Actions", ARGS: "", DESCRIPTION: "Mark users as favorites for stable targeting", MESSAGES: {

 ZOSC_MSG_PART_ADD_FAVORITE : {INTERNAL_ACTION:"addFavorite", TITLE:"Add to Favorites", ISPRO: false, ISNDI: false, REQUIRE_HOST: enums.Host_Mode_None, MUST_FORWARD: true, PREFER_FORWARD: false, GROUP_SIZE: -1, ARG_COUNT: 0, DESCRIPTION: "Mark user as Favorite and create favorite ID" },

 ZOSC_MSG_PART_ADD_SELECTION_TO_FAVORITES : {INTERNAL_ACTION:"addSelectionToFavorites", TITLE:"Add Selection to Favorites", ISPRO: false, ISNDI: false, REQUIRE_HOST: enums.Host_Mode_None, MUST_FORWARD: true, PREFER_FORWARD: false, GROUP_SIZE: -1, ARG_COUNT: 0, DESCRIPTION: "Mark all selected users as Favorites and create favorite ID" },

 ZOSC_MSG_PART_REMOVE_FAVORITE : {INTERNAL_ACTION:"removeFavorite", TITLE:"Remove from Favorites", ISPRO: false, ISNDI: false, REQUIRE_HOST: enums.Host_Mode_None, MUST_FORWARD: true, PREFER_FORWARD: false, GROUP_SIZE: -1, ARG_COUNT: 0, DESCRIPTION: "Remove user(s from favorites" },

 ZOSC_MSG_PART_TOGGLE_FAVORITE : {INTERNAL_ACTION:"toggleFavorite", TITLE:"Toggle Favorite", ISPRO: false, ISNDI: false, REQUIRE_HOST: enums.Host_Mode_None, MUST_FORWARD: true, PREFER_FORWARD: false, GROUP_SIZE: -1, ARG_COUNT: 0, DESCRIPTION: "Adds user if not present, removes user if already present" },

 ZOSC_MSG_PART_CLEAR_FAVORITES : {INTERNAL_ACTION:"clearFavorites", TITLE:"Clear Favorites", ISPRO: false, ISNDI: false, REQUIRE_HOST: enums.Host_Mode_None, MUST_FORWARD: true, PREFER_FORWARD: false, GROUP_SIZE: -1, ARG_COUNT: 0, DESCRIPTION: "Clear all users from favorites" },
}}
};

var outputLastPartMessages = {};
var outputFullMessages = {};

 if (module != undefined)  module.exports = {
     enums: {...ZOSC.enums, ...enums}, 
     keywords : {...ZOSC.keywords, ...keywords}, 
     actions : {...ZOSC.actions, ...actions},   
     outputLastPartMessages : {...ZOSC.outputLastPartMessages, ...outputLastPartMessages}, 
     outputFullMessages : {...ZOSC.outputFullMessages, ...outputFullMessages}
    };

//endif /* ZOSCConstants_h */