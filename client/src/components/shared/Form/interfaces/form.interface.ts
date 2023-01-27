import {
  MutationFunctionOptions,
  OperationVariables,
  DefaultContext,
  ApolloCache,
} from '@apollo/client';

export interface IForm {
  update?: boolean;
  isOpen: boolean;
  noteId?: string;
  onClose: () => void;
  createNote?: (
    options?:
      | MutationFunctionOptions<
          any,
          OperationVariables,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined,
  ) => Promise<any>;
  updateNote?: (
    options?:
      | MutationFunctionOptions<
          any,
          OperationVariables,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined,
  ) => Promise<any>;
}
