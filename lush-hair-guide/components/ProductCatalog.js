"use client";
import { useState } from "react";

export default function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [viewMode, setViewMode] = useState("catalog"); // "catalog" or "lookup"

  const lookupTable = [
    {
      condition: "Da Đầu Dầu & Bết Dính",
      icon: "💧",
      routine: "Roots / Marilyn (Ủ tóc) → Rehab / Big / Wasabi / Seanik / New / Ginger (Dầu gội) → Veganese / Happy Happy / American Cream (Dầu xả)",
      usage: "1. Thoa Roots lên da đầu khô hoặc Marilyn lên tóc trước khi gội 15-20 phút.\n2. Gội sạch bằng các dòng kiềm dầu/tạo phồng như Rehab, Big, Wasabi Shan Kui, Ginger hoặc bánh gội Seanik, New.\n3. Thoa dầu xả Veganese, Happy Happy Joy Joy hoặc American Cream vào ngọn tóc và xả sạch.",
      allergyWarning: "Roots chứa lượng bạc hà đậm đặc tạo cảm giác mát lạnh mạnh. Hạn chế dùng khi da đầu đang trầy xước.",
      patchTest: "Thoa một lớp mỏng Roots sau tai khách trong 10 phút để kiểm tra độ kích ứng do bạc hà mát lạnh."
    },
    {
      condition: "Da Đầu Khô & Thiếu Ẩm",
      icon: "🍂",
      routine: "SuperBalm / Jasmine and Henna (Dưỡng/Ủ) → Fairly Traded Honey / Banana Co-wash / Coconut Rice Cake / Super Milk Shampoo / Soak and Float (Dầu gội) → Candy Rain / Glory (Dầu xả)",
      usage: "1. Chấm sáp SuperBalm lên các điểm khô ráp hoặc ủ Jasmine and Henna 20 phút trước gội.\n2. Tạo bọt thật kỹ với các dầu gội ẩm như Fairly Traded Honey, Banana Co-wash, Coconut Rice Cake, Super Milk hoặc Soak & Float.\n3. Thoa dầu xả Candy Rain hoặc Glory lên thân & đuôi tóc, xả sạch sau 3-5 phút.",
      allergyWarning: "Candy Rain cực kỳ đậm đặc dưỡng chất béo, nếu thoa quá nhiều sát chân tóc có thể gây nặng đầu đối với tóc mỏng.",
      patchTest: "Thấm dầu xả Candy Rain pha loãng lên cổ tay khách trong 15 phút trước khi sử dụng."
    },
    {
      condition: "Da Đầu Gàu & Bong Tróc",
      icon: "❄️",
      routine: "SuperBalm (Sáp làm mềm gàu) → Soak and Float (Bánh gội) → Veganese (Dầu xả mỏng nhẹ)",
      usage: "1. Bôi sáp SuperBalm lên vùng vảy gàu dày 20 phút trước gội để làm mềm vảy sừng sương.\n2. Tạo bọt bánh gội Soak & Float massage nhẹ nhàng da đầu để kháng nấm.\n3. Xả mượt đuôi tóc bằng dầu xả mỏng nhẹ Veganese.",
      allergyWarning: "Soak and Float chứa dầu bách xù Cade oil có mùi khói nồng đặc trưng, cần báo trước với khách nhạy cảm mùi hương.",
      patchTest: "Lướt nhẹ bánh gội ẩm tạo bọt lên cổ tay khách trong 10 phút kiểm tra kích ứng Cade oil."
    },
    {
      condition: "Da Đầu Nhạy Cảm & Kích Ứng",
      icon: "🚨",
      routine: "SuperBalm (Làm dịu) → Fairly Traded Honey (Dầu gội dưỡng dịu)",
      usage: "1. Chấm sáp dưỡng SuperBalm thật mỏng lên các điểm da đầu đỏ rát để làm dịu mạch máu.\n2. Gội rất nhẹ nhàng bằng Fairly Traded Honey, tạo bọt sẵn trên tay trước khi áp lên da đầu.",
      allergyWarning: "Hạn chế tối đa dùng các dầu gội chứa nhiều hạt muối tẩy tế bào chết vật lý (như Big) hoặc tinh dầu nóng (quế, đinh hương).",
      patchTest: "Bắt buộc thử sáp SuperBalm sau tai khách trong 15 phút để đảm bảo da đầu yếu không phản ứng với sáp candelilla/dừa."
    },
    {
      condition: "Da Đầu Yếu & Rụng Tóc Nhiều",
      icon: "📉",
      routine: "Roots (Ủ kích thích) → New Shampoo Bar (Bánh gội mọc tóc) → Super Milk (Xịt dưỡng bảo vệ)",
      usage: "1. Ủ mặt nạ Roots 15 phút trước gội, massage sâu chân tóc để tăng tuần hoàn máu.\n2. Tạo bọt bánh gội New gội sạch da đầu để quế đinh hương kích hoạt nang.\n3. Lau ráo tóc, xịt sữa dưỡng Super Milk lên thân tóc ẩm rồi sấy gió mát.",
      allergyWarning: "Bánh gội New chứa tinh dầu quế & đinh hương tự nhiên có tính làm ấm nóng da đầu, gây châm chích nhẹ và đỏ ửng tạm thời.",
      patchTest: "Bắt buộc patch test bọt của New Shampoo Bar sau tai khách 10 phút. Nếu đỏ ngứa dữ dội kéo dài thì đổi sang Rehab."
    },
    {
      condition: "Da Đầu Thường / Cân Bằng",
      icon: "🌿",
      routine: "Roots / Jasmine and Henna (Ủ tóc) → Rehab / Big / Daddy-O / New Shampoo Bar (Dầu gội) → Veganese / Valkyrie / Super Milk / American Cream (Dầu xả)",
      usage: "1. Ủ Roots hoặc Jasmine and Henna 15 phút trước gội để củng cố sức khỏe chân tóc.\n2. Gội sạch bằng Rehab, Big, Daddy-O hoặc bánh gội New.\n3. Xả mượt bằng Veganese, Valkyrie, Super Milk hoặc American Cream.",
      allergyWarning: "Hầu như không có cảnh báo đặc biệt, sản phẩm rất dịu nhẹ lành tính.",
      patchTest: "Không bắt buộc patch test, trừ phi khách có tiền sử dị ứng với phấn hoa/mật ong nguyên chất."
    },
    {
      condition: "Chất Tóc Khô & Hư Tổn Nặng",
      icon: "🌾",
      routine: "Tofu / Super Milk Shampoo / Fairly Traded Honey / Jason & Argan / Honey I Washed / Coconut Rice (Dầu gội) → Power / Valkyrie / Retread (Dầu xả) → Super Milk (Xịt dưỡng)",
      usage: "1. Gội bằng kem gội Tofu, Super Milk Shampoo, Fairly Traded Honey hoặc các bánh gội dưỡng như Jason And The Argan Oil, Honey I Washed My Hair, Coconut Rice Cake.\n2. Thoa dầu xả Power, Valkyrie hoặc Retread từ thân đến ngọn tóc, vuốt nhẹ gỡ rối, ủ 3-5 phút rồi xả sạch.\n3. Xịt sữa dưỡng Super Milk khi tóc còn ẩm rồi sấy mát để bảo vệ biểu bì tóc.",
      allergyWarning: "Tofu và Valkyrie chứa lượng protein hữu cơ dồi dào, cần lưu ý đối với khách hàng nhạy cảm với các thành phần từ đậu nành/lúa mì.",
      patchTest: "Thoa một lớp mỏng Tofu hoặc Valkyrie sau tai khách trong 10 phút trước khi sử dụng."
    }
  ];

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
      name: "Super Milk",
      category: "leavein",
      type: "Xịt Dưỡng Phục Hồi (Leave-in)",
      ingredients: "Sữa hạnh nhân + dầu olive + bơ quả bơ",
      desc: "Xịt dưỡng mỏng nhẹ giúp cấp ẩm tức thì, bảo vệ biểu bì tóc khỏi nhiệt độ máy sấy và tác hại tia UV ngoại cảnh.",
      tip: "Dành cho mọi loại tóc, xịt bảo vệ tóc hàng ngày sau khi gội đầu.",
      usage: "Xịt đều lên tóc ẩm hoặc tóc khô từ khoảng cách 20cm, chải nhẹ để dưỡng chất thấm đều, không cần xả lại."
    },
    {
      name: "Balance",
      category: "leavein",
      type: "Kem Dưỡng Tóc (Leave-in)",
      ingredients: "Bơ bơ + dầu olive + dầu jojoba + sữa yến mạch",
      desc: "Kem dưỡng tóc leave-in siêu giàu dưỡng chất giúp định hình lọn tóc xoăn, khóa ẩm, bảo vệ sợi tóc khỏi gãy rụng và nuôi dưỡng tóc xốp hiệu quả.",
      tip: "Phù hợp cho tóc xốp thấp (Tóc Nổi), tóc xoăn tự nhiên, tóc khô sơ thiếu nước cần khóa ẩm.",
      usage: "Thoa một lượng nhỏ lên tóc ẩm sau khi gội hoặc tóc khô để cấp ẩm, định hình nếp tóc và tạo độ bóng mượt."
    },
    {
      name: "Glory",
      category: "conditioner",
      type: "Dầu Xả Phục Hồi Chuyên Sâu",
      ingredients: "Gel đậu bắp tươi + kem dừa + dầu olive + dầu thầu dầu",
      desc: "Dầu xả siêu đậm đặc giúp gỡ rối tức thì, cung cấp độ ẩm tối ưu và dưỡng chất béo để bảo vệ và phục hồi các mái tóc hư tổn nặng, khô xơ hoặc tóc xoăn.",
      tip: "Dành riêng cho tóc xốp thấp (Tóc Nổi) cần dưỡng chất sâu, hoặc tóc khô, xơ rối, tóc xoăn tự nhiên.",
      usage: "Sau khi gội đầu, thoa đều dầu xả lên thân và ngọn tóc, vuốt nhẹ để gỡ rối, ủ từ 3-5 phút rồi xả sạch."
    },
    {
      name: "Happy Happy Joy Joy",
      category: "conditioner",
      type: "Dầu Xả Nước Hoa Mỏng Nhẹ",
      ingredients: "Nước hoa hồng + nước hoa cam + sữa hạnh nhân + dầu jojoba",
      desc: "Dầu xả hương nước hoa quý phái Neroli và bưởi chùm, cung cấp độ ẩm mỏng nhẹ, mang lại mái tóc bóng mượt bồng bềnh mà không gây bết nặng tóc.",
      tip: "Lý tưởng cho tóc xốp trung bình (Tóc Lơ Lửng) và mọi loại tóc cần độ phồng tự nhiên, lưu hương dài lâu.",
      usage: "Thoa đều lên tóc sau khi gội, tập trung vào ngọn tóc, lưu lại trên tóc 1-2 phút rồi xả sạch."
    },
    {
      name: "Power",
      category: "conditioner",
      type: "Dầu Xả Phục Hồi Protein",
      ingredients: "Khoai lang nghiền + si rô phong + protein lúa mì thủy phân",
      desc: "Dầu xả giàu protein giúp tái cấu trúc sợi tóc hư tổn, tăng cường độ đàn hồi, ngăn ngừa chẻ ngọn và phục hồi sức sống cho mái tóc yếu do tẩy nhuộm.",
      tip: "Dành cho tóc xốp cao (Tóc Chìm) cần bổ sung protein và khóa ẩm sâu, tóc bị tổn hại bởi hóa chất.",
      usage: "Thoa đều từ thân đến ngọn tóc ẩm sau khi gội, massage nhẹ để protein hấp thụ, ủ khoảng 3 phút rồi xả sạch."
    },
    {
      name: "Tofu",
      category: "shampoo",
      type: "Dầu Gội Kem Phục Hồi Protein",
      ingredients: "Đậu hũ non hữu cơ (20%) + si rô agave + giấm gạo + chiết xuất nước nho",
      desc: "Dầu gội dạng kem không chứa SLS, cung cấp hàm lượng protein thực vật cực cao từ đậu hũ để tái thiết cấu trúc lõi tóc hư tổn, mang lại vẻ bóng mượt và chắc khỏe.",
      tip: "Đặc trị cho tóc xốp cao (Tóc Chìm), tóc tẩy, nhuộm, hư tổn nặng cần phục hồi cấu trúc.",
      usage: "Lấy một lượng nhỏ xoa đều với nước để tạo bọt mịn, massage nhẹ nhàng lên da đầu và tóc ướt rồi xả sạch. Lưu ý đậy kín nắp sau dùng."
    },
    {
      name: "Super Milk Shampoo",
      category: "shampoo",
      type: "Dầu Gội Dưỡng Ẩm & Phục Hồi",
      ingredients: "Đậu hũ non + sữa yến mạch + sữa hạnh nhân + giấm gạo",
      desc: "Dầu gội dịu nhẹ giàu protein và độ ẩm, kế thừa mùi hương thơm ngọt ngào của Super Milk xịt dưỡng, giúp làm sạch nhẹ nhàng và bảo vệ tóc hư tổn.",
      tip: "Dành cho tóc xốp cao (Tóc Chìm), tóc hư tổn do nhiệt và hóa chất cần làm sạch nhẹ nhàng.",
      usage: "Thoa đều lên tóc ướt, tạo bọt kỹ ở chân tóc và xoa nhẹ phần ngọn tóc, sau đó xả sạch."
    },
    {
      name: "Valkyrie",
      category: "conditioner",
      type: "Dầu Xả Priming Phục Hồi Protein",
      ingredients: "Aquafaba (nước đậu gà) + gluten lúa mì thủy phân + dầu olive + tinh chất hoa hồng",
      desc: "Dầu xả phục hồi chuyên sâu chứa Aquafaba và Protein lúa mì giúp làm đầy các lỗ hổng trên biểu bì tóc, khóa ẩm và bảo vệ tóc hư tổn tối đa.",
      tip: "Dành cho tóc xốp cao (Tóc Chìm), tóc đã qua xử lý hóa chất nhiều lần, giòn dễ gãy rụng.",
      usage: "Thoa một lượng vừa đủ lên ngọn tóc ướt sau khi gội sạch, massage nhẹ để dưỡng chất bao bọc sợi tóc rồi xả sạch."
    },
    {
      name: "Wasabi Shan Kui",
      category: "shampoo",
      type: "Dầu Gội Kích Thích Mọc Tóc & Kiềm Dầu",
      ingredients: "Wasabi tươi + củ cải ngựa + muối biển + tinh thể bạc hà + caffeine",
      desc: "Dầu gội kích thích mọc tóc bán chạy nhất (best-seller) của LUSH. Sự kết hợp giữa wasabi, củ cải ngựa và tinh chất caffeine giúp đánh thức nang tóc, thúc đẩy tuần hoàn da đầu, cùng với muối biển kiềm dầu hiệu quả và tạo độ phồng bồng bềnh.",
      tip: "Lựa chọn số 1 cho da đầu đổ dầu nhiều, bết tóc nhanh, tóc mỏng thưa, yếu rụng cần kích thích mọc.",
      usage: "Lấy một lượng nhỏ xoa đều để tạo bọt, massage kỹ lên da đầu để cảm nhận cảm giác mát lạnh sảng khoái của bạc hà và wasabi, sau đó xả sạch."
    },
    {
      name: "Marilyn",
      category: "treatment",
      type: "Mặt Nạ Ủ Tóc Trước Gội",
      ingredients: "Dịch truyền hoa cúc la mã + chanh tươi + dầu olive + nghệ tây",
      desc: "Mặt nạ ủ tóc trước gội giúp dưỡng tóc mềm mượt, tăng độ bóng khỏe tự nhiên, đặc biệt làm sáng màu tóc tông sáng và phục hồi lớp biểu bì.",
      tip: "Dành cho tóc thường đến tóc dầu, tóc xỉn màu cần tăng độ bóng tự nhiên.",
      usage: "Thoa đều lên tóc khô trước khi gội 20 phút, tập trung từ thân đến ngọn tóc, sau đó gội sạch."
    },
    {
      name: "H'Suan Wen Hua",
      category: "treatment",
      type: "Mặt Nạ Ủ Tóc Phục Hồi Chuyên Sâu",
      ingredients: "Trứng tươi hữu cơ + chuối tươi + quả bơ + dầu olive + giấm balsamic",
      desc: "Mặt nạ ủ siêu dinh dưỡng giàu protein tự nhiên giúp sửa chữa cấu trúc sợi tóc khô xơ hư tổn do hóa chất, phục hồi độ đàn hồi và độ bóng khỏe vượt trội.",
      tip: "Đặc trị cho tóc tẩy, nhuộm, hư tổn nặng và chẻ ngọn.",
      usage: "Thoa đều lên tóc khô trước khi gội 20 phút từ gốc đến ngọn, massage nhẹ nhàng rồi gội sạch."
    },
    {
      name: "Ginger Shampoo",
      category: "shampoo",
      type: "Dầu Gội Làm Sạch Gàu",
      ingredients: "Nước cất gừng tươi + dầu jojoba + nước chanh tươi",
      desc: "Làm sạch da đầu, loại bỏ gàu ngứa, kích thích nang tóc hoạt động khỏe mạnh từ tinh chất gừng làm ấm da đầu.",
      tip: "Dành cho da đầu gàu, ngứa ngáy và chân tóc yếu rụng.",
      usage: "Lấy lượng vừa đủ gội nhẹ nhàng da đầu, massage 2-3 phút để hoạt chất thẩm thấu rồi xả sạch."
    },
    {
      name: "Banana Co-wash",
      category: "shampoo",
      type: "Kem Gội Cấp Ẩm (Co-wash)",
      ingredients: "Chuối tươi chín + sữa hạnh nhân + chất làm sạch dịu nhẹ từ dừa",
      desc: "Sản phẩm gội xả 2-trong-1 (Co-wash) nhẹ nhàng làm sạch mà không làm mất đi lớp màng ẩm tự nhiên, cực kỳ giàu độ dưỡng từ chuối tươi giúp làm mềm mượt da đầu khô ngứa.",
      tip: "Lý tưởng cho da đầu khô căng, tóc khô xơ khó chải.",
      usage: "Làm ướt tóc, xoa nhẹ bánh co-wash lên da đầu và tóc để tạo kem dưỡng gội, massage kỹ rồi xả sạch."
    },
    {
      name: "Daddy-O",
      category: "shampoo",
      type: "Dầu Gội Làm Sáng Tóc & Khử Vàng",
      ingredients: "Nước chanh tươi + dịch truyền chanh + chiết xuất rong biển răng cưa + dầu dừa",
      desc: "Dầu gội màu tím đặc biệt của LUSH giúp khử vàng cho tóc tẩy nhuộm sáng màu, đồng thời nuôi dưỡng sợi tóc tơi phồng lấp lánh và lưu hương violet quyến rũ.",
      tip: "Dành cho tóc tẩy, nhuộm sáng, tóc bạc hoặc tóc xỉn màu cần làm bóng sáng.",
      usage: "Gội tạo bọt nhẹ nhàng da đầu và thân tóc, xả sạch nhanh."
    },
    {
      name: "Retread",
      category: "conditioner",
      type: "Dầu Xả Phục Hồi Chuyên Sâu",
      ingredients: "Sữa đậu nành + dầu hạt dưa lưới + sữa chua + dầu jojoba",
      desc: "Dầu xả phục hồi cực kỳ đậm đặc giúp bổ sung chất béo và dưỡng ẩm sâu cho mái tóc khô xơ chẻ ngọn và giòn dễ đứt gãy.",
      tip: "Dành cho tóc tẩy nhuộm, tóc hư tổn nặng cần hồi phục độ đàn hồi.",
      usage: "Thoa lên thân và ngọn tóc ẩm sau gội, để 3-5 phút xả sạch."
    },
    {
      name: "Sea Spray",
      category: "leavein",
      type: "Xịt Tạo Phồng & Tạo Kiểu",
      ingredients: "Muối biển thô + tinh dầu bưởi chùm + tinh dầu cam",
      desc: "Xịt dưỡng tạo kiểu muối biển mang lại độ phồng tự nhiên như vừa đi biển, giúp giữ nếp nhẹ nhàng và tạo hiệu ứng tóc tơi phồng bóng mượt.",
      tip: "Dành cho tóc xẹp, tóc mỏng cần tạo phồng và giữ nếp tự nhiên.",
      usage: "Xịt đều lên tóc ẩm hoặc khô, dùng tay bóp nhẹ để tạo sóng tóc tự nhiên và sấy tạo phồng."
    },
    {
      name: "Infra Wig",
      category: "leavein",
      type: "Gel Tạo Kiểu Cân Bằng",
      ingredients: "Gel nha đam + sáp candelilla + dầu thầu dầu",
      desc: "Gel tạo kiểu tóc mềm mại tự nhiên, giữ nếp vừa phải và tăng độ bóng mượt cho sợi tóc mà không làm khô cứng tóc, bảo vệ tóc khi tạo kiểu bằng nhiệt.",
      tip: "Thích hợp cho mọi loại tóc cần giữ nếp nhẹ, đặc biệt là tóc tẩy nhuộm khô xơ.",
      usage: "Lấy lượng nhỏ vuốt lên tóc ẩm hoặc tóc khô trước khi sấy hoặc tạo kiểu."
    },
    {
      name: "Sticky Dates",
      category: "leavein",
      type: "Lotion Dưỡng Tóc (Leave-in)",
      ingredients: "Quả chà là hữu cơ + dầu argan + bơ hạt mỡ",
      desc: "Lotion siêu dưỡng ẩm mang hương thơm ngọt ngào của quả chà là và caramen, khóa ẩm tức thì cho tóc khô xơ và giữ hương quyến rũ.",
      tip: "Dành cho tóc khô căng, xơ xác cần cấp ẩm và làm mềm mượt.",
      usage: "Thoa một lượng nhỏ lên đuôi tóc ẩm hoặc khô, không cần xả lại."
    },
    {
      name: "Dirty",
      category: "leavein",
      type: "Sáp Tạo Kiểu Tóc (Styling Cream)",
      ingredients: "Sáp candelilla + bơ ca cao + dầu dừa + tinh dầu bạc hà",
      desc: "Kem sáp tạo kiểu giữ nếp trung bình giúp tạo hình tóc tự nhiên, giữ độ ẩm cho tóc mà không bết dính.",
      tip: "Dành cho mọi loại tóc cần tạo kiểu giữ nếp nhẹ và tự nhiên.",
      usage: "Xoa một ít sáp vào lòng bàn tay rồi vuốt tạo kiểu trên tóc."
    },
    {
      name: "Seanik",
      category: "shampoo",
      type: "Dầu Gội Bánh (Shampoo Bar)",
      ingredients: "Rong biển Nori + muối biển + tinh dầu chanh + tinh dầu hoa nhài",
      desc: "Dầu gội bánh chứa rong biển và muối biển giúp làm sạch sâu, kiềm dầu hiệu quả, tạo độ phồng tối đa cho chân tóc và làm bóng mượt sợi tóc.",
      tip: "Dành cho da đầu dầu, tóc xẹp lép thiếu độ phồng.",
      usage: "Lướt bánh gội ẩm lên tóc ướt vài lần để tạo bọt, massage nhẹ nhàng da đầu rồi xả sạch."
    },
    {
      name: "Jason And The Argan Oil",
      category: "shampoo",
      type: "Dầu Gội Bánh (Shampoo Bar)",
      ingredients: "Dầu argan + tinh dầu hoa hồng tinh khiết + glycerin",
      desc: "Bánh gội dưỡng ẩm và phục hồi chuyên sâu chứa dầu argan và tinh chất hoa hồng, giúp tái tạo sợi tóc hư tổn, tăng cường độ bóng khỏe và đàn hồi.",
      tip: "Dành cho tóc tẩy nhuộm, tóc khô xơ hư tổn cần phục hồi độ bóng mượt.",
      usage: "Xoa bánh gội ẩm lên tóc để tạo bọt, massage nhẹ nhàng da đầu và thân tóc, xả sạch."
    },
    {
      name: "Honey I Washed My Hair",
      category: "shampoo",
      type: "Dầu Gội Bánh (Shampoo Bar)",
      ingredients: "Mật ong Fair Trade + tinh dầu cam ngọt + tinh dầu cam bergamot",
      desc: "Bánh gội dưỡng ẩm ngọt ngào chứa mật ong nguyên chất giúp làm mềm mượt tóc, dưỡng da đầu ẩm mịn và lưu lại hương thơm mật ong caramen ấm áp.",
      tip: "Dành cho mọi loại tóc, đặc biệt là tóc khô xơ cần bổ sung độ ẩm nhẹ nhàng.",
      usage: "Lướt bánh gội ẩm lên tóc vài lần, tạo bọt mịn và massage da đầu, sau đó xả sạch."
    },
    {
      name: "Coconut Rice Cake",
      category: "shampoo",
      type: "Dầu Gội Bánh (Shampoo Bar)",
      ingredients: "Nước cốt dừa + kem dừa + gạo trắng + lecithin đậu nành",
      desc: "Bánh gội siêu dưỡng ẩm và phục hồi chứa cốt dừa và gạo, giúp làm dịu da đầu khô ngứa, phục hồi các sợi tóc khô xơ hư tổn do hóa chất.",
      tip: "Dành cho da đầu khô căng, tóc hư tổn và tóc tẩy nhuộm cần cấp ẩm sâu.",
      usage: "Tạo bọt bánh gội ẩm trực tiếp trên tay hoặc tóc, massage nhẹ nhàng da đầu rồi xả sạch."
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
      
      {/* View Mode Switcher */}
      <div style={{ display: "flex", gap: "12px", borderBottom: "3px solid var(--lush-black)", paddingBottom: "12px" }}>
        <button
          className={`lush-btn ${viewMode === "catalog" ? "" : "lush-btn-secondary"}`}
          onClick={() => setViewMode("catalog")}
          style={{ padding: "10px 20px", fontSize: "0.85rem" }}
        >
          🗂️ Danh Mục Sản Phẩm Chi Tiết
        </button>
        <button
          className={`lush-btn ${viewMode === "lookup" ? "" : "lush-btn-secondary"}`}
          onClick={() => setViewMode("lookup")}
          style={{ padding: "10px 20px", fontSize: "0.85rem" }}
        >
          📋 Bảng Tra Cứu Tình Trạng & Routine LUSH
        </button>
      </div>

      {viewMode === "lookup" ? (
        <div className="fade-in" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          
          {/* Allergy/Patch test warning card */}
          <div className="lush-card" style={{ background: "var(--lush-gold-light)", borderLeft: "8px solid var(--lush-gold)", display: "flex", flexDirection: "column", gap: "8px" }}>
            <h4 style={{ margin: 0, fontSize: "1.1rem", fontFamily: "var(--font-sans)", fontWeight: "800" }}>
              💡 QUY TRÌNH THỬ DỊ ỨNG (PATCH TEST) BẮT BUỘC TRƯỚC KHI TRẢI NGHIỆM:
            </h4>
            <p style={{ fontSize: "0.85rem", lineHeight: "1.5", margin: 0, color: "#333" }}>
              Để tránh kích ứng da đầu của khách hàng, nhân viên <strong>bắt buộc thực hiện Patch Test</strong> trước khi thoa các sản phẩm chứa tinh chất bạc hà đậm đặc (như <strong>Roots</strong>) hoặc tinh dầu nóng (như quế, đinh hương trong <strong>New Shampoo Bar</strong>) trên diện rộng:
              <br/>
              Thoa một lượng nhỏ bọt hoặc sản phẩm vào vùng da mỏng sau tai hoặc mặt trong cổ tay của khách hàng, giữ nguyên trong <strong>10 - 15 phút</strong>. Nếu vùng da đó bị nóng rát dữ dội hoặc nổi mẩn đỏ, hãy lau sạch bằng nước ấm ngay lập tức và tuyệt đối không sử dụng sản phẩm đó cho khách hàng.
            </p>
          </div>

          {/* Lookup Table */}
          {/* Lookup Table - Desktop View */}
          <div className="desktop-only-table" style={{ border: "2px solid #000", boxShadow: "6px 6px 0px #000" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "900px", background: "#ffffff", textAlign: "left", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "#000", color: "#fff", borderBottom: "2px solid #000" }}>
                  <th style={{ padding: "16px", textTransform: "uppercase", fontSize: "0.8rem", width: "18%" }}>Tình Trạng Da Đầu</th>
                  <th style={{ padding: "16px", textTransform: "uppercase", fontSize: "0.8rem", width: "32%" }}>Routine LUSH Đề Xuất</th>
                  <th style={{ padding: "16px", textTransform: "uppercase", fontSize: "0.8rem", width: "25%" }}>Cách Dùng Phối Hợp</th>
                  <th style={{ padding: "16px", textTransform: "uppercase", fontSize: "0.8rem", width: "25%" }}>Cảnh Báo & Patch Test</th>
                </tr>
              </thead>
              <tbody>
                {lookupTable.map((item, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid #e5e5e5", verticalAlign: "top", background: idx % 2 === 0 ? "#ffffff" : "#fbfbfb" }}>
                    <td style={{ padding: "16px", fontWeight: "800", textTransform: "uppercase", fontSize: "0.85rem", borderRight: "1px solid #eee" }}>
                      <span style={{ marginRight: "6px", fontSize: "1.2rem" }}>{item.icon}</span>
                      {item.condition}
                    </td>
                    <td style={{ padding: "16px", borderRight: "1px solid #eee", lineHeight: "1.5" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {item.routine.split(" → ").map((prod, pIdx) => (
                          <div key={pIdx} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{ fontSize: "0.75rem", background: "#000", color: "#fff", width: "18px", height: "18px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>{pIdx + 1}</span>
                            <span className="lush-tag green" style={{ fontSize: "0.75rem", padding: "2px 6px" }}>{prod}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td style={{ padding: "16px", borderRight: "1px solid #eee", fontSize: "0.85rem", color: "#333", whiteSpace: "pre-line", lineHeight: "1.5" }}>
                      {item.usage}
                    </td>
                    <td style={{ padding: "16px", fontSize: "0.85rem", lineHeight: "1.5" }}>
                      <div style={{ color: "#c0392b", fontWeight: "700", marginBottom: "6px" }}>
                        ⚠️ {item.allergyWarning}
                      </div>
                      <div style={{ background: "var(--lush-gold-light)", borderLeft: "3px solid var(--lush-gold)", padding: "6px 10px", fontSize: "0.8rem", color: "#6b4a1b" }}>
                        🧪 <strong>Patch Test:</strong> {item.patchTest}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Lookup Table - Mobile View */}
          <div className="mobile-only-cards" style={{ display: "none", flexDirection: "column", gap: "20px" }}>
            {lookupTable.map((item, idx) => (
              <div key={idx} className="lush-card" style={{ display: "flex", flexDirection: "column", gap: "14px", borderLeft: "8px solid var(--lush-black)" }}>
                <div style={{ display: "flex", gap: "8px", alignItems: "center", borderBottom: "1px solid var(--lush-gray-medium)", paddingBottom: "10px" }}>
                  <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
                  <h4 style={{ margin: 0, fontSize: "0.95rem", fontWeight: "800", textTransform: "uppercase", fontFamily: "var(--font-sans)" }}>{item.condition}</h4>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <strong style={{ fontSize: "0.85rem" }}>Routine Đề Xuất:</strong>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "4px" }}>
                    {item.routine.split(" → ").map((prod, pIdx) => (
                      <div key={pIdx} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ fontSize: "0.7rem", background: "#000", color: "#fff", width: "16px", height: "16px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>{pIdx + 1}</span>
                        <span className="lush-tag green" style={{ fontSize: "0.75rem", padding: "2px 6px" }}>{prod}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ fontSize: "0.85rem", color: "#333", marginTop: "4px" }}>
                  <strong style={{ display: "block", marginBottom: "4px" }}>Cách dùng phối hợp:</strong>
                  <p style={{ whiteSpace: "pre-line", lineHeight: "1.5", margin: 0 }}>{item.usage}</p>
                </div>
                <div style={{ borderTop: "1px dashed var(--lush-gray-medium)", paddingTop: "10px", marginTop: "4px", fontSize: "0.8rem" }}>
                  <div style={{ color: "#c0392b", fontWeight: "700", marginBottom: "6px" }}>
                    ⚠️ {item.allergyWarning}
                  </div>
                  <div style={{ background: "var(--lush-gold-light)", borderLeft: "3px solid var(--lush-gold)", padding: "8px", color: "#6b4a1b", fontSize: "0.75rem" }}>
                    🧪 <strong>Patch Test:</strong> {item.patchTest}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
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
      )}

    </div>
  );
}
