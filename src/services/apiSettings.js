import { mockSettings } from "../data/mockData";

export async function getSettings() {
  return mockSettings;
}

export async function updateSetting(newSetting) {
  Object.assign(mockSettings, newSetting);
  return mockSettings;
}
