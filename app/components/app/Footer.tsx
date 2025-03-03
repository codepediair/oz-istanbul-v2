"use client"

import type React from "react"
import Image from "next/image"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Instagram, Linkedin, ArrowRight, Mail } from "lucide-react"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"

// Animated background component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/50 to-background" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-full max-w-7xl overflow-hidden rounded-b-full bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 blur-[120px] opacity-50" />
    </div>
  )
}

// Animated link component
const AnimatedLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link href={href} className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground">
      <span>{children}</span>
      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
    </Link>
  )
}

// Social icon component
const SocialIcon = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => {
  return (
    <Link
      href={href}
      aria-label={label}
      className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary/20 hover:text-primary"
    >
      <Icon className="h-4 w-4" />
    </Link>
  )
}

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      // Here you would typically send the email to your API
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer className="relative w-full border-t bg-background py-12 mt-8 px-8 md:py-16">
      <AnimatedBackground />

      <div className="container grid gap-12 px-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* Brand column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="OZ Istanbul" width={40} height={40} />
            <span className="text-xl font-bold">ÖZ Istanbul</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Beautiful UI components and templates built with Tailwind CSS. Create stunning user interfaces with modern
            animations and effects.
          </p>
          <div className="flex space-x-3">
            <SocialIcon href="https://twitter.com" icon={Twitter} label="Twitter" />
            <SocialIcon href="https://github.com" icon={Github} label="GitHub" />
            <SocialIcon href="https://instagram.com" icon={Instagram} label="Instagram" />
            <SocialIcon href="https://linkedin.com" icon={Linkedin} label="LinkedIn" />
          </div>
        </div>

        {/* Products column */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Products</h3>
          <ul className="space-y-3">
            <li>
              <AnimatedLink href="/components">Components</AnimatedLink>
            </li>
            <li>
              <AnimatedLink href="/templates">Templates</AnimatedLink>
            </li>
            <li>
              <AnimatedLink href="/icons">Icons</AnimatedLink>
            </li>
            <li>
              <AnimatedLink href="/ui-kits">UI Kits</AnimatedLink>
            </li>
            <li>
              <AnimatedLink href="/documentation">Documentation</AnimatedLink>
            </li>
          </ul>
        </div>

        {/* Resources column */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Resources</h3>
          <ul className="space-y-3">
            <li>
              <AnimatedLink href="/blog">Blog</AnimatedLink>
            </li>
            <li>
              <AnimatedLink href="/tutorials">Tutorials</AnimatedLink>
            </li>
            <li>
              <AnimatedLink href="/showcase">Showcase</AnimatedLink>
            </li>
            <li>
              <AnimatedLink href="/community">Community</AnimatedLink>
            </li>
            <li>
              <AnimatedLink href="/changelog">Changelog</AnimatedLink>
            </li>
          </ul>
        </div>

        {/* Newsletter column */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Stay Updated</h3>
          <p className="text-sm text-muted-foreground">
            Subscribe to our newsletter to get updates on new features and releases.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-2">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email"
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="group w-full" disabled={isSubscribed}>
              {isSubscribed ? (
                "Subscribed!"
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom section */}
      <div className="container mt-12 border-t pt-6">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aceternity UI. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <AnimatedLink href="/privacy">Privacy Policy</AnimatedLink>
            <AnimatedLink href="/terms">Terms of Service</AnimatedLink>
            <AnimatedLink href="/cookies">Cookie Policy</AnimatedLink>
          </div>
        </div>
      </div>
      <TextHoverEffect text="ÖZ Istanbul"/>
    </footer>
  )
}

