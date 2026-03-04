import { motion } from "framer-motion"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const child = {
  hidden: {
    opacity: 0,
    y: 10,
    display: "inline-block",
  },
  visible: {
    opacity: 1,
    y: 0,
    display: "inline-block",
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
}

export default function TextAnimation({ text, className }) {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`inline ${className || ""}`}
      style={{ overflow: "hidden" }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={child}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  )
}