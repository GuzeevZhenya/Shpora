import React from 'react';
import {
  useGetCheatsheetQuery,
  useCreateCheatsheetMutation,
  useDeleteCheatsheetMutation,
  useUpdateCheatsheetMutation,
} from '../../../feature/materials/api/getMaterialAPI';
import { ItemList } from '../ItemList/ItemList';

export const Cheatsheet = () => {
  const { data: cheatsheets } = useGetCheatsheetQuery();
  const [createCheatsheet] = useCreateCheatsheetMutation();
  const [deleteCheatsheet] = useDeleteCheatsheetMutation();
  const [updateCheatsheet] = useUpdateCheatsheetMutation();

  return (
    <ItemList
      items={cheatsheets}
      buttonName="Создать новую шпаргалку"
      itemMutationQuery={createCheatsheet}
      title="Шпаргалки"
      removeFunction={deleteCheatsheet}
      updateFunction={updateCheatsheet}
    />
  );
};
