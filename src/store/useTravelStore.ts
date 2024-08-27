import { ExtractState } from "@/lib/zustand";
import { TravelScheduleResponseSuccess } from "@/types/travel";
import { create, useStore } from "zustand";

type TravelStore = {
    stepTravel :number
    travelSchedule?: TravelScheduleResponseSuccess["data"][number];


    actions: {
      setStepTravelPayload : (stepTravelPayload : number)=> void;
      setTravelSchedule: (
        bookinPayload?: TravelScheduleResponseSuccess["data"][number]
      ) => void;
    };
  };

const travelStore = create<TravelStore>((set) => ({
    stepTravel: 1,
    travelSchedule: undefined,
    actions:{
        setStepTravelPayload :(stepTravelPayload:number) => set({stepTravel:stepTravelPayload}),
        setTravelSchedule: (travelSchedule) => set({ travelSchedule })
    }
}));

type Params<U> = Parameters<typeof useStore<typeof travelStore, U>>;


// Selectors
const stepTravelPayloadSelector = (state: ExtractState<typeof travelStore>) =>
    state.stepTravel;
const actionsSelector = (state: ExtractState<typeof travelStore>) =>
    state.actions;
const travelScheduleSelector = (state: ExtractState<typeof travelStore>) =>
    state.travelSchedule;

// getters
export const stepTravelPayload = () =>
    stepTravelPayloadSelector(travelStore.getState())
export const getTravelSchedule = () =>
    travelScheduleSelector(travelStore.getState());

//
export const getTravelActions = () => actionsSelector(travelStore.getState());


// 
function useTravelStore<U>(selector: Params<U>[1]) {
    return useStore(travelStore, selector);
  }
// 


// Hooks
export const useTravelStepPayloadPayload = () =>
    useTravelStore(stepTravelPayload);
export const useTravelSchedule = () => useTravelStore(travelScheduleSelector);

// 
export const useTravelActions = () => useTravelStore(actionsSelector);