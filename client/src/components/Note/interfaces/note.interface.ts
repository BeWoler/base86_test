export interface INote {
  _id?: string;
  title: string;
  content: string;
}

export interface IEventNote {
  _id?: string;
  isOpen: boolean;
  onClose: () => void;
}
