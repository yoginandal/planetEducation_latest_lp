import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const WordFadeIn = ({
  words,
  className,
  delay = 0.05,
  variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay, duration: 0.5 },
    }),
  },
}) => {
  const _words = words.split(" ");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("text-center", className)}
    >
      {_words.map((word, i) => (
        <motion.span key={i} variants={variants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
};
