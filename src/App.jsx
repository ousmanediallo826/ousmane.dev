import { ThemeProvider } from "./components/ui/theme-provider";
import { Hero, Nav, Achievement, Experience, Education, Skills,  About, Projects, Footer } from "./section";
import { motion } from "framer-motion"; // Ensure this is correctly imported
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume"; // Import the Resume component

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <main className="relative">
            <Nav />

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {/* Hero Section with smooth scroll and fade in */}
                    <section className="mt-5 ml-10 mr-10 rounded-2xl">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Hero />
                      </motion.div>
                    </section>

                    {/* About Section */}
                    <section className="padding mt-[-200px]"> {/* Reduced margin to close the gap */}
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
                  </>
                }
              />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </main>
        </motion.div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
