"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Filter, Globe, Store, Sofa, Sparkles, LayoutGrid, Palette, ClipboardList } from "lucide-react" // Import new icons
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card" // Import CardContent
import { ProjectDetailDialog } from "@/components/project-detail-dialog"
import { QuoteFormDialog } from "@/components/quote-form-dialog" // Import the new component

export default function PortfolioPage() {
  const translations = {
    fr: {
      backToHome: "Retour à l'Accueil",
      getQuote: "Devis Gratuit",
      ourCompletePortfolio: "Notre Portfolio",
      complete: "Complet",
      portfolioDescription:
        "Explorez notre collection complète de transformations commerciales, créations de mobilier sur mesure et projets de conception d'espaces qui ont aidé les entreprises à prospérer.",
      completedProjects: "Projets Réalisés",
      projectCategories: "Catégories de Projets",
      yearsShowcased: "Années Présentées",
      filterByCategory: "Filtrer par Catégorie :",
      all: "Tous",
      retail: "Commerce",
      hospitality: "Hôtellerie",
      corporate: "Entreprise",
      furniture: "Mobilier",
      residential: "Résidentiel",
      projectResults: "Résultats du Projet :",
      readyToStart: "Prêt à Commencer Votre Projet ?",
      readyDescription:
        "Discutons de la façon dont nous pouvons transformer votre espace et créer un design qui stimule le succès de votre entreprise.",
      getFreeConsultation: "Consultation Gratuite",
      learnMoreAboutUs: "En Savoir Plus Sur Nous",
      footerDescription:
        "Transformer les espaces commerciaux en histoires de succès grâce à un design exceptionnel et un savoir-faire artisanal.",
      services: "Services",
      company: "Entreprise",
      aboutUs: "À Propos",
      ourWork: "Nos Réalisations",
      contact: "Contact",
      connect: "Connecter",
      rightsReserved: "Tous droits réservés.",

      // Project data
      modernBoutiqueTitle: "Refonte de Boutique Moderne",
      modernBoutiqueLocation: "Quartier de la Mode du Centre-ville",
      modernBoutiqueDesc:
        "Transformation complète d'un espace boutique de 2 500 pi² avec des présentoirs personnalisés, un système d'éclairage LED et des matériaux haut de gamme.",
      modernBoutiqueResults: "40% d'augmentation des ventes, 60% d'amélioration du temps de séjour des clients",

      restaurantTitle: "Transformation d'Intérieur de Restaurant",
      restaurantLocation: "Quartier Historique des Arts",
      restaurantDesc:
        "Refonte élégante d'un espace de restauration intégrant des matériaux durables, des solutions acoustiques et des arrangements de sièges flexibles.",
      restaurantResults: "25% d'augmentation de la capacité, amélioration des scores de satisfaction client",

      techOfficeTitle: "Bureau de Startup Tech",
      techOfficeLocation: "Hub d'Innovation",
      techOfficeDesc:
        "Conception d'espace de travail moderne favorisant la collaboration avec des espaces de réunion flexibles, des éléments biophiliques et une intégration technologique intelligente.",
      techOfficeResults: "30% d'amélioration de la satisfaction des employés, productivité renforcée",

      luxuryShowroomTitle: "Design de Showroom de Luxe",
      luxuryShowroomLocation: "Centre Commercial Premium",
      luxuryShowroomDesc:
        "Showroom automobile haut de gamme avec éclairage dramatique, finitions premium et zones d'affichage interactives.",
      luxuryShowroomResults: "50% d'augmentation des prospects qualifiés, perception de marque améliorée",

      artisanCafeTitle: "Intérieur de Café Artisanal",
      artisanCafeLocation: "Quartier Créatif",
      artisanCafeDesc:
        "Design de café chaleureux mélangeant éléments industriels et rustiques avec mobilier personnalisé et intégration d'art local.",
      artisanCafeResults: "35% d'augmentation de la clientèle quotidienne, espace de rassemblement communautaire",

      executiveFurnitureTitle: "Collection de Mobilier Exécutif Sur Mesure",
      executiveFurnitureLocation: "Siège Social",
      executiveFurnitureDesc:
        "Suite de mobilier exécutif sur mesure incluant tables de conférence, solutions de rangement et sièges ergonomiques.",
      executiveFurnitureResults: "Présence exécutive renforcée, efficacité des réunions améliorée",

      medicalOfficeTitle: "Rénovation de Bureau Médical",
      medicalOfficeLocation: "Plaza Médical",
      medicalOfficeDesc:
        "Design centré sur le patient axé sur le confort, la confidentialité et un flux de travail efficace avec des schémas de couleurs apaisantes.",
      medicalOfficeResults:
        "20% de réduction de la perception d'attente des patients, efficacité du personnel améliorée",

      luxuryPenthouseTitle: "Intérieur de Penthouse de Luxe",
      luxuryPenthouseLocation: "Gratte-ciel du Centre-ville",
      luxuryPenthouseDesc:
        "Design résidentiel sophistiqué avec menuiserie personnalisée, mobilier de designer et vues panoramiques sur la ville.",
      luxuryPenthouseResults: "Design primé, présenté dans des magazines de design",

      retailChainTitle: "Prototype de Magasin de Chaîne de Détail",
      retailChainLocation: "Emplacements Multiples",
      retailChainDesc:
        "Concept de design de magasin évolutif pour chaîne de détail nationale axé sur la cohérence de marque et l'efficacité opérationnelle.",
      retailChainResults: "Déployé dans 50+ emplacements, 15% d'amélioration des ventes par pi²",

      hotelLobbyTitle: "Refonte de Hall d'Hôtel",
      hotelLobbyLocation: "Hôtel du Quartier des Affaires",
      hotelLobbyDesc:
        "Transformation de grand hall créant une atmosphère accueillante avec mobilier moderne et éclairage artistique.",
      hotelLobbyResults: "Amélioration des scores de satisfaction des clients, image de marque renforcée",

      artisanWorkshopTitle: "Atelier d'Artisan & Espace de Vente",
      artisanWorkshopLocation: "Quartier Arts & Artisanat",
      artisanWorkshopDesc:
        "Espace à double usage combinant studio de travail et showroom de vente, avec aménagements flexibles et éclairage naturel.",
      artisanWorkshopResults: "Augmentation des réservations d'atelier, ventes de détail améliorées",

      homeOfficeTitle: "Suite de Bureau à Domicile Sur Mesure",
      homeOfficeLocation: "Résidence Privée",
      homeOfficeDesc:
        "Mobilier de bureau à domicile sur mesure incluant systèmes de bureau intégrés, solutions de rangement et sièges ergonomiques.",
      homeOfficeResults: "Productivité améliorée, intégration harmonieuse avec le design de la maison",

      // Quote Form specific translations
      spaceType: "Type d'Espace",
      spaceTypePlaceholder: "ex: Boutique de détail, Bureau, Restaurant",
      width: "Largeur",
      length: "Longueur",
      dimensionsUnit: "mètres", // Assuming meters for French
      submitRequest: "Soumettre la Demande",
      quoteSuccessTitle: "Demande de Devis Envoyée !",
      quoteSuccessMessage: "Merci pour votre demande. Nous vous contacterons sous peu pour discuter de votre projet.",

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

      // Services Section translations
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
      // Footer service links
      footerRetailSpaceDesign: "Design d'Espaces Commerciaux",
      footerCustomFurnitureCreation: "Création de Mobilier Sur Mesure",
      footerBusinessRedesign: "Refonte d'Entreprise",
      footerSpacePlanning: "Planification d'Espace",
    },
    en: {
      backToHome: "Back to Home",
      getQuote: "Get Quote",
      ourCompletePortfolio: "Our Complete",
      complete: "Portfolio",
      portfolioDescription:
        "Explore our comprehensive collection of retail transformations, custom furniture creations, and space design projects that have helped businesses thrive.",
      completedProjects: "Completed Projects",
      projectCategories: "Project Categories",
      yearsShowcased: "Years Showcased",
      filterByCategory: "Filter by Category:",
      all: "All",
      retail: "Retail",
      hospitality: "Hospitality",
      corporate: "Corporate",
      furniture: "Furniture",
      residential: "Residential",
      projectResults: "Project Results:",
      readyToStart: "Ready to Start Your Project?",
      readyDescription:
        "Let's discuss how we can transform your space and create a design that drives your business success.",
      getFreeConsultation: "Get Free Consultation",
      learnMoreAboutUs: "Learn More About Us",
      footerDescription:
        "Transforming retail spaces into success stories through exceptional design and craftsmanship.",
      services: "Services",
      company: "Company",
      aboutUs: "About Us",
      ourWork: "Our Work",
      contact: "Contact",
      connect: "Connect",
      rightsReserved: "All rights reserved.",

      // Project data
      modernBoutiqueTitle: "Modern Boutique Redesign",
      modernBoutiqueLocation: "Downtown Fashion District",
      modernBoutiqueDesc:
        "Complete transformation of a 2,500 sq ft boutique space featuring custom display fixtures, LED lighting system, and premium materials.",
      modernBoutiqueResults: "40% increase in sales, 60% improvement in customer dwell time",

      restaurantTitle: "Restaurant Interior Transformation",
      restaurantLocation: "Historic Arts Quarter",
      restaurantDesc:
        "Elegant dining space redesign incorporating sustainable materials, acoustic solutions, and flexible seating arrangements.",
      restaurantResults: "25% increase in capacity, improved customer satisfaction scores",

      techOfficeTitle: "Tech Startup Office",
      techOfficeLocation: "Innovation Hub",
      techOfficeDesc:
        "Modern workspace design promoting collaboration with flexible meeting spaces, biophilic elements, and smart technology integration.",
      techOfficeResults: "30% improvement in employee satisfaction, enhanced productivity",

      luxuryShowroomTitle: "Luxury Showroom Design",
      luxuryShowroomLocation: "Premium Shopping Center",
      luxuryShowroomDesc:
        "High-end automotive showroom featuring dramatic lighting, premium finishes and interactive display areas.",
      luxuryShowroomResults: "50% increase in qualified leads, enhanced brand perception",

      artisanCafeTitle: "Artisan Café Interior",
      artisanCafeLocation: "Creative District",
      artisanCafeDesc:
        "Cozy café design blending industrial and rustic elements with custom furniture and local art integration.",
      artisanCafeResults: "35% increase in daily customers, community gathering space",

      executiveFurnitureTitle: "Custom Executive Furniture Collection",
      executiveFurnitureLocation: "Corporate Headquarters",
      executiveFurnitureDesc:
        "Bespoke executive furniture suite including conference tables, storage solutions, and ergonomic seating.",
      executiveFurnitureResults: "Enhanced executive presence, improved meeting efficiency",

      medicalOfficeTitle: "Medical Office Renovation",
      medicalOfficeLocation: "Medical Plaza",
      medicalOfficeDesc:
        "Patient-centered design focusing on comfort, privacy, and efficient workflow with calming color schemes.",
      medicalOfficeResults: "20% reduction in patient wait perception, improved staff efficiency",

      luxuryPenthouseTitle: "Luxury Penthouse Interior",
      luxuryPenthouseLocation: "Downtown High-Rise",
      luxuryPenthouseDesc:
        "Sophisticated residential design featuring custom millwork, designer furniture, and panoramic city views.",
      luxuryPenthouseResults: "Award-winning design, featured in design magazines",

      retailChainTitle: "Retail Chain Store Prototype",
      retailChainLocation: "Multiple Locations",
      retailChainDesc:
        "Scalable store design concept for national retail chain focusing on brand consistency and operational efficiency.",
      retailChainResults: "Rolled out to 50+ locations, 15% improvement in sales per sq ft",

      hotelLobbyTitle: "Hotel Lobby Redesign",
      hotelLobbyLocation: "Business District Hotel",
      hotelLobbyDesc:
        "Grand lobby transformation creating a welcoming atmosphere with modern furnishings and artistic lighting.",
      hotelLobbyResults: "Improved guest satisfaction scores, enhanced brand image",

      artisanWorkshopTitle: "Artisan Workshop & Retail Space",
      artisanWorkshopLocation: "Arts & Crafts District",
      artisanWorkshopDesc:
        "Dual-purpose space combining working studio with retail showroom, featuring flexible layouts and natural lighting.",
      artisanWorkshopResults: "Increased workshop bookings, enhanced retail sales",

      homeOfficeTitle: "Custom Home Office Suite",
      homeOfficeLocation: "Private Residence",
      homeOfficeDesc:
        "Bespoke home office furniture including built-in desk systems, storage solutions, and ergonomic seating.",
      homeOfficeResults: "Productivity improved, seamless integration with home design",

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

      // Services Section translations
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
      // Footer service links
      footerRetailSpaceDesign: "Retail Space Design",
      footerCustomFurnitureCreation: "Custom Furniture Creation",
      footerBusinessRedesign: "Business Redesign",
      footerSpacePlanning: "Space Planning",
    },
  }

  const [language, setLanguage] = useState<"fr" | "en">("fr")
  // Initialize with the untranslated key 'all'
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "retail" | "hospitality" | "corporate" | "furniture" | "residential"
  >("all")

  useEffect(() => {
    // Reset to 'all' (untranslated key) when language changes
    setSelectedCategory("all")
  }, [language])

  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false)
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false) // State for quote dialog

  const handleProjectClick = (project: any) => {
    setSelectedProject(project)
    setIsDetailDialogOpen(true)
  }

  const t = translations[language]

  // Use untranslated keys for categories
  const categoryKeys = ["all", "retail", "hospitality", "corporate", "furniture", "residential"]

  const portfolioProjects = [
    {
      id: 1,
      title: t.macCosmeticsTitle,
      category: "retail", // Changed to untranslated key
      location: "Luxury Shopping Mall",
      date: "2024",
      description: t.macCosmeticsDesc,
      images: [
        "/images/portfolio/mac-cosmetics-main.jpg",
        "/images/portfolio/mac-cosmetics-detail-1.jpg",
        "/images/portfolio/mac-cosmetics-detail-2.jpg",
      ],
      tags: ["Retail Design", "Beauty", "Interactive Displays"],
      results: t.macCosmeticsResults,
    },
    {
      id: 2,
      title: t.bankReworkTitle,
      category: "corporate", // Changed to untranslated key
      location: "Financial District",
      date: "2024",
      description: t.bankReworkDesc,
      images: [
        "/images/portfolio/bank-rework-main.jpg",
        "/images/portfolio/bank-rework-main.jpg", // Using main image for detail 1 as no specific detail image was provided
        "/images/portfolio/bank-rework-main.jpg", // Using main image for detail 2 as no specific detail image was provided
      ],
      tags: ["Financial Design", "Branch Rework", "Customer Experience"],
      results: t.bankReworkResults,
    },
    {
      id: 3,
      title: t.techOfficeTitle,
      category: "corporate", // Changed to untranslated key
      location: t.techOfficeLocation,
      date: "2023",
      description: t.techOfficeDesc,
      images: [
        "/images/portfolio/office-detail-1.jpg",
        "/images/portfolio/office-detail-2.jpg",
        "/images/portfolio/office-detail-3.jpg",
      ],
      tags: ["Office Design", "Collaboration", "Technology"],
      results: t.techOfficeResults,
    },
    {
      id: 4,
      title: t.fatalesTitle,
      category: "retail", // Changed to untranslated key
      location: "High-End Shopping District",
      date: "2023",
      description: t.fatalesDesc,
      images: [
        "/images/portfolio/fatales-main.jpg",
        "/images/portfolio/fatales-main.jpg", // Using main image for detail 1 as no specific detail image was provided
        "/images/portfolio/fatales-main.jpg", // Using main image for detail 2 as no specific detail image was provided
      ],
      tags: ["Luxury Retail", "Cosmetics", "Boutique Design", "Custom Displays"],
      results: t.fatalesResults,
    },
    {
      id: 5,
      title: t.artisanCafeTitle,
      category: "hospitality", // Changed to untranslated key
      location: t.artisanCafeLocation,
      date: "2023",
      description: t.artisanCafeDesc,
      images: [
        "/images/portfolio/cafe-detail-1.jpg",
        "/images/portfolio/cafe-detail-2.jpg",
        "/images/portfolio/cafe-detail-3.jpg",
      ],
      tags: ["Café Design", "Local Art", "Custom Furniture"],
      results: t.artisanCafeResults,
    },
    {
      id: 6,
      title: t.executiveFurnitureTitle,
      category: "furniture", // Changed to untranslated key
      location: t.executiveFurnitureLocation,
      date: "2023",
      description: t.executiveFurnitureDesc,
      images: [
        "/images/portfolio/furniture-detail-1.jpg",
        "/images/portfolio/furniture-detail-2.jpg",
        "/images/portfolio/furniture-detail-3.jpg",
      ],
      tags: ["Custom Furniture", "Executive", "Ergonomic"],
      results: t.executiveFurnitureResults,
    },
    {
      id: 7,
      title: t.medicalOfficeTitle,
      category: "corporate", // Changed to untranslated key
      location: t.medicalOfficeLocation,
      date: "2022",
      description: t.medicalOfficeDesc,
      images: [
        "/images/portfolio/medical-office-detail-1.jpg",
        "/images/portfolio/medical-office-detail-2.jpg",
        "/images/portfolio/medical-office-detail-3.jpg",
      ],
      tags: ["Healthcare", "Patient Experience", "Workflow"],
      results: t.medicalOfficeResults,
    },
    {
      id: 8,
      title: t.luxuryPenthouseTitle,
      category: "residential", // Changed to untranslated key
      location: t.luxuryPenthouseLocation,
      date: "2022",
      description: t.luxuryPenthouseDesc,
      images: [
        "/images/portfolio/penthouse-detail-1.jpg",
        "/images/portfolio/penthouse-detail-2.jpg",
        "/images/portfolio/penthouse-detail-3.jpg",
      ],
      tags: ["Luxury Living", "Custom Millwork", "City Views"],
      results: t.luxuryPenthouseResults,
    },
    {
      id: 9,
      title: t.retailChainTitle,
      category: "retail", // Changed to untranslated key
      location: t.retailChainLocation,
      date: "2022",
      description: t.retailChainDesc,
      images: [
        "/images/portfolio/retail-chain-detail-1.jpg",
        "/images/portfolio/retail-chain-detail-2.jpg",
        "/images/portfolio/retail-chain-detail-3.jpg",
      ],
      tags: ["Retail Chain", "Brand Consistency", "Scalable"],
      results: t.retailChainResults,
    },
    {
      id: 10,
      title: t.hotelLobbyTitle,
      category: "hospitality", // Changed to untranslated key
      location: t.hotelLobbyLocation,
      date: "2022",
      description: t.hotelLobbyDesc,
      images: [
        "/images/portfolio/hotel-lobby-detail-1.jpg",
        "/images/portfolio/hotel-lobby-detail-2.jpg",
        "/images/portfolio/hotel-lobby-detail-3.jpg",
      ],
      tags: ["Hotel Design", "Lobby", "Hospitality"],
      results: t.hotelLobbyResults,
    },
    {
      id: 11,
      title: t.artisanWorkshopTitle,
      category: "retail", // Changed to untranslated key
      location: t.artisanWorkshopLocation,
      date: "2021",
      description: t.artisanWorkshopDesc,
      images: [
        "/images/portfolio/workshop-detail-1.jpg",
        "/images/portfolio/workshop-detail-2.jpg",
        "/images/portfolio/workshop-detail-3.jpg",
      ],
      tags: ["Workshop", "Flexible Space", "Natural Light"],
      results: t.artisanWorkshopResults,
    },
    {
      id: 12,
      title: t.homeOfficeTitle,
      category: "furniture", // Changed to untranslated key
      location: t.homeOfficeLocation,
      date: "2021",
      description: t.homeOfficeDesc,
      images: [
        "/images/portfolio/home-office-detail-1.jpg",
        "/images/portfolio/home-office-detail-2.jpg",
        "/images/portfolio/home-office-detail-3.jpg",
      ],
      tags: ["Home Office", "Built-in", "Ergonomic"],
      results: t.homeOfficeResults,
    },
    {
      id: 13, // Use the next available ID
      title: t.bankReworkTitle,
      category: "corporate", // Changed to untranslated key
      location: "Financial District",
      date: "2024",
      description: t.bankReworkDesc,
      images: [
        "/images/portfolio/bank-rework-main.jpg",
        "/images/portfolio/bank-rework-main.jpg", // Using main image for detail 1 as no specific detail image was provided
        "/images/portfolio/bank-rework-main.jpg", // Using main image for detail 2 as no specific detail image was provided
      ],
      tags: ["Financial Design", "Branch Rework", "Customer Experience"],
      results: t.bankReworkResults,
    },
  ]

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

  const filteredProjects =
    selectedCategory === "all" // Compare with untranslated key
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 w-full bg-black backdrop-blur-sm border-b border-bronze-600/20 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 text-bronze-300 hover:text-bronze-200 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-lg font-medium">{t.backToHome}</span>
          </Link>
          <div className="flex items-center">
            <Image src="/logo.jpg" alt="Villa Mobili Design" width={240} height={80} className="h-16 w-auto" />
          </div>
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
              className="bg-bronze-600 hover:bg-bronze-700 text-black font-semibold"
              onClick={() => setIsQuoteDialogOpen(true)} // Open quote dialog
            >
              {t.getQuote}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t.ourCompletePortfolio}
            <span className="text-bronze-600"> {t.complete}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{t.portfolioDescription}</p>
          <div className="flex justify-center items-center space-x-8 text-gray-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{portfolioProjects.length}+</div>
              <div>{t.completedProjects}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">6</div>
              <div>{t.projectCategories}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">5+</div>
              <div>{t.yearsShowcased}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 text-gray-600 mr-6">
              <Filter className="h-5 w-5" />
              <span className="font-medium">{t.filterByCategory}</span>
            </div>
            {categoryKeys.map((categoryKey) => (
              <Button
                key={categoryKey}
                variant={selectedCategory === categoryKey ? "default" : "outline"}
                onClick={() => setSelectedCategory(categoryKey)}
                className={`transition-all duration-200 ${
                  selectedCategory === categoryKey
                    ? "bg-bronze-600 hover:bg-bronze-700 text-black"
                    : "border-bronze-600 text-bronze-600 hover:bg-bronze-50"
                }`}
              >
                {t[categoryKey as keyof typeof t]} {/* Display translated category name */}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="border-0 shadow-lg hover:shadow-bronze-lg transition-all duration-300 group hover-bronze-lift cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-bronze-600 text-black px-3 py-1 rounded-full text-sm font-medium">
                      {t[project.category as keyof typeof t]} {/* Display translated category name */}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {project.location} • {project.date}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-800 font-medium">
                    <span className="text-bronze-600">{t.projectResults}</span> {project.results}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section (Added to Portfolio Page) */}
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

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.readyToStart}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{t.readyDescription}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-bronze-600 hover:bg-bronze-700 text-black font-semibold px-8 py-3">
              {t.getFreeConsultation}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-bronze-600 text-bronze-600 hover:bg-bronze-50 bg-transparent px-8 py-3"
            >
              {t.learnMoreAboutUs}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-bronze-200 py-12">
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
                  <Link href="/#about" className="hover:text-bronze-200 transition-colors">
                    {t.aboutUs}
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-bronze-200 transition-colors">
                    {t.ourWork}
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-bronze-200 transition-colors">
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
        isOpen={isQuoteDialogOpen}
        onClose={() => setIsQuoteDialogOpen(false)}
        translations={translations[language]}
      />
    </div>
  )
}
