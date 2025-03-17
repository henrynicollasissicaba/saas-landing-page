import { motion } from "framer-motion"

export default function PopularTag(){
    return(
        <div 
            className="inline-flex font-bold px-4 py-1.5 rounded-xl border border-white/20 "
        >
            <motion.span
                className="bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf)]
                text-transparent bg-clip-text font-medium [background-size:200%]"
                animate={{
                    backgroundPositionX: '100%'
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                }}
            >
                Popular
            </motion.span>
        </div>
    )
}