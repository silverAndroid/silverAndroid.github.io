import React, { useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js";

export interface TypedComponentProps extends TypedOptions {
  as?: React.ElementType;
}

export function TypedComponent({
  as: WrapperComponent = "span",
  ...typedOptions
}: TypedComponentProps) {
  const typed = useRef<Typed>();
  const el = useRef<React.ReactNode>();

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current as Element, typedOptions);
    }

    return () => {
      typed.current?.destroy();
    };
  }, [el]);

  return <WrapperComponent ref={el}></WrapperComponent>;
}
