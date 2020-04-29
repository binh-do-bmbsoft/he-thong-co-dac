import React from 'react'
import './style.scss';

export function Part1View(props) {
    return (
        <div>
            <h3>PHẦN 1: TỔNG QUAN VỀ CÔ ĐẶC</h3>
            <h5>I - NHIỆM VỤ ĐỒ ÁN</h5>
            <p className="margin-left-10">
                Thiết kế thiết bị cô đặc hai nồi xuôi chiều tuần hoàn trung tâm để cô đặc dung dịch NaOH.<br />
                Nồng độ đầu: xđ = 5 %<br />
                Nồng độ cuối: xc = 24 %<br />
                Năng suất nhập liệu: Vđ = 2 kg/s<br />
                Áp xuất hơi đốt: 5 (at)<br />
                Độ Chân không: 0,8 (at)<br />
            </p>
            <h5>II - GIỚI THIỆU VỀ NGUYÊN LIỆU</h5>
            <p>Natri hydroxid NaOH nguyên chất là chất rắn màu trắng, có dạng tinh thể, khối lượng riêng 2,13 g/ml, nóng chảy ở 318 oC và sôi ở 1388 oC dưới áp suất khí quyển.NaOH tan tốt trong nước (1110 g/l ở 20 oC) và sự hoà tan tỏa nhiệt mạnh. NaOH ít tan hơn trong các dung môi hữu cơ như methanol, ethanol… NaOH rắn và dung dịch NaOH đều dễ hấp thụ CO2 từ không khí nên chúng cần được chứa trong các thùng kín.</p>
            <p>Dung dịch NaOH là một base mạnh, có tính ăn da và có khả năng ăn mòn cao. Vì vậy, ta cần lưu ý đến việc ăn mòn thiết bị và đảm bảo an toàn lao động trong quá trình sản xuất NaOH.</p>
            <p>Ngành công nghiệp sản xuất NaOH là một trong những ngành sản xuất hoá chất cơ bản và lâu năm. Nó đóng vai trò to lớn trong sự phát triển của các ngành công nghiệp khác như dệt,tổng hợp tơ nhân tạo, lọc hoá dầu, sản xuất phèn...</p>
            <p>Trước đây trong công nghiệp, NaOH được sản xuất bằng cách cho Ca(OH)2 tác dụng với dung dịch Na2CO3 loãng và nóng. Ngày nay, người ta dùng phương pháp hiện đại là điện phân dung dịch NaCl bão hoà. Tuy nhiên, dung dịch sản phẩm thu được thường có nồng độ rất loãng, gây khó khăn trong việc vận chuyển đi xa. Để thuận tiện cho chuyên chở và sử dụng, người ta phải cô đặc dung dịch NaOH đến một nồng độ nhất định theo yêu cầu.</p>
            <h5>III -  KHÁI QUÁT VỀ CÔ ĐẶC</h5>
            <h6 className="margin-left-10">1. Định nghĩa</h6>
            <p>Cô đặc là phương pháp dùng để nâng cao nồng độ các chất hoà tan trong dung dịch gồm 2 hai nhiều cấu tử. Quá trình cô đặc của dung dịch lỏng – rắn hay lỏng – lỏng có chênh lệch nhiệt độ sôi rất cao thường được tiến hành bằng cách tách một phần dung môi (cấu tử dễ bay hơi hơn); đó là các quá trình vật lý – hoá lý. Tuỳ theo tính chất của cấu tử khó bay hơi (hay không bay hơi trong quá trình đó), ta có thể tách một phần dung môi (cấu tử dễ bay hơi hơn) bằng phương pháp nhiệt độ (đun nóng) hoặc phương pháp làm lạnh kết tinh.</p>
            <h5 className="margin-left-10">2. Các phương pháp cô đặc</h5>
            <p>Phương pháp nhiệt (đun nóng): dung môi chuyển từ trạng thái lỏng sang trạng thái hơi dưới tác dụng của nhiệt khi áp suất riêng phần của nó bằng áp suất tác dụng lên mặt thoáng chất lỏng.</p>
            <p>Phương pháp lạnh: khi hạ thấp nhiệt độ đến một mức nào đó, một cấu tử sẽ tách ra dưới dạng tinh thể của đơn chất tinh khiết; thường là kết tinh dung môi để tăng nồng độ chất tan. Tuỳ tính chất cấu tử và áp suất bên ngoài tác dụng lên mặt thoáng mà quá trình kết tinh đó xảy ra ở nhiệt độ cao hay thấp và đôi khi ta phải dùng máy lạnh.</p>
            <h6 className="margin-left-10">3. Bản chất của sự cô đặc do nhiệt</h6>
            <p>Để tạo thành hơi (trạng thái tự do), tốc độ chuyển động vì nhiệt của các phân tử chất lỏng gần mặt thoáng lớn hơn tốc độ giới hạn. Phân tử khi bay hơi sẽ thu nhiệt để khắc phục lực liên kết ở trạng thái lỏng và trở lực bên ngoài. Do đó, ta cần cung cấp nhiệt để các phân tử đủ năng lượng thực hiện quá trình này.</p>
            <p>Bên cạnh đó, sự bay hơi xảy ra chủ yếu là do các bọt khí hình thành trong quá trình cấp nhiệt và chuyển động liên tục, do chênh lệch khối lượng riêng các phần tử ở trên bề mặt và dưới đáy tạo nên sự tuần hoàn tự nhiên trong nồi cô đặc. Tách không khí và lắng keo (protit) sẽ ngăn chặn sự tạo bọt khi cô đặc.</p>
            <h6 className="margin-left-10">4. Ứng dụng của sự cô đặc</h6>
            <p>Trong sản xuất thực phẩm, ta cần cô đặc các dung dịch đường, mì chính, nước trái cây…Trong sản xuất hoá chất, ta cần cô đặc các dung dịch NaOH, NaCl, CaCl2, các muối vô cơ…</p>
            <p>Hiện nay, phần lớn các nhà máy sản xuất hoá chất, thực phẩm đều sử dụng thiết bị cô đặc như một thiết bị hữu hiệu để đạt nồng độ sản phẩm mong muốn. Mặc dù cô đặc chỉ là một hoạt động gián tiếp nhưng nó rất cần thiết và gắn liền với sự tồn tại của nhà máy. Cùng với sự phát triển của nhà máy, việc cải thiện hiệu quả của thiết bị cô đặc là một tất yếu. Nó đòi hỏi phải có những thiết bị hiện đại, đảm bảo an toàn và hiệu suất cao. Do đó, yêu cầu được đặt ra cho người kỹ sư là phải có kiến thức chắc chắn hơn và đa dạng hơn, chủ động khám phá các nguyên lý mới của thiết bị cô đặc.</p>
        <h5>IV - THIẾT BỊ CÔ ĐẶC DÙNG TRONG PHƯƠNG PHÁP NHIỆT</h5>
        <h6>1. Phân loại và ứng dụng</h6>
        <h6 className="margin-left-10">1.1.Theo cấu tạo</h6>
        <p>- Nhóm 1: dung dịch đối lưu tự nhiên (tuần hoàn tự nhiên). Thiết bị cô đặc nhóm này có thể cô đặc dung dịch khá loãng, độ nhớt thấp, đảm bảo sự tuần hoàn dễ dàng qua bề mặt truyền nhiệt. Bao gồm:</p>
        <p className="margin-left-10">• Có buồng đốt trong (đồng trục buồng bốc), ống tuần hoàn trong hoặc ngoài.</p>
        <p className="margin-left-10">• Có buồng đốt ngoài (không đồng trục buồng bốc)</p>
        <p>- Nhóm 2: dung dịch đối lưu cưỡng bức (tuần hoàn cưỡng bức). Thiết bị cô đặc nhóm này dùng bơm để tạo vận tốc dung dịch từ 1,5 m/s đến 3,5 m/s tại bề mặt truyền nhiệt.Ưu điểm chính là tăng cường hệ số truyền nhiệt k, dùng được cho các dung dịch khá đặc sệt, độ nhớt cao, giảm bám cặn, kết tinh trên bề mặt truyền nhiệt. Bao gồm:</p>
        <p className="margin-left-10">• Có buồng đốt trong, ống tuần hoàn ngoài.</p>
        <p className="margin-left-10">• Có buồng đốt trong, ống tuần hoàn ngoài.</p>
        <p>- Nhóm 3: dung dịch chảy thành màng mỏng. Thiết bị cô đặc nhóm này chỉ cho phép dung dịch chảy dạng màng qua bề mặt truyền nhiệt một lần (xuôi hay ngược) để tránh sự tác dụng nhiệt độ lâu làm biến chất một số thành phần của dung dịch. Đặc biệt thích hợp cho các dung dịch thực phẩm như nước trái cây, hoa quả ép. Bao gồm:</p>
        <p className="margin-left-10">• Màng dung dịch chảy ngược, có buồng đốt trong hay ngoài: dung dịch sôi tạo bọt khó vỡ.</p>
        <p className="margin-left-10">• Màng dung dịch chảy xuôi, có buồng đốt trong hay ngoài: dung dịch sôi ít tạo bọt và bọt dễ vỡ.</p>
        <h6 className="margin-left-10">1.2.Theo phương thức thực hiện quá trình</h6>
        <p>- Cô đặc áp suất thường (thiết bị hở): nhiệt độ sôi và áp suất không đổi; thường được dùng trong cô đặc dung dịch liên tục để giữ mức dung dịch cố định, nhằm đạt năng suất cực đại và thời gian cô đặc ngắn nhất.</p>
        <p>- Cô đặc áp suất chân không: dung dịch có nhiệt độ sôi thấp ở áp suất chân không.Dung dịch tuần hoàn tốt, ít tạo cặn và sự bay hơi dung môi diễn ra liên tục.</p>
        <p>- Cô đặc nhiều nồi: mục đích chính là tiết kiệm hơi đốt. Số nồi không nên quá lớn vì nó làm giảm hiệu quả tiết kiệm hơi. Người ta có thể cô chân không, cô áp lực hay phối hợp cả hai phương pháp; đặc biệt có thể sử dụng hơi thứ cho mục đích khác để nâng cao hiệu quả kinh tế.</p>
        <p>- Cô đặc liên tục: cho kết quả tốt hơn cô đặc gián đoạn. Có thể được điều khiển tự động nhưng hiện chưa có cảm biến đủ tin cậy. Đối với mỗi nhóm thiết bị, ta đều có thể thiết kế buồng đốt trong, buồng đốt ngoài, có hoặc không có ống tuần hoàn. Tuỳ theo điều kiện kỹ thuật và tính chất của dung dịch, ta có thể áp dụng chế độ cô đặc ở áp suất chân không, áp suất thường hoặc áp suất dư.</p>
        <h6>2. Các thiết bị và chi tiết trong hệ thống cô đặc</h6>
        <p>- Thiết bị chính:</p>
        <p className="margin-left-10">•	Ống nhập liệu, ống tháo liệu</p>
        <p className="margin-left-10">• Ống tuần hoàn, ống truyền nhiệt</p>
        <p className="margin-left-10">• Buồng đốt, buồng bốc, đáy, nắp</p>
        <p className="margin-left-10">• Các ống dẫn: hơi đốt, hơi thứ, nước ngưng, khí không ngưng</p>
        <p>- Thiết bị phụ:</p>
        <p className="margin-left-10">•	Bể chứa nguyên liệu</p>
        <p className="margin-left-10">•	Bể chứa sản phẩm</p>
        <p className="margin-left-10">•	Bồn cao vị</p>
        <p className="margin-left-10">•	Lưu lượng kế</p>
        <p className="margin-left-10">•	Thiết bị gia nhiệt</p>
        <p className="margin-left-10">•	Thiết bị ngưng tụ baromet</p>
        <p className="margin-left-10">•	Các thiết bị bơm nguyên liệu và bơm chân không</p>
        <p className="margin-left-10">•	Các van</p>
        <p className="margin-left-10">•	Thiết bị đo nhiệt độ, áp suất…</p>
        <h5>V - LỰA CHỌN THIẾT BỊ CÔ ĐẶC DUNG DỊCH NaOH</h5>
        <p>- Dựa vào tính chất của nguyên liệu và sản phẩm, cũng như điều kiện kỹ thuật của đầu đề, em lựa chọn thiết bị cô đặc chân không hai nồi xuôi chiều có buồng đốt trong và ống tuần hoàn trung tâm. Thiết bị cô đặc loại này có cấu tạo đơn giản, dễ vệ sinh và sửa chữa.</p>
        <p>- Cô đặc ở áp suất chân không làm giảm nhiệt độ sôi của dung dịch, giảm chi phí năng lượng, hạn chế việc chất tan bị lôi cuốn theo và bám lại trên thành thiết bị </p>
        <p>- Tuy nhiên, loại thiết bị và phương pháp này có hệ số truyền nhiệt thấp.</p>
        </div>
    )
}