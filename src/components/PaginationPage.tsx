import React, {useContext, useState} from 'react';
import {Pagination} from "react-bootstrap";
import styles from "../styles/Pages.module.scss";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const PaginationPage = observer(
    () => {
        const {color} = useContext(Context)
        const [currentNumberPage, setCurrentNumberPage] = useState(1)
        // console.log(color.totalCount, color.limit);
        const pageCount = Math.ceil(color.totalCount / color.limit)
        const middleNumberPage = Math.ceil(pageCount/2) | 10;
        const [centerNumberPage, setCenterNumberPage] = useState<number>(middleNumberPage)
        const [isEllipsisLeft, setIsEllipsisLeft] = useState<boolean>(true)
        const [isEllipsisRight, setIsEllipsisRight] = useState<boolean>(true)
        const pages = []

        // const prevPage = () => {
        //     // console.log(currentNumberPage, pageCount);
        //     if (currentNumberPage > 1) {
        //         setCurrentNumberPage(color.page - 1)
        //         color.setPage(color.page - 1)
        //     }
        // }
        // const nextPage = () => {
        //     // console.log(currentNumberPage, pageCount);
        //     if (currentNumberPage < pageCount) {
        //         setCurrentNumberPage(color.page + 1)
        //         color.setPage(color.page + 1)
        //
        //         currentMultiPage(currentNumberPage+1)
        //         console.log(currentNumberPage + 1);
        //         console.log(centerNumberPage,color.page, pageCount - 3);
        //     }
        // }

        const currentPage = (page: number) => {
            setCurrentNumberPage(page)
            color.setPage(page)
        }

        const currentMultiPage = (page: number) => {
            setCurrentNumberPage(page)
            color.setPage(page)
            //multi
            if (page === 3 || page === 5){
                setCenterNumberPage(5)
                setIsEllipsisLeft(false)
                setIsEllipsisRight(true)
            }else if(page === 6){
                setCenterNumberPage(6)
                setIsEllipsisLeft(true)
            }else if(page === centerNumberPage + 1 && page < pageCount - 4){
                setCenterNumberPage(page)
            }else if(page === pageCount - 4){
                setCenterNumberPage(page)
                setIsEllipsisRight(false)
            }else if(page === pageCount - 5){
                setCenterNumberPage(page)
                setIsEllipsisRight(true)
            }else if(page === centerNumberPage - 1 && page > 4){
                setCenterNumberPage(page)
            }else if(page === pageCount - 2){
                setCenterNumberPage(pageCount - 4)
                setIsEllipsisRight(false)
                setIsEllipsisLeft(true)
            }

            // console.log(centerNumberPage, page, pageCount - 3);
        }

        for (let i = 0; i < pageCount; i++) {
            pages.push(i + 1)
        }
        return (
            <>
                {pageCount <= 10 ?
                    pages.map(page =>
                        <Pagination.Item
                            className={styles.pageItem}
                            key={page}
                            active={color.page === page}
                            onClick={() => currentPage(page)}
                        >
                            {page}
                        </Pagination.Item>
                    )
                    :
                    <>
                        {/*<Pagination.Prev onClick={() => prevPage()}/>*/}
                        <Pagination.Item
                            className={styles.pageItem}
                            active={color.page === 1}
                            onClick={() => currentMultiPage(1)}
                        >
                            1
                        </Pagination.Item>
                        <Pagination.Item
                            className={styles.pageItem}
                            active={color.page === 2}
                            onClick={() => currentMultiPage(2)}
                        >
                            2
                        </Pagination.Item>
                        <Pagination.Item
                            className={styles.pageItem}
                            active={color.page === 3}
                            onClick={() => currentMultiPage(3)}
                        >
                            3
                        </Pagination.Item>
                        {isEllipsisLeft &&
                        <Pagination.Ellipsis className={styles.pageItem} />
                        }


                        <Pagination.Item
                            className={styles.pageItem}
                            active={color.page === centerNumberPage-1}
                            onClick={() => currentMultiPage(centerNumberPage-1)}
                        >
                            {centerNumberPage-1}
                        </Pagination.Item>
                        <Pagination.Item
                            className={styles.pageItem}
                            active={color.page === centerNumberPage}
                            onClick={() => currentMultiPage(centerNumberPage)}
                        >
                            {centerNumberPage}
                        </Pagination.Item>
                        <Pagination.Item
                            className={styles.pageItem}
                            active={color.page === centerNumberPage+1}
                            onClick={() => currentMultiPage(centerNumberPage+1)}
                        >
                            {centerNumberPage+1}
                        </Pagination.Item>
                        {isEllipsisRight &&
                        <Pagination.Ellipsis className={styles.pageItem} />
                        }

                        <Pagination.Item
                            className={styles.pageItem}
                            active={color.page === pageCount - 2}
                            onClick={() => currentMultiPage(pageCount - 2)}
                        >
                            {pageCount - 2}
                        </Pagination.Item>
                        <Pagination.Item
                            className={styles.pageItem}
                            active={color.page === pageCount - 1}
                            onClick={() => currentMultiPage(pageCount - 1)}
                        >
                            {pageCount - 1}
                        </Pagination.Item>
                        <Pagination.Item
                            className={styles.pageItem}
                            active={color.page === pageCount}
                            onClick={() => currentMultiPage(pageCount)}
                        >
                            {pageCount}
                        </Pagination.Item>
                        {/*<Pagination.Next onClick={() => nextPage()}/>*/}
                    </>
                }
            </>
        );
    }
);

export default PaginationPage;