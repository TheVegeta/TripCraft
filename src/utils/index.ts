import { FC, memo, MemoExoticComponent } from "react";
import isEqual from "react-fast-compare";
import { Dimensions } from "react-native";

type IFastMemo = <T>(component: FC<T>) => MemoExoticComponent<FC<T>>;

export const fastMemo: IFastMemo = (component) => memo(component, isEqual);

export const windowWidth = Dimensions.get("window").width;

export const windowHeight = Dimensions.get("window").height;

export const animationDuration = 200;
