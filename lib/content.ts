export const content = {
  nav: {
    items: [
      { name: "Approach", href: "#how-we-help" },
      { name: "Services", href: "#services" },
      { name: "Our Work", href: "#featured-work" },
      { name: "Contact", href: "#contact" },
    ],
    cta: {
      label: "Let's Talk",
      href: "#contact",
    },
  },

  hero: {
    tagline: "Philadelphia · Event Production · Experiential Marketing",
    headline: {
      lead: "Events that look polished.",
      accent: "Feel seamless.",
      close: "And leave an impression that lasts.",
    },
    description:
      "Katalyst helps brands, venues, and organizations produce live experiences worth remembering. We handle the strategy, creative direction, vendors, and on-site execution — so your team can be present instead of managing moving parts.",
    cta: {
      primary: "Start the Conversation",
      primaryHref: "#contact",
      secondary: "See Our Work",
      secondaryHref: "#featured-work",
    },
    trustMarkers: ["Galas and fundraisers", "Brand activations", "Conferences and VIP events"],
    panelEyebrow: "What clients value",
    panelTitle: "A calm, strategic production partner.",
    panelDescription:
      "We bring structure, taste, and follow-through to high-visibility events where the details matter.",
    highlights: [
      "Strategic planning and creative direction",
      "Vendor management, run-of-show, and guest experience",
      "Responsive, composed execution on event day",
    ],
  },

  intro: {
    eyebrow: "Why Katalyst",
    title: "More than a vendor. A partner who thinks alongside you from day one.",
    description:
      "Clients bring us in when the event matters, the expectations are high, and they need someone who can shape the concept, protect the guest experience, and manage every operational detail without dropping the ball.",
    points: [
      {
        title: "Clear strategy",
        description:
          "We align the event with your audience, goals, and brand standards before the details start multiplying.",
      },
      {
        title: "Thoughtful design",
        description:
          "From flow and programming to environment and key touchpoints, the experience feels intentional instead of pieced together.",
      },
      {
        title: "Confident execution",
        description:
          "We manage timelines, partners, and on-site decisions so your team can be present instead of firefighting.",
      },
    ],
  },

  services: {
    eyebrow: "What We Do",
    title: "Full-service production, or exactly the support you need.",
    description:
      "Whether you need a complete partner from concept to show day, or someone to strengthen a specific part of the process, we bring structure, taste, and follow-through to every engagement.",
    items: [
      {
        title: "Event Planning and Production",
        description:
          "End-to-end planning for galas, conferences, launches, fundraisers, private events, and executive gatherings, including timelines, vendors, logistics, and on-site execution.",
      },
      {
        title: "Experiential Marketing and Brand Activations",
        description:
          "Experiences that help people interact with your brand in a memorable way, from pop-ups and installations to sponsorship activations and campaign moments.",
      },
      {
        title: "Creative Strategy and Event Design",
        description:
          "Big-picture thinking translated into a clear event concept, guest journey, visual direction, programming flow, and environmental design that supports your message.",
      },
    ],
    note:
      "Every engagement is shaped around your goals, team bandwidth, and the level of support you actually need.",
  },

  featuredWork: {
    eyebrow: "Featured Work",
    title: "Four Seasons Philadelphia Grand Opening",
    description:
      "For the launch of Four Seasons Philadelphia, Katalyst helped produce a multi-day opening experience for press, partners, VIP guests, and key stakeholders. The rollout needed to feel elevated, welcoming, and impeccably controlled at every touchpoint — and that is exactly what it delivered.",
    badge: "Luxury hospitality launch",
    outcomes: [
      "Multi-day experience for press, partners, and VIP guests",
      "Guest journey designed to match the property’s luxury standard",
      "Production details coordinated from arrival through final send-off",
    ],
    cta: {
      label: "Plan a Signature Event",
      href: "#contact",
    },
  },

  results: {
    eyebrow: "By the Numbers",
    title: "A track record built on events that had to go right.",
    description:
      "Our clients come to us when the audience matters, the details are complex, and the experience needs to feel flawless from the outside.",
    stats: [
      {
        value: 500,
        suffix: "+",
        label: "events produced across corporate, nonprofit, and hospitality sectors",
      },
      {
        value: 100,
        suffix: "+",
        label: "brands and organizations supported with planning and activations",
      },
      {
        value: 15,
        suffix: "+",
        label: "years of production experience",
      },
      {
        value: 50,
        suffix: "+",
        label: "awards recognizing live experience work",
      },
    ],
    note:
      "Behind every number is a client who needed the room to feel right — and an execution that delivered.",
  },

  cta: {
    eyebrow: "Start the conversation",
    title: "Let's make your next event one people actually talk about.",
    description:
      "Tell us what you're planning — a gala, launch, conference, activation, or private experience — and we'll help you figure out the smartest next step.",
    reassurance:
      "No pressure. Just a conversation about what you need and how we can help.",
    button: "Get in Touch",
    buttonHref: "mailto:hello@katalystproductions.co",
    secondaryButton: "Call Us",
    secondaryHref: "tel:2673178798",
    contact: {
      phone: "(267) 317-8798",
      email: "hello@katalystproductions.co",
      location: "Philadelphia, PA",
    },
  },

  footer: {
    description:
      "Philadelphia-based event production and experiential marketing. We help clients create high-touch experiences that feel polished, purposeful, and memorable.",
    columns: {
      Services: [
        "Event Planning",
        "Event Production",
        "Experiential Marketing",
        "Brand Activations",
      ],
      "Event Types": [
        "Galas and Fundraisers",
        "Corporate Events",
        "Product Launches",
        "VIP Experiences",
      ],
      Contact: ["Philadelphia, PA", "(267) 317-8798", "hello@katalystproductions.co"],
    },
  },
} as const
