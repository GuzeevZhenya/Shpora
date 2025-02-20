import React from "react";
import {
  useGetCheatsheetQuery,
  useCreateCheatsheetMutation,
  useDeleteCheatsheetMutation,
} from "../../feature/GetInfo";
import { ItemList } from "../ItemList/ItemList";

export const Cheatsheet = () => {
  const { data: cheatsheets } = useGetCheatsheetQuery();
  const [createCheatsheet] = useCreateCheatsheetMutation();
  const [deleteCheatsheet] = useDeleteCheatsheetMutation();

  return (
    <ItemList
      items={cheatsheets}
      buttonName={"Создать новую шпаргалку"}
      itemMutationQuery={createCheatsheet}
      title={"Шпаргалки"}
      removeFunction={deleteCheatsheet}
    />
  );
};
