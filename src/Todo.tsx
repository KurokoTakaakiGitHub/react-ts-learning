import { VFC } from "react";
import { TodoType } from "./types/todo";

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  //  export const Todo = (
  //    props: Pick<TodoType, "title" | "userId" | "completed">

  //export const Todo = (props: TodoType) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";

  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
