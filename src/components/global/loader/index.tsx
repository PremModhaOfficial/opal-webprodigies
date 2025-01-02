import React, { ReactNode } from "react";
import { Spinner } from "./Spinner";
import { cn } from "@/lib/utils";

type Props = {
  state: boolean;
  className?: string;
  color?: string;
  children?: ReactNode;
};

function Loader({ state, className, children, color }: Props) {
  return state ? (
    <div className={cn(className)}>
      <Spinner color={color} />
    </div>
  ) : (
    children
  );
}

export default Loader;
