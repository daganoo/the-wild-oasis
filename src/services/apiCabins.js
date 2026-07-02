import { mockCabins } from "../data/mockData";

export async function getCabins() {
  return mockCabins;
}

export async function createEditCabin(newCabin, id) {
  if (id) return { id, ...newCabin };
  return { id: mockCabins.length + 1, ...newCabin };
}

export async function deleteCabin() {
  return null;
}
