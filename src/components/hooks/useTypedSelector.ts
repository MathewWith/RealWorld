import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootType } from "src/store/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootType> = useSelector