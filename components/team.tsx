"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Ridho Bintang Aulia",
    role: "Founder | Software & AI Engineer | IaaS Sales",
    image: "/pictures/ridhoganteng.png",
    linkedin: "https://www.linkedin.com/in/ridhobintangaulia/"
  },
  {
    name: "Alfarizi Dwi Prasetyo",
    role: "Founder | Software & AI Engineer",
    image: "/pictures/tyohitam.jpg",
    linkedin: "https://www.linkedin.com/in/al-farizi-dwi-prasetyo/"
  },
];

export function Team() {
  return (
    <section id="team" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl mb-3">
            Tim{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Profesional
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-base text-gray-600">
            Kenali tim ahli yang siap mewujudkan visi digital Anda
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-white to-blue-50 shadow-md transition-all hover:shadow-xl">
                  <div className="relative aspect-[4/5] overflow-hidden max-h-56">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                    {/* LinkedIn Only */}
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center opacity-0 transition-all group-hover:opacity-100">
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-blue-600 shadow-lg transition-all hover:bg-blue-600 hover:text-white"
                      >
                        <Linkedin size={16} />
                      </motion.a>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="mb-1 text-lg font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium text-sm">{member.role}</p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
