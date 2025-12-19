
// src/config.js

export const siteConfig = {
  siteDetails: {
    name: "Mili's Couture",
    logoText: "MILI'S COUTURE",
    logoSubText: "EST. 2024",
    topBarText: "Experience timeless couture for you.",
    phone: "+91 9079289688",
    whatsappNumber: "919079289688",
    address: "90/16, Karma Patel Marg, Mansarovar, Jaipur, Rajasthan 302020",
    email: "dresszilla.jaipur@gmail.com",
    social: {
      instagram: "https://www.instagram.com/dress_zilla",
      facebook: "https://facebook.com",
    },
  },

  theme: {
    colors: {
      primary: "#111111", // Black text for high-end feel
      secondary: "#ffffff",
      accent: "#bfa480", // Gold/Beige accent often seen in luxury
      background: "#ffffff",
      text: "#333333",
      lightGray: "#f9f9f9",
      darkGray: "#222222",
    },
    fonts: {
      primary: "'Playfair Display', serif",
      secondary: "'Lato', sans-serif",
    }
  },

  categories: [
    { id: "bridal", name: "Bridal Lehengas" },
    { id: "pre-wedding", name: "Pre Wedding Dresses" },
    { id: "saree", name: "Sarees" },
    { id: "indowestern", name: "Indowestern" },
    { id: "fishcut-gown", name: "Fishcut Gowns" },
    { id: "gown", name: "Gowns" },
    { id: "maternity", name: "Maternity Dresses" },
    { id: "tuxedo", name: "Tuxedos" },
    { id: "blazer", name: "Blazers" },
    { id: "kurta-pyjama", name: "Kurta Pyjama" },
    { id: "coat-pants", name: "Coat Pants" },
    { id: "jewellery", name: "Jewellery" },
    { id: "new-arrivals", name: "New Arrivals" },
    { id: "men", name: "Men's Collection" }
  ],

  navigation: [
    { name: "Shop All", path: "/shop" },
    {
      name: "For Her",
      path: "/category/bridal",
      type: "dropdown",
      items: [
        { name: "Lehenga", path: "/category/bridal" },
        { name: "Pre wedding dress", path: "/category/pre-wedding" },
        { name: "Saree", path: "/category/saree" },
        { name: "Indowestern", path: "/category/indowestern" },
        { name: "Fishcut Gown", path: "/category/fishcut-gown" },
        { name: "Gowns", path: "/category/gown" },
        { name: "Maternity Dress", path: "/category/maternity" },
      ]
    },
    {
      name: "For Him",
      path: "/category/tuxedo",
      type: "dropdown",
      items: [
        { name: "Tuxedo", path: "/category/tuxedo" },
        { name: "Blazer", path: "/category/blazer" },
        { name: "Kurta Pyjama with koti", path: "/category/kurta-pyjama" },
        { name: "Coat Pants", path: "/category/coat-pants" },
      ]
    },
    { name: "Jewellery", path: "/category/jewellery" },
  ],

  hero: {
    title: "Curated for the Connoisseur",
    subtitle: "Experience timeless couture for you.",
    buttonText: "Shop Collection",
    images: [
       "https://images.unsplash.com/photo-1594938298603-c8148c472f29?q=80&w=3000&auto=format&fit=crop",
       "https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&w=2869&auto=format&fit=crop",
       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=2848&auto=format&fit=crop"
    ],
  },

  banners: {
    rentalBridal: "https://dresszilla.in/wp-content/uploads/2025/06/Green-and-Blue-Simple-Watercolor-Wedding-Invitation-Card-12-scaled.png",
    manOfDistinction: "https://dresszilla.in/wp-content/uploads/2025/06/Green-and-Blue-Simple-Watercolor-Wedding-Invitation-Card-6-scaled.png",
    forHer: "https://dresszilla.in/wp-content/uploads/2025/06/IMG_6026-scaled-300x400.jpg",
    forHim: "https://dresszilla.in/wp-content/uploads/2025/06/IMG_5396-1-300x375.webp",
  },

  sections: {
    signature: {
      title: "The Signature Collection",
      subtitle: "An ensemble of heirloom silhouettes and modern classics — crafted for moments destined to become memories."
    },
    story: {
      title: "Our Story",
      text: [
        "At Mili's Couture, we believe luxury shouldn’t come with a lifelong price tag.",
        "Founded with one mission — to make designer fashion accessible to all — we’ve redefined the way India dresses up for its biggest moments.",
        "From heavy bridal lehengas that turn heads, to red carpet–ready gowns and statement menswear that makes grooms shine — we’re your secret to serving unforgettable looks, without ever repeating an outfit.",
        "Every piece in our collection is handpicked, high-fashion, and high-impact — available to rent for a fraction of the retail price."
      ],
      founder: "Madhuri Chetwani",
      images: [
        "https://dresszilla.in/wp-content/uploads/2025/06/IMG_9720-581x1024.jpg",
        "https://dresszilla.in/wp-content/uploads/2025/06/photo-2.jpg"
      ]
    },
    testimonials: [
      {
        text: "From the moment I stepped into Mili's Couture, I knew I wasn’t just renting a lehenga — I was choosing an heirloom. The craftsmanship, the attention to detail, the way the team listened to my story — everything was flawless. On my wedding day, I didn’t just feel beautiful. I felt timeless.",
        author: "Namrita S.",
        role: "My Wedding Day",
        image: "https://dresszilla.in/wp-content/uploads/2025/06/14163-200-150x150.png"
      },
       {
        text: "I wore a Mili's Couture fishcut gown for my reception and the compliments haven’t stopped since! The fit was perfection, the embroidery subtle yet striking. What I loved most — I could dance the night away and still feel like a queen.",
        author: "Priya K.",
        role: "Dreams Come True",
        image: "https://dresszilla.in/wp-content/uploads/2025/06/14163-200-150x150.png" // Using placeholder as scrape didn't give distinct image
      }
    ]
  },

  rentalCurations: [
    {
      title: "Bridal Lehengas",
      description: "Regal silhouettes and storied embroidery — for the bride who becomes a legend.",
      link: "/category/bridal",
      image: "https://dresszilla.in/wp-content/uploads/2025/06/IMG_6026-scaled-300x400.jpg"
    },
    {
      title: "Occasion Gowns",
      description: "Statement gowns crafted to dazzle beneath starlit skies.",
      link: "/category/gown",
      image: "https://dresszilla.in/wp-content/uploads/2025/06/IMG_5396-1-300x375.webp"
    },
    {
      title: "Statement Sarees",
      description: "An ode to India’s artistry — drapes that transcend time.",
      link: "/category/saree",
      image: "https://dresszilla.in/wp-content/uploads/2025/06/IMG_5374-300x348.jpg"
    }
  ],

  blogs: [
    {
        title: "Sarees of Legacy — Why Every Bride Needs One Timeless Drape",
        excerpt: "“Before there were gowns, before lehengas — there was the saree. And there always will be.” No bridal trousseau is complete without the timeless elegance of the Indian saree...",
        image: "https://dresszilla.in/wp-content/uploads/2025/06/IMG_6026-scaled-300x400.jpg" // Placeholder based on content
    },
    {
        title: "The Art of a Mili's Couture Lehenga — Why Couture Matters",
        excerpt: "“A lehenga is not stitched. It is sculpted, crafted, and blessed.” A true couture lehenga is born not on the sewing table, but in the hands of artisans whose craft...",
        image: "https://dresszilla.in/wp-content/uploads/2025/06/IMG_8090-1-300x400.jpg" // Placeholder
    },
    {
        title: "How to Build Your Bridal Look — A Royal Trousseau Guide",
        excerpt: "“A queen is not crowned by the lehenga alone.” Your bridal look is more than a lehenga. It is an orchestra of elements — each note carefully chosen to create...",
        image: "https://dresszilla.in/wp-content/uploads/2025/06/IMG_5374-300x348.jpg" // Placeholder
    }
  ],

  seoContent: {
      title: "Mili's Couture – The Ultimate Destination for Dresses on Rent in Jaipur",
      content: [
          "Mili's Couture isn’t just a designer outfit rental service. It’s where couture meets convenience, and luxury meets affordability. We’re all about helping you look super hot without burning a hole in your wallet. From wedding dress rentals to photoshoot dress rentals, we’ve got all the glam, all the sparkle, and all the feels.",
          "Whether you’re prepping for your big fat Indian wedding, planning that magical pre-wedding shoot, or just looking to twirl at your BFF’s cocktail party, we’re here to make sure you serve looks without breaking the bank."
      ],
      sections: [
          {
              title: "Our Story – From One Dress to Thousands of Dreams",
              content: "It all started in Jaipur, the Pink City, with a girl, a dream, and ten killer dresses in her living room. In the middle of the 2020 chaos, our founder, Madhuri Chetwani, decided to put down her stethoscope and chase her fashion fantasy. And just like that, Mili's Couture was born.\n\nWhat started as a humble collection in her home is now a massive 3000 sq. ft. designer wonderland in Mansarovar, Jaipur. We’re talking bridal lehengas, dreamy gowns, party wear, bodycon slayers, and sarees that’ll make your nani proud. And let’s not forget jewelry, bags, and all the glam accessories to complete your look."
          },
          {
              title: "Our Services – Wedding Dress Rental & So Much More",
              content: "Looking for a wedding dress rental online? Need that showstopper lehenga but don’t want to pay the price of a small car? We got you."
          }
      ]
  },

  products: [
    {
      id: "noor-e-nazaakat",
      name: "Noor-e-Nazaakat Lehenga",
      price: "₹5,000.00",
      category: "bridal",
      images: [
        "https://dresszilla.in/wp-content/uploads/2025/06/IMG_8090-1-300x400.jpg"
      ],
      description: "A stunning hand-embroidered pink lehenga perfect for weddings.",
      options: { Size: ["S", "M", "L"] }
    },
    {
      id: "heritage-weave",
      name: "The Heritage Weave Lehenga",
      price: "₹5,000.00",
      category: "bridal",
      images: [
        "https://dresszilla.in/wp-content/uploads/2025/06/IMG_6026-scaled-300x400.jpg"
      ],
      description: "Traditional craftsmanship with a modern silhouette.",
      options: { Size: ["S", "M", "L"] }
    },
    {
      id: "modern-rajkumari",
      name: "The Modern Rajkumari Lehenga",
      price: "₹5,000.00",
      category: "bridal",
      images: [
        "https://dresszilla.in/wp-content/uploads/2025/06/IMG_5396-1-300x375.webp"
      ],
      description: "Contemporary elegance for the modern bride.",
      options: { Size: ["S", "M", "L"] }
    },
    {
      id: "royal-heirloom",
      name: "The Royal Heirloom Lehenga",
      price: "₹5,000.00",
      category: "bridal",
      images: [
        "https://dresszilla.in/wp-content/uploads/2025/06/IMG_5374-300x348.jpg"
      ],
      description: "A timeless piece inspired by royal archives.",
      options: { Size: ["S", "M", "L"] }
    },
    // New Arrivals
    {
      id: "guldasta",
      name: "Guldasta-e-Riwaayat",
      price: "₹3,000.00",
      originalPrice: "₹5,000.00",
      category: "new-arrivals",
      images: [
        "https://dresszilla.in/wp-content/uploads/2025/06/IMG_4614-scaled-300x450.jpg"
      ],
      description: "Floral elegance at an unbeatable price.",
      options: { Size: ["S", "M", "L"] }
    },
    {
      id: "meher-gulaab",
      name: "Meher-e-Gulaab Lehenga",
      price: "₹5,000.00",
      category: "new-arrivals",
      images: [
        "https://dresszilla.in/wp-content/uploads/2025/06/IMG_1256-scaled-300x400.jpg"
      ],
      description: "Rose pink perfection.",
      options: { Size: ["S", "M", "L"] }
    },
    {
      id: "rani-noor",
      name: "Rani-E-Noor Lehenga",
      price: "₹2,000.00",
      originalPrice: "₹5,000.00",
      category: "new-arrivals",
      images: [
        "https://dresszilla.in/wp-content/uploads/2025/06/IMG_1684-300x375.jpg"
      ],
      description: "A steal for the queen in you.",
      options: { Size: ["S", "M", "L"] }
    },
    {
      id: "zariwaala",
      name: "Zariwaala Mohabbat",
      price: "₹5,000.00",
      category: "new-arrivals",
      images: [
        "https://dresszilla.in/wp-content/uploads/2025/06/IMG_1797-300x371.jpg"
      ],
      description: "Intricate zari work.",
      options: { Size: ["S", "M", "L"] }
    },
    // Men's Collection
    {
      id: "classic-tuxedo",
      name: "The Classic Black Tuxedo",
      price: "₹3,500.00",
      category: "men",
      images: [
        "https://images.unsplash.com/photo-1594938298603-c8148c472f29?q=80&w=3000&auto=format&fit=crop"
      ],
      description: "Timeless elegance for the groom or groomsmen.",
      options: { Size: ["38", "40", "42", "44"] }
    },
    {
      id: "royal-sherwani",
      name: "Royal Ivory Sherwani",
      price: "₹5,500.00",
      category: "men",
      images: [
        "https://images.unsplash.com/photo-1585987399863-b8cb831a293f?q=80&w=3000&auto=format&fit=crop"
      ],
      description: "Intricate embroidery on premium ivory fabric.",
      options: { Size: ["M", "L", "XL"] }
    },
    {
      id: "midnight-blazer",
      name: "Midnight Blue Velvet Blazer",
      price: "₹2,500.00",
      category: "men",
      images: [
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=3000&auto=format&fit=crop"
      ],
      description: "A statement piece for cocktail nights.",
      options: { Size: ["38", "40", "42"] }
    },
    {
      id: "bandhgala-set",
      name: "Classic Bandhgala Set",
      price: "₹4,000.00",
      category: "men",
      images: [
        "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=3000&auto=format&fit=crop"
      ],
      description: "Sophisticated ethnic wear for formal occasions.",
      options: { Size: ["40", "42", "44"] }
    },
    // Demo Data for Other Categories
    {
      id: "demo-gown",
      name: "Starlight Evening Gown",
      price: "₹6,000.00",
      category: "gown",
      images: ["https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=2848&auto=format&fit=crop"],
      description: "A beautiful gown for evening parties.",
      options: { Size: ["S", "M", "L"] }
    },
    {
      id: "demo-saree",
      name: "Banarasi Silk Saree",
      price: "₹4,500.00",
      category: "saree",
      images: ["https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2868&auto=format&fit=crop"],
      description: "Traditional banarasi silk saree.",
      options: { Color: ["Red", "Blue"] }
    },
    {
      id: "demo-pre-wedding",
      name: "Flowy Pre-Wedding Dress",
      price: "₹3,500.00",
      category: "pre-wedding",
      images: ["https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2940&auto=format&fit=crop"],
      description: "Perfect for pre-wedding photoshoots.",
      options: { Size: ["XS", "S", "M"] }
    },
    {
      id: "demo-tuxedo",
      name: "James Bond Tuxedo",
      price: "₹4,000.00",
      category: "tuxedo",
      images: ["https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=3000&auto=format&fit=crop"],
      description: "Sharp and stylish tuxedo.",
      options: { Size: ["40", "42"] }
    }
  ]
};
