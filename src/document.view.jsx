import React, { useState } from 'react';
import { DeTaiThietKe } from './documents/topic.view.jsx';
import { LoiMoDauView } from './documents/preamble.view.jsx';
import { ReferencesView } from './documents/references.view.jsx';
import { Part1View } from './documents/part-1-overview.jsx';
import { Part2View } from './documents/part-2.jsx';
import { Part3Views } from './documents/part-3.jsx';

const Pages = [<DeTaiThietKe />,
<LoiMoDauView />, <Part1View />, <Part2View />,<Part3Views />, <ReferencesView />];


export function DocumentsView(props) {
    const [index, setIndex] = useState(5);
    const totalPages = Pages.length;
    function handleNextPage() {
        if (index < totalPages) {
            setIndex(index + 1)
        }
    }
    function handlePreviousPage() {
        if (index > 1) {
            setIndex(index - 1)
        }
    }
    function handleGoTo(i) {
        setIndex(i)
    }
    return (
        <div className="col-6 border-left">
            <br />
            {Pages[index - 1]}
            <br />
            <RenderPagination goTo={handleGoTo} clickNex={() => handleNextPage()} index={index} total={totalPages} clickPrevious={() => handlePreviousPage()} />
        </div>
    )
}
function RenderPagination(props) {
    const totalPage = props.total;
    const index = props.index;
    function renderListPages() {
        const content = [];
        for (let i = 1; i <= totalPage; i++) { i === index ? content.push(<RenderPage click={() => props.goTo(i)} value={i} active="active" />) : content.push(<RenderPage click={() => props.goTo(i)} value={i} />) }
        return content
    }
    return (
        <ul className="pagination">
            <li className="page-item" onClick={props.clickPrevious}><a className="page-link" href="#">Previous</a></li>
            {renderListPages()}
            <li className="page-item" onClick={props.clickNex}><a className="page-link" href="#">Next</a></li>
        </ul>
    )
}
function RenderPage(props) {
    const style = props.active || ""
    return (
        <li onClick={props.click} className={`page-item ${style}`}><a className="page-link" href="#">{props.value}</a></li>
    )
}