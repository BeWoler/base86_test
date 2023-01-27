export class NoteRequestDto {
  title: string;
  content: string;

  constructor(model: any) {
    this.title = model.title;
    this.content = model.content;
  }
}
