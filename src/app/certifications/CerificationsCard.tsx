'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
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
                    <Image src={image} alt={title} width={100} height={100} className="w-full" />
                </div>
                <div className="mt-4 text-center">
                    <h2 className="text-[20px] font-bold text-[#0EC9AC]">{title}</h2>
                    <p className="text-[16px] mt-2">{description}</p>
                </div>
            </div>
        </motion.div>
    )
}
