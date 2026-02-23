import type {
  NavLink,
  Service,
  ProcessStep,
  FAQItem,
  Stat,
} from "./types";

export const COMPANY = {
  name: "IronPeak Construction Group",
  tagline: "Built With Strength And Precision",
  phone: "(408) 555-0198",
  email: "info@ironpeakcg.com",
  address: "San Jose, California",
  mapsUrl: "https://www.google.com/maps/place/San+Jose,+CA",
  founded: "2014",
  serviceArea:
    "Bay Area (San Jose, Santa Clara, Sunnyvale, Palo Alto, Fremont)",
  heroSubtext:
    "We believe the best results come from a disciplined approach to design and execution. IronPeak delivers dependable construction for homeowners and businesses across the Bay Area.",
  aboutText:
    "IronPeak Construction Group is a full-service construction company delivering high-quality residential and small commercial projects throughout the Bay Area. Known for dependable timelines, clear communication, and solid workmanship since 2014.",
  aboutText2:
    "Our team brings over a decade of experience to every project, whether it's a custom home build, a full-scale renovation, or a commercial build-out. We focus on clear communication, dependable timelines, and workmanship you can trust.",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

export const STATS: Stat[] = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
];

export const SERVICES: Service[] = [
  {
    title: "Residential Construction",
    description:
      "From foundation to finish, we build quality homes designed for Bay Area living. Custom floor plans, premium materials, and meticulous craftsmanship on every project.",
    icon: "Home",
    image: "/images/services/residential.jpg",
  },
  {
    title: "Home Remodeling & Renovation",
    description:
      "Transform your existing space with precision renovations. Kitchens, bathrooms, additions, and whole-home remodels that increase value and comfort.",
    icon: "Hammer",
    image: "/images/services/remodeling.jpg",
  },
  {
    title: "Commercial Build Outs",
    description:
      "Professional tenant improvements and commercial construction for retail, office, and restaurant spaces. On time, on budget, built to code.",
    icon: "Building2",
    image: "/images/services/commercial.jpg",
  },
  {
    title: "Design Build Services",
    description:
      "Streamline your project with integrated design and construction. One team, one vision, one point of accountability from concept to completion.",
    icon: "PenTool",
    image: "/images/services/design-build.jpg",
  },
  {
    title: "Structural & Concrete Work",
    description:
      "Engineered foundations, retaining walls, and structural reinforcement. We build the backbone that everything else depends on.",
    icon: "Boxes",
    image: "/images/services/structural.jpg",
  },
  {
    title: "Project Management & Consulting",
    description:
      "Expert guidance for complex projects. Scheduling, budgeting, permitting, and oversight to keep your build running smoothly.",
    icon: "ClipboardList",
    image: "/images/services/consulting.jpg",
  },
];

export const FOOTER_SECTIONS = {
  about: {
    title: "About Company",
    text: "IronPeak Construction Group has been delivering quality construction services across the Bay Area since 2014. We build with strength, precision, and integrity.",
  },
  industries: {
    title: "Industries",
    links: [
      "Residential",
      "Commercial",
      "Real Estate",
      "Hospitality",
      "Retail",
      "Healthcare",
    ],
  },
  usefulLinks: {
    title: "Useful Links",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Contact Us", href: "#contact" },
      { label: "Privacy Policy", href: "#" },
    ] as NavLink[],
  },
  coreServices: {
    title: "Core Services",
    links: [
      "General Contracting",
      "Planning & Design",
      "Renovations & Remodeling",
      "Structural Engineering",
      "Project Management",
    ],
  },
} as const;

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We discuss your vision, assess the project scope, and provide a clear, detailed estimate with no hidden costs.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "Our team develops comprehensive plans, secures permits, and creates a realistic timeline for your approval.",
  },
  {
    number: "03",
    title: "Construction",
    description:
      "Skilled crews execute the build with quality materials, regular progress updates, and strict adherence to schedule.",
  },
  {
    number: "04",
    title: "Final Walkthrough",
    description:
      "We conduct a thorough inspection with you, ensure every detail meets our standards, and hand over your completed project.",
  },
];

export const CTA = {
  heading: "Ready to Start Your Next Project?",
  subtext:
    "Get in touch with our team for a free consultation and detailed project estimate. No surprises, no hidden costs.",
  primaryLabel: "Get Free Quote",
  primaryHref: "#contact",
  secondaryLabel: `Call ${COMPANY.phone}`,
  secondaryHref: `tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`,
  backgroundImage: "/images/cta-bg.jpg",
} as const;

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What areas do you serve?",
    answer:
      "We serve the entire Bay Area including San Jose, Santa Clara, Sunnyvale, Palo Alto, Fremont, and surrounding communities.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by scope. A kitchen remodel typically takes 6-10 weeks, while a full home build can take 6-12 months. We provide detailed schedules during the planning phase.",
  },
  {
    question: "Do you handle permits and inspections?",
    answer:
      "Yes. We manage all permitting, inspections, and code compliance so you don't have to worry about the paperwork.",
  },
  {
    question: "What is your payment structure?",
    answer:
      "We typically work with a milestone-based payment schedule tied to project phases. A detailed payment plan is included in every contract.",
  },
  {
    question: "Can I make changes during construction?",
    answer:
      "We accommodate changes when possible and clearly communicate any impact on timeline or budget before proceeding.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. IronPeak Construction Group is fully licensed, bonded, and insured for all residential and commercial work in California.",
  },
];
