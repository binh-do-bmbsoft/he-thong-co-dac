import React from 'react'

export function DeTaiThietKe(props) {
    return (
        <div>
            <h3 className="text-center">Đề Tài: Thiết kế hệ thống cô đặc NaOH hai nồi xuôi chiều tuần hoàn trung tâm</h3>
            <br/><br/>
            <table className="table">
                <tbody>
                    <tr>
                        <th>Giảng viên hướng dẫn:</th>
                        <th> PGS. TS Trần Trung Kiên</th>
                    </tr>
                    <tr>
                        <th>Sinh viên:</th>
                        <th>Đỗ Đức Bình</th>
                    </tr>
                    <tr>
                        <th>MSSV:</th>
                        <th>20130324</th>
                    </tr>
                    <tr>
                        <th>Lớp:</th>
                        <th>KTHH-07 K58</th>
                    </tr>
                </tbody>
            </table>
            <br/>
            <table className="table">
                <thead>
                    <tr>
                        <th>Thông số</th>
                        <th>Giá trị</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dung dịch:</td>
                        <td>NaOH</td>
                    </tr>
                    <tr>
                        <td>Số Nồi:</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Năng suất:</td>
                        <td>2 (kg/s)</td>
                    </tr>
                    <tr>
                        <td>Nồng độ đầu:</td>
                        <td>5 (%klg)</td>
                    </tr>
                    <tr>
                        <td>Nồng độ cuối:</td>
                        <td>24 (%klg)</td>
                    </tr>
                    <tr>
                        <td>Áp suất hơi đốt:</td>
                        <td>5 (at)</td>
                    </tr>
                    <tr>
                        <td>Độ chân không:</td>
                        <td>0,8 (at)</td>
                    </tr>
                    <tr>
                        <td>Kiểu thiết bị:</td>
                        <td>Tuần hoàn trung tâm</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}