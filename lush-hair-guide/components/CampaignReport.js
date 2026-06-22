"use client";
import { useState, useEffect } from "react";

export default function CampaignReport() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Form fields
  const [staffName, setStaffName] = useState("");
  const [store, setStore] = useState("Saigon Centre");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [scansCount, setScansCount] = useState("");
  const [routinesCount, setRoutinesCount] = useState("");
  const [bestSeller, setBestSeller] = useState("Fairly Traded Honey");
  const [feedback, setFeedback] = useState("");

  const storesList = ["Saigon Centre", "Hanoi Centre", "Cửa hàng khác"];
  const productsList = [
    "Fairly Traded Honey",
    "Rehab",
    "Big",
    "Soak and Float",
    "New Shampoo Bar",
    "Roots",
    "SuperBalm",
    "American Cream",
    "Candy Rain",
    "Veganese",
    "Renee's Shea Soufflé",
    "Superhero Milk"
  ];

  // Fetch reports on mount
  const fetchReports = async () => {
    try {
      const res = await fetch("/api/reports");
      if (res.ok) {
        const data = await res.json();
        setReports(data.reverse()); // Show newest first
      }
    } catch (err) {
      console.error("Error fetching reports:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!staffName.trim()) {
      alert("Vui lòng điền tên nhân viên báo cáo!");
      return;
    }

    setSubmitting(true);
    const newReport = {
      staffName,
      store,
      date,
      scansCount: parseInt(scansCount, 10) || 0,
      routinesCount: parseInt(routinesCount, 10) || 0,
      bestSeller,
      feedback
    };

    try {
      const res = await fetch("/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReport)
      });

      if (res.ok) {
        // Clear fields
        setStaffName("");
        setScansCount("");
        setRoutinesCount("");
        setFeedback("");
        // Reload list
        await fetchReports();
        alert("Gửi báo cáo kết quả thành công!");
      } else {
        alert("Lỗi khi gửi báo cáo, vui lòng thử lại!");
      }
    } catch (err) {
      console.error(err);
      alert("Lỗi kết nối server!");
    } finally {
      setSubmitting(false);
    }
  };

  // Aggregated KPIs
  const totalScans = reports.reduce((sum, r) => sum + (r.scansCount || 0), 0);
  const totalRoutines = reports.reduce((sum, r) => sum + (r.routinesCount || 0), 0);
  
  // Best seller product in the campaign based on reports
  const getCampaignBestSeller = () => {
    if (reports.length === 0) return "N/A";
    const counts = {};
    reports.forEach(r => {
      if (r.bestSeller && r.bestSeller !== "N/A") {
        counts[r.bestSeller] = (counts[r.bestSeller] || 0) + 1;
      }
    });
    let maxProd = "N/A";
    let maxVal = 0;
    Object.entries(counts).forEach(([prod, val]) => {
      if (val > maxVal) {
        maxVal = val;
        maxProd = prod;
      }
    });
    return maxProd;
  };

  return (
    <div className="fade-in" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      
      {/* Header */}
      <div style={{ borderBottom: "1px solid var(--lush-gray-medium)", paddingBottom: "12px" }}>
        <h2 style={{ fontSize: "1.5rem" }}>Báo Cáo Kết Quả Chiến Dịch Soi Da</h2>
        <p style={{ color: "#666", fontSize: "0.9rem" }}>
          Nhập kết quả hàng ngày và theo dõi tổng thể thành tích hoạt động của chiến dịch "The Root Rehab Time" tại các cửa hàng.
        </p>
      </div>

      {/* KPI Dashboard */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
        
        {/* KPI 1: Scans */}
        <div className="lush-card" style={{ display: "flex", flexDirection: "column", gap: "8px", background: "#fcfcfc" }}>
          <span className="sub-title" style={{ color: "#666" }}>Tổng số ca soi da đầu</span>
          <div style={{ fontSize: "2.2rem", fontWeight: "800" }}>{totalScans}</div>
          <span style={{ fontSize: "0.75rem", color: "var(--lush-green)", background: "var(--lush-green-light)", padding: "4px 8px", alignSelf: "flex-start", fontWeight: "600" }}>
            👥 Khách hàng trải nghiệm
          </span>
        </div>

        {/* KPI 2: Routines */}
        <div className="lush-card" style={{ display: "flex", flexDirection: "column", gap: "8px", background: "#fcfcfc" }}>
          <span className="sub-title" style={{ color: "#666" }}>Tổng số Routine đã tư vấn</span>
          <div style={{ fontSize: "2.2rem", fontWeight: "800" }}>{totalRoutines}</div>
          <span style={{ fontSize: "0.75rem", color: "#8a6a00", background: "var(--lush-gold-light)", padding: "4px 8px", alignSelf: "flex-start", fontWeight: "600" }}>
            🌿 Giải pháp được thiết kế
          </span>
        </div>

        {/* KPI 3: Bestseller */}
        <div className="lush-card" style={{ display: "flex", flexDirection: "column", gap: "8px", background: "#fcfcfc" }}>
          <span className="sub-title" style={{ color: "#666" }}>Sản phẩm bán chạy nhất chiến dịch</span>
          <div style={{ fontSize: "1.4rem", fontWeight: "800", textTransform: "uppercase", marginTop: "12px", minHeight: "44px" }}>
            {getCampaignBestSeller()}
          </div>
          <span className="lush-tag dark" style={{ alignSelf: "flex-start", fontSize: "0.65rem" }}>
            🔥 Bestseller hôm nay
          </span>
        </div>

      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "32px", alignItems: "start", marginTop: "16px" }}>
        
        {/* Left Column: Input Form */}
        <form onSubmit={handleSubmit} className="lush-card" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "1.1rem", textTransform: "uppercase", borderBottom: "2px solid #000", paddingBottom: "8px" }}>
            📝 Điền Báo Cáo Ca Mới
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase" }}>Tên nhân viên báo cáo *</label>
            <input 
              type="text" 
              value={staffName} 
              onChange={(e) => setStaffName(e.target.value)} 
              placeholder="Nhập tên của bạn..."
              required
              style={{ padding: "10px", border: "2px solid #000", fontSize: "0.9rem", outline: "none" }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase" }}>Cửa hàng *</label>
              <select 
                value={store} 
                onChange={(e) => setStore(e.target.value)}
                style={{ padding: "10px", border: "2px solid #000", fontSize: "0.9rem", cursor: "pointer", outline: "none" }}
              >
                {storesList.map(st => <option key={st} value={st}>{st}</option>)}
              </select>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase" }}>Ngày báo cáo *</label>
              <input 
                type="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
                required
                style={{ padding: "10px", border: "2px solid #000", fontSize: "0.9rem", outline: "none" }}
              />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase" }}>Số ca soi da đầu</label>
              <input 
                type="number" 
                min="0"
                value={scansCount} 
                onChange={(e) => setScansCount(e.target.value)} 
                placeholder="Ví dụ: 12"
                style={{ padding: "10px", border: "2px solid #000", fontSize: "0.9rem", outline: "none" }}
              />
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase" }}>Số routine tư vấn</label>
              <input 
                type="number" 
                min="0"
                value={routinesCount} 
                onChange={(e) => setRoutinesCount(e.target.value)} 
                placeholder="Ví dụ: 8"
                style={{ padding: "10px", border: "2px solid #000", fontSize: "0.9rem", outline: "none" }}
              />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase" }}>Sản phẩm bán chạy nhất ca</label>
            <select 
              value={bestSeller} 
              onChange={(e) => setBestSeller(e.target.value)}
              style={{ padding: "10px", border: "2px solid #000", fontSize: "0.9rem", cursor: "pointer", outline: "none" }}
            >
              {productsList.map(prod => <option key={prod} value={prod}>{prod}</option>)}
            </select>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase" }}>Ý kiến khách hàng & Ghi chú</label>
            <textarea 
              value={feedback} 
              onChange={(e) => setFeedback(e.target.value)} 
              placeholder="Khách phản hồi về da đầu, hương thơm sản phẩm..."
              rows="3"
              style={{ padding: "10px", border: "2px solid #000", fontSize: "0.9rem", outline: "none", resize: "vertical" }}
            />
          </div>

          <button 
            type="submit" 
            className="lush-btn" 
            disabled={submitting} 
            style={{ width: "100%", marginTop: "8px" }}
          >
            {submitting ? "Đang gửi báo cáo..." : "Gửi Báo Cáo Kết Quả"}
          </button>
        </form>

        {/* Right Column: History List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "1.1rem", textTransform: "uppercase", paddingBottom: "4px" }}>
            📜 Lịch Sử Gửi Báo Cáo
          </h3>
          
          {loading ? (
            <div style={{ padding: "40px", textAlign: "center", color: "#888" }}>
              Đang tải danh sách báo cáo...
            </div>
          ) : reports.length > 0 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxHeight: "650px", overflowY: "auto", paddingRight: "8px" }}>
              {reports.map((report) => (
                <div 
                  key={report.id}
                  className="lush-card"
                  style={{
                    padding: "18px",
                    borderWidth: "1.5px"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", flexWrap: "wrap", gap: "8px" }}>
                    <div>
                      <span className="lush-tag dark" style={{ fontSize: "0.65rem", padding: "2px 6px" }}>{report.store}</span>
                      <h4 style={{ fontSize: "1.1rem", marginTop: "4px" }}>{report.staffName}</h4>
                    </div>
                    <span style={{ fontSize: "0.8rem", color: "#666", fontWeight: "600" }}>{report.date}</span>
                  </div>

                  <div style={{ 
                    display: "grid", 
                    gridTemplateColumns: "1fr 1fr", 
                    gap: "12px", 
                    margin: "12px 0 8px",
                    padding: "10px", 
                    background: "var(--lush-gray-light)",
                    fontSize: "0.85rem"
                  }}>
                    <div>👥 <strong>Số ca soi:</strong> {report.scansCount} ca</div>
                    <div>🌿 <strong>Số routine:</strong> {report.routinesCount} bộ</div>
                    <div style={{ gridColumn: "1 / -1" }}>
                      🔥 <strong>Bán chạy nhất:</strong> {report.bestSeller}
                    </div>
                  </div>

                  {report.feedback && (
                    <p style={{ fontSize: "0.85rem", color: "#444", borderTop: "1px dashed #e5e5e5", paddingTop: "8px", marginTop: "8px", fontStyle: "italic" }}>
                      💬 "{report.feedback}"
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div style={{
              border: "2px dashed var(--lush-gray-medium)",
              padding: "48px 24px",
              textAlign: "center",
              color: "#888"
            }}>
              Chưa có báo cáo nào được gửi. Hãy là người đầu tiên nhập báo cáo!
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
