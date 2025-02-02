"use client"

import { Brain, Users, Target, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"
import { useEffect, useState } from "react"

const team = [
  {
    name: "Prof. Dr. Muhammet Ali AKÇAYOL",
    role: "Akademik Danışman",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1000"
  },
  {
    name: "Beyza Beril YALÇINKAYA",
    role: "Topluluk Başkanı",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000"
  },
  {
    name: "Eren DİKEN",
    role: "Web Sorumlusu",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000"
  }
]

export default function AboutPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // Eğer client tarafında değilsek, render etmiyoruz
  }

  return (
    <div className="container mx-auto py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Hakkımızda</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Gazi Yapay Zeka Topluluğu, yapay zeka teknolojilerine ilgi duyan öğrencileri bir araya getirerek,
          bilgi paylaşımını ve pratik deneyimi teşvik etmeyi amaçlayan bir öğrenci topluluğudur.
          2023 yılında kurulan topluluğumuz, düzenli etkinlikler ve projelerle üyelerine değer katmaya devam etmektedir.
        </p>
      </section>

      {/* Ekibimiz Bölümü */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Ekibimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-xl">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
