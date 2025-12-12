import React from 'react';
import { ItemList } from '../ItemList/ItemList';
import {
  useDeleteHookMutation,
  useGetHooksQuery,
  useCreateHookMutation,
  useUpdateHookMutation,
} from '../../../feature/materials/api/getMaterialAPI';

export const Hook = () => {
  const { data: hook } = useGetHooksQuery();
  const [createHook] = useCreateHookMutation();
  const [deleteHook] = useDeleteHookMutation();
  const [updateHook] = useUpdateHookMutation();

  return (
    <ItemList
      items={hook}
      buttonName="Создать новый хук"
      itemMutationQuery={createHook}
      title="Хуки"
      removeFunction={deleteHook}
      updateFunction={updateHook}
    />
  );
};
