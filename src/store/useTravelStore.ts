import { ExtractState } from "@/lib/zustand";
import { PassengerSeat, TravelScheduleQuery, TravelScheduleResponseSuccess } from "@/types/travel";
import { create, useStore } from "zustand";

type TravelStore = {
  stepTravel: number;
  travelSchedule?: TravelScheduleResponseSuccess["data"][number];
  pointToPointPayload?: {
    from?: string;
    to?: string;
  };
  bookingPayload?: TravelScheduleQuery;
  passenger: PassengerSeat[];

  actions: {
    setStepTravelPayload: (stepTravelPayload: number) => void;
    setTravelSchedule: (
      bookinPayload?: TravelScheduleResponseSuccess["data"][number]
    ) => void;
    setPointToPointPayload: (bookinPayload?: {
      from?: string;
      to?: string;
    }) => void;
    setBookingPayload: (bookinPayload?: TravelScheduleQuery) => void;
    setPassenger: (bookinPayload: PassengerSeat[]) => void;
  };
};

const travelStore = create<TravelStore>((set) => ({
  stepTravel: 1,
  travelSchedule: undefined,
  bookingPayload: undefined,
  passenger: [],
  actions: {
    setStepTravelPayload: (stepTravelPayload: number) =>
      set({ stepTravel: stepTravelPayload }),
    setPointToPointPayload: (pointToPointPayload) =>
      set({ pointToPointPayload: pointToPointPayload }),
    setTravelSchedule: (travelSchedule) => set({ travelSchedule }),
    setBookingPayload: (bookingPayload) => set({ bookingPayload }),
    setPassenger: (passenger) => set({ passenger }),
  },
}));

type Params<U> = Parameters<typeof useStore<typeof travelStore, U>>;

// Selectors
const stepTravelPayloadSelector = (state: ExtractState<typeof travelStore>) =>
  state.stepTravel;
const actionsSelector = (state: ExtractState<typeof travelStore>) =>
  state.actions;
const travelScheduleSelector = (state: ExtractState<typeof travelStore>) =>
  state.travelSchedule;
const pointToPointPayloadSelector = (state: ExtractState<typeof travelStore>) =>
    state.pointToPointPayload;
const bookingPayloadSelector = (state: ExtractState<typeof travelStore>) =>
    state.bookingPayload;
const travelPassengerSelector = (state: ExtractState<typeof travelStore>) =>
  state.passenger;

// getters
export const stepTravelPayload = () =>
  stepTravelPayloadSelector(travelStore.getState());
export const getTravelSchedule = () =>
  travelScheduleSelector(travelStore.getState());
export const getPointToPointPayload = () =>
    pointToPointPayloadSelector(travelStore.getState());
export const getbookingPayload = () =>
    bookingPayloadSelector(travelStore.getState());
export const getTravelPassenger = () =>
  travelPassengerSelector(travelStore.getState());
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
export const useTravelPointToPointPayload = () =>
    useTravelStore(pointToPointPayloadSelector);
export const useTravelbookingPayload = () =>
    useTravelStore(bookingPayloadSelector);
export const useTravelPassenger = () => useTravelStore(travelPassengerSelector);
//
export const useTravelActions = () => useTravelStore(actionsSelector);
