import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  houseShifting: {
    singleBed: 0,
    doubleBed: 0,
  },
  homeCleaning: {
    fullHomeCleaning: 0,
    kitchenCleaning: 0,
    bathroomCleaning: 0,
    fullWindowCleaning: 0,
  },
  plumbing: {
    sinkRepair: 0,
    sinkInstallation: 0,
    waterTapRepair: 0,
    waterTapInstallation: 0,
  },
  homeAppliance: {
    oneTonAC: 0,
    twoTonAC: 0,
    threeTonAC: 0,
    fourTonAC: 0,
    oven: 0,
    washingMachine: 0,
    tv: 0,
  },
  electrician: {
    fan: 0,
    light: 0,
    mainBoard: 0,
  },
  summary: {
    name: "",
    items: [],
    subtotal: 0,
  },
};
const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addHouseShifting: (state, action) => {
      if (action.payload === "Single Bed / Room")
        state.houseShifting.singleBed += 1;
      else state.houseShifting.doubleBed += 1;
    },
    removeHouseShifting: (state, action) => {
      if (
        action.payload === "Single Bed / Room" &&
        state.houseShifting.singleBed > 0
      )
        state.houseShifting.singleBed -= 1;
      else if (
        action.payload === "Double Bed / Room" &&
        state.houseShifting.doubleBed > 0
      )
        state.houseShifting.doubleBed -= 1;
    },
    addHomeCleaning: (state, action) => {
      if (action.payload === "Full Home Cleaning")
        state.homeCleaning.fullHomeCleaning += 1;
      else if (action.payload === "Kitchen Cleaning")
        state.homeCleaning.kitchenCleaning += 1;
      else if (action.payload === "Bathroom Cleaning")
        state.homeCleaning.bathroomCleaning += 1;
      else if (action.payload === "Full Window Cleaning")
        state.homeCleaning.fullWindowCleaning += 1;
    },
    removeHomeCleaning: (state, action) => {
      if (
        action.payload === "Full Home Cleaning" &&
        state.homeCleaning.fullHomeCleaning > 0
      )
        state.homeCleaning.fullHomeCleaning -= 1;
      else if (
        action.payload === "Kitchen Cleaning" &&
        state.homeCleaning.kitchenCleaning > 0
      )
        state.homeCleaning.kitchenCleaning -= 1;
      else if (
        action.payload === "Bathroom Cleaning" &&
        state.homeCleaning.bathroomCleaning > 0
      )
        state.homeCleaning.bathroomCleaning -= 1;
      else if (
        action.payload === "Full Window Cleaning" &&
        state.homeCleaning.fullWindowCleaning > 0
      )
        state.homeCleaning.fullWindowCleaning -= 1;
    },
    addPlumbing: (state, action) => {
      if (action.payload === "Sink Repair") state.plumbing.sinkRepair += 1;
      else if (action.payload === "Sink Installation")
        state.plumbing.sinkInstallation += 1;
      else if (action.payload === "Water Tap Repair")
        state.plumbing.waterTapRepair += 1;
      else if (action.payload === "Water Tap Installation")
        state.plumbing.waterTapInstallation += 1;
    },
    removePlumbing: (state, action) => {
      if (action.payload === "Sink Repair" && state.plumbing.sinkRepair > 0)
        state.plumbing.sinkRepair -= 1;
      else if (
        action.payload === "Sink Installation" &&
        state.plumbing.sinkInstallation > 0
      )
        state.plumbing.sinkInstallation -= 1;
      else if (
        action.payload === "Water Tap Repair" &&
        state.plumbing.waterTapRepair > 0
      )
        state.plumbing.waterTapRepair -= 1;
      else if (
        action.payload === "Water Tap Installation" &&
        state.plumbing.waterTapInstallation > 0
      )
        state.plumbing.waterTapInstallation -= 1;
    },
    addHomeAppliance: (state, action) => {
      if (action.payload === "1 Ton AC") state.homeAppliance.oneTonAC += 1;
      else if (action.payload === "2 Ton AC") state.homeAppliance.twoTonAC += 1;
      else if (action.payload === "3 Ton AC")
        state.homeAppliance.threeTonAC += 1;
      else if (action.payload === "4 Ton AC")
        state.homeAppliance.fourTonAC += 1;
      else if (action.payload === "Oven") state.homeAppliance.oven += 1;
      else if (action.payload === "TV") state.homeAppliance.tv += 1;
      else if (action.payload === "Washing Machine")
        state.homeAppliance.washingMachine += 1;
    },
    removeHomeAppliance: (state, action) => {
      if (action.payload === "1 Ton AC" && state.homeAppliance.oneTonAC > 0)
        state.homeAppliance.oneTonAC -= 1;
      else if (
        action.payload === "2 Ton AC" &&
        state.homeAppliance.twoTonAC > 0
      )
        state.homeAppliance.twoTonAC -= 1;
      else if (
        action.payload === "3 Ton AC" &&
        state.homeAppliance.threeTonAC > 0
      )
        state.homeAppliance.threeTonAC -= 1;
      else if (
        action.payload === "4 Ton AC" &&
        state.homeAppliance.fourTonAC > 0
      )
        state.homeAppliance.fourTonAC -= 1;
      else if (action.payload === "Oven" && state.homeAppliance.oven > 0)
        state.homeAppliance.oven += 1;
      else if (action.payload === "TV" && state.homeAppliance.tv > 0)
        state.homeAppliance.tv -= 1;
      else if (
        action.payload === "Washing Machine" &&
        state.homeAppliance.washingMachine > 0
      )
        state.homeAppliance.washingMachine -= 1;
    },
    addElectrician: (state, action) => {
      if (action.payload === "Ceiling Fan Service") state.electrician.fan += 1;
      else if (action.payload === "Light Servicing")
        state.electrician.light += 1;
      else if (action.payload === "Main Board Servicing")
        state.electrician.mainBoard += 1;
    },
    removeElectrician: (state, action) => {
      if (action.payload === "Ceiling Fan Service" && state.electrician.fan > 0)
        state.electrician.fan -= 1;
      else if (
        action.payload === "Light Servicing" &&
        state.electrician.light > 0
      )
        state.electrician.light -= 1;
      else if (
        action.payload === "Main Board Servicing" &&
        state.electrician.mainBoard > 0
      )
        state.electrician.mainBoard -= 1;
    },
    addSummary: (state, action) => {
      state.summary = action.payload;
    },
    removeSummary: (state) => {
      state.summary.items = [];
      state.summary.name = "";
      state.summary.subtotal = 0;
    },
  },
});

export const {
  addElectrician,
  addHomeAppliance,
  addHomeCleaning,
  addHouseShifting,
  addPlumbing,
  addSummary,
  removeSummary,
  removeElectrician,
  removeHomeAppliance,
  removeHomeCleaning,
  removeHouseShifting,
  removePlumbing,
} = addToCartSlice.actions;

export default addToCartSlice.reducer;
