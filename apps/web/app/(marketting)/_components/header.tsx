"use client"

import Logo from "@/components/logo"
import { marketingLinks } from "@/constants"
import { siteConfig } from "@/lib/site"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

const presence = {
  enter: {
    opacity: 0,
    scale: 0.9,
  },
  center: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
}

const itemVariants = {
  enter: {
    opacity: 0,
    y: 20,
  },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.1,
    },
  },
}

const DesktopHeader = () => {
  const [isActive, setActive] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full h-16 border-b bg-background z-50 border-transparent transition-all duration-300 hidden md:block",
        isActive && "border-border/50",
      )}
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
    </header>
  )
}

const MobileHeader = () => {
  const [isActive, setActive] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full h-16 border-b bg-background z-50 border-transparent transition-all duration-300 md:hidden",
        isActive && "border-border/50",
        {
          "h-screen bg-background": isMobileMenuOpen,
        },
      )}
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
              <div className="border-t border-border/50 flex items-center gap-2 px-6 py-4 mt-auto">
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
    </header>
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

//  <motion.nav
//           animate={isHidden ? "hidden" : "vissible"}
//           whileHover="vissible"
//           onFocusCapture={() => setIsHidden(false)}
//           variants={{
//             hidden: {
//               y: "-100%",
//               height: isMobileMenuOpen ? 250 : 56,
//               transition: {
//                 duration: 0.2,
//               },
//             },
//             vissible: {
//               y: "0",
//               height: isMobileMenuOpen ? 250 : 56,
//               transition: {
//                 duration: 0.2,
//               },
//             },
//           }}
//           transition={{ duration: 0.2 }}
//           className={cn(
//             "fixed px-4 lg:px-0 right-10 left-10 lg:left-0 lg:right-0 top-3 lg:max-w-5xl lg:w-full mx-auto border-b border-border backdrop-blur bg-background/50 justify-between items-start flex flex-col transition-all duration-200 text-neutral-700  z-20 ",
//             {
//               "lg:px-10 border": !isHidden,
//             }
//           )}
//         >
//           <div
//             style={{
//               height: 56,
//             }}
//             className="!h-14 fixed left-0  w-full flex items-center justify-between  px-4"
//           >
//             <Logo />
//             <div
//               className="w-8 h-8  flex flex-col items-center justify-center gap-2 cursor-pointer"
//               onClick={handleMobileToogle}
//             >
//               {Array.from({ length: 2 }).map((_, index) => {
//                 //
//                 const rotateAngle = index % 2 === 0 ? 45 : -45;
//                 const changeY = index % 2 === 0 ? 5.5 : -5.5;

//                 return (
//                   <motion.span
//                     animate={{
//                       rotate: isMobileMenuOpen ? rotateAngle : 0,
//                       y: isMobileMenuOpen ? changeY : 0,
//                     }}
//                     key={index}
//                     className="w-8 !h-1 bg-neutral-700 dark:bg-neutral-400"
//                   />
//                 );
//               })}
//             </div>
//           </div>
//  <AnimatePresence onExitComplete={() => setIsMobileMenuOpen(false)}>
//             {isMobileMenuOpen && (
//               <motion.ul
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 variants={presence}
//                 transition={{ duration: 0.2 }}
//                 className="flex flex-col gap-2 py-20"
//               >
//                 {routes.map((route, index) => {
//                   //some code here

//                   const isActiveRoute = pathname === route.path;

//                   return (
//                     <motion.li key={index} variants={itemVariants}>
//                       <Link
//                         href={route.path}
//                         className={cn(
//                           "capitalize  duration-300 transition-all relative dark:text-neutral-200 text-neutral-900 hover:opacity-80",
//                           {
//                             "font-bold": isActiveRoute,
//                           }
//                         )}
//                       >
//                         {route.name}
//                       </Link>
//                     </motion.li>
//                   );
//                 })}
//               </motion.ul>
//             )}
//           </AnimatePresence>
//         </motion.nav>
