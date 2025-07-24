"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import {
  ArrowRight,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Play,
  Pause,
  Maximize,
  Minimize,
  Star,
  Users,
  Globe,
  Store,
  Sofa,
  Sparkles,
  LayoutGrid,
  Palette,
  ClipboardList,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ProjectDetailDialog } from "@/components/project-detail-dialog"
import { QuoteFormDialog } from "@/components/quote-form-dialog" // Import the new component

export default function VillaMobiliDesign() {
  const [scrollY, setScrollY] = useState(0)
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true) // Start playing by default
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isQuoteFormDialogOpen, setIsQuoteFormDialogOpen] = useState(false) // State for quote dialog

  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Effect to control video playback
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        console.log("Attempting to play video...")
        videoRef.current.play().catch((error) => console.error("Video play failed:", error))
      } else {
        console.log("Pausing video...")
        videoRef.current.pause()
      }
    }
  }, [isPlaying])

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen().catch((e) => console.error("Fullscreen request failed:", e))
        setIsFullScreen(true)
      } else {
        document.exitFullscreen()
        setIsFullScreen(false)
      }
    }
  }

  const handleProjectClick = (project: any) => {
    setSelectedProject(project)
    setIsDetailDialogOpen(true)
  }

  const translations = {
    fr: {
      // Header
      home: "Accueil",
      services: "Services",
      about: "À propos",
      ourWork: "Nos Réalisations",
      contact: "Contact",
      getQuote: "Devis Gratuit",

      // Hero Section
      heroTitle: "Transformer les Espaces Commerciaux en",
      heroSubtitle: "Histoires de Succès",
      heroDescription:
        "Nous créons des environnements commerciaux époustouflants et des meubles sur mesure qui stimulent la croissance des entreprises. Du concept à la réalisation, nous donnons vie à votre vision.",
      viewOurWork: "Voir Nos Réalisations",
      getConsultation: "Consultation Gratuite",
      projectsCompleted: "Projets Réalisés",
      clientSatisfaction: "Satisfaction Client",
      yearsExperience: "Années d'Expérience",
      awardWinning: "Primé",
      designExcellence: "Excellence en Design",

      // Services Section
      servicesTitle: "Nos Services",
      servicesDescription:
        "Nous offrons des solutions de design commercial complètes qui transforment les espaces et stimulent le succès des entreprises",
      retailSpaceDesign: "Design d'Espaces Commerciaux",
      retailSpaceDesc:
        "Conception et rénovation complète d'environnements commerciaux pour maximiser l'expérience client et le potentiel de vente.",
      customFurnitureCreation: "Création de Mobilier Sur Mesure",
      customFurnitureDesc:
        "Pièces de mobilier sur mesure conçues et fabriquées spécifiquement pour vos besoins commerciaux et esthétiques.",
      businessRedesign: "Refonte d'Entreprise",
      businessRedesignDesc:
        "Transformez les espaces commerciaux existants avec une refonte stratégique pour améliorer la fonctionnalité et l'attrait.",
      spacePlanning: "Planification d'Espace",
      spacePlanningDesc:
        "Optimisez votre aménagement pour une efficacité maximale, un flux optimal et un engagement client renforcé.",
      brandIntegration: "Intégration de Marque",
      brandIntegrationDesc:
        "Intégrez harmonieusement l'identité de votre marque dans la conception de l'espace physique.",
      projectManagement: "Gestion de Projet",
      projectManagementDesc:
        "Coordination de projet de bout en bout, du concept à la réalisation avec une perturbation minimale des activités.",

      // About Section
      aboutTitle: "À Propos de Villa Mobili Design",
      aboutText1:
        "Depuis plus de 15 ans, Villa Mobili Design est à l'avant-garde de la transformation d'espaces commerciaux. Nous croyons qu'un design exceptionnel ne se limite pas à l'esthétique—il s'agit de créer des environnements qui racontent l'histoire de votre marque et génèrent des résultats commerciaux.",
      aboutText2:
        "Notre équipe de designers et d'artisans expérimentés travaille étroitement avec chaque client pour comprendre leurs besoins uniques, leur identité de marque et leurs objectifs commerciaux. Des boutiques de luxe aux restaurants animés, nous avons aidé des entreprises de tous secteurs à créer des espaces qui captivent les clients et améliorent les performances.",
      expertDesignTeam: "Équipe de Design Experte",
      customSolutions: "Solutions Sur Mesure",
      qualityCraftsmanship: "Artisanat de Qualité",
      onTimeDelivery: "Livraison Ponctuelle",
      teamMembers: "Membres de l'Équipe",
      designersCraftsmen: "Designers & Artisans",

      // Portfolio Section
      portfolioTitle: "Nos Réalisations",
      portfolioDescription:
        "Explorez notre portfolio de transformations commerciales réussies et de créations de mobilier sur mesure",
      modernBoutique: "Refonte de Boutique Moderne",
      restaurantTransformation: "Transformation d'Intérieur de Restaurant",
      officeRenovation: "Rénovation d'Espace de Bureau",
      luxuryShowroom: "Design de Showroom de Luxe",
      cafeInterior: "Design d'Intérieur de Café",
      customFurnitureCollection: "Collection de Mobilier Sur Mesure",
      viewAllProjects: "Voir Tous les Projets",

      // Testimonials Section
      testimonialsTitle: "Ce Que Disent Nos Clients",
      testimonialsDescription: "Ne nous croyez pas sur parole—écoutez nos clients satisfaits",
      testimonial1:
        "Villa Mobili Design a complètement transformé notre magasin. Les ventes ont augmenté de 40% après la refonte !",
      testimonial2:
        "Leur attention aux détails et leur compréhension de notre marque étaient exceptionnelles. Hautement recommandé !",
      testimonial3:
        "Professionnel, créatif et livré à temps. Notre nouvel espace de bureau inspire notre équipe au quotidien.",

      // Contact Section
      contactTitle: "Contactez-Nous",
      contactDescription: "Prêt à transformer votre espace ? Discutons de votre projet et donnons vie à votre vision",
      contactInformation: "Informations de Contact",
      phone: "Téléphone",
      email: "Email",
      address: "Adresse",
      freeConsultation: "Consultation Gratuite",
      consultationDesc:
        "Planifiez une consultation gratuite pour discuter des besoins de votre projet et obtenir un devis personnalisé.",
      sendMessage: "Envoyez-nous un Message",
      firstName: "Prénom",
      lastName: "Nom",
      projectType: "Type de Projet",
      message: "Message",
      messagePlaceholder: "Parlez-nous de votre projet...",
      projectTypePlaceholder: "ex: Refonte de Magasin de Détail",
      sendMessageBtn: "Envoyer le Message",

      // Quote Form specific translations
      spaceType: "Type d'Espace",
      spaceTypePlaceholder: "ex: Boutique de détail, Bureau, Restaurant",
      width: "Largeur",
      length: "Longueur",
      dimensionsUnit: "mètres", // Assuming meters for French
      submitRequest: "Soumettre la Demande",
      quoteSuccessTitle: "Demande de Devis Envoyée !",
      quoteSuccessMessage: "Merci pour votre demande. Nous vous contacterons sous peu pour discuter de votre projet.",

      // Footer
      footerDescription:
        "Transformer les espaces commerciaux en histoires de succès grâce à un design exceptionnel et un savoir-faire artisanal.",
      company: "Entreprise",
      aboutUs: "À Propos",
      testimonials: "Témoignages",
      connect: "Connecter",
      rightsReserved: "Tous droits réservés.",
      // Footer service links
      footerRetailSpaceDesign: "Design d'Espaces Commerciaux",
      footerCustomFurnitureCreation: "Création de Mobilier Sur Mesure",
      footerBusinessRedesign: "Refonte d'Entreprise",
      footerSpacePlanning: "Planification d'Espace",

      bankReworkTitle: "Refonte Bancaire",
      bankReworkDesc:
        "Refonte complète d'une agence bancaire pour améliorer l'expérience client et l'efficacité opérationnelle. Ce projet a impliqué la modernisation de l'intérieur, l'optimisation de l'espace pour de nouveaux modèles de services et l'intégration de solutions numériques pour un parcours bancaire fluide.",
      bankReworkResults: "Augmentation de 20% de la satisfaction client, amélioration de l'efficacité des transactions",

      macCosmeticsTitle: "Refonte MAC Cosmetics",
      macCosmeticsDesc:
        "Une refonte vibrante et moderne pour un magasin MAC Cosmetics, axée sur des stations de beauté interactives, un éclairage dynamique et une expérience client luxueuse. Le design intègre des couleurs audacieuses et des finitions élégantes pour refléter l'identité de la marque.",
      macCosmeticsResults: "Augmentation de 30% du trafic piétonnier, visibilité accrue des produits",

      fatalesTitle: "FATALES Boutique de Cosmétiques",
      fatalesDesc:
        "Conception d'une boutique de cosmétiques de luxe pour FATALES, créant un espace élégant et sophistiqué qui met en valeur les produits de beauté haut de gamme. Le projet a mis l'accent sur des présentoirs personnalisés, un éclairage d'ambiance et une palette de couleurs raffinée pour une expérience d'achat exclusive.",
      fatalesResults: "Augmentation de 25% des ventes de produits de luxe, amélioration de l'image de marque",
    },
    en: {
      // Header
      home: "Home",
      services: "Services",
      about: "About",
      ourWork: "Our Work",
      contact: "Contact",
      getQuote: "Get Quote",

      // Hero Section
      heroTitle: "Transforming Retail Spaces Into",
      heroSubtitle: "Success Stories",
      heroDescription:
        "We create stunning retail environments and custom furniture that drive business growth. From concept to completion, we bring your vision to life.",
      viewOurWork: "View Our Work",
      getConsultation: "Get Consultation",
      projectsCompleted: "Projects Completed",
      clientSatisfaction: "Client Satisfaction",
      yearsExperience: "Years Experience",
      awardWinning: "Award Winning",
      designExcellence: "Design Excellence",

      // Services Section
      servicesTitle: "Our Services",
      servicesDescription:
        "We offer comprehensive retail design solutions that transform spaces and drive business success",
      retailSpaceDesign: "Retail Space Design",
      retailSpaceDesc:
        "Complete retail environment design and renovation to maximize customer experience and sales potential.",
      customFurnitureCreation: "Custom Furniture Creation",
      customFurnitureDesc:
        "Bespoke furniture pieces designed and crafted specifically for your business needs and aesthetic.",
      businessRedesign: "Business Redesign",
      businessRedesignDesc:
        "Transform existing commercial spaces with strategic redesign to improve functionality and appeal.",
      spacePlanning: "Space Planning",
      spacePlanningDesc: "Optimize your layout for maximum efficiency, flow, and customer engagement.",
      brandIntegration: "Brand Integration",
      brandIntegrationDesc: "Seamlessly integrate your brand identity into the physical space design.",
      projectManagement: "Project Management",
      projectManagementDesc:
        "End-to-end project coordination from concept to completion with minimal business disruption.",

      // About Section
      aboutTitle: "About Villa Mobili Design",
      aboutText1:
        "For over 15 years, Villa Mobili Design has been at the forefront of retail space transformation. We believe that exceptional design isn't just about aesthetics—it's about creating environments that tell your brand's story and drive business results.",
      aboutText2:
        "Our team of experienced designers and craftsmen work closely with each client to understand their unique needs, brand identity, and business objectives. From luxury boutiques to bustling restaurants, we've helped businesses across industries create spaces that captivate customers and boost performance.",
      expertDesignTeam: "Expert Design Team",
      customSolutions: "Custom Solutions",
      qualityCraftsmanship: "Quality Craftsmanship",
      onTimeDelivery: "On-Time Delivery",
      teamMembers: "Team Members",
      designersCraftsmen: "Designers & Craftsmen",

      // Portfolio Section
      portfolioTitle: "Our Work",
      portfolioDescription: "Explore our portfolio of successful retail transformations and custom furniture creations",
      modernBoutique: "Modern Boutique Redesign",
      restaurantTransformation: "Restaurant Interior Transformation",
      officeRenovation: "Office Space Renovation",
      luxuryShowroom: "Luxury Showroom Design",
      cafeInterior: "Café Interior Design",
      customFurnitureCollection: "Custom Furniture Collection",
      viewAllProjects: "View All Projects",

      // Testimonials Section
      testimonialsTitle: "What Our Clients Say",
      testimonialsDescription: "Don't just take our word for it—hear from our satisfied clients",
      testimonial1: "Villa Mobili Design transformed our store completely. Sales increased by 40% after the redesign!",
      testimonial2: "Their attention to detail and understanding of our brand was exceptional. Highly recommended!",
      testimonial3: "Professional, creative, and delivered on time. Our new office space inspires our team daily.",

      // Contact Section
      contactTitle: "Get In Touch",
      contactDescription: "Ready to transform your space? Let's discuss your project and bring your vision to life",
      contactInformation: "Contact Information",
      phone: "Phone",
      email: "Email",
      address: "Address",
      freeConsultation: "Free Consultation",
      consultationDesc: "Schedule a free consultation to discuss your project needs and get a personalized quote.",
      sendMessage: "Send Us a Message",
      firstName: "First Name",
      lastName: "Last Name",
      projectType: "Project Type",
      message: "Message",
      messagePlaceholder: "Tell us about your project...",
      projectTypePlaceholder: "e.g., Retail Store Redesign",
      sendMessageBtn: "Send Message",

      // Quote Form specific translations
      spaceType: "Type of Space",
      spaceTypePlaceholder: "e.g., Retail Store, Office, Restaurant",
      width: "Width",
      length: "Length",
      dimensionsUnit: "feet", // Assuming feet for English
      submitRequest: "Submit Request",
      quoteSuccessTitle: "Quote Request Sent!",
      quoteSuccessMessage: "Thank you for your inquiry. We will get back to you shortly to discuss your project.",

      // Footer
      footerDescription:
        "Transforming retail spaces into success stories through exceptional design and craftsmanship.",
      company: "Company",
      aboutUs: "About Us",
      testimonials: "Testimonials",
      connect: "Connect",
      rightsReserved: "All rights reserved.",
      // Footer service links
      footerRetailSpaceDesign: "Retail Space Design",
      footerCustomFurnitureCreation: "Custom Furniture Creation",
      footerBusinessRedesign: "Business Redesign",
      footerSpacePlanning: "Space Planning",

      bankReworkTitle: "Bank Rework Project",
      bankReworkDesc:
        "A comprehensive redesign of a bank branch to enhance customer experience and operational efficiency. This project involved modernizing the interior, optimizing space for new service models, and integrating digital solutions for a seamless banking journey.",
      bankReworkResults: "20% increase in customer satisfaction, improved transaction efficiency",

      macCosmeticsTitle: "MAC Cosmetics Redesign",
      macCosmeticsDesc:
        "A vibrant and modern redesign for a MAC Cosmetics store, focusing on interactive beauty stations, dynamic lighting, and a luxurious customer experience. The design incorporates bold colors and sleek finishes to reflect the brand's identity.",
      macCosmeticsResults: "Increased foot traffic by 30%, enhanced product visibility",

      fatalesTitle: "FATALES Cosmetics Boutique",
      fatalesDesc:
        "Design of a luxury cosmetics boutique for FATALES, creating an elegant and sophisticated space that highlights high-end beauty products. The project focused on custom display units, ambient lighting, and a refined color palette for an exclusive shopping experience.",
      fatalesResults: "25% increase in luxury product sales, improved brand image",
    },
  }

  const t = translations[language]

  const services = [
    {
      title: t.retailSpaceDesign,
      description: t.retailSpaceDesc,
      icon: <Store className="h-10 w-10 text-bronze-600" />,
    },
    {
      title: t.customFurnitureCreation,
      description: t.customFurnitureDesc,
      icon: <Sofa className="h-10 w-10 text-bronze-600" />,
    },
    {
      title: t.businessRedesign,
      description: t.businessRedesignDesc,
      icon: <Sparkles className="h-10 w-10 text-bronze-600" />,
    },
    {
      title: t.spacePlanning,
      description: t.spacePlanningDesc,
      icon: <LayoutGrid className="h-10 w-10 text-bronze-600" />,
    },
    {
      title: t.brandIntegration,
      description: t.brandIntegrationDesc,
      icon: <Palette className="h-10 w-10 text-bronze-600" />,
    },
    {
      title: t.projectManagement,
      description: t.projectManagementDesc,
      icon: <ClipboardList className="h-10 w-10 text-bronze-600" />,
    },
  ]

  const portfolioItems = [
    {
      id: 1,
      title: t.macCosmeticsTitle,
      category: "Retail",
      image: "/images/portfolio/mac-cosmetics-main.jpg",
      images: [
        "/images/portfolio/mac-cosmetics-main.jpg",
        "/images/portfolio/mac-cosmetics-detail-1.jpg",
        "/images/portfolio/mac-cosmetics-detail-2.jpg",
      ],
      longDescription: t.macCosmeticsDesc,
      location: "Luxury Shopping Mall",
      date: "2024",
      tags: ["Retail Design", "Beauty", "Interactive Displays", "Luxury"],
      results: t.macCosmeticsResults,
    },
    {
      id: 2,
      title: t.bankReworkTitle,
      category: "Corporate",
      image: "/images/portfolio/bank-rework-main.jpg",
      images: [
        "/images/portfolio/bank-rework-main.jpg",
        "/images/portfolio/bank-rework-main.jpg", // Using main image for detail 1 as no specific detail image was provided
        "/images/portfolio/bank-rework-main.jpg", // Using main image for detail 2 as no specific detail image was provided
      ],
      longDescription: t.bankReworkDesc,
      location: "Financial District",
      date: "2024",
      tags: ["Financial Design", "Branch Rework", "Customer Experience"],
      results: t.bankReworkResults,
    },
    {
      id: 3,
      title: t.officeRenovation,
      category: "Corporate",
      image: "/images/portfolio/office-main.jpg",
      images: [
        "/images/portfolio/office-detail-1.jpg",
        "/images/portfolio/office-detail-2.jpg",
        "/images/portfolio/office-detail-3.jpg",
      ],
      longDescription:
        "Designed a modern workspace for a tech startup in an innovation hub. The focus was on fostering collaboration through open-plan layouts, flexible meeting spaces, and integrated smart technology. We also incorporated biophilic elements to enhance employee well-being and productivity.",
      location: "Innovation Hub",
      date: "2023",
      tags: ["Office Design", "Collaboration", "Technology", "Corporate"],
      results: "30% improvement in employee satisfaction, enhanced productivity",
    },
    {
      id: 4,
      title: t.fatalesTitle,
      category: "Retail",
      image: "/images/portfolio/fatales-main.jpg",
      images: [
        "/images/portfolio/fatales-main.jpg",
        "/images/portfolio/fatales-main.jpg", // Using main image for detail 1 as no specific detail image was provided
        "/images/portfolio/fatales-main.jpg", // Using main image for detail 2 as no specific detail image was provided
      ],
      longDescription: t.fatalesDesc,
      location: "High-End Shopping District",
      date: "2023",
      tags: ["Luxury Retail", "Cosmetics", "Boutique Design", "Custom Displays"],
      results: t.fatalesResults,
    },
    {
      id: 5,
      title: t.cafeInterior,
      category: "Hospitality",
      image: "/images/portfolio/cafe-main.jpg",
      images: [
        "/images/portfolio/cafe-detail-1.jpg",
        "/images/portfolio/cafe-detail-2.jpg",
        "/images/portfolio/cafe-detail-3.jpg",
      ],
      longDescription:
        "A cozy and inviting café interior design in a vibrant creative district. The aesthetic blends industrial elements with rustic charm, featuring custom-designed furniture for comfort and local art integration to support the community. The space was designed to be a warm gathering spot for patrons.",
      location: "Creative District",
      date: "2023",
      tags: ["Café Design", "Local Art", "Custom Furniture", "Hospitality"],
      results: "35% increase in daily customers, community gathering space",
    },
    {
      id: 6,
      title: t.customFurnitureCollection,
      category: "Furniture",
      image: "/images/portfolio/furniture-main.jpg",
      images: [
        "/images/portfolio/furniture-detail-1.jpg",
        "/images/portfolio/furniture-detail-2.jpg",
        "/images/portfolio/furniture-detail-3.jpg",
      ],
      longDescription:
        "A bespoke executive furniture suite crafted for a corporate headquarters. This collection includes custom conference tables, integrated storage solutions, and ergonomic seating, all designed to enhance the executive presence and improve meeting efficiency within a high-stakes environment.",
      location: "Corporate Headquarters",
      date: "2023",
      tags: ["Custom Furniture", "Executive", "Ergonomic", "Furniture"],
      results: "Enhanced executive presence, improved meeting efficiency",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Boutique Fashion Store",
      text: t.testimonial1,
      rating: 5,
    },
    {
      name: "Marco Rodriguez",
      company: "Fine Dining Restaurant",
      text: t.testimonial2,
      rating: 5,
    },
    {
      name: "Lisa Chen",
      company: "Tech Startup Office",
      text: t.testimonial3,
      rating: 5,
    },
  ]

  // Calculate video scale and opacity based on scroll
  const videoScale = Math.max(0.3, 1 - scrollY * 0.0012)
  const videoOpacity = Math.max(0.1, 1 - scrollY * 0.0015)
  const videoTranslateY = scrollY * 0.5

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement)?.value || ""
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement)?.value || ""
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || ""
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value || ""
    const projectType = (form.elements.namedItem("projectType") as HTMLInputElement)?.value || ""
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || ""

    const subject = encodeURIComponent(`Project Inquiry from ${firstName} ${lastName} - ${projectType}`)
    const body = encodeURIComponent(`
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Project Type: ${projectType}

Message:
${message}
    `)

    window.location.href = `mailto:info@villamobilidesign.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-bronze-600/20 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo.jpg" alt="Villa Mobili Design" width={240} height={80} className="h-16 w-auto" />
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#home" className="text-bronze-300 hover:text-bronze-200 transition-colors">
              {t.home}
            </Link>
            <Link href="#services" className="text-bronze-300 hover:text-bronze-200 transition-colors">
              {t.services}
            </Link>
            <Link href="#about" className="text-bronze-300 hover:text-bronze-200 transition-colors">
              {t.about}
            </Link>
            <Link href="#portfolio" className="text-bronze-300 hover:text-bronze-200 transition-colors">
              {t.ourWork}
            </Link>
            <Link href="#contact" className="text-bronze-300 hover:text-bronze-200 transition-colors">
              {t.contact}
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
              className="border-bronze-600/30 text-bronze-300 hover:bg-bronze-600/10 hover:text-bronze-200"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language === "fr" ? "EN" : "FR"}
            </Button>
            <Button
              className="hidden md:inline-flex bg-bronze-600 hover:bg-bronze-700 text-black font-semibold"
              onClick={() => setIsQuoteFormDialogOpen(true)} // Open quote dialog
            >
              {t.getQuote}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Full Screen Video */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        {/* Full Screen Video Background */}
        <div
          className="fixed inset-0 z-0 transition-all duration-300 ease-out"
          style={{
            transform: `scale(${videoScale}) translateY(${videoTranslateY}px)`,
            opacity: videoOpacity,
          }}
        >
          <div className="absolute inset-0 bg-black">
            <div className="w-full h-full flex items-center justify-center relative group">
              <video
                ref={videoRef}
                src="/retail-showcase.mp4"
                loop
                muted
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/retail-showcase.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Video Controls Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  size="lg"
                  className="rounded-full w-20 h-20 bg-bronze-600/20 hover:bg-bronze-600/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 border-2 border-bronze-600/40"
                  onClick={togglePlayPause}
                >
                  {isPlaying ? (
                    <Pause className="h-10 w-10 text-bronze-300" />
                  ) : (
                    <Play className="h-10 w-10 text-bronze-300 ml-1" />
                  )}
                </Button>
                <Button
                  size="icon"
                  className="absolute bottom-4 right-4 bg-bronze-600/20 hover:bg-bronze-600/30 backdrop-blur-sm transition-all duration-300 border-2 border-bronze-600/40"
                  onClick={toggleFullScreen}
                >
                  {isFullScreen ? (
                    <Minimize className="h-5 w-5 text-bronze-300" />
                  ) : (
                    <Maximize className="h-5 w-5 text-bronze-300" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 z-10" />

        {/* Content Overlay */}
        <div className="relative z-20 min-h-screen flex items-center pt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                {t.heroTitle}
                <span className="text-bronze-400 block"> {t.heroSubtitle}</span>
              </h1>
              <p className="text-2xl text-bronze-100/90 mb-12 leading-relaxed max-w-3xl mx-auto">{t.heroDescription}</p>
              <div className="flex justify-center mb-16">
                <Link href="#portfolio">
                  <Button
                    size="lg"
                    className="text-xl px-10 py-4 bg-bronze-600 hover:bg-bronze-700 text-black font-semibold"
                  >
                    {t.viewOurWork} <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="text-5xl font-bold text-bronze-300 mb-2">150+</div>
                  <div className="text-bronze-200/80 text-lg">{t.projectsCompleted}</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-bronze-300 mb-2">98%</div>
                  <div className="text-bronze-200/80 text-lg">{t.clientSatisfaction}</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-bronze-300 mb-2">15+</div>
                  <div className="text-bronze-200/80 text-lg">{t.yearsExperience}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
          <div className="w-6 h-10 border-2 border-bronze-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-bronze-400/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white relative z-40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.servicesTitle}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.servicesDescription}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-bronze-lg transition-shadow duration-300 hover-bronze-lift"
              >
                <CardContent className="p-8">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 relative z-40">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.aboutTitle}</h2>
              <p className="text-lg text-gray-600 mb-6">{t.aboutText1}</p>
              <p className="text-lg text-gray-600 mb-8">{t.aboutText2}</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-bronze-600" />
                  <span className="text-gray-700">{t.expertDesignTeam}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-bronze-600" />
                  <span className="text-gray-700">{t.customSolutions}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-bronze-600" />
                  <span className="text-gray-700">{t.qualityCraftsmanship}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-bronze-600" />
                  <span className="text-gray-700">{t.onTimeDelivery}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Villa Mobili Design team at work"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-bronze-600 text-black p-6 rounded-xl shadow-lg">
                <Users className="h-8 w-8 mb-2" />
                <div className="font-semibold text-lg">25+ {t.teamMembers}</div>
                <div className="text-sm opacity-90">{t.designersCraftsmen}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white relative z-40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.portfolioTitle}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.portfolioDescription}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer" onClick={() => handleProjectClick(item)}>
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-bronze-lg transition-all duration-500">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-sm font-medium text-bronze-300">{item.category}</div>
                    <div className="text-lg font-semibold">{item.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-bronze-600 text-bronze-600 hover:bg-bronze-50 bg-transparent"
              >
                {t.viewAllProjects} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 relative z-40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.testimonialsTitle}</h2>
            <p className="text-xl text-gray-600">{t.testimonialsDescription}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-bronze-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-bronze-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white relative z-40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.contactTitle}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.contactDescription}</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t.contactInformation}</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-bronze-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-bronze-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t.phone}</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-bronze-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-bronze-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t.email}</div>
                    <div className="text-gray-600">info@villamobilidesign.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-bronze-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-bronze-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t.address}</div>
                    <div className="text-gray-600">
                      123 Design Street
                      <br />
                      Creative District, CD 12345
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-bronze-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">{t.freeConsultation}</h4>
                <p className="text-gray-600 text-sm">{t.consultationDesc}</p>
              </div>
            </div>
            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t.sendMessage}</h3>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">{t.firstName}</Label>
                        <Input id="firstName" name="firstName" placeholder="John" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">{t.lastName}</Label>
                        <Input id="lastName" name="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">{t.email}</Label>
                      <Input id="email" name="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">{t.phone}</Label>
                      <Input id="phone" name="phone" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div>
                      <Label htmlFor="projectType">{t.projectType}</Label>
                      <Input id="projectType" name="projectType" placeholder={t.projectTypePlaceholder} />
                    </div>
                    <div>
                      <Label htmlFor="message">{t.message}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={t.messagePlaceholder}
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button
                      size="lg"
                      type="submit"
                      className="w-full bg-bronze-600 hover:bg-bronze-700 text-black font-semibold"
                    >
                      {t.sendMessageBtn}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-bronze-200 py-12 relative z-40">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image src="/logo.jpg" alt="Villa Mobili Design" width={240} height={80} className="h-16 w-auto mb-4" />
              <p className="text-bronze-300/80 mb-4">{t.footerDescription}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-bronze-200">{t.services}</h4>
              <ul className="space-y-2 text-bronze-300/80">
                <li>{t.footerRetailSpaceDesign}</li>
                <li>{t.footerCustomFurnitureCreation}</li>
                <li>{t.footerBusinessRedesign}</li>
                <li>{t.footerSpacePlanning}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-bronze-200">{t.company}</h4>
              <ul className="space-y-2 text-bronze-300/80">
                <li>
                  <Link href="#about" className="hover:text-bronze-200 transition-colors">
                    {t.aboutUs}
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-bronze-200 transition-colors">
                    {t.ourWork}
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="hover:text-bronze-200 transition-colors">
                    {t.testimonials}
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-bronze-200 transition-colors">
                    {t.contact}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-bronze-200">{t.connect}</h4>
              <ul className="space-y-2 text-bronze-300/80">
                <li>
                  <Link
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-bronze-200 transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-bronze-200 transition-colors"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-bronze-200 transition-colors"
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-bronze-600/20 mt-8 pt-8 text-center text-bronze-300/60">
            <p>&copy; 2025 Villa Mobili Design. {t.rightsReserved}</p>
          </div>
        </div>
      </footer>

      {/* Project Detail Dialog */}
      <ProjectDetailDialog
        project={selectedProject}
        isOpen={isDetailDialogOpen}
        onClose={() => setIsDetailDialogOpen(false)}
      />

      {/* Quote Form Dialog */}
      <QuoteFormDialog
        isOpen={isQuoteFormDialogOpen}
        onClose={() => setIsQuoteFormDialogOpen(false)}
        translations={translations[language]}
      />
    </div>
  )
}
