import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupRemoveByName(groupDetedeted: string) {
  try {
    const storageGroups = await groupsGetAll();
    const groups = storageGroups.filter((group) => group !== groupDetedeted);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDetedeted}`);
  } catch (error) {
    throw error;
  }
}
