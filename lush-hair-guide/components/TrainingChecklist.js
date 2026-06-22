"use client";
import { useState, useEffect } from "react";

export default function TrainingChecklist() {
  const [completedTasks, setCompletedTasks] = useState({});
  const [progress, setProgress] = useState(0);

  const daysData = [
    {
      day: 1,
      title: "Ngày 1: DNA & Thương Hiệu LUSH",
      goal: "Mục tiêu: Thấu hiểu triết lý thương hiệu, thuộc nằm lòng 7 giá trị cốt lõi.",
      tasks: [
        { id: "d1-t1", text: "Đọc và thảo luận triết lý \"We Believe\" & 7 giá trị cốt lõi" },
        { id: "d1-t2", text: "Học cách đọc nhãn \"Use by\" và giải thích cho khách hàng" },
        { id: "d1-t3", text: "Phân biệt Mặt nạ Tươi (Fresh Mask) vs Mặt nạ Thường" },
        { id: "d1-t4", text: "Nắm vững Eco Program: đổi 5 hũ nhựa lấy 1 mặt nạ tươi miễn phí" },
        { id: "d1-t5", text: "Bài tập: Tự giải thích \"Tại sao LUSH khác biệt?\" bằng lời của mình" }
      ]
    },
    {
      day: 2,
      title: "Ngày 2: Nhận Diện Da Đầu & Routine Tóc",
      goal: "Mục tiêu: Nắm vững cấu tạo tóc, phân biệt 3 loại da đầu, học 5 bước routine tóc.",
      tasks: [
        { id: "d2-t1", text: "Cấu tạo tóc (biểu bì, lõi) & độ xốp tóc (Cao/Trung bình/Thấp)" },
        { id: "d2-t2", text: "Phân biệt 3 loại da đầu chính: Da đầu Khô, Hỗn Hợp, Da đầu Dầu" },
        { id: "d2-t3", text: "Học 5 bước Routine chăm sóc tóc tiêu chuẩn của LUSH" },
        { id: "d2-t4", text: "Phân biệt Dầu gội truyền thống vs Bánh dầu gội (Shampoo Bar - dùng 80 lần)" },
        { id: "d2-t5", text: "Thực hành gội demo Fairly Traded Honey & American Cream trên bàn tay" }
      ]
    },
    {
      day: 3,
      title: "Ngày 3: Body Care Routine",
      goal: "Mục tiêu: Nắm vững các bước tắm bồn, shower gel, scrubs và massage bar.",
      tasks: [
        { id: "d3-t1", text: "Phân biệt Bath Bomb, Bubble Bar, Shower Gel & Shower Jelly" },
        { id: "d3-t2", text: "Thực hành demo Bath Bomb và cắt đôi Shower Jelly cho khách xem" },
        { id: "d3-t3", text: "Sử dụng Scrubee hoặc Buffy để tẩy tế bào chết và dưỡng ẩm trong 1 bước" },
        { id: "d3-t4", text: "Demo massage bar tan chảy khi tiếp xúc nhiệt độ da tay" },
        { id: "d3-t5", text: "Tư vấn routine body đầy đủ cho 2 khách hàng: da khô vs da thích thơm" }
      ]
    },
    {
      day: 4,
      title: "Ngày 4: Hương Thơm (Fragrance)",
      goal: "Mục tiêu: Nhận diện 4 nhóm mùi hương, học kỹ thuật tư vấn Fragrance Reading.",
      tasks: [
        { id: "d4-t1", text: "Phân biệt 4 nhóm mùi: Citrus (Cam chanh), Floral (Hoa), Gourmand (Ngọt ngào), Gỗ (Woody)" },
        { id: "d4-t2", text: "Áp dụng 3 cách tiếp cận nước hoa: Nguyên liệu, Cảm xúc & Câu chuyện" },
        { id: "d4-t3", text: "Biết cách xịt thử mùi lên que thử trước, sau đó mới thử lên da" },
        { id: "d4-t4", text: "Thực hành Fragrance Reading 5 bước bằng thẻ cảm xúc với đồng nghiệp" },
        { id: "d4-t5", text: "Luyện cách reset khứu giác bằng da cổ tay của chính mình" }
      ]
    },
    {
      day: 5,
      title: "Ngày 5: 9 Bước Bán Hàng & Kiểu Khách Hàng",
      goal: "Mục tiêu: Thuộc lòng 9 bước trải nghiệm khách hàng và nhận diện 4 nhóm tính cách.",
      tasks: [
        { id: "d5-t1", text: "Học thuộc thứ tự và ý nghĩa của 9 bước trải nghiệm khách hàng (Customer Experience)" },
        { id: "d5-t2", text: "Phân biệt 4 nhóm khách: Analytical (Phân tích), Driver (Quyết đoán), Expressive (Cảm xúc), Friend (Thân thiện)" },
        { id: "d5-t3", text: "Áp dụng mô hình RASA khi lắng nghe nhu cầu của khách" },
        { id: "d5-t4", text: "Thực hành kỹ thuật bán chéo, bán thêm (Upsell/Link-sell/Cross-sell)" },
        { id: "d5-t5", text: "Quy trình quầy tính tiền: tư vấn sample, Eco Program, giới thiệu add-on" }
      ]
    },
    {
      day: 6,
      title: "Ngày 6: Thực Chiến Có Kèm Cặp",
      goal: "Mục tiêu: Tiếp cận và tư vấn khách hàng thật dưới sự quan sát của leader.",
      tasks: [
        { id: "d6-t1", text: "Tự hoàn thành checklist mở cửa hàng buổi sáng" },
        { id: "d6-t2", text: "Tự tiếp cận và tư vấn cho khách hàng thật dưới sự quan sát từ xa" },
        { id: "d6-t3", text: "Thực hành chốt sale thành công ít nhất 3 hóa đơn" },
        { id: "d6-t4", text: "Ghi chép lại các tình huống khách hàng khó xử lý để thảo luận" },
        { id: "d6-t5", text: "Họp cuối ngày với leader nhận 1 điểm mạnh, 1 điểm cần cải thiện" }
      ]
    },
    {
      day: 7,
      title: "Ngày 7: Vận Hành Độc Lập & Đánh Giá Tốt Nghiệp",
      goal: "Mục tiêu: Tự tin đứng bán độc lập và hoàn tất bài kiểm tra thử vai khách khó.",
      tasks: [
        { id: "d7-t1", text: "Đóng ca tối độc lập: kiểm kê tester, dọn bàn demo, báo cáo doanh thu" },
        { id: "d7-t2", text: "Vượt qua thử thách roleplay với leader đóng vai \"khách hàng khó tính\"" },
        { id: "d7-t3", text: "Giải thích trơn tru triết lý LUSH mà không nhìn tài liệu" },
        { id: "d7-t4", text: "Nhận diện da đầu chính xác và pick đúng routine 3 sản phẩm tương ứng" },
        { id: "d7-t5", text: "Hoàn thành phiếu tự đánh giá tuần và nhận target chính thức cho tuần 2" }
      ]
    }
  ];

  // Load progress from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("lush_training_tasks");
    if (saved) {
      try {
        setCompletedTasks(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Recalculate progress when completedTasks changes
  useEffect(() => {
    const allTaskIds = daysData.flatMap(day => day.tasks.map(t => t.id));
    const completedCount = allTaskIds.filter(id => completedTasks[id]).length;
    const percentage = allTaskIds.length > 0 ? Math.round((completedCount / allTaskIds.length) * 100) : 0;
    setProgress(percentage);
  }, [completedTasks]);

  const handleCheckboxChange = (id) => {
    const updated = { ...completedTasks, [id]: !completedTasks[id] };
    setCompletedTasks(updated);
    localStorage.setItem("lush_training_tasks", JSON.stringify(updated));
  };

  const handleResetChecklist = () => {
    if (confirm("Bạn có chắc chắn muốn xóa toàn bộ tiến trình học tập hiện tại?")) {
      setCompletedTasks({});
      localStorage.removeItem("lush_training_tasks");
    }
  };

  return (
    <div className="fade-in" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      
      {/* Tracker Header */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        gap: "20px", 
        flexWrap: "wrap",
        borderBottom: "1px solid var(--lush-gray-medium)",
        paddingBottom: "16px"
      }}>
        <div>
          <h2 style={{ fontSize: "1.5rem" }}>Lộ Trình Đào Tạo 7 Ngày Thực Chiến</h2>
          <p style={{ color: "#666", fontSize: "0.9rem" }}>
            Theo dõi tiến độ huấn luyện tại cửa hàng của bạn. Đánh dấu tích vào các phần việc bạn đã hoàn thành mỗi ngày.
          </p>
        </div>
        
        {/* Progress Display */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", background: "#fcfcfc", padding: "12px 20px", border: "2px solid #000" }}>
          <div style={{ textAlign: "right" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: "700", textTransform: "uppercase", color: "#666" }}>Tiến Trình Học</span>
            <div style={{ fontSize: "1.5rem", fontWeight: "800" }}>{progress}% Hoàn Thành</div>
          </div>
          <button className="lush-btn lush-btn-secondary" onClick={handleResetChecklist} style={{ padding: "6px 12px", fontSize: "0.75rem" }}>
            Đặt Lại
          </button>
        </div>
      </div>

      {/* Grid of Days */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {daysData.map((dayData) => {
          const dayTasks = dayData.tasks;
          const completedDayCount = dayTasks.filter(t => completedTasks[t.id]).length;
          const isDayCompleted = completedDayCount === dayTasks.length;

          return (
            <div 
              key={dayData.day} 
              className="lush-card" 
              style={{ 
                padding: "24px", 
                borderColor: isDayCompleted ? "#3d6b47" : "#000000",
                background: isDayCompleted ? "#eaf0e9" : "#ffffff",
                color: "#000000"
              }}
            >
              {/* Day title & description */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: "12px", flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ 
                    fontSize: "1.3rem", 
                    color: isDayCompleted ? "#3d6b47" : "#000000" 
                  }}>
                    {dayData.title}
                  </h3>
                  <span style={{ fontSize: "0.85rem", color: "#555", display: "block", marginTop: "4px" }}>
                    <strong>{dayData.goal.split(":")[0]}:</strong> {dayData.goal.split(":")[1]}
                  </span>
                </div>

                <div className={`lush-tag ${isDayCompleted ? "green" : "dark"}`}>
                  {isDayCompleted ? "✓ HOÀN THÀNH" : `${completedDayCount}/${dayTasks.length} Xong`}
                </div>
              </div>

              {/* Tasks Checklist */}
              <div style={{ 
                marginTop: "16px", 
                display: "grid", 
                gridTemplateColumns: "1fr", 
                gap: "10px",
                borderTop: "1px dashed #e5e5e5",
                paddingTop: "16px"
              }}>
                {dayTasks.map((task) => {
                  const isChecked = !!completedTasks[task.id];
                  return (
                    <label 
                      key={task.id}
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "12px",
                        cursor: "pointer",
                        fontSize: "0.9rem",
                        padding: "4px 0",
                        textDecoration: isChecked ? "line-through" : "none",
                        color: isChecked ? "#888" : "#000000"
                      }}
                    >
                      <input 
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleCheckboxChange(task.id)}
                        style={{
                          marginTop: "4px",
                          width: "16px",
                          height: "16px",
                          accentColor: "#000000"
                        }}
                      />
                      <span>{task.text}</span>
                    </label>
                  );
                })}
              </div>

            </div>
          );
        })}
      </div>

      {/* Graduation criteria box */}
      <div style={{ 
        border: "3px solid #000", 
        background: "#000", 
        color: "#fff", 
        padding: "24px",
        marginTop: "16px"
      }}>
        <h3 style={{ color: "var(--lush-gold)", fontSize: "1.2rem", marginBottom: "12px" }}>
          🏆 TIÊU CHUẨN TỐT NGHIỆP HUẤN LUYỆN
        </h3>
        <ul style={{ paddingLeft: "20px", fontSize: "0.85rem", display: "flex", flexDirection: "column", gap: "6px" }}>
          <li>✓ Giải thích trôi chảy triết lý LUSH bằng từ ngữ của bản thân, không phụ thuộc tài liệu.</li>
          <li>✓ Thực hiện kiểm tra, phân loại da đầu chính xác bằng máy soi, đưa ra chẩn đoán chính xác.</li>
          <li>✓ Thuộc và phối được routine 3 sản phẩm LUSH tối ưu cho từng loại da đầu (dầu, gàu, khô, nhạy cảm, rụng tóc).</li>
          <li>✓ Thực hành thuần thục 9 bước bán hàng tiêu chuẩn, biết tư vấn link-sell tại quầy thanh toán.</li>
          <li>✓ Vận hành mở/đóng cửa hàng, bày biện tester sạch sẽ ngăn nắp chuẩn phong thái LUSH.</li>
        </ul>
      </div>

    </div>
  );
}
