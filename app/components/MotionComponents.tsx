"use client";
import { motion } from "framer-motion";
import type { ScaleElementProps } from "@/app/types";

export function ScaleElement({ element }: ScaleElementProps) {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      {element}
    </motion.div>
  );
}

export function RotateElement({ element }: ScaleElementProps) {
  return (
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1 }}>
      {element}
    </motion.div>
  );
}
