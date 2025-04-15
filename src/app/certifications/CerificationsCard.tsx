'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
interface CertificationCardProps {
    title: string
    image: string
    name: string
    date: string
    studentId: string
    description: string
}

export default function CertificationCard({

    title,
    image,
    name,
    date,
    studentId,
    description,
}: CertificationCardProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className=" p-4 max-w-md"
        >
            <div className="rounded-2xl bg-[#1c2a38] text-white p-4 max-w-md ">
                <div className="rounded-xl overflow-hidden">
                    <img src={image} alt={title} className="w-full" />
                </div>
                <div className="mt-4 text-center">
                    <h2 className="text-[20px] font-bold text-[#0EC9AC]">{title}</h2>
                    <p className="text-[16px] mt-2">{description}</p>
                </div>
            </div>
        </motion.div>
    )
}
