export interface Exercise {
  name: string;
  reps: number;
  RPE: number;
  rest: number;
  trackedSets: TrackedSet[];
  notes: string;
}

export interface TrackedSet {
  set: {
    reps: string;
    weight: string;
  }[];
}
