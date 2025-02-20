import React from "react";
import { useGetHooksQuery, useCreateHookMutation } from "../../feature/GetInfo";
import { ItemList } from "../ItemList/ItemList";
import {
  useDeleteHookMutation,
  useUpdateHookMutation,
} from "../../feature/GetInfo";
export const Hook = () => {
  const { data: hook } = useGetHooksQuery();
  const [createHook, {}] = useCreateHookMutation();
  const [deleteHook] = useDeleteHookMutation();
  const [updateHook] = useUpdateHookMutation();

  return (
    <ItemList
      items={hook}
      buttonName={"Создать новый хук"}
      itemMutationQuery={createHook}
      title={"Хуки"}
      removeFunction={deleteHook}
      updateFunction={updateHook}
    />
  );
};
