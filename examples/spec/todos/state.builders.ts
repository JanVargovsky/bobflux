import * as s from '../../src/todos/state';
import * as f from '../../src/flux';

export class TodosStateBuilder {
    private state: s.ITodosState = s.default();

    public withEditedTodo(editedTodo: s.ITodo): TodosStateBuilder {
        this.state.editedTodo = editedTodo;
        return this;
    };

    public withTodos(todos: s.ITodo[]): TodosStateBuilder {
        this.state.todos = todos;
        return this;
    };

    public build(): s.ITodosState {
        return this.state;
    }
    
    public buildToStore(): s.ITodosState {
        f.bootstrap({ todos: this.state });
        return this.state;
    }
}

export function isTodosStateBuilder(obj: s.ITodosState | TodosStateBuilder): obj is TodosStateBuilder {
    return 'build' in obj;
}

export class TodoBuilder {
    // default state must be set manualy
    private state: s.ITodo = { id: null, isDone: false, name: null };

    public withId(id: number): TodoBuilder {
        this.state.id = id;
        return this;
    };

    public withIsDone(isDone: boolean): TodoBuilder {
        this.state.isDone = isDone;
        return this;
    };

    public withName(name: string): TodoBuilder {
        this.state.name = name;
        return this;
    };

    public build(): s.ITodo {
        return this.state;
    }
}

export function isTodoBuilder(obj: s.ITodo | TodoBuilder): obj is TodoBuilder {
    return 'build' in obj;
}

