"use client";
import { useState } from "react";

export default function SopConsulting() {
  const [activeSubTab, setActiveSubTab] = useState("flow");
  const [activeStep, setActiveStep] = useState(0);
  const [activeArtStep, setActiveArtStep] = useState(0);
  const [activeCase, setActiveCase] = useState(0);

  const artSteps = [
    {
      step: "BƯỚC 1",
      title: "Nhóm câu hỏi tiếp cận",
      subtitle: "Khởi đầu cuộc trò chuyện bằng sự kết nối",
      desc: "Sử dụng các câu hỏi mở để khách hàng thoải mái chia sẻ về cảm xúc và thói quen hiện tại đối với mái tóc của họ.",
      questions: [
        "Điều bạn thích nhất về mái tóc là gì? Hiện tại bạn thấy tóc cần bổ sung điều gì nhất?",
        "Một ngày tóc đẹp với bạn trông như thế nào?",
        "Quy trình chăm sóc tóc hiện tại của bạn là gì?",
        "Tình trạng da đầu của bạn hiện tại thế nào?",
        "Bạn đã từng thử sản phẩm tóc nào của Lush chưa? Bạn thích điều gì ở chúng?"
      ]
    },
    {
      step: "BƯỚC 2",
      title: "Khai thác chuyên sâu",
      subtitle: "Đi sâu vào chi tiết kỹ thuật và lối sống",
      desc: "Tìm hiểu các yếu tố tác động trực tiếp đến sức khỏe mái tóc để đưa ra nhận định chính xác hơn.",
      questions: [
        "Bạn gội đầu bao nhiêu lần/tuần? Vì sao? (do tập gym hay mong muốn cá nhân)",
        "Tóc bạn thường khô nhanh như thế nào sau khi gội? (Câu hỏi này giúp xác định độ xốp và sức khỏe của sợi tóc)",
        "Bạn có dùng dụng cụ tạo kiểu bằng nhiệt không? (uốn, duỗi, bấm,..)",
        "Dạng/ Hình dáng/ Độ xoăn tự nhiên của tóc bạn là gì?"
      ]
    },
    {
      step: "BƯỚC 3",
      title: "Phân tích & Tư vấn",
      subtitle: "LOVE, WANT & NEED",
      desc: "Nhấn mạnh kỹ năng QUAN SÁT để tìm ra 'NEED'. Khách hàng thường không biết mình thực sự cần gì; người tư vấn phải quan sát tình trạng tóc và da đầu trong lúc trò chuyện/test tóc để tìm ra giải pháp chuyên gia.",
      concepts: [
        { label: "LOVE", desc: "Những gì khách hàng hài lòng" },
        { label: "WANT", desc: "Những gì khách mong muốn đạt được" },
        { label: "NEED", desc: "Những gì tóc thực sự cần" }
      ]
    },
    {
      step: "BƯỚC 4",
      title: "Đề xuất quy trình hoàn hảo",
      subtitle: "Luôn đề xuất quy trình đầy đủ 4 nhóm sản phẩm",
      desc: "Việc kết hợp đủ 4 bước giúp các sản phẩm hoạt động hài hòa, thể hiện sự chuyên nghiệp của tư vấn viên và đảm bảo kết quả tốt nhất cho khách hàng.",
      categories: [
        { name: "Treatment/Mask", desc: "Đặc trị và nuôi dưỡng sâu cho các vấn đề của tóc" },
        { name: "Shampoo", desc: "Làm sạch tóc và da đầu dựa trên nhu cầu cụ thể" },
        { name: "Conditioner", desc: "Cấp ẩm, làm mềm và bảo vệ sợi tóc" },
        { name: "Dưỡng/Tạo kiểu", desc: "Bảo vệ tóc khỏi tác động môi trường/nhiệt" }
      ]
    }
  ];

  const hairCases = [
    {
      title: "CASE 1: Tóc nhờn nhiều không có độ phồng",
      objective: "cần làm sạch sâu và tăng độ phồng từ bạc hà, enzym trái cây, muối và dưỡng ẩm nhẹ nhàng giúp tóc mềm mượt nhưng không bị nặng tóc",
      products: {
        treatment: ["Roots", "Marilyn"],
        shampoo: ["Wasabi Shan Kui", "Rehab", "Ginger Shampoo", "Big"],
        conditioner: ["Happy Happy Joy Joy", "Veganese", "American Cream"],
        styling: ["Super Milk", "Sea Spray"]
      }
    },
    {
      title: "CASE 2: Tóc tẩy nhuộm/ hóa chất nhiều, khô, dễ đứt gãy, không có độ bóng",
      objective: "cần phục hồi giúp sợi tóc chắc khỏe và đàn hồi hơn từ lúa mì thủy phân, nước đậu gà, tofu, dầu olive, tăng thêm độ bóng nhờ enzym trái cây và henna",
      products: {
        treatment: ["Roots", "H'Suan Wen Hua", "Superbalm"],
        shampoo: ["Tofu", "Super Milk", "Fairly Traded Honey"],
        conditioner: ["Valkyrie", "Power", "Retread"],
        styling: ["Renee's Shea Soufflé", "Infra Wig"]
      }
    },
    {
      title: "CASE 3: Da đầu khô căng, đi kèm ngứa, mẫn đỏ và bong tróc theo mảng lớn",
      objective: "cần làm dịu mẫn đỏ và ngứa nhờ cây bách xù, oải hương, hoa hồng, yến mạch, mật ong và cấp ẩm nhẹ nhàng để da đầu và tóc đủ ẩm từ các loại dầu olive, jojoba, bơ quả bơ, hạnh nhân.",
      products: {
        treatment: ["Superbalm", "Jasmine and Henna"],
        shampoo: ["Fairly Traded Honey", "Banana Co-wash", "Soak and Float"],
        conditioner: ["Glory", "Candy Rain"],
        styling: ["Super Milk", "Sticky Dates"]
      }
    },
    {
      title: "CASE 4: Tóc khỏe không gặp vấn đề gì đặc biệt",
      objective: "cần duy trì sức khỏe da đầu và độ bóng, khỏe của sợi tóc từ các thành phần như hương thảo, bạc hà, quế, enzym trái cây, dầu olive,..",
      products: {
        treatment: ["Roots", "Jasmine and Henna"],
        shampoo: ["Rehab", "Big", "Daddy-O"],
        conditioner: ["Veganese", "Valkyrie", "Super Milk"],
        styling: ["Super Milk", "Sticky Dates", "Dirty"]
      }
    }
  ];

  const sopSteps = [
    {
      step: "Bước 1",
      title: "Chào mời khách hàng (Greeting & Connection)",
      time: "Thực hiện: 0 - 2 phút",
      objective: "Tạo ấn tượng ban đầu nồng hậu, phá bỏ khoảng cách giúp khách hàng cảm thấy thoải mái và tin tưởng.",
      actions: [
        "Mỉm cười nồng nhiệt, chào đón khách bằng tên nếu họ đã đặt lịch hẹn trước.",
        "Mời khách ngồi tại khu vực Hair Workshop và chuẩn bị sẵn một cốc nước ấm hoặc trà thảo mộc tươi mát.",
        "Tạo thiện cảm bằng những câu hỏi ngắn tự nhiên, thân mật."
      ],
      talkTrack: "« Dạ em chào anh/chị ạ! Em là [Tên nhân viên], rất vui được đồng hành cùng anh/chị trong buổi trải nghiệm Hair Workshop của LUSH ngày hôm nay. Anh/chị vừa di chuyển ngoài đường có nắng nóng lắm không ạ? Mình uống một chút nước ấm cho dịu người rồi tụi mình bắt đầu trò chuyện nhé! »"
    },
    {
      step: "Bước 2",
      title: "Khai Thác Nhu Cầu & Thói Quen (Assessment)",
      time: "Thực hiện: 3 - 5 phút",
      objective: "Hiểu rõ loại tóc, da đầu, các vấn đề khách đang lo lắng và thói quen chăm sóc tóc hiện tại ở nhà.",
      actions: [
        "Đặt câu hỏi mở để khách hàng tự chia sẻ về tình trạng tóc của mình.",
        "Ghi nhận tần suất gội đầu, loại dầu gội/dầu xả hiện dùng, khách có thường xuyên uốn/nhuộm/tẩy hay không.",
        "Lắng nghe tích cực, không phán xét thói quen gội đầu của khách hàng."
      ],
      talkTrack: "« Để em có thể hỗ trợ tư vấn tốt nhất, anh/chị cho em hỏi thói quen gội đầu ở nhà của mình thường là mấy ngày một lần ạ? Và hiện tại anh/chị có cảm thấy da đầu mình nhanh bết dầu, bị khô căng ngứa hay rụng tóc nhiều không ạ? Hiện mình đang dùng dầu gội dạng hóa mỹ phẩm thông thường hay các sản phẩm tự nhiên khác không ạ? »"
    },
    {
      step: "Bước 3",
      title: "Soi Da Đầu Thực Tế (Scalp Examination)",
      time: "Thực hiện: 5 - 7 phút",
      objective: "Sử dụng máy soi da đầu Meiboyi để quan sát trực diện biểu bì da đầu, chân tóc và sợi tóc thực tế dưới ống kính phóng đại.",
      actions: [
        "Xin phép chạm vào tóc khách hàng và giải thích nhẹ nhàng các bước soi da đầu.",
        "Tiến hành soi tối thiểu 3 phân vùng khác nhau trên da đầu: Vùng đỉnh đầu (nhiều dầu bã nhờn), hai bên thái dương (dễ khô rát) và vùng sau gáy (dễ nhạy cảm/nấm sẩn).",
        "Sử dụng nút zoom 50x để xem mật độ sợi và nút zoom 200x để xem nang tóc.",
        "Chụp ảnh lưu lại các điểm da đầu tiêu biểu để đối chiếu kết quả cho khách xem."
      ],
      talkTrack: "« Dạ bây giờ em xin phép được chạm nhẹ vào tóc của mình để tiến hành soi da đầu bằng máy chuyên dụng nhé ạ. Thiết bị này hoàn toàn an toàn, có các chế độ ánh sáng phân cực và UV nhẹ giúp tụi mình nhìn sâu vào chân tóc và nang tóc trên màn hình để xem mức độ khỏe mạnh thực tế đó chị. Chị nhìn trên màn hình cùng em nhé, đây là vùng đỉnh đầu của mình... »"
    },
    {
      step: "Bước 4",
      title: "Đọc Kết Quả & Phân Loại Da Đầu (Analysis Presentation)",
      time: "Thực hiện: 7 - 10 phút",
      objective: "Phân tích chính xác tình trạng da đầu của khách dựa trên chỉ số quan sát được dưới máy soi da đầu và đối chiếu bảng chuẩn.",
      actions: [
        "Chỉ rõ các đặc điểm trên màn hình cho khách xem: lỗ chân lông thông thoáng hay bít tắc bã nhờn, da đầu trắng hồng hay đỏ ửng nhạy cảm, có vảy tế bào chết khô hay gàu bết ẩm.",
        "Giải thích nguyên nhân cốt lõi dẫn đến tình trạng này (ví dụ: bít tắc lỗ chân lông do gội chưa sạch sâu, nhạy cảm đỏ mạch do lớp màng ẩm tự nhiên bị bào mòn).",
        "Đưa ra kết luận phân loại da đầu (Da dầu, Da khô, Gàu nấm, Nhạy cảm, Rụng tóc) và ghi nhớ ngưỡng ranh giới y tế chuyển tuyến bác sĩ."
      ],
      talkTrack: "« Chị nhìn nhé, ở vùng đỉnh đầu này, các lỗ phễu nang tóc đang bị đọng các quầng bã sừng màu vàng bóng dầu bao quanh gốc tóc. Đây chính là lý do khiến tóc mình bị bết xẹp nhanh và nang tóc bị nghẹt thở dẫn đến sợi tóc mới mọc lên bị mảnh yếu đi đó ạ. Da đầu của mình thuộc nhóm Da Đầu Dầu và cần một routine kiềm dầu làm sạch bã sừng bít tắc này chân tóc thông thoáng trở lại. »"
    },
    {
      step: "Bước 5",
      title: "Tư Vấn Routine LUSH & Trải Nghiệm Thử (Routine & Experience)",
      time: "Thực hiện: 10 - 15 phút",
      objective: "Đề xuất bộ sản phẩm phối hợp hoàn chỉnh của LUSH, cho khách trực tiếp cảm nhận kết cấu và mùi hương thảo mộc tươi hữu cơ.",
      actions: [
        "Thiết lập routine 3 bước: 1. Scalp Treatment (Ủ/Tẩy TB) → 2. Shampoo (Làm sạch) → 3. Conditioner/Leave-in (Dưỡng ẩm/Mượt).",
        "Lấy một lượng nhỏ mặt nạ da đầu Roots hoặc sáp dưỡng SuperBalm thoa thử lên mu bàn tay hoặc vùng da đầu nhỏ của khách để khách cảm nhận cảm giác mát lạnh hay độ mềm ẩm mượt của sáp thảo dược.",
        "Giải thích cơ chế hoạt động của các thành phần tươi như mật ong Zambian, dầu quế đinh hương mọc tóc, đất sét kiềm dầu."
      ],
      talkTrack: "« Với tình trạng bết tắc này, em đề xuất cho chị routine 3 bước phục hồi sâu từ LUSH. Đầu tiên là mặt nạ da đầu bạc hà Roots, chị thoa lên da đầu khô 15 phút trước gội. Em bôi thử một chút lên tay chị nhé, chị sẽ ngửi thấy hương bạc hà tươi mát lịm và cảm thấy da mát lạnh kích thích lưu thông máu nuôi nang. Sau đó mình sẽ gội sạch bằng muối biển thô Big giúp tẩy tế bào chết da đầu tơi phồng, và xả mượt bằng Veganese mỏng nhẹ chiết xuất thạch agar chanh tươi nha chị! »"
    },
    {
      step: "Bước 6",
      title: "Chốt Routine & Chăm Sóc Sau Bán (Closing & Follow-up)",
      time: "Thực hiện: 15 - 20 phút",
      objective: "Khách hàng vui vẻ đồng ý mua bộ sản phẩm đề xuất, cam kết thực hiện đúng routine hướng dẫn tại nhà và lấy thông tin liên hệ.",
      actions: [
        "Hỗ trợ ghi phiếu thông tin khách hàng, hướng dẫn khách tích chọn ô đồng ý dữ liệu Nghị định 13.",
        "Viết tay lộ trình các bước sử dụng tại nhà rõ ràng đính kèm vào túi giấy đựng sản phẩm LUSH cho khách.",
        "Dặn dò khách chụp lại ảnh da đầu sau 2-3 tuần gội routine LUSH gửi qua Zalo/Page cửa hàng để nhân viên theo dõi tiến trình hồi phục da đầu."
      ],
      talkTrack: "« Dạ em ghi phiếu routine này cho mình mang về nhé ạ. Chị tích giúp em vào ô đồng ý lưu trữ hình ảnh soi da đầu theo quy định bảo mật thông tin để tụi em tiện lưu lịch sử, lần sau chị ghé tiệm tụi em soi lại sẽ có ảnh đối chiếu xem da đầu mình đã cải thiện kiềm dầu sạch phễu nang tóc đến đâu rồi nha chị! Em gửi chị bộ sản phẩm, chúc chị có mái tóc bồng bềnh khỏe mạnh ạ! »"
    }
  ];

  const objectionHandling = [
    {
      scenario: "Khách hàng chê: 'Mỹ phẩm tóc LUSH giá đắt quá!'",
      tactic: "Giải thích về độ đậm đặc nguyên liệu tươi hữu cơ không chứa nước đệm và độ bền sử dụng (đặc biệt là bánh dầu gội).",
      response: "« Dạ em hoàn toàn hiểu băn khoăn của chị về giá ạ. Tuy nhiên, các sản phẩm LUSH được làm hoàn toàn thủ công từ nguyên liệu thực vật tươi nguyên chất và cực kỳ đậm đặc, không sử dụng nước lã làm chất độn như dầu gội công nghiệp thông thường. Ví dụ một bánh gội như New Shampoo Bar này chị nhìn nhỏ nhắn vậy thôi nhưng tương đương 3 chai dầu gội lỏng 250ml thông thường, dùng được tới 60-80 lần gội (tầm 3 tháng). Tính ra mỗi lần gội nuôi dưỡng nang tóc tự nhiên chỉ mất khoảng 4.000đ - 5.000đ thôi đó chị, cực kỳ kinh tế cho hiệu quả mọc tóc vượt trội ạ! »"
    },
    {
      scenario: "Khách hàng bảo: 'Để chị về nhà suy nghĩ thêm nhé!'",
      tactic: "Không ép khách mua. Gửi cẩm nang số, trao mẫu thử nhỏ (nếu có) và thiết lập lịch hẹn theo dõi để tạo trải nghiệm tự nhiên.",
      response: "« Dạ không sao đâu chị ạ! Chăm sóc da đầu là một quá trình cần sự thoải mái. Em xin phép gửi lộ trình routine em vừa viết tay vào Zalo của chị nhé. Đồng thời em tặng chị một phần mẫu thử nhỏ của mặt nạ da đầu Roots để chị về dùng thử trước trước khi quyết định nha ạ. Sau 3-4 ngày, chị cảm nhận độ mát kiềm dầu của Roots tốt thì có thể nhắn tin em đặt hàng giao tận nhà cho chị hoặc ghé tiệm tụi em soi lại nha chị! »"
    },
    {
      scenario: "Chiến thuật Đẩy bán chéo (Cross-sell) trọn bộ",
      tactic: "Giải thích mối quan hệ tương hỗ giữa Tẩy tế bào chết/Ủ da đầu với Dầu gội và Dầu xả để đạt hiệu quả tối ưu.",
      response: "« Dạ chị ơi, nếu mình chỉ mua một chai dầu gội kiềm dầu mà không dùng mặt nạ ủ da đầu Roots thì hiệu quả kiềm dầu bã nhờn chỉ đạt được 40% thôi ạ. Vì Roots chứa đất sét kaolin và bạc hà tươi thấm thấu sâu hút sạch bã sừng bít kín trong lỗ nang tóc trước khi gội - nơi mà dầu gội thông thường lướt qua nhanh không thể làm sạch sâu được. Dùng Roots làm thông thoáng phễu nang rồi gội Big muối biển tạo phồng sẽ giúp da đầu chị khô thoáng nhẹ bẫng suốt 3 ngày liền không bị bết dính đó chị! »"
    }
  ];

  const sessionSpecs = {
    duration: "15 - 20 phút / buổi tư vấn soi da đầu chuyên sâu",
    booking: [
      "Đặt lịch qua website chính thức LUSH Vietnam hoặc Fanpage cửa hàng.",
      "Đặt lịch trực tiếp tại Workshop Station của cửa hàng LUSH trong các khung giờ trống.",
      "Ghi nhận thông tin qua Phiếu Khách Hàng trên app để tự động lưu lịch sử chăm sóc tóc."
    ]
  };

  return (
    <div className="fade-in" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      
      {/* Sub-navigation tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid var(--lush-gray-medium)", paddingBottom: "8px", gap: "16px", overflowX: "auto", scrollbarWidth: "none" }}>
        <button 
          className={`tab-btn ${activeSubTab === "flow" ? "active" : ""}`}
          onClick={() => setActiveSubTab("flow")}
        >
          1. Quy Trình 6 Bước SOP
        </button>
        <button 
          className={`tab-btn ${activeSubTab === "objections" ? "active" : ""}`}
          onClick={() => setActiveSubTab("objections")}
        >
          2. Xử Lý Từ Chối & Bán Chéo
        </button>
        <button 
          className={`tab-btn ${activeSubTab === "specs" ? "active" : ""}`}
          onClick={() => setActiveSubTab("specs")}
        >
          3. Thời Lượng & Đặt Lịch
        </button>
        <button 
          className={`tab-btn ${activeSubTab === "art" ? "active" : ""}`}
          onClick={() => setActiveSubTab("art")}
        >
          4. Nghệ Thuật Tư Vấn
        </button>
        <button 
          className={`tab-btn ${activeSubTab === "cases" ? "active" : ""}`}
          onClick={() => setActiveSubTab("cases")}
        >
          5. 4 Case Thực Tế
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        
        {activeSubTab === "flow" && (
          <div className="fade-in grid-split-classifier">
            
            {/* Steps Stepper */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 style={{ fontSize: "1.1rem", textTransform: "uppercase" }}>Các Bước Trong Quy Trình:</h3>
              {sopSteps.map((stepData, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px",
                    border: activeStep === idx ? "2px solid #000000" : "1px solid #e5e5e5",
                    background: activeStep === idx ? "#000000" : "#ffffff",
                    color: activeStep === idx ? "#ffffff" : "#000000",
                    cursor: "pointer",
                    transition: "var(--transition-smooth)"
                  }}
                >
                  <div style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: activeStep === idx ? "#ffffff" : "#000000",
                    color: activeStep === idx ? "#000000" : "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "13px"
                  }}>
                    {idx + 1}
                  </div>
                  <div style={{ fontWeight: "700", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "0.5px" }}>
                    {stepData.step}: {stepData.title.split(" (")[0]}
                  </div>
                </div>
              ))}
            </div>

            {/* Step Detail Card */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              
              <div className="lush-card" style={{ display: "flex", flexDirection: "column", gap: "12px", minHeight: "380px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="lush-tag dark">{sopSteps[activeStep].step}</span>
                  <span className="lush-tag gold" style={{ border: "none", fontWeight: "700", background: "var(--lush-gold-light)", color: "#8a6a00" }}>⏰ {sopSteps[activeStep].time}</span>
                </div>
                
                <h3 style={{ fontSize: "1.3rem", marginTop: "4px" }}>{sopSteps[activeStep].title}</h3>
                
                <div style={{ fontSize: "0.9rem", color: "#333" }}>
                  <strong>🎯 Mục tiêu chính:</strong>
                  <p style={{ marginTop: "4px", color: "#555" }}>{sopSteps[activeStep].objective}</p>
                </div>

                <div style={{ borderTop: "1px dashed var(--lush-gray-medium)", paddingTop: "12px", marginTop: "4px" }}>
                  <strong style={{ fontSize: "0.9rem" }}>📋 Hành động của nhân viên:</strong>
                  <ul style={{ paddingLeft: "20px", marginTop: "6px", display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.85rem", color: "#444" }}>
                    {sopSteps[activeStep].actions.map((act, aIdx) => (
                      <li key={aIdx}>{act}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ 
                  marginTop: "16px", 
                  padding: "12px 16px", 
                  background: "var(--lush-green-light)", 
                  borderLeft: "4px solid var(--lush-green)",
                  fontSize: "0.85rem",
                  color: "#333",
                  fontStyle: "italic"
                }}>
                  <strong style={{ color: "var(--lush-green)", display: "block", fontStyle: "normal", marginBottom: "4px", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "1px" }}>
                    🗣️ TALK TRACK (Mẫu câu giao tiếp):
                  </strong>
                  {sopSteps[activeStep].talkTrack}
                </div>

              </div>

            </div>

          </div>
        )}

        {activeSubTab === "objections" && (
          <div className="fade-in" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h3 style={{ fontSize: "1.3rem", borderBottom: "2px solid #000", paddingBottom: "8px", margin: 0 }}>
              💡 Xử Lý Từ Chối & Đẩy Bán Chéo Chuyên Nghiệp
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#555", margin: 0 }}>
              Nhân viên tuyệt đối không đôi co, tranh cãi với khách hàng. Luôn đồng cảm trước, sau đó dùng giá trị độc bản của nguyên liệu tươi LUSH và khoa học routine để thuyết phục khách hàng.
            </p>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px" }}>
              {objectionHandling.map((item, idx) => (
                <div key={idx} className="lush-card" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "1.5rem" }}>💬</span>
                    <h4 style={{ fontSize: "1.1rem", margin: 0, textTransform: "none", fontFamily: "var(--font-sans)", fontWeight: "800" }}>
                      {item.scenario}
                    </h4>
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#666", borderLeft: "3px solid #ccc", paddingLeft: "10px" }}>
                    <strong>🎯 Chiến thuật tư vấn:</strong> {item.tactic}
                  </div>
                  <div style={{ 
                    padding: "16px", 
                    background: "var(--lush-gray-light)", 
                    border: "1px solid var(--lush-gray-medium)",
                    fontSize: "0.85rem",
                    color: "var(--lush-black)",
                    fontStyle: "italic",
                    lineHeight: "1.6"
                  }}>
                    <strong style={{ color: "var(--lush-black)", display: "block", fontStyle: "normal", marginBottom: "6px", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "1px" }}>
                      🗣️ Talk Track Gợi Ý Cho Nhân Viên:
                    </strong>
                    {item.response}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSubTab === "specs" && (
          <div className="fade-in grid-split">
            
            {/* Session Specs */}
            <div className="lush-card" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h3 style={{ fontSize: "1.2rem", borderBottom: "2px solid #000", paddingBottom: "8px", margin: 0 }}>
                ⏰ Thông Số Buổi Tư Vấn
              </h3>
              <div>
                <strong style={{ fontSize: "0.9rem", color: "var(--lush-green)" }}>THỜI LƯỢNG TIÊU CHUẨN:</strong>
                <div style={{ fontSize: "1.8rem", fontWeight: "800", marginTop: "4px" }}>{sessionSpecs.duration.split(" / ")[0]}</div>
                <span style={{ fontSize: "0.8rem", color: "#666" }}>{sessionSpecs.duration.split(" / ")[1]}</span>
              </div>
              <div style={{ fontSize: "0.85rem", color: "#444", borderTop: "1px dashed var(--lush-gray-medium)", paddingTop: "12px" }}>
                <strong>Phân bổ thời gian lý tưởng:</strong>
                <ul style={{ paddingLeft: "20px", marginTop: "6px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <li>Chào mời khách hàng & Hỏi han nhu cầu: <strong>3 - 5 phút</strong></li>
                  <li>Soi da đầu & Đọc kết quả màn hình: <strong>5 - 7 phút</strong></li>
                  <li>Tư vấn routine & Trải nghiệm chất sản phẩm: <strong>5 phút</strong></li>
                  <li>Chốt đơn hàng & Ghi phiếu khách: <strong>3 phút</strong></li>
                </ul>
              </div>
            </div>

            {/* Booking Specs */}
            <div className="lush-card" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h3 style={{ fontSize: "1.2rem", borderBottom: "2px solid #000", paddingBottom: "8px", margin: 0 }}>
                📅 Hướng Dẫn Quy Trình Đặt Lịch Hẹn
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#333", margin: 0 }}>
                Để tránh quá tải tại Workshop Station và đảm bảo chất lượng phục vụ tốt nhất, quy trình đặt lịch được triển khai qua các kênh sau:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.85rem", color: "#444" }}>
                {sessionSpecs.booking.map((book, bIdx) => (
                  <div key={bIdx} style={{ display: "flex", gap: "12px", alignItems: "start" }}>
                    <div style={{ 
                      background: "var(--lush-black)", 
                      color: "var(--lush-white)", 
                      width: "20px", 
                      height: "20px", 
                      borderRadius: "50%", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      fontWeight: "bold",
                      fontSize: "11px",
                      flexShrink: 0,
                      marginTop: "2px"
                    }}>
                      {bIdx + 1}
                    </div>
                    <div>{book}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* --- Tab 4: Nghệ Thuật Tư Vấn --- */}
        {activeSubTab === "art" && (
          <div className="fade-in grid-split-classifier">
            {/* Steps Left Stepper */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 style={{ fontSize: "1.1rem", textTransform: "uppercase" }}>Các Bước Trong Quy Trình:</h3>
              {artSteps.map((stepData, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveArtStep(idx)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px",
                    border: activeArtStep === idx ? "2px solid #000000" : "1px solid #e5e5e5",
                    background: activeArtStep === idx ? "#000000" : "#ffffff",
                    color: activeArtStep === idx ? "#ffffff" : "#000000",
                    cursor: "pointer",
                    transition: "var(--transition-smooth)"
                  }}
                >
                  <div style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: activeArtStep === idx ? "#ffffff" : "#000000",
                    color: activeArtStep === idx ? "#000000" : "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "13px"
                  }}>
                    {idx + 1}
                  </div>
                  <div style={{ fontWeight: "700", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "0.5px" }}>
                    {stepData.step}: {stepData.title.split(" (")[0]}
                  </div>
                </div>
              ))}
            </div>

            {/* Step Detail Card */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div className="lush-card" style={{ display: "flex", flexDirection: "column", gap: "16px", minHeight: "380px" }}>
                <div>
                  <span className="lush-tag dark">{artSteps[activeArtStep].step}</span>
                </div>
                
                <h3 style={{ fontSize: "1.3rem", marginTop: "4px" }}>{artSteps[activeArtStep].title}</h3>
                <h4 className="sub-title" style={{ color: "var(--lush-green)", fontSize: "0.8rem", letterSpacing: "1px", fontWeight: "bold" }}>
                  {artSteps[activeArtStep].subtitle}
                </h4>
                
                <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: "1.5" }}>{artSteps[activeArtStep].desc}</p>
                
                <div style={{ borderTop: "1px dashed var(--lush-gray-medium)", paddingTop: "16px", marginTop: "8px" }}>
                  {/* Step 1 & 2 content: Questions list */}
                  {(activeArtStep === 0 || activeArtStep === 1) && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <strong style={{ fontSize: "0.95rem" }}>Các câu hỏi gợi ý:</strong>
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {artSteps[activeArtStep].questions.map((q, qIdx) => (
                          <div key={qIdx} style={{ 
                            padding: "12px 16px", 
                            background: "var(--lush-gray-light)", 
                            border: "1px solid var(--lush-gray-medium)",
                            borderRadius: "4px",
                            fontSize: "0.85rem",
                            fontWeight: "500",
                            lineHeight: "1.4"
                          }}>
                            <strong>{qIdx + 1}.</strong> {q}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3 content: LOVE WANT NEED circles */}
                  {activeArtStep === 2 && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                      <div style={{ display: "flex", justifyContent: "space-around", gap: "16px", textAlign: "center", flexWrap: "wrap" }}>
                        
                        {/* LOVE */}
                        <div style={{ 
                          display: "flex", 
                          flexDirection: "column", 
                          alignItems: "center", 
                          justifyContent: "center",
                          padding: "16px",
                          borderRadius: "50%",
                          width: "120px",
                          height: "120px",
                          background: "#e67e22",
                          color: "#ffffff",
                          boxShadow: "0 4px 10px rgba(230, 126, 34, 0.3)",
                          border: "2px solid #000"
                        }}>
                          <strong style={{ fontSize: "1.1rem", letterSpacing: "1px" }}>LOVE</strong>
                          <p style={{ fontSize: "0.75rem", marginTop: "6px", fontWeight: "500" }}>Những gì khách hài lòng</p>
                        </div>

                        {/* WANT */}
                        <div style={{ 
                          display: "flex", 
                          flexDirection: "column", 
                          alignItems: "center", 
                          justifyContent: "center",
                          padding: "16px",
                          borderRadius: "50%",
                          width: "120px",
                          height: "120px",
                          background: "#27ae60",
                          color: "#ffffff",
                          boxShadow: "0 4px 10px rgba(39, 174, 96, 0.3)",
                          border: "2px solid #000"
                        }}>
                          <strong style={{ fontSize: "1.1rem", letterSpacing: "1px" }}>WANT</strong>
                          <p style={{ fontSize: "0.75rem", marginTop: "6px", fontWeight: "500" }}>Những gì khách mong muốn</p>
                        </div>

                        {/* NEED */}
                        <div style={{ 
                          display: "flex", 
                          flexDirection: "column", 
                          alignItems: "center", 
                          justifyContent: "center",
                          padding: "16px",
                          borderRadius: "50%",
                          width: "120px",
                          height: "120px",
                          background: "#2c3e50",
                          color: "#ffffff",
                          boxShadow: "0 4px 10px rgba(44, 62, 80, 0.3)",
                          border: "2px solid #000"
                        }}>
                          <strong style={{ fontSize: "1.1rem", letterSpacing: "1px" }}>NEED</strong>
                          <p style={{ fontSize: "0.75rem", marginTop: "6px", fontWeight: "500" }}>Những gì tóc thực sự cần</p>
                        </div>

                      </div>

                      <div style={{ 
                        background: "var(--lush-gold-light)", 
                        borderLeft: "4px solid var(--lush-gold)",
                        padding: "12px 16px",
                        fontSize: "0.85rem",
                        color: "#555",
                        marginTop: "20px"
                      }}>
                        <strong>💡 KỸ NĂNG QUAN SÁT ĐỂ TÌM RA "NEED":</strong>
                        <p style={{ marginTop: "4px", margin: 0, fontStyle: "italic" }}>
                          Khách hàng thường không biết mình thực sự cần gì; người tư vấn phải quan sát tình trạng tóc và da đầu trong lúc trò chuyện/test tóc để tìm ra giải pháp chuyên gia.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Step 4 content: 4 Product Groups */}
                  {activeArtStep === 3 && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
                        {artSteps[3].categories.map((cat, cIdx) => (
                          <div key={cIdx} style={{ 
                            border: "2px solid #000000", 
                            padding: "16px", 
                            background: "#ffffff",
                            boxShadow: "4px 4px 0px #000000",
                            borderRadius: "4px"
                          }}>
                            <h4 style={{ fontSize: "0.95rem", color: "var(--lush-black)", marginBottom: "6px", fontFamily: "var(--font-sans)" }}>
                              🔸 {cat.name}
                            </h4>
                            <p style={{ fontSize: "0.8rem", color: "#666", lineHeight: "1.4", margin: 0 }}>
                              {cat.desc}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div style={{ 
                        background: "var(--lush-green-light)", 
                        borderLeft: "4px solid var(--lush-green)",
                        padding: "12px 16px",
                        fontSize: "0.85rem",
                        color: "#333",
                        marginTop: "10px"
                      }}>
                        <strong>🌿 QUY TẮC ĐỀ XUẤT ROUTINE:</strong>
                        <p style={{ marginTop: "4px", margin: 0 }}>
                          Việc kết hợp đủ 4 bước giúp các sản phẩm hoạt động hài hòa, thể hiện sự chuyên nghiệp của tư vấn viên và đảm bảo kết quả tốt nhất cho khách hàng.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- Tab 5: 4 Case Tư Vấn Thực Tế --- */}
        {activeSubTab === "cases" && (
          <div className="fade-in grid-split-classifier">
            {/* Case list selector */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 style={{ fontSize: "1.1rem", textTransform: "uppercase" }}>Chọn Case Tư Vấn:</h3>
              {hairCases.map((caseItem, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveCase(idx)}
                  style={{
                    padding: "16px",
                    border: activeCase === idx ? "2px solid #000000" : "1px solid #e5e5e5",
                    background: activeCase === idx ? "#000000" : "#ffffff",
                    color: activeCase === idx ? "#ffffff" : "#000000",
                    cursor: "pointer",
                    transition: "var(--transition-smooth)",
                    fontSize: "0.85rem",
                    fontWeight: "800"
                  }}
                >
                  {caseItem.title.split(":")[0]}
                </div>
              ))}
            </div>

            {/* Case Detail card */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div className="lush-card" style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--lush-black)" }}>
                  {hairCases[activeCase].title}
                </h3>
                
                {/* Objective */}
                <div style={{ 
                  background: "var(--lush-green-light)", 
                  borderLeft: "4px solid var(--lush-green)",
                  padding: "16px",
                  fontSize: "0.85rem",
                  color: "#333",
                  lineHeight: "1.5"
                }}>
                  <strong style={{ color: "var(--lush-green)", textTransform: "uppercase", fontSize: "0.75rem", display: "block", marginBottom: "4px" }}>
                    🎯 MỤC ĐÍCH TƯ VẤN:
                  </strong>
                  {hairCases[activeCase].objective}
                </div>

                {/* 4 product groups grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px", marginTop: "10px" }}>
                  
                  {/* Treatment */}
                  <div style={{ border: "1px solid var(--lush-gray-medium)", padding: "16px", borderRadius: "4px" }}>
                    <strong style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#666", display: "block", marginBottom: "10px" }}>
                      🧴 Treatment/Mask
                    </strong>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {hairCases[activeCase].products.treatment.map((prod, pIdx) => (
                        <span key={pIdx} className="lush-tag green" style={{ padding: "4px 8px", fontSize: "0.8rem" }}>
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Shampoo */}
                  <div style={{ border: "1px solid var(--lush-gray-medium)", padding: "16px", borderRadius: "4px" }}>
                    <strong style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#666", display: "block", marginBottom: "10px" }}>
                      🧼 Shampoo
                    </strong>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {hairCases[activeCase].products.shampoo.map((prod, pIdx) => (
                        <span key={pIdx} className="lush-tag gold" style={{ padding: "4px 8px", fontSize: "0.8rem", border: "1px solid var(--lush-gold)", background: "var(--lush-gold-light)", color: "#8a6a00" }}>
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Conditioner */}
                  <div style={{ border: "1px solid var(--lush-gray-medium)", padding: "16px", borderRadius: "4px" }}>
                    <strong style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#666", display: "block", marginBottom: "10px" }}>
                      🧴 Conditioner
                    </strong>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {hairCases[activeCase].products.conditioner.map((prod, pIdx) => (
                        <span key={pIdx} className="lush-tag green" style={{ padding: "4px 8px", fontSize: "0.8rem" }}>
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Styling */}
                  <div style={{ border: "1px solid var(--lush-gray-medium)", padding: "16px", borderRadius: "4px" }}>
                    <strong style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#666", display: "block", marginBottom: "10px" }}>
                      ✨ Dưỡng / Tạo kiểu
                    </strong>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {hairCases[activeCase].products.styling.map((prod, pIdx) => (
                        <span key={pIdx} className="lush-tag dark" style={{ padding: "4px 8px", fontSize: "0.8rem" }}>
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
