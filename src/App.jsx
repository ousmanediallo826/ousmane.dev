import { ThemeProvider } from "./components/ui/theme-provider";
import { Hero, Nav, Achievement, Experience, Education, Skills, MeinTenYears, About, Projects, Footer } from "./section";
import { motion } from "framer-motion"; // Ensure this is correctly imported

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <main className="relative">
          <Nav />
          
          {/* Hero Section with smooth scroll and fade in */}
          <section className=" wide:padding-r padding-b">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Hero />
            </motion.div>
          </section>
          
          {/* About Section */}
          <section className="padding">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <About />
            </motion.div>
          </section>
          
          {/* Education Section */}
          <section className="padding">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Education />
            </motion.div>
          </section>
          
          {/* Experience Section */}
          <section className="padding">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Experience />
            </motion.div>
          </section>
          
          {/* Projects Section */}
          <section className="padding">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Projects />
            </motion.div>
          </section>
          
          {/* Skills Section */}
          <section className="padding">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Skills />
            </motion.div>
          </section>
          
          {/* Achievement Section */}
          <section className="bg-pale-blue">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Achievement />
            </motion.div>
          </section>
          
          {/* MeinTenYears Section */}
          <section className="padding-x sm:py-32 py-16 w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <MeinTenYears />
            </motion.div>
          </section>
          
          {/* Footer Section */}
          <section>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Footer />
            </motion.div>
          </section>
        </main>
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
