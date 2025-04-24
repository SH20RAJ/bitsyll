"use client";
import { cva } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";

import { cn } from "@/lib/utils";

const DEFAULT_SIZE = 42;
const DEFAULT_MAGNIFICATION = 48; // Reduced magnification
const DEFAULT_DISTANCE = 100; // Reduced distance for more subtle effect

const dockVariants = cva(
  "supports-backdrop-blur:bg-blue-800/80 supports-backdrop-blur:dark:bg-blue-900/80 mx-auto mt-8 flex h-[60px] w-max items-center justify-center gap-3 rounded-xl border border-blue-700 p-2 backdrop-blur-md shadow-lg"
);

const Dock = React.forwardRef((
  {
    className,
    children,
    iconSize = DEFAULT_SIZE,
    iconMagnification = DEFAULT_MAGNIFICATION,
    iconDistance = DEFAULT_DISTANCE,
    direction = "middle",
    ...props
  },
  ref,
) => {
  const mouseX = useMotionValue(Infinity);

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === DockIcon) {
        return React.cloneElement(child, {
          ...child.props,
          mouseX: mouseX,
          size: iconSize,
          magnification: iconMagnification,
          distance: iconDistance,
        });
      }
      return child;
    });
  };

  return (
    (<div
      ref={ref}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      {...props}
      className={cn(dockVariants({ className }), {
        "items-start": direction === "top",
        "items-center": direction === "middle",
        "items-end": direction === "bottom",
      })}>
      {renderChildren()}
    </div>)
  );
});

Dock.displayName = "Dock";

const DockIcon = ({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}) => {
  const ref = useRef(null);
  const padding = Math.max(6, size * 0.15);
  const defaultMouseX = useMotionValue(Infinity);

  const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeTransform = useTransform(distanceCalc, [-distance, 0, distance], [size, magnification, size]);

  // More stable spring settings
  const scaleSize = useSpring(sizeTransform, {
    mass: 0.5,
    stiffness: 200,
    damping: 25,
  });

  return (
    (<motion.div
      ref={ref}
      style={{ width: scaleSize, height: scaleSize, padding }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-lg bg-blue-700/20 hover:bg-blue-600/30 transition-colors duration-200",
        className
      )}
      {...props}>
      {children}
    </motion.div>)
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
