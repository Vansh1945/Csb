export const services = [
  {
    id: 1,
    icon: "FaCut",
    title: "Custom Stitching",
    description: "Perfectly tailored garments made to your exact measurements with attention to every detail. I create beautiful custom outfits that fit you perfectly.",
    features: ["Perfect Fit Guarantee", "Premium Fabrics", "Personal Consultation", "Multiple Fittings"],
    price: "Starting ₹2,500",
    category: "stitching",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    icon: "FaUserTie",
    title: "Himachali Traditional Dresses",
    description: "Authentic Himachali traditional outfits including Choli, Ghagra, and Dupatta with intricate cultural patterns that celebrate our beautiful heritage.",
    features: ["Traditional Patterns", "Cultural Authenticity", "Hand-finished Details", "Custom Colors"],
    price: "Starting ₹4,500",
    category: "himachali",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    icon: "FaPalette",
    title: "Punjabi Phulkari Suits",
    description: "Beautiful Punjabi suits featuring traditional Phulkari embroidery, Patiala salwar, and vibrant colors that showcase Punjab's rich cultural heritage.",
    features: ["Phulkari Embroidery", "Patiala Style", "Traditional Colors", "Cultural Motifs"],
    price: "Starting ₹3,200",
    category: "punjabi",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    icon: "FaHeart",
    title: "Designer Plazo Suits",
    description: "Modern plazo suits with traditional Himachali and Punjabi motifs, perfect for festivals and special occasions with contemporary comfort.",
    features: ["Palazzo Pants", "Traditional Motifs", "Modern Cuts", "Comfortable Fit"],
    price: "Starting ₹2,800",
    category: "designer",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 5,
    icon: "FaRing",
    title: "Bridal Lehengas",
    description: "Stunning bridal lehengas with traditional Himachali and Punjabi designs, perfect for your special day with intricate detailing and cultural elegance.",
    features: ["Heavy Work", "Cultural Designs", "Bridal Blouses", "Matching Accessories"],
    price: "Starting ₹25,000",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 6,
    icon: "FaStar",
    title: "Alterations & Fitting",
    description: "Expert alterations for all types of traditional and modern wear. I ensure perfect fitting with careful attention to maintaining the garment's original beauty.",
    features: ["Perfect Fitting", "Quick Service", "Style Updates", "Size Adjustments"],
    price: "Starting ₹300",
    category: "alterations",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
];

export const serviceCategories = [
  { id: 'all', name: 'All Services', count: services.length },
  { id: 'stitching', name: 'Custom Stitching', count: services.filter(s => s.category === 'stitching').length },
  { id: 'himachali', name: 'Himachali Dresses', count: services.filter(s => s.category === 'himachali').length },
  { id: 'punjabi', name: 'Punjabi Suits', count: services.filter(s => s.category === 'punjabi').length },
  { id: 'designer', name: 'Designer Wear', count: services.filter(s => s.category === 'designer').length },
  { id: 'bridal', name: 'Bridal Wear', count: services.filter(s => s.category === 'bridal').length },
  { id: 'alterations', name: 'Alterations', count: services.filter(s => s.category === 'alterations').length }
];
