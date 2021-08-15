import React from 'react'
import FilterLink from './FilterLink'
import {VisibilityFilters} from '../actions'

const Footer = () => (
    <footer className="box-border flex-col h-1/6 bg-gray-300 flex justify-center items-center">

        <div>
            <span className="mr-6 p-2 text-lg font-light text-gray-800">Показать дела: </span>
            <div className="inline-block">
                <FilterLink filter={VisibilityFilters.SHOW_ALL}>Всё</FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Активные</FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Завершенные</FilterLink>
            </div>
        </div>
    </footer>
)

export default Footer
