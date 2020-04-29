import React from 'react';
import * as data from '../calculate/main-equipment.jsx'

export function Part3Views(props) {
    return (
        <div>
            <h3>PHẦN III - TÍNH TOÁN VÀ THIẾT KẾ</h3>
            <h4 className="margin-left-10">THIẾT BỊ CHÍNH</h4>
            <h5>Các số liệu ban đầu</h5>
            <p>Năng suất tính theo dung dịch đầu: Gđ = Gđ(kg/s)* 60*60 = {data.GđRaw}*60*60 = {data.Gđ} (kg/h)</p>
            <p>Nồng độ đầu(Xđ): {data.Xđ} (%klg)</p>
            <p>Nồng độ cuối(Xc): {data.Xc} (%klg)</p>
            <p>Nhiệt độ đầu của nguyên liệu (Tđ): {data.Tđ} (oC) - Tự chọn</p>
            <p>Gia nhiệt bằng hơi đốt bão hòa, áp xuất Phđ= {data.Phđ} at </p>
            <p>Áp suất ngưng tụ (độ chân không): Pnt = {data.Pnt} at</p>
            <h5>Cân bằng vật liệu</h5>
            <p>Lượng hơi thứ ra khỏi hệ thống: W = Gđ * (1 - (Xđ / Xc)) = {data.Gđ} * (1 - ({data.Xđ} / {data.Xc})) = {data.W()} (kg/h) [4-55-VI.1]</p>
            <p>Gọi W1,W2 lần lượt là hơi thứ ra khỏi nồi 1 và nồi 2, để tính lượng hơi thứ ra khỏi mỗi nồi, ta chọn tỉ lệ hơi thứ là W1/W2= {data.W1_W2} (sẽ tính lặp lại sau)</p>
            <p>Với tỉ lệ W1/W2 như trên, và W1 + W2 = W = {data.W()}(kg/h) . Lập hệ phương trình 2 ẩn và giải hệ ta được:</p>
            <p>W1 = {data.W1()}</p>
            <p>W2 = {data.W2()}</p>
            <p>Nồng độ cuối của dung dịch trong từng nồi</p>
            <p>Áp dụng công thức tính nồng độ cuối từng nồi từ [4-55-VI.2a], ta có</p>
            <p>Nồi 1: X1 = (Gđ * Xđ) / (Gđ - W1) = ({data.Gđ} * {data.Xđ}) / ({data.Gđ} - {data.W1()}) = {data.X1() * 100} (%klg)</p>
            <p>Nồi 2: X2 = (Gđ * Xđ) / (Gđ - W) = ({data.Gđ} * {data.Xđ}) / ({data.Gđ} - {data.W()}) = {data.X2() * 100} (%klg)</p>
        </div>
    )
}