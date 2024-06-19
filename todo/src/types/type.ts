export interface ITodo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  date: string;
}

export interface States {
  todos: ITodo[];
  modal: boolean;
}
