

export const ADD_TODO = 'ADD_TODO';
export const MODIFY_TODO = 'MODIFY_TODO';
let Id = 0;
export const addTodo = (Title,Description,DateDebut,DateFin) => ({
    type: ADD_TODO,
    payload: {
        id : Id++,
        Title,Description,DateDebut,DateFin, status : 0
    }
});

export const modifyTodo = (Id,data) => ({
    type: MODIFY_TODO,
    payload: {
        Id,data
    }
});
