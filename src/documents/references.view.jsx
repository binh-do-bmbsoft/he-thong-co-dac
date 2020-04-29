import React from 'react'

const listReferences=[
"Nhiều tác giả, Sổ tay quá trình và thiết bị công nghệ hóa tập 1, NXB Khoa học và kỹ thuật, 2006.",
"Nhiều tác giả, Sổ tay quá trình và thiết bị công nghệ hóa tập 2, NXB Khoa học và kỹ thuật, 2006.",
"TÀI LIỆU HƯỚNG DẪN THIẾT KẾĐỒ ÁN MÔN HỌC QUÁ TRÌNH THIẾT BỊ CNHH & TP, 2012",
"Sổ tay QTTB tập 2"
];

export function ReferencesView(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Tài liệu tham khảo</th>
                </tr>
            </thead>
            <tbody>
                {listReferences.map((data,index)=><RenderItems content={data} index={index} key={index} />)}
            </tbody>
        </table>
    )
}
function RenderItems(props) {
    return (
        <tr>
            <td>[{props.index+1}]. {props.content}</td>
        </tr>
    )
}