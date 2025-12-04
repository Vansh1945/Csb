import CustomStitching from "../assets/service/Custom Stitching.png"
import TraditionalDresses from "../assets/service/Traditional Dresses.png"
import PunjabiPhulkariSuits from "../assets/service/Punjabi Phulkari Suits.png"
import DesignerPlazoSuits from "../assets/service/Designer Plazo Suits.png"
import LiningSuitsStitching from "../assets/service/Lining Suits Stitching.png"
import Alterations from "../assets/service/Alterations & Fitting.png"

export const services = [
  {
    id: 1,
    icon: "FaCut",
    title: "Custom Stitching",
    description: "Perfectly tailored garments stitched to match your size, style, and comfort. Bring your own fabric and get beautifully customized outfits with professional finishing.",
    features: ["Perfect Fit Guarantee", "Premium Fabrics", "Personal Consultation", "Multiple Fittings"],
    price: "Starting ₹500",
    category: "stitching",
    rating: 4.9,
    image: CustomStitching
  },
  {
    id: 2,
    icon: "FaUserTie",
    title: "Traditional Dresses",
    description: "Authentic traditional outfits including Choli, Ghagra, and Dupatta with intricate cultural patterns that celebrate our beautiful heritage.",
    features: ["Traditional Patterns", "Cultural Authenticity", "Hand-finished Details", "Custom Colors"],
    price: "Starting ₹800",
    category: "himachali",
    rating: 4.8,
    image: TraditionalDresses
  },
  {
    id: 3,
    icon: "FaPalette",
    title: "Punjabi Phulkari Suits",
    description: "Beautiful Punjabi suits featuring traditional Phulkari embroidery, Patiala salwar, and vibrant colors that showcase Punjab's rich cultural heritage.",
    features: ["Phulkari Embroidery", "Patiala Style", "Traditional Colors", "Cultural Motifs"],
    price: "Starting ₹1000",
    category: "punjabi",
    rating: 4.9,
    image: PunjabiPhulkariSuits
  },
  {
    id: 4,
    icon: "FaHeart",
    title: "Designer Plazo Suits",
    description: "Modern plazo suits with traditional Himachali and Punjabi motifs, perfect for festivals and special occasions with contemporary comfort.",
    features: ["Palazzo Pants", "Traditional Motifs", "Modern Cuts", "Comfortable Fit"],
    price: "Starting ₹600",
    category: "designer",
    rating: 4.7,
    image: DesignerPlazoSuits
  },
  {
    id: 5,
    icon: "FaShirt",
    title: "Lining Suits Stitching",
    description: "Perfectly tailored ladies suits with premium inner lining for durability, comfort, and a premium finish. Available in half lining and full lining options to suit every fabric and style.",
    features: [
      "Half Lining Suits",
      "Full Lining Suits",
      "Front or Back Open Options",
      "Perfect Fitting Guarantee"
    ],
    price: "Starting ₹700",
    category: "stitching",
    rating: 5.0,
    image: LiningSuitsStitching
  }
  ,
  {
    id: 6,
    icon: "FaStar",
    title: "Alterations & Fitting",
    description: "Expert alterations for all types of traditional and modern wear. I ensure perfect fitting with careful attention to maintaining the garment's original beauty.",
    features: ["Perfect Fitting", "Quick Service", "Style Updates", "Size Adjustments"],
    price: "Starting ₹100",
    category: "alterations",
    rating: 4.6,
    image: Alterations
  }
];

export const serviceCategories = [
  { id: 'all', name: 'All Services', count: services.length },
  { id: 'stitching', name: 'Custom Stitching', count: services.filter(s => s.category === 'stitching').length },
  { id: 'himachali', name: 'Himachali Dresses', count: services.filter(s => s.category === 'himachali').length },
  { id: 'punjabi', name: 'Punjabi Suits', count: services.filter(s => s.category === 'punjabi').length },
  { id: 'designer', name: 'Designer Wear', count: services.filter(s => s.category === 'designer').length },
  { id: 'alterations', name: 'Alterations', count: services.filter(s => s.category === 'alterations').length }
];
