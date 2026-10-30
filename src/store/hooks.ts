import { useDispatch, useSelector, useStore } from "react-redux";
import {AppDispatch, AppStore, RootState} from "./index";

// Versi hook bawaan yang sudah tahu tipe store kita

export const useAppDispatch = useDispatch.withTypes<AppDispatch> ();
export const useAppSelector = useSelector.withTypes<RootState> ();
export const useAppStore = useStore.withTypes<AppStore> ();