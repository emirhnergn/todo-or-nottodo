import { create } from "zustand";
import {devtools, persist} from 'zustand/middleware'

interface MainStore
{
    order: {[key: string]: number};
    todos: {[key: string]: string};

    addOrder: (key:string, index:number) => void;
    addTodo : (text:string)  => void;

    removeOrder: (key:string) => void;
    removeTodo : (key:string) => void;
}

export const useMainStore = create(
    devtools(
        persist<MainStore>(
            (set) => ({
                order: {},
                todos: {},
                addOrder: (key:string, index:number) => set((state) => ({order: {...state.order, [key]: index}})),
                addTodo : (text:string)  => set((state) => ({todos: {...state.todos, 
                    [Number.isNaN(parseInt(Object.keys(state.todos)[Object.keys(state.todos).length-1])+1) ? 0 : (parseInt(Object.keys(state.todos)[Object.keys(state.todos).length-1])+1).toString()]
                    : text}})),

                removeOrder: (key:string) => set((state) => (
                    {
                        order: Object.keys(state.order).map((orderKey:string,index:number) => orderKey != key
                            ? {[orderKey]: index > state.order[key] ? index - 1 : index}
                            : undefined
                            ).reduce((acc, curr) => ({...acc, ...curr}), {}),
                    }
                )),
                removeTodo : (key:string) => set((state) => (
                    {
                        todos: Object.keys(state.todos).map((todoKey:string) => todoKey != key
                            ? {[todoKey]: state.todos[todoKey]}
                            : undefined
                            ).reduce((acc, curr) => ({...acc, ...curr}), {}),
                    }
                )),
            }),
            {
                name: 'main-storage',
            }
        )
    )
);

export const useOrderStore = () => useMainStore((state) => state.order);
export const useTodosStore = () => useMainStore((state) => state.todos);

export const addOrder = useMainStore.getState().addOrder;
export const addTodo = useMainStore.getState().addTodo;

export const removeOrder = useMainStore.getState().removeOrder;
export const removeTodo = useMainStore.getState().removeTodo;