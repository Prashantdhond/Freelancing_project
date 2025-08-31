import ProductCard from "@/components/ProductCard";
import logoSilhouette from "@/assets/logo-silhouette.jpg";
import traditionalPotato from "@/assets/traditional-potato-chips.jpg";
import maharashtrianPoha from "@/assets/pohe-mirgood.jpg";
import traditionalPapad from "@/assets/traditional-papad.jpg";
import traditionalChakli from "@/assets/traditional-chakli.jpg";
import colorfulChakli from "@/assets/rang-birangi-chakli.jpg";
import nachanipapad from "@/assets/nachanipapad.jpg";
import nach from "@/assets/nach.jpg";
import tandul from "@/assets/tandul.jpg";
import taka from "@/assets/taka.jpg";
import sandge from "@/assets/sandge.jpg";

// Direct references to uploaded images for accurate representation
const uploadedImages = {
  batateMirgood: "/lovable-uploads/b48b5adf-af11-4bb9-881f-82ce89fcb4c0.png",
  poheMirgood: "/lovable-uploads/4970a94b-df70-45c9-8e8b-85b806dc9814.png",
  applamPapad: "/lovable-uploads/3db0d617-ca22-4c80-87d9-88c9136fa82b.png",
  rangBirangiChakli: "/lovable-uploads/4280f512-ff4e-4b52-8cf8-43b6b007ad4a.png",
  masalaChakli: "/lovable-uploads/56055052-6f49-47d8-9ef7-e1198abca330.png",
  logoSilhouette: "/lovable-uploads/b1de4b2a-5824-4f68-929f-7bb56bd7af8a.png",
  brandName: "/lovable-uploads/6523bb5f-5f1e-4c67-a10d-ed26875ca747.png"
};

const products = [
  {
    name: "बटाटे मिरगूड",
    description: "पारंपरिक महाराष्ट्रीय पद्धतीने तयार केलेले कुरकुरीत बटाटे मिरगूड. घरगुती चवीसह तयार केलेला हा नाश्ता सर्वांच्या आवडीचा.",
    weight: "१०० ग्राम",
    price: "₹३५/-",
    image: uploadedImages.batateMirgood,
    ingredients: "बटाटे, मीठ, हिंग, पापडखार इत्यादी"
  },
  {
    name: "पोहे मिरगूड", 
    description: "खास महाराष्ट्रीय शैलीत तयार केलेले पोहे मिरगूड. चहा-कॉफीसोबत खाण्यासाठी उत्तम नाश्ता.",
    weight: "१०० ग्राम",
    price: "₹३५/-",
    image: uploadedImages.poheMirgood,
    ingredients: "पोहे, मीठ, लाल तिखट, मीठ, हिंग, पापडखार इत्यादी"
  },
  {
    name: "अप्पलम पापड",
    description: "उडीद पीठ, तांदुळ पीठापासून तयार केलेले पारंपरिक अप्पलम पापड. जेवणासोबत खाण्यासाठी योग्य.",
    weight: "१५० ग्राम", 
    price: "₹६०/-",
    image: uploadedImages.applamPapad,
    ingredients: "उडीद पीठ, तांदुळ पीठ, पापडखार, वनस्पती तेल इत्यादी"
  },
  {
    name: "रंगीत बॉबी",
    description: "विविध रंगांच्या आकर्षक चकली. खास महाराष्ट्रीय पद्धतीने तयार केलेली. सणासुदीसाठी उत्तम.",
    weight: "१०० ग्राम",
    price: "₹३०/-",
    image: uploadedImages.rangBirangiChakli,
    ingredients: "तांदुळाचे पीठ, उडदाचे पीठ, तेल, मसाले, रंग"
  },
  {
    name: "नाचणी बॉबी",
    description: "पारंपरिक मसाला चकली. घरगुती मसाल्यांसह तयार केलेली. दिवाळी सणासाठी खास.",
    weight: "१०० ग्राम",
    price: "₹३०/-",
    image: uploadedImages.masalaChakli,
    ingredients: "नाचणी पीठ, तेल,मीठ, जिरे, इत्यादी"
  },
  {
    name: "नाचणी पापड",
    description: "पारंपरिक मसाला चकली. घरगुती मसाल्यांसह तयार केलेली. दिवाळी सणासाठी खास.",
    weight: "१०० ग्राम", 
    price: "₹३०/-",
    image: nach,
    ingredients: "नाचणी पीठ, पापडखार, मीठ, ओवा, मीठ इ."
  },
  {
    name: "तांदुळ पापड",
    description: "पारंपरिक मसाला चकली. घरगुती मसाल्यांसह तयार केलेली. दिवाळी सणासाठी खास.",
    weight: "१०० ग्राम", 
    price: "₹३०/-",
    image: tandul,
    ingredients: "तांदुळ पीठ, मीठ, हिंग, पापडखार, जिरे इ."
  },
  {
    name: "ताक मिरची",
    description: "पारंपरिक मसाला चकली. घरगुती मसाल्यांसह तयार केलेली. दिवाळी सणासाठी खास.",
    weight: "१०० ग्राम", 
    price: "₹८०/-",
    image: taka,
    ingredients: "मिरची, ताक, मीठ इत्यादी"
  },{
    name: "सांडगी मिरची",
    description: "धणे, मिरची व मसाल्यांनी भरलेली पारंपरिक सांडगी मिरची जेवणास झणझणीत व चविष्ट लागते.",
    "weight": "१०० ग्राम",
    price: "₹८०/-",

    image: sandge,
    ingredients: "धणे, मिरची, मोहरी, तीळ, हिंग इत्यादी"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border shadow-gentle">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center space-x-4">
            <img 
              src={uploadedImages.logoSilhouette} 
              alt="स्वामी समर्थ लोगो" 
              className="w-16 h-16 object-contain"
              onError={(e) => {
                // Fallback to generated image if uploaded image fails
                e.currentTarget.src = logoSilhouette;
              }}
            />
            <div className="text-center">
              <h1 className="text-4xl font-bold text-primary">स्वामी समर्थ</h1>
              <p className="text-muted-foreground">स्वयंसहाय्यता बचत गट</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            पारंपरिक महाराष्ट्रीय खाद्य
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            घरगुती पद्धतीने तयार केलेले दर्जेदार उत्पादने. आमच्या स्वयंसहाय्यता गटाकडून प्रेमाने बनवलेले.
          </p>
          <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            आमची उत्पादने
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                description={product.description}
                weight={product.weight}
                price={product.price}
                image={product.image}
                ingredients={product.ingredients}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">संपर्क माहिती</h3>
          <div className="max-w-md mx-auto bg-card rounded-lg p-6 shadow-gentle">
            <div className="space-y-3">
              <p className="text-foreground">
                <span className="font-medium">पत्ता:</span> मु.पो. वायगणी, ता. वेंगुर्ला, जि. सिंधुदुर्ग
              </p>
              <p className="text-foreground">
                <span className="font-medium">संपर्क:</span> 
                <span className="text-primary font-mono"> ९९६९१९५३८२ / ९४०५७२५५९५</span>
              </p>
              <p className="text-xs text-muted-foreground mt-4">
                नोंदणी क्रमांक: २१५२२१२४०००४५३
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © २०२५ स्वामी समर्थ स्वयंसहाय्यता बचत गट. सर्व हक्क राखीव.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;