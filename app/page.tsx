import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillCard } from "@/components/skill-card"
import { ContactForm } from "@/components/contact-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 lg:py-32 overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white"></div>
        </div>
        <div className="max-w-5xl mx-auto relative">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Halo! Saya <span className="text-yellow-300">ivy cantik</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
              Desainer Grafis & UI/UX Designer yang berfokus pada pembuatan desain yang menarik dan fungsional
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-yellow-300 hover:text-purple-700">
                Lihat Portofolio
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-purple-600"
              >
                Hubungi Saya
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-6 bg-white" id="projects">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyek Terbaru</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Berikut adalah beberapa proyek desain terbaru yang telah saya kerjakan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Desain Brand Startup"
              category="Branding"
              image="/placeholder.svg?height=400&width=600"
            />
            <ProjectCard
              title="UI/UX Website E-commerce"
              category="UI/UX Design"
              image="/placeholder.svg?height=400&width=600"
            />
            <ProjectCard
              title="Desain Media Sosial"
              category="Social Media"
              image="/placeholder.svg?height=400&width=600"
            />
            <ProjectCard
              title="Desain Aplikasi Mobile"
              category="Mobile App"
              image="/placeholder.svg?height=400&width=600"
            />
            <ProjectCard
              title="Ilustrasi Produk"
              category="Illustration"
              image="/placeholder.svg?height=400&width=600"
            />
            <ProjectCard
              title="Desain Poster Event"
              category="Print Design"
              image="/placeholder.svg?height=400&width=600"
            />
          </div>

          <div className="text-center mt-10">
            <Button
              variant="outline"
              className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
            >
              Lihat Semua Proyek
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-50" id="about">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Foto Profil"
                  className="w-full h-full object-cover mix-blend-overlay opacity-75"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-yellow-300 rounded-xl -z-10"></div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tentang Sayaa</h2>
              <p className="text-lg text-gray-600 mb-4">
                Saya adalah seorang desainer grafis dan UI/UX designer dengan pengalaman lebih dari 5 tahun dalam
                industri kreatif.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Saya berfokus pada pembuatan desain yang tidak hanya menarik secara visual tetapi juga fungsional dan
                user-friendly. Saya percaya bahwa desain yang baik dapat memecahkan masalah dan meningkatkan pengalaman
                pengguna.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Adobe Photoshop</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Adobe Illustrator</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Figma</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">UI/UX Design</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Branding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-6 bg-white" id="skills">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan & Keahlian</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Berikut adalah layanan desain yang saya tawarkan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              title="UI/UX Design"
              description="Desain antarmuka pengguna yang intuitif dan menarik untuk website dan aplikasi mobile"
              icon="layout"
            />
            <SkillCard
              title="Branding"
              description="Pembuatan identitas visual merek yang konsisten dan menarik untuk bisnis Anda"
              icon="palette"
            />
            <SkillCard
              title="Desain Grafis"
              description="Pembuatan aset visual untuk kebutuhan digital maupun cetak"
              icon="image"
            />
            <SkillCard
              title="Ilustrasi"
              description="Ilustrasi kustom untuk kebutuhan branding, website, atau media sosial"
              icon="pen-tool"
            />
            <SkillCard
              title="Desain Media Sosial"
              description="Konten visual yang menarik untuk platform media sosial"
              icon="instagram"
            />
            <SkillCard
              title="Motion Graphics"
              description="Animasi dan motion graphics untuk konten digital yang lebih menarik"
              icon="film"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-6 bg-purple-50" id="contact">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Saya</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tertarik untuk bekerja sama? Silakan isi formulir di bawah ini atau hubungi saya melalui email
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <ContactForm />
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Telepon</h4>
                      <p>+62 8127 1740 827</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p>ivyyasmin.ivy@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Lokasi</h4>
                      <p>bandung, Indonesia</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Ikuti Saya</h4>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
