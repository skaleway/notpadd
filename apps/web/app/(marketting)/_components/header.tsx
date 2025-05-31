"use client"

import Logo from "@/components/logo"
import { marketingLinks } from "@/constants"
import { siteConfig } from "@/lib/site"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import Link from "next/link"
import { useEffect, useState, useCallback } from "react"
import { AnimatePresence, motion } from "motion/react"

const throttle = <T extends (...args: any[]) => void>(func: T, limit: number): T => {
  let inThrottle: boolean
  return ((...args: Parameters<T>): void => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }) as T
}

const presence = {
  enter: {
    opacity: 0,
    y: -20,
  },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const itemVariants = {
  enter: {
    opacity: 0,
    y: 10,
  },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const DesktopHeader = () => {
  const [isActive, setActive] = useState(false)

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      setActive(window.scrollY > 1)
    })
  }, [])

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 100)
    window.addEventListener("scroll", throttledScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", throttledScroll)
    }
  }, [handleScroll])

  return (
    <motion.header
      initial={false}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn("fixed top-0 left-0 w-full h-16 border-b bg-background z-50 hidden md:block")}
    >
      <nav className="max-w-5xl mx-auto h-full flex items-center justify-between px-6">
        <div className="flex items-center gap-x-10">
          <Logo />
          <ul className="flex items-center gap-x-4">
            {marketingLinks.map(link => (
              <li key={link.url}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-x-4">
          <Button variant="outline" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </div>
      </nav>
    </motion.header>
  )
}

const MobileHeader = () => {
  const [isActive, setActive] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      setActive(window.scrollY > 1)
    })
  }, [])

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 100)
    window.addEventListener("scroll", throttledScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", throttledScroll)
    }
  }, [handleScroll])

  return (
    <motion.header
      initial={false}
      animate={{
        height: isMobileMenuOpen ? "100vh" : "4rem",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        height: {
          type: "spring",
          stiffness: 300,
          damping: 30,
        },
      }}
      className="fixed top-0 left-0 w-full border-b bg-background z-50 md:hidden backdrop-blur-sm"
    >
      <nav className="flex flex-col h-full ">
        <div
          className={cn(
            "flex items-center justify-between h-16 !min-h-16 w-full border-b border-transparent px-6",
            {
              "border-border/50": isMobileMenuOpen,
            },
          )}
        >
          <div className="flex items-center gap-2">
            <Logo /> {siteConfig.name}
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8  flex flex-col items-center justify-center gap-2 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
            >
              {Array.from({ length: 2 }).map((_, index) => {
                const rotateAngle = index % 2 === 0 ? 45 : -45
                const changeY = index % 2 === 0 ? 5.5 : -5.5

                return (
                  <motion.span
                    animate={{
                      rotate: isMobileMenuOpen ? rotateAngle : 0,
                      y: isMobileMenuOpen ? changeY : 0,
                    }}
                    key={index}
                    className="w-8 !h-1 bg-neutral-700 dark:bg-neutral-400"
                  />
                )
              })}
            </div>
          </div>
        </div>
        <AnimatePresence onExitComplete={() => setIsMobileMenuOpen(false)}>
          {isMobileMenuOpen && (
            <motion.div
              initial="enter"
              animate="center"
              exit="exit"
              variants={presence}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-2 flex-1 h-full"
            >
              <div className="px-6 flex-1">
                <ul className="h-full border-x border-border/50 px-4 py-10 flex flex-col gap-2">
                  {marketingLinks.map(link => (
                    <li key={link.url}>
                      <Link href={link.url}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-border/50 flex items-center gap-2 px-6 py-4">
                <Button variant="outline" className="w-full border border-border/50" asChild>
                  <Link href="/sign-in">Login</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/sign-up">Sign up</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

const Navigation = () => {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  )
}

export default Navigation
