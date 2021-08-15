import React from "react";
import {connect} from "react-redux";
import {addTodo} from "../actions";

const AddTodo = ({dispatch}) => {
    let input;

    return (
        <div className="h-1/6 sm:p-8 xs:p-2">
            <form
                className=""
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value));
                    input.value = '';
                }}>
                <input ref={node => (input = node)} title={'Напишите здесь, что планируете сделать'}
                       placeholder={'Что-то сделать'}
                       className="outline-none rounded border focus:border-purple-600 hover:border-purple-600 p-2 text-lg font-light text-gray-800 active:border-purple-800 focus-within:border-purple-800"
                       maxLength={50} minLength={2}/>
                <button className="btn bg-purple-600 bg-opacity-25 xs500:ml-8  sm:mt-0 xs:mt-1 xs:ml-0" type="submit">Добавить дело</button>
            </form>

        </div>
    )
}

export default connect()(AddTodo)
