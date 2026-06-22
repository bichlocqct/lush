"use client";
import { useState } from "react";

export default function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const products = [
    {
      name: "Roots",
      category: "treatment",
      type: "Scalp Treatment",
      ingredients: "Bạc hà + mật ong + tinh dầu hoa hồng",
      desc: "Kích thích các mạch máu dưới da đầu lưu thông tốt hơn, củng cố nang tóc chắc khỏe, giảm gãy rụng tóc hiệu quả.",
      tip: "Dùng cho da đầu rụng tóc, chân tóc mảnh yếu, da đầu tiết dầu nhiều.",
      usage: "Thoa đều lên da đầu khô trước khi gội đầu 15-20 phút, xoa bóp nhẹ nhàng rồi đi gội như bình thường."
    },
    {
      name: "SuperBalm",
      category: "treatment",
      type: "Scalp Treatment",
      ingredients: "Dầu dừa + sáp candelilla + cúc la mã",
      desc: "Dưỡng da đầu chuyên sâu, cấp ẩm cho vùng da bị khô ráp bong tróc vảy da chết, giảm sưng ngứa rát khó chịu.",
      tip: "Dành riêng cho da đầu cực kỳ khô xơ, bong vảy gàu khô, hoặc bị kích ứng chàm.",
      usage: "Lấy lượng nhỏ xoa tan trên ngón tay, chấm trực tiếp lên các điểm da đầu khô/vảy ngứa trước gội 20 phút."
    },
    {
      name: "Fairly Traded Honey",
      category: "shampoo",
      type: "Dầu Gội Dưỡng Ẩm",
      ingredients: "50% Mật ong Zambian tươi + tinh dầu phong lữ",
      desc: "Cung cấp độ ẩm dồi dào, kháng khuẩn bảo vệ da đầu, làm mềm và tạo độ phồng phơi phới cho sợi tóc khô xơ.",
      tip: "Dành cho mọi loại da đầu, đặc biệt tốt cho da đầu thường đến da đầu khô thiếu ẩm.",
      usage: "Lấy lượng vừa đủ, gội nhẹ nhàng da đầu. Mật ong đậm đặc nên chỉ cần tạo bọt thật nhiều."
    },
    {
      name: "Rehab",
      category: "shampoo",
      type: "Dầu Gội Làm Sạch Sâu",
      ingredients: "Đu đủ tươi + muối biển + bạc hà + dầu olive",
      desc: "Tẩy tế bào chết da đầu nhẹ nhàng, rửa trôi hoàn toàn bụi bẩn bã nhờn tích tụ sâu trong lỗ chân lông chân tóc.",
      tip: "Dành cho da đầu tiết nhiều dầu nhờn, bết ngứa, tóc nhanh bết dính xẹp lép.",
      usage: "Gội và massage kỹ phần chân tóc. Tránh gội nước nóng làm khô da đầu khiến dầu tiết nhiều hơn."
    },
    {
      name: "Big",
      category: "shampoo",
      type: "Dầu Gội Tạo Phồng Muối Biển",
      ingredients: "Muối biển thô + nước chanh tươi + dầu dừa",
      desc: "Tẩy tế bào chết vật lý cho da đầu, làm phồng chân tóc tối đa cho mái tóc bồng bềnh và bóng mượt lấp lánh.",
      tip: "Dành cho da đầu dầu, tóc mềm yếu, xẹp dính khó tạo kiểu.",
      usage: "Lấy một lượng nhỏ xoa đều với nước để tạo bọt, gội sâu chân tóc. Hạt muối biển sẽ tự tan."
    },
    {
      name: "Soak and Float",
      category: "shampoo",
      type: "Dầu Gội Bánh (Shampoo Bar)",
      ingredients: "Cade oil (cây bách xù gai) + cánh hoa cúc vạn thọ",
      desc: "Sản phẩm đặc trị gàu nấm của LUSH. cade oil giúp kháng khuẩn kháng nấm, loại bỏ sạch gàu vảy dày và ngứa da đầu.",
      tip: "Dành cho da đầu gàu, ngứa ngáy dữ dội, nấm tóc.",
      usage: "Lướt bánh xà phòng lên tóc ướt 2-3 lần để tạo bọt, massage kỹ da đầu rồi xả sạch."
    },
    {
      name: "New Shampoo Bar",
      category: "shampoo",
      type: "Dầu Gội Bánh Kích Thích Mọc Tóc",
      ingredients: "Dầu quế + đinh hương + lá bạc hà tươi",
      desc: "Làm ấm và kích thích mạnh mẽ nang tóc phát triển, đẩy nhanh quá trình mọc tóc con và giảm rụng rệt.",
      tip: "Dành cho tóc rụng nhiều, nang tóc yếu cần kích thích tăng trưởng.",
      usage: "Tạo bọt và massage nhẹ nhàng da đầu. Bạc hà và quế sẽ tạo cảm giác ấm nóng châm chích nhẹ."
    },
    {
      name: "American Cream",
      category: "conditioner",
      type: "Dầu Xả Mượt Tóc",
      ingredients: "Dâu tây tươi + mật ong + lanolin + oải hương",
      desc: "Bổ sung vitamin từ trái cây làm mượt lớp biểu bì tóc, đem lại mái tóc bóng mềm hương thơm sữa vani quyến rũ.",
      tip: "Dầu xả bestseller phù hợp cho mọi loại tóc sử dụng hàng ngày.",
      usage: "Vắt bớt nước trên tóc sau gội, thoa dầu xả từ thân đến ngọn tóc, xả sạch sau 2 phút."
    },
    {
      name: "Candy Rain",
      category: "conditioner",
      type: "Dầu Xả Dưỡng Ẩm Chuyên Sâu",
      ingredients: "Hạt Brazil + dầu dừa + nước dừa + tonka",
      desc: "Dầu xả dưỡng ẩm mạnh nhất của LUSH, hồi sinh mái tóc khô xơ chẻ ngọn trở nên bóng mượt rủ mềm như lụa.",
      tip: "Dành cho tóc cực khô, xơ rối nặng, tóc nhuộm hoặc tẩy hư tổn.",
      usage: "Thoa đều từ phần tai trở xuống ngọn tóc, ủ từ 3-5 phút trước khi xả lại bằng nước mát."
    },
    {
      name: "Veganese",
      category: "conditioner",
      type: "Dầu Xả Mỏng Nhẹ",
      ingredients: "Thạch agar agar (rong biển) + chanh tươi + oải hương",
      desc: "Cung cấp dinh dưỡng mỏng nhẹ từ rong biển làm mềm tóc mà không hề để lại cảm giác nặng tóc hay bết dính dầy nhờn.",
      tip: "Dành cho tóc mỏng xẹp, da đầu dầu dễ bết dính cần xả nhẹ nhàng.",
      usage: "Thoa một lớp mỏng lên phần ngọn tóc và xả sạch nhanh bằng nước."
    },
    {
      name: "Renee's Shea Soufflé",
      category: "leavein",
      type: "Kem Dưỡng Da Đầu & Tóc",
      ingredients: "Bơ hạt mỡ (Shea butter) + dầu dừa + dầu thầu dầu",
      desc: "Nuôi dưỡng sâu da đầu khô ráp và định hình lọn tóc xoăn mềm mượt, bóng bẩy.",
      tip: "Dành cho da đầu rất khô, tóc xoăn tự nhiên, xơ rối khó vào nếp.",
      usage: "Lấy một lượng nhỏ xoa ấm trên lòng bàn tay rồi bóp nhẹ lên tóc ẩm hoặc xoa mỏng lên da đầu khô ráp."
    },
    {
      name: "Superhero Milk",
      category: "leavein",
      type: "Xịt Dưỡng Phục Hồi (Leave-in)",
      ingredients: "Sữa hạnh nhân + dầu olive + bơ quả bơ",
      desc: "Xịt dưỡng mỏng nhẹ giúp cấp ẩm tức thì, bảo vệ biểu bì tóc khỏi nhiệt độ máy sấy và tác hại tia UV ngoại cảnh.",
      tip: "Dành cho mọi loại tóc, xịt bảo vệ tóc hàng ngày sau khi gội đầu.",
      usage: "Xịt đều lên tóc ẩm hoặc tóc khô từ khoảng cách 20cm, chải nhẹ để dưỡng chất thấm đều, không cần xả lại."
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.ingredients.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fade-in" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      
      {/* Search and Filters bar */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        gap: "20px",
        flexWrap: "wrap",
        borderBottom: "1px solid var(--lush-gray-medium)",
        paddingBottom: "16px"
      }}>
        
        {/* Category selector */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {["all", "treatment", "shampoo", "conditioner", "leavein"].map(cat => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              style={{
                padding: "8px 16px",
                border: categoryFilter === cat ? "2px solid #000000" : "1px solid #e5e5e5",
                background: categoryFilter === cat ? "#000000" : "#ffffff",
                color: categoryFilter === cat ? "#ffffff" : "#000000",
                fontSize: "0.8rem",
                fontWeight: "700",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "var(--transition-smooth)"
              }}
            >
              {cat === "all" ? "Tất Cả" : 
               cat === "treatment" ? "Tẩy TB/Ủ Da Đầu" : 
               cat === "shampoo" ? "Dầu Gội" : 
               cat === "conditioner" ? "Dầu Xả" : "Dưỡng Leave-in"}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Tìm tên sản phẩm hoặc thành phần..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px 16px",
            border: "2px solid var(--lush-black)",
            fontFamily: "var(--font-sans)",
            fontSize: "0.9rem",
            width: "300px",
            outline: "none"
          }}
        />

      </div>

      {/* Product List Grid */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", 
        gap: "28px" 
      }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, idx) => (
            <div key={idx} className="lush-card" style={{ display: "flex", flexDirection: "column", gap: "12px", height: "100%", justifyContent: "space-between" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                
                {/* Header info */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                  <span className="sub-title" style={{ color: "#666", fontSize: "0.65rem" }}>{product.type}</span>
                  <span className="lush-tag green">{product.category}</span>
                </div>

                {/* Name */}
                <h3 style={{ fontSize: "1.4rem", textTransform: "uppercase", marginTop: "4px" }}>{product.name}</h3>
                
                {/* Ingredients */}
                <div style={{ fontSize: "0.85rem", color: "#555" }}>
                  <strong>Thành phần chính:</strong> {product.ingredients}
                </div>

                {/* Description */}
                <p style={{ fontSize: "0.9rem", color: "#333", marginTop: "4px", lineHeight: "1.5" }}>
                  {product.desc}
                </p>

                {/* Target Scalp Info */}
                <div style={{ 
                  marginTop: "8px",
                  fontSize: "0.85rem",
                  color: "#6b4a1b", 
                  background: "var(--lush-gold-light)", 
                  padding: "8px 12px", 
                  borderLeft: "3px solid var(--lush-gold)" 
                }}>
                  🎯 <strong>Đối tượng:</strong> {product.tip}
                </div>

              </div>

              {/* Usage Guide */}
              <div style={{ 
                marginTop: "12px", 
                borderTop: "1px dashed var(--lush-gray-medium)", 
                paddingTop: "12px",
                fontSize: "0.85rem", 
                color: "var(--lush-green)" 
              }}>
                📖 <strong>Cách dùng:</strong> {product.usage}
              </div>

            </div>
          ))
        ) : (
          <div style={{ 
            gridColumn: "1 / -1", 
            textAlign: "center", 
            padding: "48px 0", 
            color: "#888",
            border: "1px dashed var(--lush-gray-medium)"
          }}>
            Không tìm thấy sản phẩm nào phù hợp với tìm kiếm của bạn.
          </div>
        )}
      </div>

    </div>
  );
}
