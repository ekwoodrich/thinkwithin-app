import create from 'zustand'
import { v4 as uuidv4 } from "uuid";

interface Note {
    id: string;
    description: string;
    completed: boolean;
  }
  
interface NoteState {
    Notes: Note[];
    addNote: (description: string) => void;
    removeNote: (id: string) => void;
  }
  
  export const useStore = create<NoteState>((set) => ({
    // initial state
    Notes: [],
    // methods for manipulating state
    addNote: (description: string) => {
      set((state) => ({
        Notes: [
          ...state.Notes,
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
        Notes: state.Notes.filter((Note) => Note.id !== id),
      }));
    },
    toggleCompletedState: (id) => {
      set((state) => ({
        Notes: state.Notes.map((Note) =>
          Note.id === id
            ? ({ ...Note, completed: !Note.completed } as Note)
            : Note
        ),
      }));
    },
  }));
  