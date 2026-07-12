import { motion } from 'framer-motion'
import { useState } from 'react'
import { faqs } from '../content/data'
import { defaultViewport, easePremium, slideUp, staggerContainer } from '../lib/motion'
import { Reveal } from './motion/Reveal'
import { SectionLabel } from './ui'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.article
      variants={slideUp}
      className="overflow-hidden rounded-[1.25rem] bg-white/[0.035] shadow-xl shadow-black/10 ring-1 ring-white/[0.065] transition-colors hover:bg-white/[0.05]"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-haze focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:p-7"
      >
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: easePremium }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-pulse/15 text-violet-haze"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
      >
        <div className="min-h-0 overflow-hidden">
          <motion.p
            animate={{ opacity: open ? 1 : 0 }}
            transition={{ duration: 0.2, delay: open ? 0.1 : 0 }}
            className="px-6 pb-6 text-base leading-8 text-white/64 sm:px-7 sm:pb-7"
          >
            {answer}
          </motion.p>
        </div>
      </div>
    </motion.article>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="border-b border-white/[0.08] bg-ink px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl">Preguntas frecuentes antes de empezar.</h2>
        </Reveal>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-4 sm:gap-5"
        >
          {faqs.map((item) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
