import { useState } from "react"
import CreateForm from "./CreateForm"
import Todo from "./Todo"

function TodoWrapper() {

    //因為有N個todo，所以使用陣列存取
    // const [todos, setTodos] = useState(['list1', 'list2']);
    //因為陣列需要key屬性，所以要加上id
    // const [todos, setTodos] = useState([
    //     { content: 'list1', id: 1 },
    //     { content: 'list2', id: 2 },
    // ]);
    //^因為要判定todo是否被點擊，所以要增加一個標記屬性=>isCompleted
    const [todos, setTodos] = useState([
        { content: 'list1', id: 1, isCompleted: false },
        { content: 'list2', id: 2, isCompleted: false },
    ]);

    // console.log(todos);
    //建立加入新的todo內容
    //1.使用...其餘運算子來保留原陣列內容
    //2.再加入新的物件內容
    const addTodo = (content) => {
        setTodos([...todos, {
            content: content, id: (todos.length + 1),
            isCompleted: false
        }])
    }

    //建立刪除todo函式，傳給Todo元件使用
    //使用filter方法，去除被刪除的todo
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => {
            //檢查目前的id是否為被刪除的id
            //如果不是，則保留
            return todo.id !== id
        }))
    }

    //建立雙向(toggle)切換「完成與取消」的函式
    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
            //檢查被點擊的id是否跟目前陣列中的id一樣
            //Yes=>1.取出todo 2.將isCompleted屬性值反向處理(true->flase / flase->true)
            //No =>todo不變
            return todo.id === id
                ? { ...todo, isCompleted: !todo.isCompleted }
                : todo
        }))
    }

    return (
        <div className="wrapper">
            <h1>待辦事項</h1>
            <CreateForm addTodo={addTodo} />
            {
                todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id}
                        deleteTodo={deleteTodo}
                        toggleCompleted={toggleCompleted}
                    />
                })
            }
        </div>
    )
}

export default TodoWrapper