import {
  LazyRouteFunction,
  RouteObject,
  ShouldRevalidateFunction,
} from "react-router-dom";

export interface IRoute {
  id?: number;
  path?: string;
  index?: boolean;
  exact?: boolean;
  children?: React.ReactNode;
  caseSensitive?: boolean;
  element?: React.ReactNode | null;
  component: React.ComponentType | null;
  handle?: RouteObject["handle"];
  shouldRevalidate?: ShouldRevalidateFunction;
  lazy?: LazyRouteFunction<RouteObject>;
  isProtectedRoute?: boolean;
}
