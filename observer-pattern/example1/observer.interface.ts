import { Subject } from "./subject.interface";

export interface Observer {
  update(subject: Subject): void;
}
