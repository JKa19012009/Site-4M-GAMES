import { motion } from "motion/react";
import { Users, Github, Linkedin, Mail } from "lucide-react";

export function Team() {
  const members = [
    { name: "Juan Koga Azevedo", role: "Game Designer" },
    { name: "Kaloã de Souza", role: "Programador" },
    { name: "Kauã Brandão Sanches", role: "Artista" },
    { name: "Otáxio Xavier Ferraz", role: "Diretor" }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border-2 border-white/30 mb-6">
            <Users className="w-5 h-5 text-white" />
            <span className="text-white">Nossa Equipe</span>
          </div>
          <h2 className="text-5xl md:text-6xl mb-4 text-white">
            Conheça a 4M Games
          </h2>
          <p className="text-xl text-gray-400">
            Um time apaixonado por criar experiências inesquecíveis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                <span className="text-3xl text-black">{member.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl text-white mb-2">{member.name}</h3>
              <p className="text-gray-300 mb-4">{member.role}</p>
              <div className="flex gap-3 justify-center">
                <button className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <Github className="w-4 h-4 text-gray-300" />
                </button>
                <button className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4 text-gray-300" />
                </button>
                <button className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4 text-gray-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
