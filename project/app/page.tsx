"use client"

import { Button } from "@/components/ui/button"
import { Brain, Calendar, Users } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <FadeIn>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-block"
            >
              <Brain className="mx-auto h-20 w-20 mb-8" />
            </motion.div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-4xl font-bold mb-6">Gazi Yapay Zeka Topluluğu</h1>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Yapay zeka alanında kendini geliştirmek isteyen öğrenciler için bir araya geliyoruz.
              Etkinlikler, workshoplar ve projelerle geleceği şekillendiriyoruz.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/events">Etkinliklerimiz</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Hakkımızda</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.2} direction="up">
              <div className="flex flex-col items-center text-center p-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Calendar className="h-12 w-12 mb-4" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">Düzenli Etkinlikler</h3>
                <p className="text-muted-foreground">
                  Her ay düzenlenen workshop ve seminerlerle sürekli öğrenme fırsatı
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <div className="flex flex-col items-center text-center p-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Users className="h-12 w-12 mb-4" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">Topluluk</h3>
                <p className="text-muted-foreground">
                  Yapay zeka tutkunlarıyla tanışın ve deneyimlerinizi paylaşın
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6} direction="up">
              <div className="flex flex-col items-center text-center p-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Brain className="h-12 w-12 mb-4" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">Projeler</h3>
                <p className="text-muted-foreground">
                  Gerçek dünya problemlerine yapay zeka çözümleri geliştirin
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}