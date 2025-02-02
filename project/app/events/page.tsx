"use client"

import { Calendar, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FadeIn } from "@/components/animations/fade-in"

const events = [
  {
    id: 1,
    title: "Yapay Zeka ve Derin Öğrenme Workshop",
    date: "5 Aralık 2024",
    time: "9:00 - 17:00",
    location: "Gazi Üniversitesi Mühendislik Fakültesi",
    description: "PyTorch kullanarak derin öğrenme modellerinin nasıl oluşturulacağını öğrenin. Teorik bilgilerin yanı sıra uygulamalı örneklerle konuyu pekiştireceğiz.",
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "Deneme Etkinlik 1",
    date: "20 Nisan 2025",
    time: "15:30 - 17:30",
    location: "Online (Zoom)",
    description: "Transformer mimarileri ve modern NLP yaklaşımları hakkında detaylı bir seminer. BERT, GPT ve diğer popüler modeller incelenecek.",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: "Deneme Etkinlik 2",
    date: "21 Mayıs 2025",
    time: "10:00 - 16:00",
    location: "Gazi Teknokent",
    description: "Kendi AI projelerinizi geliştirin ve diğer katılımcılarla fikir alışverişinde bulunun. Mentörler eşliğinde proje geliştirme imkanı.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
  }
]

export default function EventsPage() {
  return (
    <div className="container mx-auto py-12">
      <FadeIn>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Yaklaşan Etkinlikler</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Yapay zeka alanında kendini geliştirmek isteyenler için düzenlediğimiz etkinlikler
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <FadeIn key={event.id} delay={index * 0.1}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden h-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform"
                  />
                </motion.div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription className="flex flex-col gap-2 mt-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <Button className="w-full">Kayıt Ol</Button>
                </CardContent>
              </Card>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}