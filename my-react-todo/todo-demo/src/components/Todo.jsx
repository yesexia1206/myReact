import { MdDelete, MdEdit } from "react-icons/md";

//解構props的屬性名，用{屬姓名}包起來
function Todo({ todo, deleteTodo, toggleCompleted }) {
    return (
        //新增一個completed類別規則
        //使用反引號+三元運算子檢查isCompleted
        //如果為真=>套用completed類別規則
        //如果為否=>取消completed類別規則 =>''
        <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
            <p onClick={() => { toggleCompleted(todo.id) }}>{todo.content}</p>
            <div>
                <MdEdit style={{ cursor: 'pointer', marginRight: '5px' }} />
                <MdDelete style={{ cursor: 'pointer', marginLeft: '5px' }}
                    onClick={() => { deleteTodo(todo.id) }}
                />
            </div>
        </div>
    )
}

export default Todo