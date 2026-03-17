'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { content } from '@/lib/content'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.95)']
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = content.nav.items

  return (
    <>
      <motion.nav
        style={{
          backgroundColor,
          paddingTop: isScrolled ? '18px' : '24px',
          paddingBottom: isScrolled ? '18px' : '24px'
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-lg shadow-lg' : ''
        }`}
      >
        <div className="w-full max-w-[1680px] mx-auto px-10 md:px-16 lg:px-24 xl:px-28">
          <div className="grid grid-cols-[auto_1fr] items-center gap-10">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="ml-10 md:ml-14 lg:ml-20 flex items-center shrink-0"
            >
              <Image
                src="/images/logos/KatalystLogo_PMS7556_BLACK.png"
                alt="Katalyst Productions"
                width={400}
                height={120}
                className="h-14 md:h-16 lg:h-[4.5rem] w-auto brightness-0 invert"
                priority
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 items-center justify-end gap-8 lg:gap-10">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, color: '#D4AF37' }}
                  className="text-[15px] text-white/92 hover:text-gold transition-colors duration-300 font-medium tracking-tight"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href={content.nav.cta.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '12px', paddingBottom: '12px' }}
                className="ml-4 bg-gold text-black font-semibold rounded-full hover:bg-gold-light transition-all duration-300"
              >
                {content.nav.cta.label}
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 bottom-0 w-full md:hidden bg-black z-40 pt-24 px-6"
      >
        <div className="flex flex-col gap-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, x: 50 }}
              animate={isOpen ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl font-semibold hover:text-gold transition-colors duration-300"
            >
              {item.name}
            </motion.a>
          ))}
          <motion.a
            href={content.nav.cta.href}
            initial={{ opacity: 0, x: 50 }}
            animate={isOpen ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.5 }}
            onClick={() => setIsOpen(false)}
            className="px-12 py-5 bg-gold text-black font-semibold rounded-full hover:bg-gold-light transition-all duration-300 text-center"
          >
            {content.nav.cta.label}
          </motion.a>
        </div>
      </motion.div>
    </>
  )
}
