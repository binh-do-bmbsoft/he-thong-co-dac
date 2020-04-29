import React from 'react';

export const Lamtronden = 3; // làm tròn đến mấy chữ số sau dấu thập phân
export const GđRaw = 2; // năng xuất đầu vào theo kg/s , sẽ tự chuyển thành kg/h sau nhập
export const Gđ = GđRaw * 60 * 60;
export const Xđ = 0.05; // nồng độ đầu vào % khối lượng nhập
export const Xc = 0.24; // nồng độ cuối % khối lượng. nhập
export const Tđ = 20; // nhiệt độ đầu - tự chọn, nhập
export const Phđ = 4; // áp suất hơi đốt, hơi nước bão hòa , chọn, nhập
export const Pnt = 0.8; // áp suất hơi ngưng tụ, nhập
export const W1_W2 = 1; // tỉ lệ hơi thứ w1 / w2 
export const ΔP1_ΔP2 = 2.47; // tỉ số áp suất nồi 1 và nồi 2
export const Δppp = 1; // tổn thất nhiệt độ do trở lực đường ống, oC, chọn
export const g = 9.81; // gia tốc trọng trường
export const H = 5;// chiều cao óng truyền nhiệt ,chọn
export const h1 = 0.5;//chiều cao lớp dung dịch từ miệng ống truyền nhiệt đến mặt thoáng, chọn
export function Congthucnoisuy(X1, X2, X, Y1, Y2) {
    return (((Y2 * (X - X1)) + (Y1 * (X2 - X))) / (X2 - X1))
}
export class MainEquipment extends React.Component {
    render() {
        return (
            <div>
                <h3> Thông số các giá trị khi tính toán thiết bị chính</h3>
                <p>Gđ: {Gđ} (kg/h)</p>
                <p>Xđ: {Xđ * 100}(% klg)</p>
                <p>Xc: {Xc * 100}(% klg)</p>
                <p>Nhiệt độ đầu: {Tđ}(oC)</p>
                <p>Áp xuất hơi đốt: {Phđ}(at)</p>
                <p>Áp suất hơi ngưng tụ: {Pnt}(at)</p>
                <p>Gia tốc trọng trường g: {g} (m/s2)</p>
                <p>H (chiều cao ống truyền nhiệt): {H} (m)</p>
                <p>h1 (chiều cao lớp dung dịch từ miệng ống đến mặt thoáng) : {h1} (m)</p>
                <p>Lượng hơi thứ ra khỏi hệ thống: {W()}(kg/h)</p>
                <p>Lượng sản phẩm đáy: {Gc()}(kg/h)</p>
                <p>Giả sử W1/W2: {W1_W2}</p>
                <p>W1 (hơi thứ ra khỏi nồi 1): {W1()}(kg/h)</p>
                <p>W2 (hơi thứ ra khỏi nồi 2): {W2()}(kg/h)</p>
                <p>Nồng độ cuối của dung dịch nồi 1: {X1() * 100}(%klg)</p>
                <p>Nồng độ cuối của dung dịch nồi 2: {X2() * 100}(%klg)</p>
                <p>Chên lệch áp xuất chung của hệ thống Δp: {ΔP()} (at)</p>
                <p>Giả sử ΔP1/ΔP2 (tỉ số chênh lệch áp suất nồi 1 và nồi 2): {ΔP1_ΔP2} </p>
                <p>ΔP1: {ΔP1()}(at)</p>
                <p>ΔP2: {ΔP2()}(at)</p>
                <p>Áp suất hơi đốt nồi 1 Phđ1: {Phđ1()} (at)</p>
                <p>Áp suất hơi đốt nồi 2 Phđ2: {Phđ2()} (at)</p>
                <p>Nồi 1 với Phđ1 = {Phđ1()} (at):
                <ul>
                        <li>Nhiệt độ hơi đốt (Thđ1): {Thđ1()} oC</li>
                        <li>Nhiệt lượng riêng (ihđ2): {ihđ1()} [kj/kg]</li>
                        <li>Nhiệt hóa hơi (rhđ1): {rhđ1()} [kj/kg]</li>
                    </ul>
                </p>
                <p>Nồi 2 với Phđ2 = {Phđ2()} (at):
                <ul>
                        <li>Nhiệt độ hơi đốt (Thđ2): {Thđ2()} oC</li>
                        <li>Nhiệt lượng riêng (ihđ2): {ihđ2()} [kj/kg]</li>
                        <li>Nhiệt hóa hơi (rhđ2): {rhđ2()} [kj/kg]</li>
                    </ul>
                </p>
                <p>Với Png = {Pnt} (at) có Tng: {Tnt()} (oC)</p>
                <p>tip (nhiệt độ hơi thứ ra khỏi nồi i), chọn tổn thất nhiệt độ do trở lực đường ống là Δ''': {Δppp}(oC)
                <ul>
                        <li>Nhiệt độ hơi thứ ra khỏi nồi 1: {t1p()} (oC)</li>
                        <li>Nhiệt độ hơi thứ ra khỏi nồi 2: {t2p()} (oC)</li>
                    </ul>
                </p>
                <p>
                    Nồi 1:
                    <ul>
                        <li>Áp suất hơi thứ p1': {p1p()} [at]</li>
                        <li>Nhiệt lượng riêng i1': {i1p()} [kj/kg]</li>
                        <li>Nhiệt hóa hơi r1': {r1p()} [kj/kg]</li>
                    </ul>
                    Nồi 2:
                    <ul>
                        <li>Áp suất hơi thứ p2': {p2p()} [at]</li>
                        <li>Nhiệt lượng riêng i2': {i2p()} [kj/kg]</li>
                        <li>Nhiệt hóa hơi r2': {r2p()} [kj/kg]</li>
                    </ul>
                    {TableOfData1()}
                </p>
                <h5>Tổn thất nhiệt độ do áp suất thủy tĩnh tăng cao Δi''</h5>
                <p>
                    Nồi 1: p1'={p1p()} [at]
                    <ul>
                        <li>ρdd1 : {ρdd1()} [kg/m3]</li>
                        <li>ptbi1: {ptbi1()} [at]</li>
                        <li>ttbi1: {ttbi1()} (oC)</li>
                        <li>Δ1'' (tổn thất nhiệt độ do áp suất thủy tĩnh tăng cao): {Δpp1()} (oC)</li>
                    </ul>
                    Nồi 2: p1'={p2p()} [at]
                    <ul>
                        <li>ρdd2 : {ρdd2()} [kg/m3]</li>
                        <li>ptbi2: {ptbi2()} [at]</li>
                        <li>ttbi2: {ttbi2()} (oC)</li>
                        <li>Δ2'' (tổn thất nhiệt độ do áp suất thủy tĩnh tăng cao): {Δpp2()} (oC)</li>
                    </ul>
                </p>
                <h5>Tổn thất nhiệt độ do nồng độ Δi'</h5>
            </div>
        )
    }
}
export function W() {
    // luong Hoi Thu Ra Khoi HeThong [4-55]
    return Number((Gđ * (1 - (Xđ / Xc))).toFixed(Lamtronden))
}
export function W2() {
    return Number((W() / (W1_W2 + 1)).toFixed(Lamtronden))
}
export function W1() {
    return Number((W() - W2()).toFixed(Lamtronden))
}
export function X1() {
    //[4-55-VI.2a]
    return Number(((Gđ * Xđ) / (Gđ - W1())).toFixed(Lamtronden))
}
export function X2() {
    return Xc;
}
export function Gc() {
    return Number((Gđ - W()).toFixed(Lamtronden))
}
export function ΔP() {
    return Number((Phđ - Pnt).toFixed(Lamtronden))
}
export function ΔP2() {
    return Number((ΔP() / (1 + ΔP1_ΔP2)).toFixed(Lamtronden))
}
export function ΔP1() {
    return Number((ΔP2() * ΔP1_ΔP2).toFixed(Lamtronden))
}
export function Phđ1() {
    return Phđ;
}
export function Phđ2() {
    return Number((Phđ1() - ΔP1()).toFixed(Lamtronden))
}
export function Thđ1() {
    // I.251 [1-314]
    return 142.9
}
export function ihđ1() {
    return 2744
}
export function rhđ1() {
    return 2141
}
export function Thđ2(Y2 = 116.3, Y1 = 112.7, X2 = 1.8, X1 = 1.6, X = Phđ2()) {
    // I.251 [1-314]
    return Number(Congthucnoisuy(1.6, 1.8, Phđ2(), 112.7, 116.3).toFixed(Lamtronden))
}
export function ihđ2() {
    return Number(Congthucnoisuy(1.6, 1.8, Phđ2(), 2703, 2709).toFixed(Lamtronden))
}
export function rhđ2() {
    return Number(Congthucnoisuy(1.6, 1.8, Phđ2(), 2227, 2217).toFixed(Lamtronden))
}
export function Tnt() {
    // I.251 [1-314] theo Pnt
    return 93
}
export function t1p() {
    // ti'=T(i+1)+Δ'''
    return Number((Thđ2() + Δppp).toFixed(Lamtronden))
}
export function t2p() {
    // ti'=T(i+1)+Δ'''
    return Number((Tnt() + Δppp).toFixed(Lamtronden))
}
export function p1p() {
    // I.250 [1-312]
    return Number(Congthucnoisuy(115, 120, t1p(), 1.724, 2.025).toFixed(Lamtronden))
}
export function i1p() {
    // I.250 [1-312]
    return Number(Congthucnoisuy(115, 120, t1p(), 2704, 2711).toFixed(Lamtronden))
}
export function r1p() {
    // I.250 [1-312]
    return Number(Congthucnoisuy(115, 120, t1p(), 2221, 2207).toFixed(Lamtronden))
}
export function p2p() {
    // I.250 [1-312]
    return Number(Congthucnoisuy(90, 95, t2p(), 0.715, 0.862).toFixed(Lamtronden))
}
export function i2p() {
    // I.250 [1-312]
    return Number(Congthucnoisuy(90, 95, t2p(), 2662, 2671).toFixed(Lamtronden))
}
export function r2p() {
    // I.250 [1-312]
    return Number(Congthucnoisuy(90, 95, t2p(), 2285, 2273).toFixed(Lamtronden))
}
export function ρdd1() {
    // khối lượng riêng của dung dịch ở nhiệt độ ban đầu, nồng độ ban đầu i23[1-35],dùng ct nội suy nữa
    return 1.0869 * 1000
}

export function ptbi1() {
    // áp suất thủy tĩnh ở giữa ống truyền nhiệt
    return Number((p1p() + (0.5 * ((h1 + (H / 2)) * ρdd1() * g) / (g * 10000))).toFixed(Lamtronden))
}
export function ttbi1() {
    // tra I-251 [1-314] theo ptbi1 
    return Number(Congthucnoisuy(1.8, 2, ptbi1(), 116.3, 119.6).toFixed(Lamtronden))
}
export function Δpp1() {
    return Number((ttbi1() - t1p()).toFixed(Lamtronden))
}
export function ρdd2() {
    // khối lượng riêng của dung dịch ở nhiệt độ ban đầu, nồng độ ban đầu I23[1-35],dùng ct nội suy nữa
    return Number((Congthucnoisuy(0.24,0.28,X2(),1.2629,1.3064)*1000).toFixed(Lamtronden))
}

export function ptbi2() {
    // áp suất thủy tĩnh ở giữa ống truyền nhiệt
    return Number((p2p() + (0.5 * ((h1 + (H / 2)) * ρdd2() * g) / (g * 10000))).toFixed(Lamtronden))
}
export function ttbi2() {
    // tra I-251 [1-314] theo ptbi2 
    return Number(Congthucnoisuy(1, 1.2, ptbi2(), 99.1, 104.2).toFixed(Lamtronden))
}
export function Δpp2() {
    return Number((ttbi2() - t2p()).toFixed(Lamtronden))
}
export function Ts1(){
    // nhiệt độ sôi của dung môi
    return (t1p()+273)
}
export function Δ01p(){
    // VI2[2-63] nội suy với nồng độ X1()
    return Number(Congthucnoisuy(5,10,X1(),1.0,2.8).toFixed(Lamtronden))
}
export function TableOfData1() {
    return (
        <div>
            <p>Bảng tổng hợp số liệu 1</p>
            <table className="table table-bordered table-hover table-sm">
                <thead>
                    <tr>
                        <th scope="col-1">Nồi</th>
                        <th colspan="4" className="text-center">Hơi đốt</th>
                        <th colspan="4" className="text-center">Hơi Thứ</th>
                        <th scope="col-1">x%</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>P, at</td>
                        <td>T, oC</td>
                        <td>i, Kj/Kg</td>
                        <td>r, Kj/Kg</td>
                        <td>p', at</td>
                        <td>t', oC</td>
                        <td>i', Kj/Kg</td>
                        <td>r', Kj/Kg</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td className="text-center">{Phđ1()}</td>
                        <td className="text-center">{Thđ1()}</td>
                        <td className="text-center">{ihđ1()}</td>
                        <td className="text-center">{rhđ1()}</td>
                        <td className="text-center">{p1p()}</td>
                        <td className="text-center">{t1p()}</td>
                        <td className="text-center">{i1p()}</td>
                        <td className="text-center">{r1p()}</td>
                        <td className="text-center">{X1()*100}</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td className="text-center">{Phđ2()}</td>
                        <td className="text-center">{Thđ2()}</td>
                        <td className="text-center">{ihđ2()}</td>
                        <td className="text-center">{rhđ2()}</td>
                        <td className="text-center">{p2p()}</td>
                        <td className="text-center">{t2p()}</td>
                        <td className="text-center">{i2p()}</td>
                        <td className="text-center">{r2p()}</td>
                        <td className="text-center">{X2()*100}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
