"use client";
import { useState } from "react";
import Image from "next/image";

export default function ScannerGuide() {
  const [activeSubTab, setActiveSubTab] = useState("assembly");
  const [activeStep, setActiveStep] = useState(0);

  const assemblySteps = [
    {
      title: "Bước 1: Lắp Đế Màn Hình",
      desc: "Gắn phần đế của màn hình vào màn hình chính thông qua rãnh ở phía sau màn hình. Đảm bảo khít chặt để màn hình đứng vững.",
      image: "/device_back.png",
      isPhoto: true
    },
    {
      title: "Bước 2: Kết Nối Đầu Soi",
      desc: "Dùng dây cắm ở phần đầu soi da đầu gắn vào dây màu trắng đi cùng với màn hình. Đẩy nhẹ và vặn nắp bảo vệ nếu có để kết nối chắc chắn.",
      image: "/connect_scanner.jpg",
      isPhoto: true
    },
    {
      title: "Bước 3: Cắm Nguồn Sạc",
      desc: "Gắn phần dây của đầu sạc vào phần dây điện màu đỏ của màn hình. Hãy cẩn thận cắm đúng khớp nối màu đỏ để tránh hỏng linh kiện.",
      image: "/connect_power.png",
      isPhoto: true
    }
  ];

  const usageSteps = [
    {
      title: "Bước 1: Cấp Nguồn",
      desc: "Tiến hành cắm đầu sạc điện vào ổ điện. Đèn báo sạc hoặc màn hình sẽ hiển thị tín hiệu có nguồn điện đi vào.",
      image: "/power_on.jpg",
      isPhoto: true
    },
    {
      title: "Bước 2: Khởi Động Máy",
      desc: "Ấn nút nguồn (nút đầu tiên từ trái sang) trên màn hình hiển thị để mở máy. Màn hình LUSH / Meiboyi sẽ sáng lên sau 2-3 giây.",
      image: "/power_switch.jpg",
      isPhoto: true,
      objectFit: "contain"
    },
    {
      title: "Bước 3: Chọn Chức Năng Soi",
      desc: "Cầm đầu soi da đầu và ấn nút điều khiển đầu tiên ở cạnh ngón cái. Mỗi lần ấn sẽ tương ứng với 1 trong 3 chức năng theo thứ tự:\n\n• Ấn lần 1 (White Light): Soi bề mặt tóc, lượng dầu và gàu bết.\n• Ấn lần 2 (Polarized Light): Xem sâu nang tóc, tình trạng viêm đỏ.\n• Ấn lần 3 (UV/Blue Light): Phát hiện nấm da đầu, bã nhờn ẩn sâu.",
      image: "/probe_button.jpg",
      isPhoto: true,
      objectFit: "contain"
    },
    {
      title: "Bước 4: Soi & Đánh Giá (Chọn Độ Phóng Đại)",
      desc: "Từ từ đưa máy đến sát vùng da đầu cần soi. Sử dụng nút zoom/xoay tiêu cự trên thân đầu soi để chọn độ phóng đại phù hợp:\n\n• Độ phóng đại 50x: Thích hợp xem tổng thể mật độ tóc (dày/thưa), độ khỏe của thân tóc, và lượng bã nhờn bết dính diện rộng.\n• Độ phóng đại 200x: Thích hợp soi sâu phễu nang tóc, phát hiện các nút sừng tắc nghẽn, mao mạch ửng đỏ (nhạy cảm) hoặc vảy nấm chân tóc.",
      image: "/scanner_screen.jpg",
      isPhoto: true,
      objectFit: "contain"
    },
    {
      title: "Bước 5: Chụp Ảnh Màn Hình",
      desc: "Nút nhỏ phía dưới sau nút điều khiển dùng để chụp ảnh màn hình. Nhấn nút này khi tìm thấy vùng da đầu có dấu hiệu cần lưu ý để chụp lại và tư vấn cho khách.",
      image: "/capture_button.jpg",
      isPhoto: true,
      objectFit: "contain"
    }
  ];

  const hygieneSteps = [
    {
      title: "Quy trình 1: Khử Trùng Đầu Soi Giữa Mỗi Khách",
      desc: "Trước và sau mỗi lần soi da đầu cho khách hàng, nhân viên bắt buộc dùng cồn y tế 70 độ thấm vào bông cotton hoặc khăn giấy sạch để lau nhẹ bề mặt thấu kính và thân đầu soi. Hãy đợi 30 giây cho cồn bay hơi hoàn toàn trước khi tiếp xúc với da đầu khách tiếp theo.\n\n• Tuyệt đối không xịt trực tiếp cồn lên thấu kính để tránh chập mạch đèn led.\n• Chỉ dùng khăn lau thấu kính chuyên dụng/bông mềm để tránh trầy xước lớp phủ chống lóa.",
      image: "/connect_scanner.jpg",
      isPhoto: true
    },
    {
      title: "Quy trình 2: Sử Dụng Đầu Bọc Dùng Một Lần",
      desc: "Đối với trường hợp khách hàng có tình trạng gàu ẩm bết dính nặng hoặc có biểu hiện viêm đỏ nhạy cảm/trầy xước, nhân viên nên sử dụng đầu bọc nhựa/silicon dùng một lần lắp bên ngoài đầu soi da đầu. Điều này đảm bảo ngăn chặn tối đa sự lây chéo của các vi khuẩn hoặc nấm da đầu giữa các khách hàng.",
      image: "/scanner_screen.jpg",
      isPhoto: true
    },
    {
      title: "Quy trình 3: Bảo Quản & Cất Máy Sau Ca",
      desc: "Kết thúc ca làm việc, nhân viên tiến hành tắt màn hình bằng cách giữ nút nguồn 3 giây. Rút phích cắm sạc khỏi ổ điện.\n\n• Cuộn dây kết nối đầu soi và dây nguồn nhẹ nhàng theo vòng tròn rộng, tránh gấp khúc gập gãy làm đứt cáp tín hiệu ngầm.\n• Đặt màn hình và đầu soi ngay ngắn vào đế đỡ hoặc hộp đựng bảo quản chuyên dụng.\n• Tránh đặt máy ở nơi ẩm ướt hoặc trực tiếp dưới ánh nắng mặt trời.",
      image: "/device_back.png",
      isPhoto: true
    }
  ];

  const troubleSteps = [
    {
      title: "Sự cố 1: Hình Ảnh Bị Mờ/Không Nét",
      desc: "Khi quan sát thấy hình ảnh hiển thị trên màn hình bị mờ nhòe, không nhìn rõ lỗ chân lông:\n\n• Nguyên nhân: Thấu kính bị bám bụi/dầu thừa từ tóc khách trước, hoặc tiêu cự chưa khớp.\n• Khắc phục: Dùng vòng xoay tiêu cự (focus ring) màu đen trên thân đầu soi, xoay từ từ sang trái hoặc phải để điều chỉnh tiêu cự cho đến khi hiển thị rõ nét nhất. Đồng thời, lau nhẹ ống kính bằng khăn giấy tẩm cồn y tế.",
      image: "/probe_button.jpg",
      isPhoto: true
    },
    {
      title: "Sự cố 2: Mất Kết Nối / Báo Lỗi Không Lên Hình",
      desc: "Khi màn hình bị đen hoặc hiển thị thông báo mất tín hiệu dù đèn led đầu soi vẫn sáng:\n\n• Nguyên nhân: Lỏng cáp tín hiệu.\n• Khắc phục: Kiểm tra khớp nối dây cắm ở phần đầu soi với dây nối của màn hình (dây trắng). Hãy rút cáp ra, vệ sinh bụi cổng cắm và cắm lại chắc chắn, xoay chặt ren bảo vệ phía ngoài để cố định đầu nối.",
      image: "/connect_scanner.jpg",
      isPhoto: true
    },
    {
      title: "Sự cố 3: Màn Hình Không Lên Nguồn",
      desc: "Nhấn nút nguồn nhưng màn hình tối đen và không phản hồi:\n\n• Nguyên nhân: Cạn pin màn hình, hoặc hỏng adapter sạc.\n• Khắc phục: Cắm sạc nguồn (dây đỏ) vào ổ điện và cắm vào máy. Kiểm tra xem đèn báo sạc cạnh màn hình có sáng đỏ (đang sạc) hoặc xanh (đầy) không. Nhấn giữ nút nguồn từ 3-5 giây. Nếu vẫn không hoạt động, hãy liên hệ bộ phận kỹ thuật để thay adapter sạc.",
      image: "/connect_power.png",
      isPhoto: true
    }
  ];

  const steps = 
    activeSubTab === "assembly" ? assemblySteps : 
    activeSubTab === "usage" ? usageSteps : 
    activeSubTab === "hygiene" ? hygieneSteps : 
    troubleSteps;

  const currentStepData = steps[activeStep] || steps[0];

  const handleSubTabChange = (tab) => {
    setActiveSubTab(tab);
    setActiveStep(0);
  };

  return (
    <div className="fade-in" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px" }}>
      
      {/* Sub-navigation tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid var(--lush-gray-medium)", paddingBottom: "8px", gap: "16px", overflowX: "auto", scrollbarWidth: "none" }}>
        <button 
          className={`tab-btn ${activeSubTab === "assembly" ? "active" : ""}`}
          onClick={() => handleSubTabChange("assembly")}
        >
          1. Lắp Ráp Máy
        </button>
        <button 
          className={`tab-btn ${activeSubTab === "usage" ? "active" : ""}`}
          onClick={() => handleSubTabChange("usage")}
        >
          2. Hướng Dẫn Sử Dụng
        </button>
        <button 
          className={`tab-btn ${activeSubTab === "hygiene" ? "active" : ""}`}
          onClick={() => handleSubTabChange("hygiene")}
        >
          3. Vệ Sinh & Bảo Quản
        </button>
        <button 
          className={`tab-btn ${activeSubTab === "trouble" ? "active" : ""}`}
          onClick={() => handleSubTabChange("trouble")}
        >
          4. Xử Lý Sự Cố
        </button>
      </div>

      <div className="grid-split">
        
        {/* Left column: Step Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          
          {/* Step Selector List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {steps.map((step, idx) => (
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
                <div style={{ fontWeight: "700", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.5px" }}>
                  {step.title.split(":")[0]}
                </div>
              </div>
            ))}
          </div>

          {/* Current Step Description Card */}
          <div className="lush-card" style={{ minHeight: "220px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <div className="lush-tag dark" style={{ alignSelf: "flex-start" }}>
              Chi tiết bước {activeStep + 1}
            </div>
            <h3 style={{ fontSize: "1.3rem", marginTop: "4px" }}>{currentStepData.title}</h3>
            <p style={{ whiteSpace: "pre-line", color: "#333", fontSize: "0.95rem" }}>
              {currentStepData.desc}
            </p>
          </div>

        </div>

        {/* Right column: Graphic & Video Player */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          
          {/* Step Graphic Illustration */}
          <div style={{ 
            border: "2px solid var(--lush-black)", 
            padding: "20px", 
            background: "var(--lush-gray-light)",
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            height: "300px",
            position: "relative"
          }}>
            <Image 
              src={currentStepData.image} 
              alt={currentStepData.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ 
                objectFit: currentStepData.objectFit || (currentStepData.isPhoto ? "cover" : "contain"), 
                filter: currentStepData.isPhoto ? "none" : "grayscale(100%)" 
              }}
            />
            <div style={{ 
              position: "absolute", 
              bottom: "10px", 
              right: "10px", 
              fontSize: "0.7rem", 
              fontWeight: "bold",
              textTransform: "uppercase",
              background: "#000",
              color: "#fff",
              padding: "4px 8px"
            }}>
              Minh Họa Bước {activeStep + 1}
            </div>
          </div>

          {/* Real video player block */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h3 style={{ fontSize: "1.1rem", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px" }}>
              <span>🎥</span> Video Hướng Dẫn Vận Hành Máy
            </h3>
            <div style={{ 
              border: "3px solid var(--lush-black)", 
              boxShadow: "6px 6px 0 var(--lush-black)",
              background: "#000",
              position: "relative",
              aspectRatio: "16/9",
              overflow: "hidden"
            }}>
              <video 
                src="/video_soi_da.mp4" 
                controls 
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <span style={{ fontSize: "0.75rem", color: "#666", fontStyle: "italic" }}>
              💡 Mẹo: Nhân viên mới bắt buộc xem hết video này trước khi thực hành soi da đầu cho khách hàng.
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}
