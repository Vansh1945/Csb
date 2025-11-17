export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Shimla, Himachal Pradesh",
    rating: 5,
    comment: "Creative Stitching Boutique made my wedding lehenga absolutely perfect! The intricate embroidery work and attention to detail was outstanding. I felt like a princess on my special day.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    service: "Bridal Lehenga",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Dharamshala, HP",
    rating: 5,
    comment: "Got my daughter's Himachali traditional dress made for a cultural event. The quality and authenticity of the work exceeded our expectations. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    service: "Himachali Traditional Dress",
    date: "2024-02-20"
  },
  {
    id: 3,
    name: "Meera Patel",
    location: "Kullu, Himachal Pradesh",
    rating: 5,
    comment: "Amazing work on my Punjabi suits! The fitting is perfect and the fabric quality is excellent. The team understood exactly what I wanted and delivered beyond expectations.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    service: "Punjabi Suits",
    date: "2024-01-28"
  },
  {
    id: 4,
    name: "Anita Devi",
    location: "Mandi, HP",
    rating: 5,
    comment: "I needed alterations for my saree blouses and they did such a wonderful job! Quick service and perfect fitting. Will definitely come back for more work.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    service: "Alterations",
    date: "2024-02-10"
  },
  {
    id: 5,
    name: "Kavita Singh",
    location: "Palampur, HP",
    rating: 5,
    comment: "The designer Anarkali suit they made for my sister's engagement was absolutely stunning! Beautiful embroidery work and the color combination was perfect.",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    service: "Designer Anarkali",
    date: "2024-01-05"
  },
  {
    id: 6,
    name: "Sunita Thakur",
    location: "Solan, Himachal Pradesh",
    rating: 5,
    comment: "Creative Stitching Boutique is my go-to place for all ethnic wear needs. Their plazo suits are trendy and comfortable. Great quality at reasonable prices!",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    service: "Plazo Suits",
    date: "2024-02-05"
  },
  {
    id: 7,
    name: "Deepak Verma",
    location: "Bilaspur, HP",
    rating: 5,
    comment: "Got my wife's festival wear made here and she absolutely loved it! The traditional Himachali embroidery work is authentic and beautiful. Excellent craftsmanship!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    service: "Festival Wear",
    date: "2024-01-18"
  },
  {
    id: 8,
    name: "Ritu Chauhan",
    location: "Hamirpur, HP",
    rating: 5,
    comment: "The Indo-western outfit they designed for me was unique and stylish! Perfect blend of traditional and modern elements. Received so many compliments!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    service: "Indo-Western",
    date: "2024-02-12"
  }
];

export const testimonialStats = {
  totalReviews: testimonials.length,
  averageRating: testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length,
  fiveStarCount: testimonials.filter(t => t.rating === 5).length,
  satisfactionRate: Math.round((testimonials.filter(t => t.rating >= 4).length / testimonials.length) * 100)
};
