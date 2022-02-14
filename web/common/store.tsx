import create from 'zustand'
import { v4 as uuidv4 } from "uuid";

interface Note {
    id: string;
    description: string;
    completed: boolean;
  }
  
interface NoteState {
    notes: Note[];
    addNote: (description: string) => void;
    removeNote: (id: string) => void;
  }
  
  export const useStore = create<NoteState>((set) => ({
    notes: [],
    addNote: (description: string) => {
      set((state) => ({
        notes: [
          ...state.notes,
          {
            id: uuidv4(),
            description,
            completed: false,
          } as Note,
        ],
      }));
    },
    removeNote: (id) => {
      set((state) => ({
        notes: state.notes.filter((Note) => Note.id !== id),
      }));
    },
    toggleCompletedState: (id) => {
      set((state) => ({
        notes: state.notes.map((Note) =>
          Note.id === id
            ? ({ ...Note, completed: !Note.completed } as Note)
            : Note
        ),
      }));
    },
  }));
  