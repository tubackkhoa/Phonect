/**
 * PhonectIcon icon set component.
 * Usage: <PhonectIcon name="icon-name" size={20} color="#4F8EF7" />
 */

import createIconSet from 'react-native-vector-icons/lib/create-icon-set';
export const glyphMap = {
  "available": 59648,
  "away": 59649,
  "busy": 59650,
  "call": 59651,
  "call-active": 59652,
  "company": 59653,
  "data": 59654,
  "data-active": 59655,
  "holiday": 59656,
  "home": 59657,
  "hover-sim-card": 59658,
  "meeting": 59659,
  "mobile": 59660,
  "new-sim-card": 59661,
  "people": 59662,
  "people-active": 59663,
  "plus": 59664,
  "profile": 59665,
  "profile-active": 59666,
  "search": 59667,
  "setting": 59668,
  "setting-active": 59669,
  "sick": 59670,
  "sms": 59671,
  "up-arrow": 59672
};

const iconSet = createIconSet(glyphMap, 'icomoon', 'phonect.ttf');

export default iconSet;

export const Button = iconSet.Button;
export const TabBarItem = iconSet.TabBarItem;
export const TabBarItemIOS = iconSet.TabBarItemIOS;
export const ToolbarAndroid = iconSet.ToolbarAndroid;
export const getImageSource = iconSet.getImageSource;

