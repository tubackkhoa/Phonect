/**
 * PhonectIcon icon set component.
 * Usage: <PhonectIcon name="icon-name" size={20} color="#4F8EF7" />
 */

import createIconSet from 'react-native-vector-icons/lib/create-icon-set';
export const glyphMap = {
  "new-sim-card": 97,
  "people": 98,
  "available": 99,
  "people-active": 101,
  "busy": 102,
  "call": 103,
  "plus": 104,
  "profile": 105,
  "profile-active": 106,
  "company": 107,
  "data": 108,
  "call-active": 109,
  "setting": 110,
  "setting-active": 111,
  "data-active": 112,
  "holiday": 113,
  "sms": 114,
  "up-arrow": 115,
  "home": 116,
  "hover-sim-card": 117,
  "meeting": 118,
  "mobile": 119,
  "away": 120,
  "search": 100,
  "sick": 121
};

const iconSet = createIconSet(glyphMap, 'phonect', 'PhonectIcon.ttf');

export default iconSet;

export const Button = iconSet.Button;
export const TabBarItem = iconSet.TabBarItem;
export const TabBarItemIOS = iconSet.TabBarItemIOS;
export const ToolbarAndroid = iconSet.ToolbarAndroid;
export const getImageSource = iconSet.getImageSource;

